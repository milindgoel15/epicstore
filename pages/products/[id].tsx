import { stripe } from "@/src/utils/stripe";
import { GetStaticPaths } from "next";
import React, { useState } from "react";
import { Products } from "../products";
import Image from "next/image";
import { formatCurrencyString } from "use-shopping-cart";
import AddToCart from "@/src/components/AddToCart";
import {
	CheckIcon,
	MinusSmallIcon,
	PlusSmallIcon,
} from "@heroicons/react/24/solid";

type Params = {
	id: string;
};

let ProductDetails = ({ product }: { product: Products }) => {
	let [count, setCount] = useState(1);

	return (
		<>
			<main className="flex flex-col md:flex-row justify-center items-center gap-12 lg:mx-40 my-20">
				<Image
					className="object-contain"
					src={product.image}
					height={300}
					width={300}
					alt={product.name}
					priority
				/>
				<div className="bg-gray-600 py-8 px-4 text-white rounded-md flex flex-col gap-4 w-72 sm:w-96">
					<h1 className="text-2xl font-semibold"> {product.name} </h1>
					<h4 className="flex items-center font-semibold">
						<span>
							<CheckIcon className="h-6 w-6 text-green-300" />
						</span>
						In Stock
					</h4>
					<hr />
					<p className="text-gray-300">Price:</p>
					<p className="text-1xl font-semibold">
						{formatCurrencyString({
							value: product.price,
							currency: product.currency,
						})}
					</p>
					<hr />
					<p className="text-gray-300">Quantity:</p>

					<div className="flex items-center gap-4">
						<button
							disabled={count <= 1}
							onClick={() => setCount(count - 1)}
							className="hover:bg-red-400 rounded-md transition-all"
						>
							<MinusSmallIcon className="h-6 w-6" />
						</button>
						<p className="text-xl">{count}</p>
						<button
							onClick={() => setCount(count + 1)}
							className="hover:bg-green-400 rounded-md transition-all"
						>
							<PlusSmallIcon className="h-6 w-6" />
						</button>
					</div>
					<AddToCart product={product} count={count} />
				</div>
			</main>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await stripe.products.list({
		limit: 8,
		expand: ["data.default_price"],
	});

	const paths = data.map((product) => ({
		params: {
			id: product.id,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export async function getStaticProps({ params }: { params: Params }) {
	const { data } = await stripe.products.list({
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
	const product = inventory.find((product) => product.id === params.id);

	return {
		props: { product },
		revalidate: 60,
	};
}

export default ProductDetails;
