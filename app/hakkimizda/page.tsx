import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CONFIG from "@/lib/config";

export const metadata = {
  title: "Hakkımızda | Mayalı Fırın & Pasta",
  description:
    "2009'dan bu yana Barıştepe'de doğal mayalama yöntemiyle ekmek ve pasta üretiyoruz. Hikayemizi keşfedin.",
};

const STATS = [
  { sayi: "2009",  etiket: "Kuruluş Yılı"      },
  { sayi: "15+",   etiket: "Yıllık Deneyim"     },
  { sayi: "80+",   etiket: "Ürün Çeşidi"        },
  { sayi: "04:00", etiket: "İşe Başlama Saati"  },
];

const DEGERLER = [
  {
    baslik: "Doğal Malzeme",
    metin:
      "Unumuz değirmenden, sütümüz çiftlikten gelir. Kimyasal katkı, koruyucu ya da hazır karışım kullanmıyoruz. Sadece doğanın verdiği ile çalışıyoruz.",
  },
  {
    baslik: "Geleneksel Maya",
    metin:
      "Ekmeğimizi ekşi maya ile mayalıyoruz. Bu yöntem daha uzun sürer ama lezzeti, sindirilebilirliği ve raf ömrü çok daha iyidir.",
  },
  {
    baslik: "Günlük Üretim",
    metin:
      "Sabah 4'te başlar, gün bitmeden tükenip biter. Dün kalan ürün satılmaz — tazelik bizim için pazarlık konusu değil.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar lightText />

      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-green)",
            paddingTop:    "clamp(7rem, 16vh, 12rem)",
            paddingBottom: "clamp(5rem, 10vh, 9rem)",
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
              Bizi Tanıyın
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
              Hakkımızda
            </h1>

            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "rgba(245,237,208,0.7)",
                lineHeight: 1.6,
                maxWidth: "620px",
                margin: "0 auto",
              }}
            >
              &ldquo;Her sabah saat 4&apos;te başlayan bir tutku,
              Yenimahalle&apos;de on beş yıldır aynı özenle devam ediyor.&rdquo;
            </p>
          </div>
        </section>

        {/* ── HİKAYE ───────────────────────────────────────────── */}
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
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem, 6vw, 7rem)",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Sol: resim */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <Image
                src={CONFIG.hero.gorsel}
                alt="Mayalı Fırın"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Sağ: metin */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent-orange)",
                  marginBottom: "1.2rem",
                }}
              >
                Hikayemiz
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--text-brown)",
                  marginBottom: "2rem",
                }}
              >
                {CONFIG.karsılama.baslik.split("\n").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>{line}</span>
                ))}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "var(--text-brown)",
                  opacity: 0.7,
                  marginBottom: "1.5rem",
                }}
              >
                {CONFIG.karsılama.metin}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "var(--text-brown)",
                  opacity: 0.7,
                }}
              >
                Unundan sütüne, her malzeme doğrudan kaynağından gelir. Hamur
                sabah 4&apos;te yoğrulur, ürün soğumadan raflara çıkar. Kimyasal
                katkı yok, dünden kalan yok — yalnızca o günün emeği ve o
                günün lezzeti. Ekmeği elinize aldığınızda hâlâ sıcaksa bu
                tesadüf değil; bu bizim rutinimiz.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--text-brown)",
            padding: "clamp(4rem, 9vh, 7rem) 6vw",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.etiket}>
                <p
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "var(--accent-gold)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.sayi}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,214,0.5)",
                  }}
                >
                  {s.etiket}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEĞERLER ─────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--bg-cream)",
            padding: "clamp(5rem, 12vh, 10rem) 6vw",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent-orange)",
                  marginBottom: "1rem",
                }}
              >
                Neden Mayalı?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--text-brown)",
                }}
              >
                Üç temel ilke
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(1.5rem, 3vw, 3rem)",
              }}
            >
              {DEGERLER.map((d, i) => (
                <div
                  key={d.baslik}
                  style={{
                    padding: "clamp(2rem, 3vw, 2.8rem)",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: i % 2 === 1 ? "var(--bg-dark)" : "var(--bg-green)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-outfit), system-ui, sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--accent-gold)",
                      marginBottom: "1rem",
                    }}
                  >
                    {d.baslik}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                      lineHeight: 1.8,
                      color: "rgba(245,237,214,0.65)",
                    }}
                  >
                    {d.metin}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HARİTA ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: "var(--bg-dark)" }}>
          {/* Adres başlık bandı */}
          <div
            style={{
              padding: "clamp(3rem, 6vh, 5rem) 6vw clamp(2rem, 4vh, 3rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Neredeyiz?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.02em",
                  color: "#F5EDD0",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                {CONFIG.adres}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  color: "rgba(245,237,214,0.4)",
                  letterSpacing: "0.06em",
                }}
              >
                {CONFIG.saat}
              </p>
            </div>
            <a
              href={CONFIG.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#130C04",
                backgroundColor: "var(--accent-gold)",
                borderRadius: "999px",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Google Maps&apos;te Aç ↗
            </a>
          </div>

          {/* Harita iframe */}
          <div style={{ width: "100%", height: "clamp(320px, 55vh, 560px)", position: "relative" }}>
            <iframe
              src="https://maps.google.com/maps?q=39.9846488,32.7962159&hl=tr&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mayalı Fırın & Pasta konumu"
            />
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
