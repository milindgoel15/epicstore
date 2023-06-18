import { Products } from "@/pages/products";
import React from "react";
import Image from "next/image";
import RatingBar from "./RatingBar";
import Link from "next/link";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import toast from "react-hot-toast";
import AddToCart from "./AddToCart";

let ProductCard = ({ product }: { product: Products }) => {
	return (
		<>
			<Link
				href={`/products/${product.id}`}
				className="bg-gray-600 rounded-md relative w-72"
			>
				<Image
					className=" rounded-md object-contain"
					src={product.image}
					height={300}
					width={300}
					alt={product.name}
					priority={product.index === 0}
				/>
				<div className="mx-4">
					<h3 className="my-3 font-bold">{product.name} </h3>
					<RatingBar />
					<div className="flex flex-row justify-between items-center py-5">
						<div>
							<p className="text-gray-300">Price</p>
							<p className="font-semibold">
								{formatCurrencyString({
									value: product.price,
									currency: product.currency,
								})}
							</p>
						</div>
						<AddToCart product={product} count={1} />
					</div>
				</div>
			</Link>
		</>
	);
};

export default ProductCard;
