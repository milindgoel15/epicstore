import Link from "next/link";

let EmptyCart = () => {
	return (
		<>
			<main className="flex flex-col justify-center items-center h-[80vh]">
				<h2 className="text-xl md:text-3xl font-semibold">
					Your shopping cart is empty!
				</h2>
				<p className="text-gray-200 py-6">
					Check out awesome products at{" "}
					<Link
						className="hover:text-gray-300 transition-all"
						href={"/products"}
					>
						here
					</Link>
				</p>
			</main>
		</>
	);
};

export default EmptyCart;
