"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ORDER_URL =
  "https://www.yemeksepeti.com/restaurant/iiwp/mayali-firin-and-pasta?srsltid=AfmBOooiWLngNrO2IcQbqu0Wa6YQZ_CJuICTua7OtXCDUo3wmVgpB7TI";


export default function Navbar({ lightText = false }: { lightText?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.navbar}${lightText ? ` ${styles.light}` : ""}`}>
        <div className={`${styles.navGroup} ${styles.navGroupDesktop}`}>
          <Link href="/" className={styles.navItem}>Ana Sayfa</Link>
          <Link href="/menu" className={styles.navItem}>Menü</Link>
        </div>

        <Link href="/" className={styles.navLogo} aria-label="Mayalı Fırın — Ana Sayfa">
          <span className={styles.navLogoMain}>MAYALI</span>
          <span className={styles.navLogoSub}>FIRIN &amp; PASTA</span>
        </Link>

        <div className={`${styles.navGroup} ${styles.navGroupDesktop}`}>
          <Link href="/hakkimizda" className={styles.navItem}>Hakkımızda</Link>
          <Link href="/iletisim" className={styles.navItem}>İletişim</Link>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className={styles.navOrder}>
            Sipariş Ver
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${styles.burgerLineTop} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.burgerLine} ${styles.burgerLineMid} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.burgerLine} ${styles.burgerLineBot} ${menuOpen ? styles.open : ""}`} />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuInner}>
          <Link href="/" className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
            Ana Sayfa
          </Link>
          <Link href="/menu" className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
            Menü
          </Link>
          <Link href="/hakkimizda" className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
            Hakkımızda
          </Link>
          <Link href="/iletisim" className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
            İletişim
          </Link>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileItemOrder}
            onClick={() => setMenuOpen(false)}
          >
            Sipariş Ver →
          </a>
        </div>
      </div>
    </>
  );
}
