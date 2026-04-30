/**
 * RESTORAN NİŞİ — SAYFA İSKELETİ
 *
 * Kullanım:
 * 1. globals.css'teki 4 CSS variable'ı değiştir → tüm renk sistemi güncellenir
 * 2. CONFIG bloğunu doldur
 * 3. FLEX SPOT'ları işaretli yerlere yeni komponent yapıştır
 * 4. Görselleri /public/images/ altına koy, path'leri güncelle
 *
 * CSS Variables (globals.css):
 *   --color-primary:  ana renk   (örn: koyu yeşil #2A3B2C)
 *   --color-accent:   vurgu      (örn: bej        #E8D1B5)
 *   --color-light:    arka plan  (örn: krem        #F9F9F6)
 *   --color-brown:    ikincil    (örn: kahve       #8B5A2B)
 */

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   CONFIG — sadece burası doldurulur
───────────────────────────────────────────── */
const CONFIG = {
  marka: "[MAYALI FIRIN & PASTA]",
  sehir: "[ANKARA]",
  telefon: "[TEL]",
  whatsapp: "[905XXXXXXXXX]",
  adres: "[Ekmek Çeşitleri, Pastalar, Özel Pasta Siparişleri, Baklava, Tatlı, Kurupasta
Barıştepe Mah.Demirdağ Cad.No: 46/A Yenimahalle/ANKARA]",
  saat: "[06.00-22.00]",
  ctaLink: "[https://www.yemeksepeti.com/restaurant/iiwp/mayali-firin-and-pasta?srsltid=AfmBOorYiV9XrCf9_vXTOcAammFaGdFRMx4wTjuysdxPCqbPdMFDDFXB]",       // yemeksepeti, trendyol yemek vb.
  ctaMetin: "[Sipariş Ver]",
  googleMaps: "[https://www.google.com/maps?q=39.9846488,32.7962159&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE4LjIuNzUyMzEzNjM0MBgAINeCAypjLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJUUg%3D%3D&skid=f0acfc0c-18e5-4f36-9009-53ce3a14bae0&g_st=com.google.maps.preview.copy]",
  instagram: "[INSTAGRAM_URL]",

  hero: {
    baslik: "[HERO BAŞLIĞI]",          // max 6 kelime
    altMetin: "[HERO ALT METNİ]",      // max 18 kelime
    buton: "[HERO BUTON METNİ]",
    gorsel: "/images/hero.jpg",
  },

  karsılama: {
    baslik: "[KARŞILAMA BAŞLIĞI]",     // örn: "Sofranıza hoş geldiniz."
    metin: "[KARŞILAMA METNİ]",        // max 40 kelime, restoranın hikayesi/ruhu
  },

  // ÖNE ÇIKAN LEZZETLER — 4 ürün
  oneCikanlar: [
    { isim: "[ÜRÜN 1]", gorsel: "/images/urun-1.png" },
    { isim: "[ÜRÜN 2]", gorsel: "/images/urun-2.png" },
    { isim: "[ÜRÜN 3]", gorsel: "/images/urun-3.png" },
    { isim: "[ÜRÜN 4]", gorsel: "/images/urun-4.png" },
  ],

  // MENÜ KATEGORİLERİ — filtrasyon bölümü
  kategoriler: [
    { isim: "[KATEGORİ 1]", link: "/menu#kategori-1" },
    { isim: "[KATEGORİ 2]", link: "/menu#kategori-2" },
    { isim: "[KATEGORİ 3]", link: "/menu#kategori-3" },
  ],

  // KATALOG — menüden 3 görsel + ortaya bir yazı
  katalog: {
    gorsel1: "/images/katalog-1.jpg",
    gorsel2: "/images/katalog-2.jpg",
    gorsel3: "/images/katalog-3.jpg",
    ortaYazi: "[KATALOG ORTASI YAZISI]",  // örn: "doğal. katkısız. lezzetli."
    altMetin: "[KATALOG ALT METNİ]",
  },

  // MÜŞTERİ YORUMLARI — Instagram görselleri
  yorumGorselleri: [
    "/images/musteri-1.jpg",
    "/images/musteri-2.jpg",
    "/images/musteri-3.jpg",
    "/images/musteri-4.jpg",
    "/images/musteri-5.jpg",
  ],
};

/* ─────────────────────────────────────────────
   SAYFA
───────────────────────────────────────────── */
export default function RestoranSayfasi() {
  const katalogSecRef = useRef<HTMLElement>(null);
  const solGorselRef  = useRef<HTMLDivElement>(null);
  const sagGorselRef  = useRef<HTMLDivElement>(null);
  const ortaMetinRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set(ortaMetinRef.current, { opacity: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: katalogSecRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(solGorselRef.current,  { x: "-130%", ease: "power2.inOut", duration: 1 }, 0)
          .to(sagGorselRef.current,  { x: "130%",  ease: "power2.inOut", duration: 1 }, 0)
          .to(ortaMetinRef.current,  { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 }, 0.25);
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════
          1. NAVBAR
          Sticky. Scroll'da arka plan değişir.
          Sol: nav linkleri | Orta: logo (/public/logo.png) | Sağ: CTA butonu
          Mobilde: hamburger → tam ekran overlay menü
      ══════════════════════════════════════ */}
      {/* <Navbar /> */}


      {/* ══════════════════════════════════════
          2. HERO
          Tam ekran. Arka plan görseli + koyu overlay.
          Ortada: büyük serif başlık + alt metin + yuvarlak CTA butonu.
          Giriş animasyonu: başlık ve buton yukarıdan fade-in (GSAP veya CSS).
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 z-0 opacity-65">
          <Image
            src={CONFIG.hero.gorsel}
            alt={CONFIG.marka}
            fill priority quality={100}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-[var(--color-light)] text-5xl md:text-8xl lg:text-9xl font-serif max-w-5xl leading-[1.1] tracking-tight">
            {CONFIG.hero.baslik}
          </h1>
          <p className="text-[var(--color-accent)] text-lg md:text-2xl mt-6 max-w-xl">
            {CONFIG.hero.altMetin}
          </p>
          <Link
            href="#menu"
            className="mt-16 w-36 h-36 rounded-full border border-[var(--color-accent)]/80 bg-[var(--color-accent)]/20 backdrop-blur-md text-[var(--color-light)] flex items-center justify-center text-sm font-semibold tracking-widest uppercase hover:bg-[var(--color-accent)]/40 transition-all duration-500"
          >
            {CONFIG.hero.buton}
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════
          3. KARŞILAMA BÖLÜMÜ
          Açık arka plan, tam genişlik, ortaya hizalı.
          Scroll'da aşağıdan yukarıya fade-in (ScrollTrigger veya Intersection Observer).
          Büyük serif başlık + altında italic açıklama metni.
      ══════════════════════════════════════ */}
      <section className="py-40 md:py-56 bg-[var(--color-light)] px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight text-[var(--color-primary)]">
            {CONFIG.karsılama.baslik}
          </h2>
          <p className="mt-8 text-lg md:text-2xl text-[var(--color-primary)]/70 max-w-2xl mx-auto leading-relaxed italic">
            {CONFIG.karsılama.metin}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          4. ÖNE ÇIKAN LEZZETLER — sonsuz marquee şeritleri
      ══════════════════════════════════════ */}
      <section className="py-8 md:py-12 bg-[var(--color-light)] overflow-hidden relative z-10">
        <style>{`
          @keyframes marqueeLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left  { animation: marqueeLeft  28s linear infinite; }
          .marquee-right { animation: marqueeRight 28s linear infinite; }
          .marquee-track { display: flex; align-items: center; width: max-content; will-change: transform; }
        `}</style>

        {/* Şerit 1 — açık mavi, -3deg, sola kayar */}
        <div style={{ transform: "rotate(-3deg)", width: "120%", marginLeft: "-10%", marginBottom: "6px" }}>
          <div style={{ overflow: "hidden", height: "130px", background: "#A8DFDF", display: "flex", alignItems: "center" }}>
            <div className="marquee-track marquee-left">
              {[0, 1].map((copy) => (
                <div key={copy} style={{ display: "flex", alignItems: "center", gap: "40px", padding: "0 40px" }}>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>EKMEK ÇEŞİTLERİ</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[0].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>SOURDOUGH</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[1].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>ÇAVDAR</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[0].gorsel} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Şerit 2 — lila, 0deg, sağa kayar */}
        <div style={{ transform: "rotate(0deg)", width: "120%", marginLeft: "-10%", marginBottom: "6px" }}>
          <div style={{ overflow: "hidden", height: "130px", background: "#C9B8E8", display: "flex", alignItems: "center" }}>
            <div className="marquee-track marquee-right">
              {[0, 1].map((copy) => (
                <div key={copy} style={{ display: "flex", alignItems: "center", gap: "40px", padding: "0 40px" }}>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>PASTALAR</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[2].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>YAŞPASTA</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[3].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>MOUSSE CAKE</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[2].gorsel} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Şerit 3 — mercan pembesi, 3deg, sola kayar */}
        <div style={{ transform: "rotate(3deg)", width: "120%", marginLeft: "-10%" }}>
          <div style={{ overflow: "hidden", height: "130px", background: "#F4A0A8", display: "flex", alignItems: "center" }}>
            <div className="marquee-track marquee-left">
              {[0, 1].map((copy) => (
                <div key={copy} style={{ display: "flex", alignItems: "center", gap: "40px", padding: "0 40px" }}>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>ÖZEL SİPARİŞLER</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[1].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>BAKLAVA</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[3].gorsel} alt="" fill className="object-cover" />
                  </div>
                  <span style={{ fontSize: "5.5rem", fontFamily: "serif", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", whiteSpace: "nowrap", lineHeight: 1 }}>KURUPASTA</span>
                  <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", border: "4px solid white", flexShrink: 0, position: "relative" }}>
                    <Image src={CONFIG.oneCikanlar[0].gorsel} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          5. MENÜ KATEGORİ / FİLTRASYON BÖLÜMÜ
          Açık arka plan. Büyük serif kategori isimleri yan yana.
          Her isim tıklanınca /menu sayfasındaki ilgili kategoriye scroll eder.
          Hover efekti: renk değişimi + opsiyonel: cursor üzerine gelince
          o kategoriden küçük bir ürün görseli belirir (custom cursor).
      ══════════════════════════════════════ */}
      <section id="menu" className="py-24 md:py-48 bg-[var(--color-light)] relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {CONFIG.kategoriler.map((kat, i) => (
            <Link
              key={i}
              href={kat.link}
              className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-serif text-[var(--color-primary)] hover:text-[var(--color-brown)] transition-colors duration-500 leading-none"
            >
              {kat.isim}
            </Link>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════
          6. KATALOG — MENÜDEN GÖRSELLER + ORTADA YAZI
          Koyu arka plan (--color-primary). Yükseklik: 85-120vh.
          3 ürün görseli absolute konumda (sol üst, sağ orta, sol alt).
          Scroll'da parallax: her görsel farklı hızda kayar (GSAP ScrollTrigger).
          Ortada pointer-events:none büyük serif metin + italic alt yazı.
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[var(--color-primary)] relative overflow-hidden h-[85vh] md:h-[120vh]">

        {/* Görsel 1 — sol üst */}
        <div className="absolute top-[12%] left-[2%] w-[45vw] md:w-[32vw] h-[25vh] md:h-[48vh]">
          <Image src={CONFIG.katalog.gorsel1} alt="" fill className="object-cover rounded-[3rem] opacity-90" />
        </div>

        {/* Görsel 2 — sağ orta */}
        <div className="absolute top-[40%] right-[2%] w-[50vw] md:w-[30vw] h-[30vh] md:h-[50vh]">
          <Image src={CONFIG.katalog.gorsel2} alt="" fill className="object-cover rounded-[3rem] opacity-90" />
        </div>

        {/* Görsel 3 — sol alt */}
        <div className="absolute top-[65%] left-[10%] w-[45vw] md:w-[25vw] h-[22vh] md:h-[38vh]">
          <Image src={CONFIG.katalog.gorsel3} alt="" fill className="object-cover rounded-[3rem] opacity-90" />
        </div>

        {/* Ortadaki metin */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 pointer-events-none">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[var(--color-light)] text-center leading-[1.1] drop-shadow-2xl">
            {CONFIG.katalog.ortaYazi}
          </h2>
          <p className="mt-6 text-[var(--color-accent)] text-lg md:text-xl italic text-center max-w-xl">
            {CONFIG.katalog.altMetin}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          7. SCROLL-PIN REVEAL ANİMASYONU
          Sol/sağ görseller açılır, orta metin belirir.
          GSAP ScrollTrigger pin.
      ══════════════════════════════════════ */}
      <section
        ref={katalogSecRef}
        className="h-screen bg-[var(--color-light)] flex items-center justify-center relative overflow-hidden"
      >
        {/* Sol görsel */}
        <div
          ref={solGorselRef}
          className="absolute top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl"
          style={{ left: "5%", width: "clamp(220px, 32vw, 460px)", height: "65vh" }}
        >
          <Image
            src={CONFIG.katalog.gorsel1}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Sağ görsel */}
        <div
          ref={sagGorselRef}
          className="absolute top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl"
          style={{ right: "5%", width: "clamp(220px, 32vw, 460px)", height: "65vh" }}
        >
          <Image
            src={CONFIG.katalog.gorsel2}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Orta metin — başlangıçta invisible, GSAP ile açılır */}
        <div
          ref={ortaMetinRef}
          className="relative z-10 text-center px-4 pointer-events-none"
        >
          <h2
            className="font-serif leading-[1.1] text-[var(--color-primary)]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            {CONFIG.katalog.ortaYazi}
          </h2>
          <p className="mt-5 text-[var(--color-primary)]/60 italic text-lg md:text-2xl">
            {CONFIG.katalog.altMetin}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          8. MÜŞTERİ YORUMLARI
          Açık arka plan. Üstte başlık + italic açıklama.
          Görseller: sonsuz döngülü yatay otomatik kayan Swiper (FreeMode + Autoplay, speed:4000, delay:0).
          Altında Google'da Yorum Yaz CTA butonu.
          Değişecek: CONFIG.yorumGorselleri dizisi, Google Maps linki.
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--color-light)] overflow-hidden relative z-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-4">
            Misafirlerimizin <span className="italic text-[var(--color-brown)]">Deneyimleri</span>
          </h2>
          <p className="text-[var(--color-primary)]/50 max-w-2xl mx-auto italic">
            Bizi sosyal medyadan etiketleyen misafirlerimizin kareleri.
          </p>
        </div>

        {/* ── Swiper: FreeMode + Autoplay, sonsuz kayan, otomatik. Aşağıdaki div'i Swiper ile değiştir ── */}
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
          {CONFIG.yorumGorselleri.map((gorsel, i) => (
            <div key={i} className="snap-start shrink-0 w-[280px] md:w-[360px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl relative">
              <Image src={gorsel} alt={`Müşteri ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Google'da Yorum Yaz CTA */}
        <div className="mt-20 flex flex-col items-center px-6">
          <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-3 text-center">
            BİZİ DEĞERLENDİRİN
          </h3>
          <a
            href={CONFIG.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-[var(--color-light)] font-serif tracking-widest uppercase text-sm hover:bg-[var(--color-brown)] transition-all duration-500 rounded-full shadow-xl"
          >
            Google&apos;da Yorum Yaz
          </a>
        </div>
      </section>


      {/* ══════════════════════════════════════
          9. FOOTER
          Koyu arka plan (--color-primary). 3 sütun grid (mobilde tek sütun):
          Sol: marka adı + kısa açıklama
          Orta: sayfa linkleri
          Sağ: telefon, WhatsApp, adres, çalışma saatleri
          Alt: copyright satırı + ince border-top
      ══════════════════════════════════════ */}
      <footer className="bg-[var(--color-primary)] text-[var(--color-light)] py-16 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Marka */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-3xl font-serif font-bold tracking-widest">{CONFIG.marka}</span>
            <p className="text-sm text-[var(--color-accent)]/80 max-w-xs leading-relaxed">
              {CONFIG.sehir}
            </p>
          </div>

          {/* Linkler */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-serif mb-2 text-[var(--color-accent)]">Menü & Bilgi</h4>
            <Link href="/menu" className="text-sm hover:text-white transition-colors">Menüyü İncele</Link>
            <Link href="/hakkimizda" className="text-sm hover:text-white transition-colors">Hikayemiz</Link>
            <Link href="/iletisim" className="text-sm hover:text-white transition-colors">İletişim</Link>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-lg font-serif mb-2 text-[var(--color-accent)]">Bize Ulaşın</h4>
            <a href={`tel:${CONFIG.telefon}`} className="text-sm text-[var(--color-accent)]/80 hover:text-white transition-colors">
              {CONFIG.telefon}
            </a>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-[var(--color-accent)]/80 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <p className="text-sm text-[var(--color-accent)]/80 max-w-[250px] leading-relaxed">
              {CONFIG.adres}
            </p>
            <p className="text-sm text-[var(--color-accent)]/80">{CONFIG.saat}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-primary)]/50 text-center text-xs text-[var(--color-accent)]/50">
          © {new Date().getFullYear()} {CONFIG.marka}. Tüm hakları saklıdır.
        </div>
      </footer>
    </>
  );
}
