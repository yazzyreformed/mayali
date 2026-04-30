const CONFIG = {
  marka:     "MAYALI FIRIN",
  markaAlt:  "& PASTA",
  slogan:    "El yapımı. Doğal mayalı. Günlük taze.",
  sehir:     "Yenimahalle / Ankara",
  telefon:   "0312 394 52 18",
  whatsapp:  "905323945218",
  adres:     "Barıştepe Mah. Demirdağ Cad. No: 46/A Yenimahalle/ANKARA",
  saat:      "Her gün 06.00 – 22.00",
  ctaLink:   "https://www.yemeksepeti.com/restaurant/iiwp/mayali-firin-and-pasta",
  ctaMetin:  "Sipariş Ver",
  googleMaps:"https://www.google.com/maps?q=39.9846488,32.7962159",
  instagram: "https://instagram.com/mayalifirin",

  hero: {
    baslik:  "Ekmeğin\nEn Güzel\nHali.",
    altMetin:"Ankara'nın en taze mayalı ekmekleri ve el yapımı pastaları.",
    buton:   "MENÜYÜ KEŞFEDİN",
    gorsel:  "/images/hero.jpg",
  },

  karsılama: {
    baslik: "Her sabah saat 4'te\nbiz zaten mutfaktayız.",
    metin:
      "2009'dan bu yana Barıştepe'de, geleneksel mayalama yöntemiyle ekmek yapıyoruz. Unumuz değirmenden, sütümüz çiftlikten, tariflerimiz nesilden nesile. Her gün aynı özen, aynı sabır.",
    stats: [
      { sayi: "15+", etiket: "Yıllık Deneyim" },
      { sayi: "80+", etiket: "Ürün Çeşidi" },
      { sayi: "4:00", etiket: "İşe Başlama Saati" },
    ],
  },

  oneCikanlar: [
    { isim: "Sourdough",  gorsel: "/images/urun-1.png" },
    { isim: "Pasta",      gorsel: "/images/urun-2.png" },
    { isim: "Baklava",    gorsel: "/images/urun-3.png" },
    { isim: "Kurupasta",  gorsel: "/images/urun-4.png" },
  ],

  kategoriler: [
    {
      isim: "Ekmekler",
      aciklama: "Sourdough, çavdar, kepek ve özel unlu ekmekler",
      link: "/menu#ekmekler",
      gorsel: "/images/urun-1.png",
    },
    {
      isim: "Pastalar",
      aciklama: "Doğum günü, düğün ve butik tasarım pastalar",
      link: "/menu#pastalar",
      gorsel: "/images/urun-2.png",
    },
    {
      isim: "Tatlılar",
      aciklama: "Baklava, künefe, revani ve ev yapımı kurupastalar",
      link: "/menu#tatlilar",
      gorsel: "/images/urun-3.png",
    },
  ],

  katalog: {
    gorsel1:  "/images/katalog-1.jpg",
    gorsel2:  "/images/katalog-2.jpg",
    gorsel3:  "/images/katalog-3.jpg",
    ortaYazi: "Doğal.\nKatkısız.\nLezzetli.",
    altMetin: "Kimyasal katkısız, doğal fermantasyon, günlük üretim.",
  },

  yorumlar: [
    {
      isim: "Esra Mert",
      tarih: "3 ay önce",
      renk: "#EA4335",
      localGuide: false,
      metin:
        "Annemin doğum günü için pasta yaptırdık ve çok memnun kaldık. Hem çok lezzetliydi hem de diğer pastanelere göre uygun fiyatlıydı. İçerisindeki meyveler boldu. Kreması, keki aşırı lezzetliydi. Artık sürekli tercih edeceğimiz tek yer olabilir.",
    },
    {
      isim: "Yasin Yıldız",
      tarih: "9 ay önce",
      renk: "#4285F4",
      localGuide: false,
      metin:
        "Özel gün için fıstıklı ve cevizli iki tepsi baklava aldım. Orijinal tereyağı ile yapıldığı tadından ve kokusundan belliydi. Glikoz şurubu kullanılmadığına eminim çünkü asla midem yanmadı. Son derece kaliteli ürünler, güleryüzlü karşılama ve mekan temizliği ile kesinlikle tavsiye ederim.",
    },
    {
      isim: "Gamze Engizek",
      tarih: "4 ay önce",
      renk: "#34A853",
      localGuide: true,
      metin:
        "Çikolatalı açması çok güzeldi, şansıma sıcacık yeni çıkmıştı. Çay da ikram olarak veriliyor. Çalışanları güleryüzlü, denerseniz mutlu ayrılırsınız.",
    },
    {
      isim: "Merve Gurkan",
      tarih: "9 ay önce",
      renk: "#9C27B0",
      localGuide: false,
      metin:
        "2 defa özel günlerim için pasta yaptırdım, ikisinde de çok beğendim ve herkes tarafından beğenildi. İç malzemesi, keki o kadar lezzetli ki. Hem göze hem damağa hitap ediyor.",
    },
    {
      isim: "Muhammed Selim Türkoğlu",
      tarih: "4 ay önce",
      renk: "#00897B",
      localGuide: false,
      metin:
        "Ürünleri lezzetli ve kaliteli. Sabahları işe giderken kahvaltılık ürünler alıyorum genelde. En önemlisi midemi yakmıyor. Genel olarak güvenilir ve kaliteli bir işletme.",
    },
    {
      isim: "Kadir Şahin",
      tarih: "3 ay önce",
      renk: "#F57C00",
      localGuide: false,
      metin:
        "Fırındaki çalışanlar çok güleryüzlü. Yusuf beyin müşterilerine olan güleryüzlülüğü için teşekkür ediyorum. Satılan ürünlerin çoğu çok kalitelidir, tavsiye ediyorum.",
    },
    {
      isim: "Furkan Kırdök",
      tarih: "3 ay önce",
      renk: "#5C6BC0",
      localGuide: false,
      metin:
        "Yaş pasta aldım ve ailecek çok beğendik. Aynı şekilde spesiyal dubai kurabiyesini kesinlikle tatmalısınız.",
    },
    {
      isim: "Bunyamin Delioglan",
      tarih: "7 ay önce",
      renk: "#26A69A",
      localGuide: false,
      metin:
        "Her an taze ürünleri bulmak benim için temel faktör. Ustaların elleri de çok lezzetli, çalışanlar güler yüzlü.",
    },
    {
      isim: "Doğan Orbay",
      tarih: "7 ay önce",
      renk: "#66BB6A",
      localGuide: true,
      metin:
        "Ürünleri taze ve uygun fiyatlı, tavsiye ederim. Güzel bir işletme.",
    },
    {
      isim: "Önder Ergün",
      tarih: "3 ay önce",
      renk: "#EC407A",
      localGuide: false,
      metin:
        "Kaliteye önem veren bir işletme. Yusuf beye ayrı teşekkür.",
    },
  ],
};

export default CONFIG;
export type Config = typeof CONFIG;
