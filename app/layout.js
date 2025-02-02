import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance AI",
  description: "Smart Finance, Smarter Decisions – Powered by AI.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          
          {/* Footer */}
          <footer className="bg-blue-100 py-12 text-gray-600">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-6">
                <p className="text-xl font-semibold">Finance AI</p>
                <p className="text-sm">Smarter Finance Decisions with AI Technology</p>
              </div>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#about" className="hover:text-blue-300">About</a>
                <a href="#services" className="hover:text-blue-300">Services</a>
                <a href="#contact" className="hover:text-blue-300">Contact</a>
                <a href="#privacy" className="hover:text-blue-300">Privacy</a>
              </div>
              <p className="text-sm">&copy; 2025 Finance AI. All Rights Reserved.</p>
              <p className="text-sm mt-2">Made with 🫶 by ArchDevs 😎</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
