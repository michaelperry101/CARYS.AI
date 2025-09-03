export const metadata = {
  title: "Carys — Your Helpful AI",
  description: "Conversational Assistant Responsive Yielding Solutions.",
}

import "./globals.css"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr]">
          {/* Sidebar (scrollable) */}
          <aside className="hidden lg:block border-r border-slate-200 bg-white">
            <Sidebar />
          </aside>

          {/* Main column */}
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>

        {/* Mobile sticky bottom nav to open sidebar drawer (simple version) */}
        <div className="lg:hidden fixed bottom-4 left-0 right-0 flex justify-center">
          <a href="#mobile-nav"
             className="px-4 py-2 rounded-full shadow-soft bg-slate-900 text-white">
            Menu
          </a>
        </div>
      </body>
    </html>
  )
}
