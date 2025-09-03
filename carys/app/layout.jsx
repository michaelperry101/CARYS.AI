import "./globals.css";

export const metadata = {
  title: "Carys — Your Helpful AI",
  description: "Conversational Assistant Responsive Yielding Solutions",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
