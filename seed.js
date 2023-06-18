import Stripe from "stripe";
import Products from "./src/utils/products";
import { stripe } from "./src/utils/stripe";

(async () => {
	for (const product of Products) {
		const stripeProduct = await stripe.products.create({
			name: product.name,
			default_price_data: {
				currency: product.currency,
				unit_amount_decimal: product.price,
			},
			images: [product.image],
		});

		console.log(stripeProduct.name, ": ", stripeProduct.id);
	}
})();
