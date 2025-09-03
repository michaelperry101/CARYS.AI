import Stripe from "stripe";
export const runtime = "nodejs";
export async function POST(req){
  try{
    const key = process.env.STRIPE_SECRET_KEY;
    const priceEnv = process.env.STRIPE_PRICE_ID;
    if(!key || !priceEnv) return Response.json({ error:"Stripe not configured" },{status:500});
    const { priceId } = await req.json();
    const stripe = new Stripe(key, { apiVersion:"2024-06-20" });
    const origin = req.headers.get("origin") || process.env.NEXTAUTH_URL || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode:"subscription",
      line_items:[{ price: priceId || priceEnv, quantity:1 }],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`
    });
    return Response.json({ url: session.url });
  }catch(e){ console.error(e); return Response.json({ error:"Checkout error" },{status:500}); }
}
