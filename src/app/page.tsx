import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CUVEEES = [
  {
    id: "brut",
    name: "Brut",
    typ: "Brut",
    bild: "/images/bottles/brut.jpg",
    beschreibung: "Die klassische Cuvée des Hauses — Eleganz und Balance des Terroirs von Courtagnon. Eine Assemblage aus Pinot Noir, Pinot Meunier und Chardonnay, die das Charakterprofil der Baronnies-Lagen widerspiegelt.",
    charakter: ["Pinot Noir", "Pinot Meunier", "Chardonnay", "Klassisch"],
    noten: "Frische Zitrusnoten, Brioche, feine Perlage, langer Abgang.",
  },
  {
    id: "rose",
    name: "Rosé",
    typ: "Brut Rosé",
    bild: "/images/bottles/rose.jpg",
    beschreibung: "Sinnlich und ausdrucksstark — der Rosé von LUTUN verbindet die Kraft des Pinot Noir mit der Feinheit der Champagne. Zarte rote Früchte, elegante Struktur, perfekt für besondere Momente.",
    charakter: ["Pinot Noir", "Rote Früchte", "Sinnlich", "Elegant"],
    noten: "Erdbeere, Himbeere, leichte Würze, cremige Textur.",
  },
  {
    id: "prestige",
    name: "Cuvée Prestige",
    typ: "Brut Prestige",
    bild: "/images/bottles/prestige.jpg",
    beschreibung: "Die Spitzencuvée des Hauses — tiefgründig, komplex, unverwechselbar. Aus den besten Lagen der Baronnies, mit verlängerter Reife auf der Hefe zu vollendeter Balance gereift.",
    charakter: ["Prestige", "Komplex", "Reifenoten", "Langanhaltend"],
    noten: "Nuss, Trockenfrüchte, Brioche, Honig, mineralischer Abschluss.",
  },
  {
    id: "fleur-de-bois",
    name: "Fleur de Bois",
    typ: "Extra Brut",
    bild: "/images/bottles/fleur-de-bois.jpg",
    beschreibung: "Der individuellste Charakter der Kollektion — Fleur de Bois ist ein Extra Brut mit ausgeprägter Mineralität und dem unverkennbaren Charakter der Courtagnon-Terroirs. Für Kenner.",
    charakter: ["Extra Brut", "Mineralisch", "Terroir-geprägt", "Charakterstark"],
    noten: "Kreide, weißer Pfirsich, Zitrusblüten, Silex, trockener Abgang.",
  },
  {
    id: "invitation",
    name: "Invitation",
    typ: "Brut",
    bild: "/images/bottles/invitation.jpg",
    beschreibung: "Eine Einladung — zum Genuss, zur Begegnung, zum Augenblick. Die Invitation ist der zugängliche, einladende Champagner des Hauses: frisch, lebendig, für jede Gelegenheit.",
    charakter: ["Frisch", "Zugänglich", "Lebendig", "Allround"],
    noten: "Grüner Apfel, weißer Pfirsich, florale Noten, lebhafte Perlage.",
  },
  {
    id: "millesime-2013",
    name: "Millésime 2013",
    typ: "Jahrgangs-Champagner",
    bild: "/images/bottles/millesime-2013.jpg",
    beschreibung: "Nur in außergewöhnlichen Jahren gekeltert — der Millésime 2013 ist ein Jahrgangs-Champagner von seltener Tiefe. Zeit, Terroir und Handwerk vereint in einer Flasche, die von einem besonderen Jahr erzählt.",
    charakter: ["Jahrgang 2013", "Millésime", "Tiefe & Reife", "Selten"],
    noten: "Reife gelbe Früchte, geröstete Noten, Haselnuss, cremige Perlage, sehr langer Abgang.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen bg-stone-950 flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/weinberg.jpg"
            alt="Vignes de Courtagnon"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pb-24 pt-40 w-full">
          <p className="text-xs tracking-widest uppercase text-gold-600 mb-6">
            Courtagnon · Champagne · France
          </p>
          <h1 className="font-playfair text-6xl md:text-9xl font-bold leading-none text-white mb-4">
            LUTUN
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-stone-400 mb-8 italic">
            Champagne
          </p>
          <div className="w-16 h-px bg-gold-500 mb-8" />
          <p className="text-stone-400 text-lg max-w-lg leading-relaxed mb-12">
            Fünf Cuvées aus den Baronnies-Lagen von Courtagnon —
            exklusiv importiert und vertrieben in Deutschland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cuvées"
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-stone-950 font-medium text-xs tracking-widest uppercase px-8 py-4 transition">
              Die Cuvées <ArrowRight size={14} />
            </a>
            <a href="#gut"
              className="inline-flex items-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-400 hover:text-white text-xs tracking-widest uppercase px-8 py-4 transition">
              Das Gut
            </a>
          </div>
        </div>
      </section>

      {/* Einleitung */}
      <section className="bg-stone-900 py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">SCEV Les Baronnies</p>
            <h2 className="font-playfair text-4xl font-bold mb-6 leading-tight">
              Eleganz und Balance<br />des Terroirs
            </h2>
            <div className="w-8 h-px bg-gold-500 mb-8" />
            <p className="text-stone-400 leading-relaxed mb-5">
              Champagne LUTUN entsteht in Courtagnon, einem Dorf in der Montagne de Reims,
              bekannt für seine kalkhaltigen Böden und das außergewöhnliche Mikroklima,
              das den Trauben eine seltene Kombination aus Frische und Reife verleiht.
            </p>
            <p className="text-stone-500 leading-relaxed text-sm">
              SCEV Les Baronnies bewirtschaftet die Lagen mit konsequenter Sorgfalt —
              jede der fünf Cuvées ist ein eigenständiger Ausdruck dieses Terroirs.
            </p>
          </div>
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/images/gallery/flasche-glas.jpg"
              alt="Champagne LUTUN"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cuvées */}
      <section id="cuvées" className="bg-stone-950 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-3">Selektion</p>
            <h2 className="font-playfair text-5xl font-bold text-white">Die Cuvées</h2>
          </div>

          <div className="flex flex-col gap-0">
            {CUVEEES.map((c, i) => (
              <div key={c.id}
                className={`grid md:grid-cols-2 gap-0 border-t border-stone-800 ${i === CUVEEES.length - 1 ? "border-b" : ""}`}>

                {/* Bild */}
                <div className={`relative h-80 md:h-auto bg-stone-900 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={c.bild}
                    alt={`Champagne LUTUN ${c.name}`}
                    fill
                    className="object-contain p-8"
                  />
                </div>

                {/* Text */}
                <div className={`p-10 md:p-16 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-xs tracking-widest uppercase text-gold-600 mb-3">{c.typ}</p>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">{c.name}</h3>
                  <div className="w-6 h-px bg-stone-700 mb-6" />
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{c.beschreibung}</p>

                  <div className="mb-6">
                    <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">Charakter</p>
                    <div className="flex flex-wrap gap-2">
                      {c.charakter.map((tag) => (
                        <span key={tag} className="border border-stone-800 text-stone-500 text-xs px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">Verkostungsnotiz</p>
                    <p className="text-stone-500 text-sm italic">{c.noten}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Das Gut */}
      <section id="gut" className="bg-stone-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Das Weingut</p>
              <h2 className="font-playfair text-4xl font-bold mb-6">Courtagnon,<br />Champagne</h2>
              <div className="w-8 h-px bg-gold-500 mb-8" />
              <p className="text-stone-400 leading-relaxed mb-5">
                SCEV Les Baronnies liegt in Courtagnon, einem kleinen Dorf in der
                Montagne de Reims — dem Herz der Champagne. Die kalkhaltigen Böden,
                die geschützten Hanglagen und das besondere Mikroklima sind die
                Grundlage für Champagner von außergewöhnlicher Mineralität und Tiefe.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">
                Die fünf Cuvées — Brut, Rosé, Cuvée Prestige, Fleur de Bois und
                Invitation — sind keine Kompromisse, sondern fünf verschiedene
                Interpretationen desselben Terroirs.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { zahl: "5", label: "Cuvées" },
                  { zahl: "Courtagnon", label: "Herkunft" },
                  { zahl: "Les Baronnies", label: "Domaine" },
                  { zahl: "RC-28083", label: "Récoltant" },
                ].map((s) => (
                  <div key={s.label} className="border border-stone-800 p-4">
                    <p className="font-playfair text-lg font-bold text-gold-400">{s.zahl}</p>
                    <p className="text-stone-600 text-xs tracking-wide uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image
                src="/images/gallery/weinberg.jpg"
                alt="Vignes de Courtagnon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revierküche */}
      <section className="bg-stone-950 border-t border-stone-800 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-2">Partner in Deutschland</p>
            <h2 className="font-playfair text-2xl font-bold text-white mb-2">Revierküche Heidelberg</h2>
            <p className="text-stone-500 text-sm max-w-md">
              Champagne LUTUN ist exklusiv im Feinkostladen der Revierküche
              in Heidelberg-Rohrbach erhältlich — Wild trifft Champagne.
            </p>
          </div>
          <a href="https://revierkueche.de"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-stone-700 hover:border-gold-600 text-stone-400 hover:text-gold-400 text-xs tracking-widest uppercase px-6 py-3 transition">
            Zur Revierküche <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-stone-900 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Kontakt & Bestellung</p>
          <h2 className="font-playfair text-4xl font-bold mb-6">Anfrage & Beratung</h2>
          <div className="w-8 h-px bg-gold-500 mb-10" />

          <div className="grid md:grid-cols-2 gap-px bg-stone-800">
            <div className="bg-stone-900 p-8">
              <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Champagneimports</p>
              <div className="space-y-3 text-sm text-stone-400">
                <p>Rathausstraße 75<br />69126 Heidelberg</p>
                <p><a href="tel:+4915141896579" className="hover:text-white transition">+49 151 41896579</a></p>
                <p><a href="mailto:info@champagneimports.com" className="hover:text-white transition">info@champagneimports.com</a></p>
              </div>
            </div>
            <div className="bg-stone-950 p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">Bestellung</p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Für Bestellungen einzelner Cuvées, Geschenkboxen, Magnumflaschen
                  oder exklusive Events — wir beraten Sie gerne persönlich.
                </p>
              </div>
              <a href="mailto:info@champagneimports.com"
                className="mt-8 inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-stone-950 font-medium text-xs tracking-widest uppercase px-6 py-3 transition w-fit">
                Jetzt anfragen <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
