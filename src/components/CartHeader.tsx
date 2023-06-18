import { useShoppingCart } from "use-shopping-cart";

let CartHeader = () => {
	let { cartCount, clearCart } = useShoppingCart();
	return (
		<>
			<div className="flex justify-between">
				<div>
					<h2 className="text-2xl font-semibold">Your shopping cart:</h2>
					<p className="py-2">{cartCount} items</p>
				</div>
				<button
					onClick={() => clearCart()}
					className=" hover:text-red-400 transition-all text-white"
				>
					Remove all items
				</button>
			</div>
		</>
	);
};

export default CartHeader;
