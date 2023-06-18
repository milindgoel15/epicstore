import { Products } from "@/pages/products";
import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

interface AddToCartProps {
	product: Products;
	count: number;
}

let AddToCart = ({ product, count }: AddToCartProps) => {
	const { addItem } = useShoppingCart();

	let handleCart = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const id = toast.loading("Adding this item!");
		addItem(product, { count });
		toast.success(` ${count} ${product.name} added`, { id });
	};

	return (
		<>
			<button
				onClick={handleCart}
				className="rounded-md bg-white text-black px-4 py-2 hover:bg-gray-300 transition-all"
			>
				Add to cart
			</button>
		</>
	);
};

export default AddToCart;
