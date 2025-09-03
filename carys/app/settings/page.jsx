export const metadata = { title: "Carys — Settings" };
export default function SettingsPage(){ return (
  <div className="section"><div className="card" style={{padding:24}}>
    <h2 style={{marginTop:0}}>Settings</h2>
    <div className="settings-grid">
      <div className="card" style={{padding:16}}><h4 style={{marginTop:0}}>Theme</h4><p>Use the toggle in the top-right.</p></div>
      <div className="card" style={{padding:16}}><h4 style={{marginTop:0}}>Voice</h4><p>Set ELEVENLABS_* envs. Use 🔊 in chat.</p></div>
      <div className="card" style={{padding:16}}><h4 style={{marginTop:0}}>Account</h4><p>Sign in/out from the top-right.</p></div>
      <div className="card" style={{padding:16}}><h4 style={{marginTop:0}}>Payments</h4><p>Subscribe via Stripe on Subscribe page.</p></div>
    </div>
  </div></div>
); }
