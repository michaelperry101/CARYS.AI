"use client"

import Link from "next/link"

const nav = [
  { group: "Core", links: [
    { href: "/", label: "Home" },
    { href: "/chat", label: "Chat" },
    { href: "/settings", label: "Settings" },
  ]},
  { group: "Company", links: [
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
  ]},
  { group: "Legal", links: [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ]},
]

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0">
      <div className="h-full overflow-y-auto px-5 py-6">
        {nav.map(section => (
          <div key={section.group} className="mb-8">
            <div className="px-2 text-xs uppercase tracking-wider text-slate-500 mb-3">
              {section.group}
            </div>
            <ul className="grid gap-1">
              {section.links.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-md px-3 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-10 p-4 rounded-xl2 bg-slate-50 border border-slate-200">
          <div className="font-medium text-slate-900 mb-2">Need help?</div>
          <p className="text-sm text-slate-600">Questions about Carys? Visit Settings or the About page.</p>
        </div>
      </div>
    </div>
  )
}
