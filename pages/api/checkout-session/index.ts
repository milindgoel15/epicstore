import { stripe } from "@/src/utils/stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { validateCartItems } from "use-shopping-cart/utilities";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
      try {
         const cartDetails = req.body;

         const { data } = await stripe.products.list({
            expand: ["data.default_price"]
         });

         const inventory = data.map((product) => {
            const price = product.default_price as import("stripe").Stripe.Price;

            return {
               id: product.id,
               name: product.name,
               image: product.images[0],
               price: price.unit_amount,
               currency: price.currency,
            };
         }) as {
            id: string;
            name: string;
            image: string;
            price: number;
            currency: string;
         }[];

         const line_items = validateCartItems(inventory, cartDetails);

         const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: line_items,
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/cart`
         });

         res.status(200).json(session);

      } catch (error) {
         console.log(error);
         res.status(500).json({
            statusCode: 500,
            message: error.message,
         })
      }
   } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method not allowed");
   }
}