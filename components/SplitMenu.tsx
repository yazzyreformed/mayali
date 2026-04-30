"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SplitMenu.module.css";

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
}

interface MenuCategory {
  label: string;
  image: string;
  items: MenuItem[];
}

interface MenuSection {
  id: string;
  title: string;
  bg: string;
  textColor: string;
  categories: MenuCategory[];
}

const menuData: MenuSection[] = [
  {
    id: "firin",
    title: "Fırın",
    bg: "#F5EDD0",
    textColor: "#2C1810",
    categories: [
      {
        label: "Ekmekler",
        image: "/images/urun-1.png",
        items: [
          { name: "Köy Ekmeği",    desc: "Doğal ekşi mayalı, 500 gr.",  price: "35₺" },
          { name: "Tam Buğday",    desc: "Kepekli, çekirdekli, 500 gr.", price: "40₺" },
          { name: "Çavdar Ekmeği", desc: "Uzun fermantasyon, 400 gr.",   price: "45₺" },
          { name: "Sourdough",     desc: "El yapımı ekşi maya, 600 gr.", price: "55₺" },
        ],
      },
      {
        label: "Börekler",
        image: "/images/katalog-1.jpg",
        items: [
          { name: "Su Böreği",       desc: "Peynirli, el açması",    price: "60₺" },
          { name: "Kıymalı Börek",   desc: "Taze kıyma, soğanlı",    price: "65₺" },
          { name: "Ispanaklı Börek", desc: "Lor peynirli",            price: "55₺" },
          { name: "Patatesli Börek", desc: "Baharatlı patates dolgu", price: "50₺" },
        ],
      },
      {
        label: "Poğaçalar",
        image: "/images/katalog-2.jpg",
        items: [
          { name: "Peynirli Poğaça",  desc: "Lor ve beyaz peynir", price: "25₺" },
          { name: "Zeytinli Poğaça",  desc: "Siyah zeytin, kekik", price: "25₺" },
          { name: "Patatesli Poğaça", desc: "Baharatlı patates",   price: "20₺" },
          { name: "Sade Poğaça",      desc: "Tereyağlı, susam",    price: "18₺" },
        ],
      },
    ],
  },
  {
    id: "tatlilar",
    title: "Tatlılar",
    bg: "#EAE5D9",
    textColor: "#1C2E24",
    categories: [
      {
        label: "Pastalar",
        image: "/images/urun-2.png",
        items: [
          { name: "Beyaz Çikolatalı Çilekli", desc: "4–6 kişilik", price: "620₺" },
          { name: "Çikolatalı Yaş Pasta",     desc: "4–6 kişilik", price: "620₺" },
          { name: "Muzlu Çikolatalı",         desc: "4–6 kişilik", price: "620₺" },
          { name: "Lotuslu Pasta",            desc: "4–6 kişilik", price: "620₺" },
        ],
      },
      {
        label: "Şerbetli Tatlılar",
        image: "/images/urun-3.png",
        items: [
          { name: "Fıstıklı Baklava", desc: "Taze günlük, 250 gr.", price: "208₺" },
          { name: "Cevizli Baklava",  desc: "Taze günlük, 250 gr.", price: "172₺" },
          { name: "Fıstıklı Baklava", desc: "Taze günlük, 500 gr.", price: "480₺" },
          { name: "Cevizli Baklava",  desc: "Taze günlük, 500 gr.", price: "408₺" },
        ],
      },
      {
        label: "Kurupastalar",
        image: "/images/urun-4.png",
        items: [
          { name: "Bademli Kurabiye",  desc: "El yapımı, 200 gr.", price: "95₺"  },
          { name: "Brownie",           desc: "Günlük taze, dilim", price: "45₺"  },
          { name: "Fındıklı Kek",      desc: "Günlük taze, dilim", price: "40₺"  },
          { name: "Karışık Kurupasta", desc: "Kutu, 500 gr.",       price: "220₺" },
        ],
      },
    ],
  },
];

function MenuSectionBlock({ section }: { section: MenuSection }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Viewport'un %40'ı noktasını geçen son kategori aktif olur
      const trigger = window.innerHeight * 0.4;
      let newIdx = 0;

      categoryRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= trigger) newIdx = i;
      });

      setActiveIdx(newIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // ilk render'da doğru görseli seç

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.menuSection}>
      <div className={styles.splitLayout}>

        {/* SOL: menü kartı */}
        <div className={styles.menuCard} style={{ backgroundColor: section.bg }}>
          <h2 className={styles.mainTitle} style={{ color: section.textColor }}>
            {section.title}
          </h2>

          <div className={styles.menuList}>
            {section.categories.map((cat, i) => (
              <div
                key={cat.label}
                className={styles.categoryBlock}
                ref={(el) => { categoryRefs.current[i] = el; }}
              >
                <h3 className={styles.categoryTitle} style={{ color: section.textColor }}>
                  {cat.label}
                </h3>
                <div className={styles.itemsWrapper}>
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className={styles.menuItem}
                      style={{ borderBottomColor: `${section.textColor}26` }}
                    >
                      <div className={styles.itemInfo}>
                        <h4 className={styles.itemName} style={{ color: section.textColor }}>
                          {item.name}
                        </h4>
                        {item.desc && (
                          <p className={styles.itemDesc} style={{ color: section.textColor }}>
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <div className={styles.itemPrice} style={{ color: section.textColor }}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ: sticky görsel — imageCol'da overflow:hidden YOK */}
        <div className={styles.imageCol}>
          <div className={styles.stickyArea}>
            {section.categories.map((cat, i) => (
              <div
                key={cat.label}
                className={`${styles.imageLayer} ${
                  i === activeIdx ? styles.imageLayerVisible : styles.imageLayerHidden
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.image} alt={cat.label} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default function SplitMenu() {
  return (
    <div className={styles.sectionsWrapper}>
      {menuData.map((section) => (
        <MenuSectionBlock key={section.id} section={section} />
      ))}
    </div>
  );
}
