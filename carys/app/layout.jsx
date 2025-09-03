export const metadata = { title: "Carys", description: "Conversational Assistant — Responsive, Yielding Solutions." };
import ClientShell from "@/components/ClientShell";
import "@/app/globals.css";
export default function RootLayout({ children }) {
  return (<html lang="en"><body><ClientShell>{children}</ClientShell></body></html>);
}
