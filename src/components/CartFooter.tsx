import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

let CartFooter = () => {
	let { totalPrice, cartDetails, cartCount, redirectToCheckout } =
		useShoppingCart();
	let [isRedirecting, setRedirecting] = useState(false);

	let onCheckout = async () => {
		if (cartCount || 1 > 0) {
			try {
				setRedirecting(true);
				const { id }: { id: string } = await axios
					.post("/api/checkout-session", cartDetails)
					.then((res) => res.data);

				const result = await redirectToCheckout(id);

				console.log(result);

				if (result.error) {
					console.log("Result error: ", result);
				}
			} catch (error) {
				console.log("Error: ", error);
			} finally {
				setRedirecting(false);
			}
		}
	};

	let dummyCheckout = () => {
		toast.success("Dummy checkout because redirectToCheckout is broken.");
	};

	return (
		<>
			<div className="flex justify-end items-center gap-5 ">
				<div className="flex flex-col items-end">
					<h2 className="text-2xl font-semibold">Total</h2>
					<p>
						{formatCurrencyString({
							value: totalPrice as number,
							currency: "USD",
						})}
					</p>
				</div>
				<button
					disabled={isRedirecting}
					// onClick={onCheckout}
					onClick={dummyCheckout}
					className="bg-yellow-400 hover:bg-yellow-500 transition-all text-black rounded-md px-8 py-4 "
				>
					{isRedirecting ? "Redirecting..." : "Checkout"}
				</button>
			</div>
		</>
	);
};

export default CartFooter;
