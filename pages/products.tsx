import ProductCard from "@/src/components/ProductCard";
import { stripe } from "@/src/utils/stripe";

export interface Products {
	index: number;
	id: string;
	name: string;
	image: string;
	price: number;
	currency: string;
	sku: string;
}

export default function Products({ products }: { products: Products[] }) {
	return (
		<>
			<main className="min-h-screen py-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 mx-10 xl:mx-40">
					{products.map((product, index) => {
						return <ProductCard key={index} product={product} />;
					})}
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await stripe.products.list({
		limit: 8,
		expand: ["data.default_price"],
	});

	const inventory = data.map((product) => {
		const price = product.default_price as import("stripe").Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			image: product.images[0],
			price: price.unit_amount,
			currency: price.currency,
		};
	});

	return {
		props: {
			products: inventory,
			// products: data,
		},
	};
}
