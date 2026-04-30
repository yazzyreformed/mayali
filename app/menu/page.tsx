import Navbar from "@/components/Navbar";
import SplitMenu from "@/components/SplitMenu";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Menü | Mayalı Fırın & Pasta",
  description:
    "Ekşi mayalı ekmekler, börekler, poğaçalar, butik pastalar, baklava ve kurupastalar. Günlük taze üretim.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar lightText />

      <main>
        <header
          style={{
            backgroundColor: "var(--bg-green)",
            paddingTop:    "clamp(7rem, 16vh, 12rem)",
            paddingBottom: "clamp(4rem, 8vh, 7rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
              <circle cx="450" cy="450" r="320" stroke="#F5EDD0" strokeWidth="1" />
              <circle cx="450" cy="450" r="200" stroke="#F5EDD0" strokeWidth="0.8" />
            </svg>
          </div>

          <p style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
            color: "var(--accent-gold)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            position: "relative",
          }}>
            Mayalı Fırın &amp; Pasta
          </p>

          <h1 style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(5rem, 18vw, 14rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "#F5EDD0",
            marginBottom: "2rem",
            position: "relative",
          }}>
            Menü
          </h1>

          <p style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
            color: "rgba(245,237,208,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            position: "relative",
          }}>
            Günlük taze üretim&nbsp;&nbsp;·&nbsp;&nbsp;Doğal malzeme&nbsp;&nbsp;·&nbsp;&nbsp;El yapımı
          </p>
        </header>

        <SplitMenu />
      </main>

      <Footer />
    </>
  );
}
