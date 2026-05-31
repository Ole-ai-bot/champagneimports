import { ArrowRight } from "lucide-react";

const CHAMPAGNER = [
  {
    name: "Blanc de Blancs",
    haus: "Cuvée de Terroir",
    beschreibung: "Reinheit und Eleganz des Chardonnay — Kalkstein, Mineralik, lang anhaltende Frische. Der klassische Ausdruck der Champagne.",
    charakter: ["Chardonnay", "Mineralisch", "Elegant"],
    preis: "ab 49 €",
  },
  {
    name: "Rosé Cuvée",
    haus: "Cuvée Prestige",
    beschreibung: "Pinot Noir und Chardonnay in perfekter Balance. Rote Früchte, Brioche, seidige Textur — für besondere Momente.",
    charakter: ["Pinot Noir", "Fruchtig", "Vielschichtig"],
    preis: "ab 55 €",
  },
  {
    name: "Brut Tradition",
    haus: "Grande Réserve",
    beschreibung: "Die Seele des Hauses in einem Glas — Assemblage aus mehreren Jahrgängen für Konsistenz und Tiefe.",
    charakter: ["Assemblage", "Komplex", "Ausgewogen"],
    preis: "ab 42 €",
  },
  {
    name: "Vintage",
    haus: "Millésimé",
    beschreibung: "Nur in außergewöhnlichen Jahren gekeltert. Zeit, Terroir und Handwerk vereint in einer Flasche.",
    charakter: ["Jahrgangschampagner", "Tiefe", "Reife"],
    preis: "auf Anfrage",
  },
];

const MAISONS = [
  "Lutun", "Grandes Maisons", "Récoltants-Manipulants", "Coopératives d'élaboration",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end bg-stone-950 px-6 pb-20 pt-32">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-6">
                Champagne · France
              </p>
              <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-none text-white mb-6">
                Champagne<br />Imports
              </h1>
              <div className="w-12 h-px bg-gold-500 mb-8" />
              <p className="text-stone-400 text-lg leading-relaxed max-w-md">
                Die besten Champagner aus den renommiertesten Häusern der Champagne —
                kuratiert mit Leidenschaft, serviert mit Präzision.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l border-stone-800 pl-6">
                <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">Qualität</p>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Jede Flasche wird persönlich ausgewählt. Keine Kompromisse bei Herkunft, Vinifikation oder Geschmack.
                </p>
              </div>
              <div className="border-l border-stone-800 pl-6">
                <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">Authentizität</p>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Direkte Beziehungen zu Winzern und Häusern — für Transparenz und echten Charakter im Glas.
                </p>
              </div>
              <div className="border-l border-gold-800 pl-6">
                <p className="text-xs tracking-widest uppercase text-gold-600 mb-2">Revierküche</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Partner der Revierküche Heidelberg — für besondere Tafelerlebnisse mit Wild und Champagner.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex gap-4">
            <a href="#champagner"
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-stone-950 font-medium text-xs tracking-widest uppercase px-6 py-3 transition">
              Auswahl entdecken <ArrowRight size={14} />
            </a>
            <a href="#kontakt"
              className="inline-flex items-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-400 hover:text-white text-xs tracking-widest uppercase px-6 py-3 transition">
              Anfrage stellen
            </a>
          </div>
        </div>
      </section>

      {/* Champagner */}
      <section id="champagner" className="bg-stone-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-3">Selektion</p>
              <h2 className="font-playfair text-4xl font-bold">Unsere Champagner</h2>
            </div>
            <p className="text-stone-500 text-sm max-w-xs">
              Kuratiert nach den Kriterien Terroir, Vinifikation und Charakter — nicht nach Marketingbudget.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-stone-800">
            {CHAMPAGNER.map((c, i) => (
              <div key={c.name} className="py-10 grid md:grid-cols-4 gap-8 items-start">
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-playfair text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-stone-500 text-xs mt-1">{c.haus}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">{c.beschreibung}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.charakter.map((tag) => (
                      <span key={tag} className="border border-stone-700 text-stone-500 text-xs px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-playfair text-gold-400 text-xl font-bold">{c.preis}</p>
                  <a href="#kontakt"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-stone-500 hover:text-white transition">
                    Anfragen <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="bg-stone-950 py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Haltung</p>
            <h2 className="font-playfair text-4xl font-bold mb-6 leading-tight">
              Qualität.<br />Authentizität.<br />Charakter.
            </h2>
            <div className="w-8 h-px bg-gold-500 mb-8" />
            <p className="text-stone-400 leading-relaxed mb-5">
              Champagne Imports steht für eine sorgfältige Auswahl der besten Champagner
              aus renommierten Häusern. Wir arbeiten direkt mit Winzern und Häusern zusammen,
              die für Qualität, Terroir und handwerkliche Vinifikation stehen.
            </p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Keine anonymen Handelsware, kein Supermarkt-Champagner. Jede Flasche
              erzählt eine Geschichte — von Boden, Klima und Menschenhand.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-stone-800">
            {[
              { zahl: "100%", label: "Persönlich kuratiert" },
              { zahl: "Direkt", label: "Vom Erzeuger" },
              { zahl: "Keine", label: "Anonyme Ware" },
              { zahl: "Terroir", label: "Immer im Fokus" },
            ].map((s) => (
              <div key={s.label} className="bg-stone-900 p-8">
                <p className="font-playfair text-2xl font-bold text-gold-400 mb-1">{s.zahl}</p>
                <p className="text-stone-500 text-xs tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revierküche Crosslink */}
      <section className="bg-forest-950 border-t border-forest-900 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-forest-600 mb-2">Partner</p>
            <h2 className="font-playfair text-2xl font-bold text-white mb-2">Revierküche Heidelberg</h2>
            <p className="text-forest-400 text-sm max-w-md">
              Wild und Champagner — eine außergewöhnliche Kombination.
              Im Feinkostladen der Revierküche ist unsere Champagner-Auswahl erhältlich.
            </p>
          </div>
          <a href="https://revierkueche.de"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-forest-700 hover:border-forest-400 text-forest-400 hover:text-white text-xs tracking-widest uppercase px-6 py-3 transition">
            Zur Revierküche <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-stone-950 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Kontakt</p>
          <h2 className="font-playfair text-4xl font-bold mb-6">Anfrage & Beratung</h2>
          <div className="w-8 h-px bg-gold-500 mx-auto mb-8" />
          <p className="text-stone-400 mb-12 max-w-md mx-auto leading-relaxed">
            Für Bestellungen, Beratung, Geschenkboxen oder besondere Anlässe —
            wir freuen uns auf deine Nachricht.
          </p>
          <a href="mailto:info@champagneimports.com"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-stone-950 font-medium text-xs tracking-widest uppercase px-8 py-4 transition">
            info@champagneimports.com <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
