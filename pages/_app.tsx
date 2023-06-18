import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

let stripeKey: string = process.env.STRIPE_PUBLISHABLE_KEY as string;
// let stripeKey: string;
// if (process.env.STRIPE_PUBLISHABLE_KEY) {
// 	stripeKey = process.env.STRIPE_PUBLISHABLE_KEY;
// } else {
// 	throw new Error("WHATEVER environment variable is not set");
// }

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<CartProvider
				stripe={stripeKey}
				cartMode="checkout-session"
				currency="USD"
				shouldPersist
			>
				<style jsx global>{`
					html {
						font-family: ${inter.style.fontFamily};
					}
				`}</style>
				<Header />
				<Component {...pageProps} />
				<Toaster />
				<Footer />
			</CartProvider>
		</>
	);
}
