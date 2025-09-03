import Link from "next/link"
import Image from "next/image"

export const metadata = { title: "Carys — Your Helpful AI" }

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Meet Carys
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600">
            <strong>Conversational Assistant Responsive Yielding Solutions.</strong>
            Ask questions, plan, create, and chat — with a clean, fast, and friendly UI.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/chat"
              className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-3 text-white font-medium shadow-soft hover:opacity-90"
            >
              Start chatting
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <Image src="/icon-512.png" alt="Carys" width={300} height={300} className="rounded-2xl shadow-soft" />
        </div>
      </div>
    </section>
  )
}
