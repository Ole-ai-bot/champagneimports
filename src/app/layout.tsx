import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Champagne Imports",
  description: "Die besten Champagner aus den renommiertesten Häusern der Champagne.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-stone-950 text-stone-100">

        {/* Navbar */}
        <nav className="border-b border-stone-800 sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="font-playfair text-lg font-bold text-white tracking-tight">
              Champagne Imports
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[["Champagner", "#champagner"], ["Philosophie", "#philosophie"], ["Kontakt", "#kontakt"]].map(([label, href]) => (
                <a key={href} href={href}
                  className="text-xs tracking-widest uppercase text-stone-500 hover:text-white transition">
                  {label}
                </a>
              ))}
              <a href="https://revierkueche.de"
                className="text-xs tracking-widest uppercase border border-stone-700 hover:border-gold-500 text-stone-400 hover:text-gold-400 px-4 py-2 transition">
                Revierküche
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-stone-800 py-12 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-stone-500">
            <div>
              <p className="font-playfair text-white text-lg mb-3">Champagne Imports</p>
              <p className="leading-relaxed text-xs">
                Die besten Champagner aus den renommiertesten Häusern der Champagne —
                kuratiert mit Leidenschaft und Expertise.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-3">Navigation</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#champagner" className="hover:text-white transition">Champagner</a></li>
                <li><a href="#philosophie" className="hover:text-white transition">Philosophie</a></li>
                <li><a href="#kontakt" className="hover:text-white transition">Kontakt</a></li>
                <li><a href="https://revierkueche.de" className="hover:text-gold-400 transition">Revierküche</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-3">Kontakt</p>
              <ul className="space-y-2 text-xs">
                <li><a href="mailto:info@champagneimports.com" className="hover:text-white transition">info@champagneimports.com</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-stone-800 text-xs text-stone-600 flex justify-between">
            <p>© 2026 Champagne Imports. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <a href="/impressum" className="hover:text-white transition">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition">Datenschutz</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
