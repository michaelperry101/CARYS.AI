// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Carys",
  description: "Carys — Conversational Assistant Responsive Yielding Solutions",
  icons: { icon: "/favicon.ico" }, // put a favicon in /public
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
