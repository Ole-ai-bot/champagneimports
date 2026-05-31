import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Champagne LUTUN — Champagneimports",
  description: "Champagne LUTUN aus Courtagnon — exklusiv importiert. Brut, Rosé, Cuvée Prestige, Fleur de Bois, Invitation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-stone-950 text-stone-100 antialiased">

        {/* Navbar */}
        <nav className="border-b border-stone-800 sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <span className="font-playfair text-base font-bold text-white tracking-tight">
                Champagne <span className="text-gold-400">LUTUN</span>
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[
                ["Cuvées", "#cuv%C3%A9es"],
                ["Das Gut", "#gut"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <a key={href} href={href}
                  className="text-xs tracking-widest uppercase text-stone-500 hover:text-white transition">
                  {label}
                </a>
              ))}
              <a href="https://revierkueche.de"
                className="text-xs tracking-widest uppercase border border-stone-700 hover:border-stone-500 text-stone-500 hover:text-white px-4 py-2 transition">
                Revierküche
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-stone-800 py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-stone-500">
            <div>
              <p className="font-playfair text-white text-xl mb-1">Champagne <span className="text-gold-400">LUTUN</span></p>
              <p className="text-xs text-stone-600 mb-4">SCEV Les Baronnies · Courtagnon · France</p>
              <p className="text-xs leading-relaxed">
                Exklusiv importiert und vertrieben durch Champagneimports,
                Heidelberg.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Cuvées</p>
              <ul className="space-y-2 text-xs">
                {["Brut", "Rosé", "Cuvée Prestige", "Fleur de Bois", "Invitation"].map((c) => (
                  <li key={c}><a href="#cuvées" className="hover:text-white transition">{c}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Kontakt</p>
              <ul className="space-y-2 text-xs">
                <li>Rathausstraße 75, 69126 Heidelberg</li>
                <li><a href="tel:+4915141896579" className="hover:text-white transition">+49 151 41896579</a></li>
                <li><a href="mailto:info@champagneimports.com" className="hover:text-white transition">info@champagneimports.com</a></li>
                <li className="pt-2">
                  <a href="https://revierkueche.de" className="hover:text-gold-400 transition text-stone-600">
                    revierkueche.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-stone-800 text-xs text-stone-700 flex flex-col sm:flex-row justify-between gap-2">
            <p>© 2026 Champagneimports. Alle Rechte vorbehalten.</p>
            <div className="flex gap-5">
              <a href="/impressum" className="hover:text-stone-400 transition">Impressum</a>
              <a href="/datenschutz" className="hover:text-stone-400 transition">Datenschutz</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
