export const metadata = {
  title: "Carys — Your Helpful AI",
  description: "Conversational Assistant Responsive Yielding Solutions",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Meet Carys</h1>
        <p className="mt-4 text-lg text-gray-600">
          Conversational Assistant Responsive Yielding Solutions.
        </p>
        <a
          href="/chat"
          className="inline-block mt-8 rounded-xl px-6 py-3 font-semibold bg-blue-500 text-white shadow"
        >
          Start chatting
        </a>
      </section>
    </main>
  );
}
