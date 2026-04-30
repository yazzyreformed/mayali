"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const PATH_A = "M0,210 C180,120 360,290 540,190 C720,90  900,270 1080,170 C1240,90  1360,150 1440,130 L1440,400 L0,400 Z";
const PATH_B = "M0,150 C180,260 360,110 540,230 C720,340 900,140 1080,250 C1240,340 1360,220 1440,260 L1440,400 L0,400 Z";

const ORDER_URL =
  "https://www.yemeksepeti.com/restaurant/iiwp/mayali-firin-and-pasta?srsltid=AfmBOooiWLngNrO2IcQbqu0Wa6YQZ_CJuICTua7OtXCDUo3wmVgpB7TI";

function HeroBottomWave() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef  = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(pathRef.current, {
          attr: { d: PATH_B },
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 95%",
            end: "bottom top",
            scrub: 2.5,
          },
        });

        gsap.fromTo(
          svgRef.current,
          { x: "-4%" },
          {
            x: "4%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={wrapRef} className={styles.heroBottomWave} aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} d={PATH_A} fill="#1C2E24" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef     = useRef<HTMLImageElement>(null);

  const scrollToMenu = () => {
    const menuEl = document.getElementById("menu");
    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let alive = true;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!alive || !containerRef.current) return;

      ctx = gsap.context(() => {
        gsap.to(imageRef.current, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, containerRef);
    })();
    return () => { alive = false; ctx?.revert(); };
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>

      <h1 className={styles.heroTitle}>
        <span
          data-reveal="mask-down"
          style={{ "--delay": "900ms" } as React.CSSProperties}
          className={styles.titleLine}
        >
          <span style={{ color: "#3B1A06" }}>M</span>
          <span style={{ color: "#6B3410" }}>A</span>
          <span style={{ color: "#8B4513" }}>Y</span>
          <span style={{ color: "#A0522D" }}>A</span>
          <span style={{ color: "#B8622E" }}>L</span>
          <span style={{ color: "#C08060" }}>I</span>
        </span>
        <span
          data-reveal="mask-down"
          style={{ "--delay": "1050ms" } as React.CSSProperties}
          className={styles.titleLine}
        >
          FIRIN
        </span>
        <span
          data-reveal="mask-down"
          style={{ "--delay": "1200ms" } as React.CSSProperties}
          className={styles.titleLine}
        >
          &amp; PASTA
        </span>
      </h1>

      <p
        className={styles.heroTagline}
        data-reveal="fade-up"
        style={{ "--delay": "1350ms" } as React.CSSProperties}
      >
        Her sabah güneş doğmadan, Yenimahalle&apos;de taze üretim.
      </p>

      <div
        className={styles.heroCta}
        data-reveal="fade-up"
        style={{ "--delay": "1500ms" } as React.CSSProperties}
      >
        <button className={styles.ctaPrimary} onClick={scrollToMenu}>
          Menüyü Gör
        </button>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          Sipariş Ver →
        </a>
      </div>

      <div
        className={styles.heroImageWrapper}
        data-hero-image-wrapper=""
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero_baklava.png"
          alt="Mayalı Fırın baklava"
          className={styles.heroImage}
          ref={imageRef}
          data-hero-image=""
        />
      </div>

      <HeroBottomWave />

    </section>
  );
}
