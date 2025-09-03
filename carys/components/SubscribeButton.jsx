"use client";
export default function SubscribeButton({ priceId }) {
  const click = async () => {
    const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ priceId }) });
    const data = await res.json();
    if (data?.url) window.location.href = data.url; else alert("Checkout failed");
  };
  return <button className="cta" onClick={click}>🧾 Subscribe</button>;
}
