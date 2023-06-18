import React from "react";
import { useShoppingCart } from "use-shopping-cart";

import EmptyCart from "@/src/components/EmptyCart";
import CartHeader from "@/src/components/CartHeader";
import CartFooter from "@/src/components/CartFooter";
import CartProduct from "@/src/components/CartProduct";

let Cart = () => {
	let { cartCount, cartDetails } = useShoppingCart();

	return (
		<>
			{cartCount == 0 ? (
				<EmptyCart />
			) : (
				<>
					<main className="flex flex-col mx-8 sm:mx-20 lg:mx-40 xl:mx-64 gap-8 my-20">
						<CartHeader />

						<div>
							{Object.entries(cartDetails ?? {}).map(
								([productId, product]) => (
									<CartProduct key={productId} product={product} />
								)
							)}
						</div>
						<CartFooter />
					</main>
				</>
			)}
		</>
	);
};

export default Cart;
