import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CONFIG from "@/lib/config";

export const metadata = {
  title: "İletişim | Mayalı Fırın & Pasta",
  description:
    "Barıştepe, Yenimahalle'deki adresimizi ziyaret edin ya da bize ulaşın. Her gün 06.00–22.00 arası açığız.",
};

const KARTLAR = [
  {
    numara: "01",
    baslik: "Neredeyiz?",
    ikon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 6.627-9 13-9 13S3 16.627 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    satirlar: [CONFIG.adres],
    alt: "Google Maps'te aç →",
    altHref: CONFIG.googleMaps,
    renk: "#D85C27",
    textRenk: "#F5EDD6",
  },
  {
    numara: "02",
    baslik: "Bizi Arayın",
    ikon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    satirlar: [CONFIG.telefon],
    alt: "WhatsApp'tan yaz →",
    altHref: `https://wa.me/${CONFIG.whatsapp}`,
    renk: "#C8A045",
    textRenk: "#130C04",
  },
  {
    numara: "03",
    baslik: "Ne Zaman Açığız?",
    ikon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    satirlar: ["Haftanın 7 günü", CONFIG.saat],
    alt: "Sipariş vermek için →",
    altHref: CONFIG.ctaLink,
    renk: "#4A7C59",
    textRenk: "#F5EDD6",
  },
];

export default function IletisimPage() {
  return (
    <>
      <Navbar lightText />

      <main>

        {/* ── HERO ── */}
        <section
          style={{
            backgroundColor: "var(--bg-green)",
            paddingTop: "clamp(7rem, 16vh, 12rem)",
            paddingBottom: "clamp(4rem, 9vh, 8rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dekoratif daireler */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              pointerEvents: "none", opacity: 0.04,
            }}
          >
            <svg width="900" height="900" viewBox="0 0 900 900" fill="none">
              <circle cx="450" cy="450" r="440" stroke="#F5EDD0" strokeWidth="1.5" />
              <circle cx="450" cy="450" r="310" stroke="#F5EDD0" strokeWidth="1" />
              <circle cx="450" cy="450" r="190" stroke="#F5EDD0" strokeWidth="0.8" />
            </svg>
          </div>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "0 6vw",
              textAlign: "center",
              position: "relative",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                color: "var(--accent-gold)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              {CONFIG.sehir}
            </p>

            <h1
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#F5EDD0",
                marginBottom: "2.5rem",
              }}
            >
              İletişim
            </h1>

            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "rgba(245,237,208,0.65)",
                lineHeight: 1.6,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Kapımız her gün açık — sizi görmek bizi mutlu eder.
            </p>
          </div>
        </section>

        {/* ── 3 KART ── */}
        <section
          style={{
            backgroundColor: "var(--bg-cream)",
            padding: "clamp(5rem, 12vh, 10rem) 6vw",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
            className="iletisim-grid"
          >
            {KARTLAR.map((k) => (
              <div
                key={k.numara}
                style={{
                  backgroundColor: k.renk,
                  borderRadius: "var(--radius-md)",
                  padding: "clamp(2.5rem, 4vw, 3.5rem) clamp(2rem, 3vw, 2.8rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Büyük numara — dekoratif arka plan */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: "-0.1em",
                    bottom: "-0.2em",
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(7rem, 12vw, 10rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: k.textRenk === "#130C04" ? "rgba(19,12,4,0.08)" : "rgba(245,237,214,0.1)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {k.numara}
                </span>

                {/* İkon */}
                <div
                  style={{
                    color: k.textRenk,
                    opacity: 0.7,
                    marginBottom: "1.8rem",
                  }}
                >
                  {k.ikon}
                </div>

                {/* Başlık */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "clamp(0.65rem, 0.85vw, 0.75rem)",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: k.textRenk,
                    opacity: 0.55,
                    marginBottom: "0.75rem",
                  }}
                >
                  {k.baslik}
                </p>

                {/* Satırlar */}
                <div style={{ flex: 1 }}>
                  {k.satirlar.map((s, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: i === 0 ? "clamp(1.1rem, 1.8vw, 1.4rem)" : "clamp(0.95rem, 1.4vw, 1.1rem)",
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                        color: k.textRenk,
                        marginBottom: i < k.satirlar.length - 1 ? "0.3rem" : "0",
                      }}
                    >
                      {s}
                    </p>
                  ))}
                </div>

                {/* Alt link */}
                <a
                  href={k.altHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "clamp(0.7rem, 0.9vw, 0.78rem)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    color: k.textRenk,
                    opacity: 0.6,
                    textDecoration: "none",
                    marginTop: "2rem",
                    borderBottom: `1px solid ${k.textRenk}40`,
                    paddingBottom: "2px",
                    transition: "opacity 0.2s",
                  }}
                >
                  {k.alt}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            backgroundColor: "var(--bg-green)",
            padding: "clamp(5rem, 12vh, 9rem) 6vw",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
              color: "var(--accent-gold)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Sabah 06.00&apos;dan itibaren
          </p>
          <h2
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              color: "#F5EDD0",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Ekmeğiniz sizi bekliyor.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
              color: "rgba(245,237,214,0.45)",
              marginBottom: "3rem",
              letterSpacing: "0.05em",
            }}
          >
            {CONFIG.adres}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={CONFIG.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#130C04",
                backgroundColor: "var(--accent-gold)",
                borderRadius: "999px",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
              }}
            >
              Haritada Gör
            </a>
            <Link
              href="/menu"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F5EDD0",
                backgroundColor: "transparent",
                border: "1.5px solid rgba(245,237,214,0.3)",
                borderRadius: "999px",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
              }}
            >
              Menüyü İncele →
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .iletisim-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
