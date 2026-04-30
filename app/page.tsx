"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SiteLoader from "@/components/SiteLoader";
import CONFIG from "@/lib/config";

const OUTFIT = "var(--font-outfit), system-ui, sans-serif";

/* ── Marquee şerit komponenti ── */
function MarqueeStrip({
  bg, rotate, dir, words, images, mb,
}: {
  bg: string; rotate: string; dir: "left" | "right";
  words: string[]; images: string[]; mb?: boolean;
}) {
  const cls = dir === "left" ? "marquee-left" : "marquee-right";
  return (
    <div style={{ transform: `rotate(${rotate})`, width: "120%", marginLeft: "-10%", marginBottom: mb ? "8px" : undefined }}>
      <div style={{ overflow: "hidden", height: "130px", background: bg, display: "flex", alignItems: "center" }}>
        <div className={`marquee-track ${cls}`}>
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: "flex", alignItems: "center", gap: "36px", padding: "0 36px" }}>
              {words.map((w, j) => (
                <div key={`${copy}-${j}`} style={{ display: "flex", alignItems: "center", gap: "36px" }}>
                  <span style={{ fontSize: "5rem", fontFamily: OUTFIT, fontWeight: 900, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {w}
                  </span>
                  <div style={{ width: 108, height: 108, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={images[j]} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Char-by-char split helper (TextReveal için) ── */
function SplitText({ text }: { text: string }) {
  const words = text.trim().split(" ");
  return (
    <>
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => (
              <span key={ci} className="revealChar" style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </span>
          {wi < words.length - 1 && (
            <span className="revealChar" style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   ANA SAYFA
════════════════════════════════════════════════════════════ */
export default function HomePage() {
  /* refs — section 3 TextReveal */
  const revealSecRef  = useRef<HTMLElement>(null);
  const hypnoRef      = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLHeadingElement>(null);

  /* ── Menü kategori harf animasyonu ── */
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let alive = true;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!alive) return;
      ctx = gsap.context(() => {
        document.querySelectorAll("[data-cat-chars]").forEach((el) => {
          const chars = el.querySelectorAll(".catChar");
          gsap.from(chars, {
            y: 70, opacity: 0,
            stagger: 0.035,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });
    })();
    return () => { alive = false; ctx?.revert(); };
  }, []);

  /* refs — section 7 scroll-pin */
  const katalogSecRef = useRef<HTMLElement>(null);
  const solGorselRef  = useRef<HTMLDivElement>(null);
  const sagGorselRef  = useRef<HTMLDivElement>(null);
  const ortaMetinRef  = useRef<HTMLDivElement>(null);
  const ilkMetinRef   = useRef<HTMLDivElement>(null);

  /* ── TextReveal GSAP (mayali-main-3 birebir) ── */
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let alive = true;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!alive) return;

      ctx = gsap.context(() => {
        /* hypnotic bg: sürekli dönen + büyüyen daire (20s, yoyo) */
        gsap.fromTo(
          hypnoRef.current,
          { rotation: 0, scale: 1 },
          {
            rotation: 360,
            scale: 1.6,
            duration: 20,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            transformOrigin: "50% 50%",
          }
        );

        /* char reveal — scroll tetikli */
        const chars = revealTextRef.current?.querySelectorAll(".revealChar");
        if (chars?.length) {
          gsap.from(chars, {
            y: 80, opacity: 0, stagger: 0.015, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: revealTextRef.current, start: "top 80%" },
          });
        }

        /* inline images — spring animasyonu, scroll tetikli */
        const imgs = revealTextRef.current?.querySelectorAll(".inlineImg");
        if (imgs?.length) {
          gsap.from(imgs, {
            scale: 0, rotation: -20, opacity: 0, stagger: 0.2, duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: revealTextRef.current, start: "top 80%" },
          });
        }
      }, revealSecRef);
    })();
    return () => { alive = false; ctx?.revert(); };
  }, []);

  /* ── Section 7: scroll-pin reveal GSAP ── */
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let alive = true;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!alive) return;

      ctx = gsap.context(() => {
        gsap.set(ortaMetinRef.current, { opacity: 0, y: 50 });
        gsap.set(ilkMetinRef.current,  { opacity: 1, y: 0 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: katalogSecRef.current,
            start: "top top",
            end: "+=160%",
            scrub: 1.4,
            pin: true,
            anticipatePin: 1,
          },
        });
        tl.to(solGorselRef.current,  { x: "-140%", ease: "power2.inOut", duration: 1 }, 0)
          .to(sagGorselRef.current,  { x:  "140%", ease: "power2.inOut", duration: 1 }, 0)
          .to(ilkMetinRef.current,   { opacity: 0, y: -30, ease: "power2.in", duration: 0.6 }, 0)
          .to(ortaMetinRef.current,  { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, 0.4);
      });
    })();
    return () => { alive = false; ctx?.revert(); };
  }, []);

  return (
    <>
      {/* ══ SiteLoader — full-screen overlay, Hero tamamlanınca kaybolur ══ */}
      <SiteLoader />

      {/* ══ 1. NAVBAR (Hero üzerine absolute) ══════════════════ */}
      <Navbar />

      {/* ══ 2. HERO — mayali-main-3 birebir ═══════════════════ */}
      <Hero />


      {/* ══ 3+4. MARQUEE + TEXT REVEAL — ortak hypnotic arka plan ═ */}
      <section
        ref={revealSecRef}
        className="relative overflow-hidden"
        style={{ background: "var(--bg-cream)" }}
      >
        {/* Hypnotic arka plan — marquee + textreveal boyunca uzanır */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div
            ref={hypnoRef}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "180vw", height: "180vw",
              transformOrigin: "center center",
              background:
                "repeating-radial-gradient(circle at 50% 50%, rgba(62,39,35,0.07) 0px, rgba(62,39,35,0.07) 35px, rgba(62,39,35,0.02) 35px, rgba(62,39,35,0.02) 70px)",
            }}
          />
        </div>

        {/* Marquee şeritler */}
        <div className="relative z-10 pt-10 md:pt-14 pb-2 overflow-hidden">
          <MarqueeStrip
            bg="#B2EBF2" rotate="-3deg" dir="left" mb
            words={["EKMEK ÇEŞİTLERİ", "SOURDOUGH", "ÇAVDAR", "TAM BUĞDAY"]}
            images={[0, 1, 0, 1].map((i) => CONFIG.oneCikanlar[i].gorsel)}
          />
          <MarqueeStrip
            bg="#D1C4E9" rotate="1deg" dir="right" mb
            words={["PASTALAR", "YAŞPASTA", "MOUSSE CAKE", "BUTIK TASARIM"]}
            images={[2, 3, 2, 3].map((i) => CONFIG.oneCikanlar[i].gorsel)}
          />
          <MarqueeStrip
            bg="#FFCDD2" rotate="3deg" dir="left"
            words={["ÖZEL SİPARİŞ", "BAKLAVA", "KURUPASTA", "REVANİ"]}
            images={[1, 2, 3, 0].map((i) => CONFIG.oneCikanlar[i].gorsel)}
          />
        </div>

        {/* TextReveal içerik */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ minHeight: "120vh", padding: "0 5vw 10vh", marginTop: "calc(-2 * clamp(3rem, 6vw, 6rem))" }}
        >
          <div className="w-full max-w-[1000px] mx-auto text-center">
            <h2
              ref={revealTextRef}
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                color: "var(--text-brown)",
                lineHeight: 1.2,
                fontFamily: OUTFIT,
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              <SplitText text="Bizim" />
              {" "}
              <span
                className="inlineImg"
                style={{
                  display: "inline-block",
                  width: "clamp(80px, 12vw, 150px)",
                  height: "clamp(60px, 8vw, 100px)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  margin: "0 1vw",
                  verticalAlign: "middle",
                  position: "relative",
                }}
              >
                <Image src="/images/urun-3.png" alt="" fill className="object-cover" />
              </span>
              {" "}
              <SplitText text="fırında mutluluk" />
              {" "}
              <span
                className="inlineImg"
                style={{
                  display: "inline-block",
                  width: "clamp(80px, 12vw, 150px)",
                  height: "clamp(60px, 8vw, 100px)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  margin: "0 1vw",
                  verticalAlign: "middle",
                  position: "relative",
                }}
              >
                <Image src="/images/urun-2.png" alt="" fill className="object-cover" />
              </span>
              {" "}
              <SplitText text="anlık üretilir." />
            </h2>
          </div>

          {/* Sol alt — 1. kart (katalog-3) */}
          <div className="absolute z-[27]" style={{ left: "10vw", bottom: 0 }}>
            <div
              style={{
                width: 220, height: 310,
                background: "var(--text-brown)",
                borderRadius: "var(--radius-md)",
                padding: 13,
                transform: "rotate(-7deg) translateY(55px)",
                boxShadow: "0 24px 50px rgba(0,0,0,0.18)",
              }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: "var(--radius-sm)", overflow: "hidden", position: "relative" }}>
                <Image src="/images/katalog-3.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Sol alt — 2. kart (katalog-2) */}
          <div className="absolute z-[28]" style={{ left: "calc(10vw + 240px)", bottom: 0 }}>
            <div
              style={{
                width: 235, height: 330,
                background: "var(--text-brown)",
                borderRadius: "var(--radius-md)",
                padding: 14,
                transform: "rotate(-2deg) translateY(38px)",
                boxShadow: "0 28px 56px rgba(0,0,0,0.16)",
              }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: "var(--radius-sm)", overflow: "hidden", position: "relative" }}>
                <Image src="/images/katalog-2.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Sağ alt tilted card (katalog-1) */}
          <div className="absolute z-30" style={{ right: "10vw", bottom: 0 }}>
            <div
              style={{
                width: 250, height: 350,
                background: "var(--text-brown)",
                borderRadius: "var(--radius-md)",
                padding: 15,
                transform: "rotate(5deg) translateY(50px)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: "var(--radius-sm)", overflow: "hidden", position: "relative" }}>
                <Image src="/images/katalog-1.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 5. MENÜ KATEGORİLERİ ═══════════════════════════════ */}
      {(() => {
        const KAT_RENKLER = ["#D85C27", "#C8A045", "#4A7C59"];
        return (
          <section id="menu" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--bg-cream)" }}>
            <div className="container mx-auto px-8 mb-16 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: "var(--text-brown)", opacity: 0.12 }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--text-brown)", opacity: 0.4 }}>Kategoriler</span>
              <div className="h-px flex-1" style={{ background: "var(--text-brown)", opacity: 0.12 }} />
            </div>

            <div className="container mx-auto px-4">
              {CONFIG.kategoriler.map((kat, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(62,39,35,0.1)" }}
                >
                  {/* Hover: kategori görseli arka plan */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <Image src={kat.gorsel} alt="" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "rgba(19,12,4,0.62)" }} />
                  </div>

                  {/* Büyük sıra numarası */}
                  <span
                    className="absolute right-[6vw] top-1/2 -translate-y-1/2 select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
                    style={{
                      fontSize: "clamp(5rem, 14vw, 14rem)",
                      fontFamily: OUTFIT, fontWeight: 900,
                      lineHeight: 1,
                      color: KAT_RENKLER[i],
                      opacity: 0.13,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Link
                    href={kat.link}
                    className="relative z-10 flex items-center justify-between py-10 md:py-14 px-2 transition-all duration-500 group-hover:px-6"
                  >
                    <div className="flex items-end gap-6 md:gap-10">
                      {/* Harf harf GSAP animasyonu */}
                      <span
                        data-cat-chars=""
                        className="leading-none transition-colors duration-500 group-hover:text-[#F5EDD6]"
                        style={{
                          fontSize: "clamp(3rem, 8vw, 8rem)",
                          fontFamily: OUTFIT, fontWeight: 900,
                          letterSpacing: "-0.02em",
                          color: "var(--text-brown)",
                          display: "block",
                        }}
                      >
                        {kat.isim.split("").map((char, ci) => (
                          <span key={ci} className="catChar" style={{ display: "inline-block" }}>
                            {char === " " ? " " : char}
                          </span>
                        ))}
                      </span>
                      <span
                        className="hidden md:block text-sm pb-3 italic max-w-xs transition-colors duration-500 group-hover:text-[#EDE0C4] group-hover:opacity-100"
                        style={{ color: "var(--text-brown)", opacity: 0.4 }}
                      >
                        {kat.aciklama}
                      </span>
                    </div>

                    {/* Ok — hover'da renk değişir */}
                    <span
                      className="text-2xl md:text-4xl transition-all duration-400 group-hover:translate-x-2 group-hover:text-[#F5EDD6] shrink-0"
                      style={{ color: KAT_RENKLER[i] }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        );
      })()}


      {/* ══ 7. SCROLL-PIN REVEAL ═══════════════════════════════ */}
      <section
        ref={katalogSecRef}
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: "var(--bg-cream)" }}
      >
        <div
          ref={solGorselRef}
          className="absolute top-1/2 -translate-y-1/2 overflow-hidden shadow-2xl"
          style={{ left: "5%", width: "clamp(200px, 30vw, 440px)", height: "60vh", borderRadius: "var(--radius-md)" }}
        >
          <Image src={CONFIG.katalog.gorsel1} alt="" fill className="object-cover" />
        </div>

        <div
          ref={sagGorselRef}
          className="absolute top-1/2 -translate-y-1/2 overflow-hidden shadow-2xl"
          style={{ right: "5%", width: "clamp(200px, 30vw, 440px)", height: "60vh", borderRadius: "var(--radius-md)" }}
        >
          <Image src={CONFIG.katalog.gorsel2} alt="" fill className="object-cover" />
        </div>

        {/* Başlangıç state — fotoğraflar kaybolurken bu yavaşça solar */}
        <div
          ref={ilkMetinRef}
          className="pointer-events-none select-none text-center"
          style={{ position: "absolute", zIndex: 10, padding: "0 2rem" }}
        >
          <p style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
            color: "var(--accent-gold)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.6rem",
            opacity: 0.75,
          }}>
            2009&apos;dan bu yana
          </p>
          <p style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
            lineHeight: 1.15,
            color: "var(--text-brown)",
            letterSpacing: "-0.01em",
          }}>
            El yapımı.<br />
            Doğal mayalı.<br />
            Günlük taze.
          </p>
        </div>

        {/* Scroll sonrası açılan metin */}
        <div ref={ortaMetinRef} className="relative z-20 text-center px-4 pointer-events-none max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "var(--accent-gold)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
            <div className="h-px w-12" style={{ background: "var(--accent-gold)" }} />
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
              color: "var(--text-brown)",
              fontFamily: OUTFIT, fontWeight: 900,
              letterSpacing: "-0.02em", lineHeight: 1.05,
            }}
          >
            Her gün, doğanın<br />
            <span style={{ color: "var(--accent-orange)", fontStyle: "italic" }}>ritmiyle.</span>
          </h2>
          <p className="mt-6 text-base md:text-xl leading-relaxed" style={{ color: "var(--text-brown)", opacity: 0.55, fontFamily: "var(--font-inter), sans-serif" }}>
            Hamurumuzu sabah 4&apos;te kaldırıyoruz. Fırına girmesi, alınması ve sofranıza ulaşması arasında sadece birkaç saat var.
          </p>
          <Link
            href="/menu"
            className="pointer-events-auto mt-10 inline-flex items-center gap-3 rounded-full text-sm font-bold transition-opacity duration-200 hover:opacity-80"
            style={{
              fontFamily: OUTFIT,
              letterSpacing: "0.06em",
              color: "var(--bg-cream)",
              backgroundColor: "var(--text-brown)",
              padding: "0.85rem 2.2rem",
            }}
          >
            Menümüzü Görün →
          </Link>
        </div>
      </section>


      {/* ══ 8. MÜŞTERİ YORUMLARI ═══════════════════════════════ */}
      <section id="iletisim" className="py-24 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-green)" }}>

        {/* Başlık */}
        <div className="container mx-auto px-6 text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-6">
            {/* Google "G" logosu */}
            <svg width="22" height="22" viewBox="0 0 24 24" aria-label="Google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,237,214,0.45)" }}>
              Google Reviews · 4.5 ★
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "var(--bg-cream)",
              fontFamily: OUTFIT, fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Misafirlerimiz<br />
            <span style={{ color: "var(--accent-gold)", fontStyle: "italic" }}>ne diyor?</span>
          </h2>
        </div>

        {/* Yorum kartları — sağa akan marquee */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="marquee-track marquee-right" style={{ gap: "16px", animationDuration: "45s" }}>
            {[...CONFIG.yorumlar, ...CONFIG.yorumlar].map((y, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col"
                style={{
                  width: 320,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "20px",
                  padding: "24px",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Üst: avatar + isim + google logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 40, height: 40,
                        borderRadius: "50%",
                        background: y.renk,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: OUTFIT, fontWeight: 900,
                        fontSize: "0.95rem", color: "#fff", flexShrink: 0,
                      }}
                    >
                      {y.isim.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "rgba(245,237,214,0.92)", lineHeight: 1.2 }}>
                        {y.isim}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {y.localGuide && (
                          <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "#FBBC05", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Local Guide ·{" "}
                          </span>
                        )}
                        <span style={{ fontSize: "0.65rem", color: "rgba(245,237,214,0.32)", fontFamily: "var(--font-inter), sans-serif" }}>
                          {y.tarih}
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.55 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* 5 yıldız */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: "#FBBC05", fontSize: "0.9rem", lineHeight: 1 }}>★</span>
                  ))}
                </div>

                {/* Yorum metni */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.83rem",
                    lineHeight: 1.7,
                    color: "rgba(245,237,214,0.68)",
                    flex: 1,
                  }}
                >
                  {y.metin}
                </p>

                <div style={{ marginTop: "18px", height: "2px", borderRadius: "999px", background: y.renk, opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 px-6">
          <a
            href="https://www.google.com/search?q=mayali+firin+pasta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full text-sm font-bold transition-opacity duration-200 hover:opacity-90"
            style={{ background: "#fff", color: "#130C04", padding: "0.85rem 2rem", fontFamily: OUTFIT, letterSpacing: "0.03em" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google&apos;da Yorum Yaz
          </a>
          <p style={{ fontSize: "0.7rem", color: "rgba(245,237,214,0.28)", fontFamily: "var(--font-inter), sans-serif" }}>
            Google Haritalar · Mayalı Fırın &amp; Pasta
          </p>
        </div>
      </section>


      {/* ══ 9. FOOTER ══════════════════════════════════════════ */}
      <Footer />

    </>
  );
}
