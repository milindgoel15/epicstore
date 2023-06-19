import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

let CartFooter = () => {
	let { totalPrice, cartDetails, cartCount, clearCart } = useShoppingCart();
	let [isRedirecting, setRedirecting] = useState(false);
	const router = useRouter();

	let onCheckout = async () => {
		if (cartCount || 1 > 0) {
			try {
				setRedirecting(true);
				const session = await axios
					.post(
						"http://localhost:3000/api/checkout-session",
						cartDetails,
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
					.then((res) => res.data);
				router.push(session.url);
			} catch (error) {
				console.log("Error: ", error);
			} finally {
				setRedirecting(false);
				clearCart();
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
					onClick={onCheckout}
					// onClick={dummyCheckout}
					className="bg-yellow-400 hover:bg-yellow-500 transition-all text-black rounded-md px-8 py-4 "
				>
					{isRedirecting ? "Redirecting..." : "Checkout"}
				</button>
			</div>
		</>
	);
};

export default CartFooter;
