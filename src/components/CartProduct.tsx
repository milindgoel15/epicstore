import {
	MinusSmallIcon,
	PlusSmallIcon,
	XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";
import Image from "next/image";

let CartProduct = ({ product }: { product: CartEntry }) => {
	// let { count, setCount } = quantity;
	let { removeItem, setItemQuantity } = useShoppingCart();

	return (
		<>
			<Link
				className="my-4 flex justify-between items-center gap-4 bg-gray-700 hover:bg-gray-600 transition-all rounded-md p-4 hover:drop-shadow-2xl shadow-white"
				href={`/products/${product.id}`}
			>
				<div className=" flex sm:gap-4 items-center">
					<Image
						className="hidden sm:block rounded-md"
						src={product.image}
						alt={product.name}
						height={80}
						width={80}
					/>
					<h2 className="sm:text-2xl font-semibold">{product.name}</h2>
				</div>
				<div className=" flex gap-2 sm:gap-8 items-center">
					<div className="flex items-center gap-4">
						<button
							disabled={product.quantity <= 1}
							onClick={(event) => {
								event.preventDefault();
								setItemQuantity(product.id, product.quantity - 1);
							}}
							className="hover:bg-red-400 rounded-md transition-all"
						>
							<MinusSmallIcon className="h-6 w-6" />
						</button>
						<p className="text-xl">{product.quantity}</p>
						<button
							onClick={(event) => {
								event.preventDefault();
								setItemQuantity(product.id, product.quantity + 1);
							}}
							className="hover:bg-green-400 rounded-md transition-all"
						>
							<PlusSmallIcon className="h-6 w-6" />
						</button>
					</div>
					<p className="text-1xl font-semibold">
						{formatCurrencyString({
							value: product.price,
							currency: product.currency,
						})}
					</p>
					<button
						onClick={(event) => {
							event.preventDefault();
							removeItem(product.id);
						}}
						className="hover:text-red-400 transition-all"
					>
						<XCircleIcon className="h-8 w-8" />
					</button>
				</div>
			</Link>
		</>
	);
};

export default CartProduct;
