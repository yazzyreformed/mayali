import React from "react";
import Link from "next/link";
import CONFIG from "@/lib/config";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 relative z-10" style={{ background: "var(--bg-dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        <div className="flex flex-col items-center md:items-start gap-4">
          <div>
            <p style={{ fontSize: "1.8rem", fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 900, letterSpacing: "-0.01em", color: "var(--bg-cream)" }}>{CONFIG.marka}</p>
            <p style={{ fontSize: "1.1rem", fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic", color: "var(--accent-gold)" }}>{CONFIG.markaAlt}</p>
          </div>
          <p className="text-xs leading-relaxed max-w-xs mt-2" style={{ color: "rgba(245,237,214,0.55)" }}>{CONFIG.slogan}</p>
          <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors" style={{ color: "rgba(200,160,69,0.5)" }}>
            Instagram →
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-sm mb-2" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--accent-gold)", letterSpacing: "0.1em" }}>Keşfet</h4>
          {["Menüyü İncele", "Hikayemiz", "Özel Sipariş", "İletişim"].map((l, i) => (
            <Link key={i} href="#" className="text-sm transition-colors" style={{ color: "rgba(245,237,214,0.45)" }}>{l}</Link>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm mb-2" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--accent-gold)", letterSpacing: "0.1em" }}>Bize Ulaşın</h4>
          <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: "rgba(245,237,214,0.35)" }}>{CONFIG.adres}</p>
          <p className="text-xs tracking-wide" style={{ color: "rgba(200,160,69,0.5)" }}>{CONFIG.saat}</p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={`tel:${CONFIG.telefon}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid rgba(245,237,214,0.18)",
                color: "rgba(245,237,214,0.6)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              aria-label="Bizi arayın"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a
              href={CONFIG.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid rgba(245,237,214,0.18)",
                color: "rgba(245,237,214,0.6)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              aria-label="Haritada gör"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 6.627-9 13-9 13S3 16.627 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-xs" style={{ color: "rgba(245,237,214,0.25)" }}>
          © {new Date().getFullYear()} {CONFIG.marka} {CONFIG.markaAlt}. Tüm hakları saklıdır.
        </p>
        <a href={CONFIG.googleMaps} target="_blank" rel="noopener noreferrer"
          className="text-xs transition-colors" style={{ color: "rgba(245,237,214,0.25)" }}>
          {CONFIG.adres}
        </a>
      </div>
    </footer>
  );
}
