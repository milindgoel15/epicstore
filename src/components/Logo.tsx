import React from "react";
import Image from "next/image";

let Logo = () => {
	return (
		<>
			<div className="flex flex-row items-center gap-4">
				<Image src="/logo.svg" alt={"Logo"} width={50} height={50} />
				<h2>Epic Store</h2>
			</div>
		</>
	);
};

export default Logo;
