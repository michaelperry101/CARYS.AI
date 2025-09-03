import Link from "next/link";
export const metadata = { title: "Carys — Home" };
export default function HomePage() {
  return (<>
    <section className="home-hero card">
      <h1 className="hero-title">Meet <span style={{ color: "var(--brand)" }}>Carys</span>.</h1>
      <p className="hero-sub">Conversational Assistant — Responsive, Yielding Solutions. A clean, credible chat experience with voice.</p>
      <Link href="/chat" className="cta">💬 Start chatting</Link>
    </section>
    <section className="section">
      <div className="settings-grid">
        <div className="card" style={{ padding: 20 }}><h3 style={{ marginTop: 0 }}>Fast</h3><p>Snappy UI, deploys cleanly on Vercel.</p></div>
        <div className="card" style={{ padding: 20 }}><h3 style={{ marginTop: 0 }}>Voice</h3><p>Optional ElevenLabs text-to-speech.</p></div>
        <div className="card" style={{ padding: 20 }}><h3 style={{ marginTop: 0 }}>Auth</h3><p>Google or Email sign-in via NextAuth.</p></div>
        <div className="card" style={{ padding: 20 }}><h3 style={{ marginTop: 0 }}>Payments</h3><p>Stripe Checkout subscription on Subscribe.</p></div>
      </div>
    </section>
  </>);
}
