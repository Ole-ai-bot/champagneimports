import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
//  WARTUNGS- / TEASER-MODUS
//  Solange SITE_LIVE != "true" zeigt die Seite die Teaser-Landingpage.
//  Volle Website online: SITE_LIVE = true in Vercel → Redeploy.
// ─────────────────────────────────────────────────────────────

const TEASER_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>Champagne LUTUN — Courtagnon, Champagne</title>
<meta name="description" content="Champagne LUTUN aus Courtagnon — fünf handverlesene Cuvées. Bald verfügbar." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{--ink:#0c0a09;--paper:#fafaf9;--muted:#a8a29e;--dim:#78716c;--faint:#57534e;--gold:#dbb54f;--gold-deep:#a67a20;--line:#292524}
  html{scroll-behavior:smooth}
  body{background:var(--ink);color:var(--paper);font-family:Inter,system-ui,sans-serif;font-weight:300;line-height:1.6;-webkit-font-smoothing:antialiased}
  .serif{font-family:'Playfair Display',Georgia,serif}
  .eyebrow{font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--gold-deep)}
  .wrap{max-width:1100px;margin:0 auto;padding:0 24px}
  .rule{width:48px;height:1px;background:var(--gold-deep)}

  .hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;overflow:hidden}
  .hero-bg{position:absolute;inset:0;background:url('/images/gallery/weinberg.jpg') center/cover;opacity:.30}
  .hero-grad{position:absolute;inset:0;background:linear-gradient(to top,var(--ink) 8%,rgba(12,10,9,.55) 50%,rgba(12,10,9,.25))}
  .hero-inner{position:relative;width:100%;padding-bottom:80px;padding-top:140px}
  .hero h1{font-size:clamp(64px,15vw,150px);font-weight:700;line-height:.9;margin:22px 0 14px}
  .hero .sub{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(20px,3.2vw,30px);color:var(--muted)}
  .lead{max-width:30rem;color:var(--dim);margin-top:28px;font-size:16px}
  .badge{display:inline-block;margin-top:36px;border:1px solid var(--line);color:var(--muted);font-size:12px;letter-spacing:.18em;text-transform:uppercase;padding:10px 18px}

  .intro{padding:110px 0;border-top:1px solid var(--line);display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:center}
  .intro h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4.5vw,42px);font-weight:700;line-height:1.12;margin:18px 0 24px}
  .intro p{color:var(--dim);font-size:16px;max-width:30rem}
  .intro p+p{margin-top:14px;font-size:14px}
  .intro-img{aspect-ratio:4/5;background:url('/images/gallery/flasche-glas.jpg') center/cover}
  @media(max-width:760px){.intro{grid-template-columns:1fr;gap:36px;padding:70px 0}.intro-img{aspect-ratio:16/10}}

  .cuvees{padding:90px 0 30px;border-top:1px solid var(--line)}
  .cuvees h2{font-family:'Playfair Display',serif;font-size:clamp(30px,5vw,46px);font-weight:700;margin-top:16px}
  .cuvee-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);margin-top:48px}
  .cuvee{background:var(--ink);padding:0 0 26px}
  .cuvee-img{aspect-ratio:3/4;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#16130f;margin-bottom:22px}
  .cuvee .typ{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-deep);padding:0 26px}
  .cuvee h3{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin:6px 0 0;padding:0 26px}
  @media(max-width:820px){.cuvee-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:520px){.cuvee-grid{grid-template-columns:1fr}}

  .partner{padding:90px 0;border-top:1px solid var(--line);text-align:center}
  .partner .eyebrow{color:var(--faint)}
  .partner h2{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;margin:14px 0 10px}
  .partner p{color:var(--dim);max-width:34rem;margin:0 auto;font-size:15px}

  footer{border-top:1px solid var(--line);padding:64px 0 48px;text-align:center}
  footer .serif{font-size:26px;font-weight:700;margin-bottom:12px}
  footer .serif span{color:var(--gold)}
  footer .loc{color:var(--dim);font-size:14px}
  footer .copy{margin-top:34px;color:var(--faint);font-size:12px}
</style>
</head>
<body>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-grad"></div>
    <div class="wrap hero-inner">
      <p class="eyebrow">Courtagnon &middot; Champagne &middot; France</p>
      <h1 class="serif">LUTUN</h1>
      <p class="sub">Champagne</p>
      <p class="lead">Fünf handverlesene Cuvées aus den Baronnies-Lagen von Courtagnon — Eleganz und Balance eines außergewöhnlichen Terroirs.</p>
      <span class="badge">Bald verfügbar</span>
    </div>
  </section>

  <section class="wrap intro">
    <div>
      <p class="eyebrow">SCEV Les Baronnies</p>
      <h2 class="serif">Eleganz und Balance<br/>des Terroirs</h2>
      <p>Champagne LUTUN entsteht in Courtagnon, einem Dorf in der Montagne de Reims — bekannt für kalkhaltige Böden und ein außergewöhnliches Mikroklima, das den Trauben eine seltene Kombination aus Frische und Reife verleiht.</p>
      <p>Jede Cuvée ist ein eigenständiger Ausdruck dieses Terroirs.</p>
    </div>
    <div class="intro-img"></div>
  </section>

  <section class="cuvees">
    <div class="wrap">
      <p class="eyebrow">Die Selektion</p>
      <h2 class="serif">Sechs Cuvées</h2>
    </div>
    <div class="wrap">
      <div class="cuvee-grid">
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/brut.jpg')"></div><p class="typ">Brut</p><h3 class="serif">Brut</h3></div>
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/rose.jpg')"></div><p class="typ">Brut Rosé</p><h3 class="serif">Rosé</h3></div>
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/prestige.jpg')"></div><p class="typ">Brut Prestige</p><h3 class="serif">Cuvée Prestige</h3></div>
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/fleur-de-bois.jpg')"></div><p class="typ">Extra Brut</p><h3 class="serif">Fleur de Bois</h3></div>
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/invitation.jpg')"></div><p class="typ">Brut</p><h3 class="serif">Invitation</h3></div>
        <div class="cuvee"><div class="cuvee-img" style="background-image:url('/images/bottles/millesime-2013.jpg')"></div><p class="typ">Jahrgang</p><h3 class="serif">Millésime 2013</h3></div>
      </div>
    </div>
  </section>

  <section class="partner">
    <div class="wrap">
      <p class="eyebrow">Partner in Deutschland</p>
      <h2 class="serif">Revierküche Heidelberg</h2>
      <p>Champagne LUTUN wird exklusiv über die Revierküche in Heidelberg-Rohrbach angeboten — Wild trifft Champagne.</p>
    </div>
  </section>

  <footer>
    <div class="wrap">
      <p class="serif">Champagne <span>LUTUN</span></p>
      <p class="loc">SCEV Les Baronnies &middot; Courtagnon &middot; France</p>
      <p class="copy">© 2026 Champagneimports &middot; Website in Vorbereitung</p>
    </div>
  </footer>

</body>
</html>`;

export function middleware(req: NextRequest) {
  // Voller Live-Betrieb für alle (späterer echter Go-Live)
  if (process.env.SITE_LIVE === "true") {
    return NextResponse.next();
  }

  const url = req.nextUrl;
  const { pathname } = url;
  // Vorschau-Schlüssel: per Vercel-Env überschreibbar, sonst fester Standardwert.
  const token = process.env.PREVIEW_TOKEN || "champagne-vorschau-2026-l4t8";

  // Statische Dateien durchlassen
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  // Private Vorschau: ?vorschau=TOKEN setzt einen Cookie und schaltet die
  // volle Website nur für diesen Browser frei.
  if (token && url.searchParams.get("vorschau") === token) {
    const clean = url.clone();
    clean.searchParams.delete("vorschau");
    const res = NextResponse.redirect(clean);
    res.cookies.set("ci_vorschau", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 Tage
    });
    return res;
  }

  // Gültiger Vorschau-Cookie → volle Website durchlassen
  if (token && req.cookies.get("ci_vorschau")?.value === token) {
    return NextResponse.next();
  }

  return new NextResponse(TEASER_HTML, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
