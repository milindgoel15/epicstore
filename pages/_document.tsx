import { Html, Head, Main, NextScript } from "next/document";

// import { Poppins } from "next/font/google";
import { Metadata } from "next";

// const poppins = Poppins({
// 	weight: "400",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Epic Store",
	description: "nextjs project",
};

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
