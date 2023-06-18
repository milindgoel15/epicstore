import Stripe from "stripe";

// Set up the Stripe client with your secret key
const stripe = new Stripe(process.env.SECRET_STRIPE_KEY);

export { stripe };
