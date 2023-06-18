import Link from "next/link";
import React from "react";

let Success = () => {
	return (
		<>
			<main className="h-[70vh] flex flex-col gap-8 justify-center items-center">
				<h2 className="text-5xl ">Success</h2>
				<p>
					<Link className="hover:text-gray-300" href={"/"}>
						Click here
					</Link>{" "}
					to go to home page
				</p>
			</main>
		</>
	);
};

export default Success;
