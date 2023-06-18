import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "use-shopping-cart";

let Header = () => {
	let [isNavOpen, setNavOpen] = useState(false);
	let { formattedTotalPrice, cartCount } = useShoppingCart();

	let handleMenu = () => {
		setNavOpen(!isNavOpen);
	};

	return (
		<>
			<header className="flex flex-row justify-between items-center mx-5 sm:mx-10 my-4">
				<Link href={"/"} className=" hover:text-gray-300 transition-all">
					<Logo />
				</Link>
				<nav
					className={`flex-row gap-6 hidden sm:flex  ${
						isNavOpen ? "flex-col" : ""
					} `}
				>
					<Link
						href={"/cart"}
						className="flex flex-row items-center gap-2 hover:text-gray-300 transition-all"
					>
						<ShoppingCartIcon className="h-7 w-7 text-white" />
						<span>{formattedTotalPrice}</span>
						<span className="text-gray-300 text-sm"> ({cartCount})</span>
					</Link>
					<Link
						href={"/products"}
						className=" hover:text-gray-300 transition-all"
					>
						Products
					</Link>
					<Link
						href={"/login"}
						className=" hover:text-gray-300 transition-all"
					>
						Login
					</Link>
				</nav>

				<button className="sm:hidden" onClick={handleMenu}>
					<Bars3Icon className="h-8 w-8" />
				</button>
			</header>
		</>
	);
};

export default Header;
