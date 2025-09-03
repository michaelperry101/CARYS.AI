// app/page.jsx (SERVER component - no "use client")
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Carys</h1>
      <p className="text-lg mb-8">
        Your Conversational Assistant for responsive, yielding solutions.
      </p>
      <div className="flex gap-4">
        <Link
          href="/chat"
          className="rounded-lg px-5 py-3 bg-blue-600 text-white font-medium"
        >
          Start chatting
        </Link>
        <Link
          href="/about"
          className="rounded-lg px-5 py-3 border border-gray-300"
        >
          Learn more
        </Link>
      </div>
    </main>
  );
}
