"use client"

import { useState, useRef, useEffect } from "react"

export const metadata = { title: "Chat — Carys" }

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hi! I’m Carys. How can I help today?" }
  ])
  const [input, setInput] = useState("")
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  function sendMessage(e) {
    e.preventDefault()
    if (!input.trim()) return
    const text = input.trim()
    setMessages(m => [...m, { id: Date.now(), role: "user", content: text }])
    setInput("")
    // Placeholder assistant echo so UI feels alive:
    setTimeout(() => {
      setMessages(m => [...m, { id: Date.now()+1, role: "assistant", content: `You said: "${text}"` }])
    }, 400)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:py-10">
      <div className="rounded-xl2 border border-slate-200 bg-white shadow-soft">
        <div className="h-[60vh] overflow-y-auto p-4 md:p-6">
          {messages.map(m => (
            <div key={m.id} className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${m.role === "user" ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-900"}`}>
                {m.content}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form onSubmit={sendMessage} className="border-t border-slate-200 p-3 md:p-4 flex items-center gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message…"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
          />
          <button className="rounded-lg bg-brand-blue text-white px-4 py-3 font-medium hover:opacity-90">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
