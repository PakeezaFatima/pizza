import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast Food Express",
  description: "Delicious Pizza, Burgers, and Drinks served fresh!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-900">
        <header className="p-4 bg-red-600 text-white flex justify-between items-center shadow-md">
          <h1 className="font-bold text-2xl">🍕 Fast Food Express</h1>
          <nav className="space-x-6 font-medium">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="p-4 bg-red-600 text-white text-center">
          © 2025 Fast Food Express
        </footer>
      </body>
    </html>
  );
}
