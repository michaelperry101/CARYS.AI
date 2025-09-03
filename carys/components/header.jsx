"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Carys" width={28} height={28} />
            <span className="font-semibold tracking-tight text-slate-900">Carys</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/chat" className="hover:text-slate-700">Chat</Link>
          <Link href="/about" className="hover:text-slate-700">About</Link>
          <Link href="/reviews" className="hover:text-slate-700">Reviews</Link>
          <Link href="/settings" className="hover:text-slate-700">Settings</Link>
          <Link href="/login" className="hover:text-slate-700">Login</Link>
          <Link href="/subscribe" className="hover:text-slate-700">Subscribe</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden rounded-md border border-slate-300 px-3 py-1">
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 grid gap-2 text-sm">
            <Link href="/chat">Chat</Link>
            <Link href="/about">About</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/login">Login</Link>
            <Link href="/subscribe">Subscribe</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
