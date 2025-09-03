import SubscribeButton from "@/components/SubscribeButton";
export const metadata = { title: "Carys — Subscribe" };
export default function Subscribe(){ return (
  <div className="section"><div className="card" style={{padding:24}}>
    <h2 style={{marginTop:0}}>Subscribe to Carys Pro</h2>
    <p>Unlock higher limits and priority processing.</p>
    <SubscribeButton />
    <p style={{ color: "var(--muted)", fontSize: 14 }}>Redirects to Stripe Checkout. Configure STRIPE_* envs.</p>
  </div></div>
); }
