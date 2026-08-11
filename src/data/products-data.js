// Language-neutral product metadata. All copy lives in src/i18n/translations.js
// under `products[slug]`, keyed by the same slug.
export const products = [
  {
    slug: "urenthane-panel",
    path: "/products/urenthane-panel",
    hero: "/img/heroes/hero-products.jpg",
    cover: "/roofPics/urenthan/product01_01.jpeg",
    gallery: [
      "/roofPics/urenthan/product01_01.jpeg",
      "/roofPics/urenthan/product01_02.jpeg",
      "/roofPics/urenthan/product01_03.jpeg",
      "/roofPics/urenthan/product01_04.jpeg",
      "/roofPics/urenthan/product01_05.jpeg",
    ],
  },
  {
    slug: "glass-wool-panel",
    path: "/products/glass-wool-panel",
    hero: "/img/heroes/hero-products.jpg",
    cover: "/roofPics/glass/product02_01.jpeg",
    gallery: [
      "/roofPics/glass/product02_01.jpeg",
      "/roofPics/glass/product02_02.jpeg",
      "/roofPics/glass/product02_03.jpeg",
      "/roofPics/glass/product02_04.jpeg",
      "/roofPics/glass/product02_05.jpeg",
    ],
  },
  {
    slug: "metal-panel",
    path: "/products/metal-panel",
    hero: "/img/heroes/hero-products.jpg",
    cover: "/roofPics/metal/product03_01.jpeg",
    gallery: [
      "/roofPics/metal/product03_01.jpeg",
      "/roofPics/metal/product03_02.jpeg",
      "/roofPics/metal/product03_03.jpeg",
      "/roofPics/metal/product03_04.jpeg",
    ],
  },
  {
    slug: "eps-panel",
    path: "/products/eps-panel",
    hero: "/img/heroes/hero-products.jpg",
    cover: "/roofPics/eps/eps1.jpeg",
    gallery: [
      "/roofPics/eps/eps1.jpeg",
      "/roofPics/eps/eps2.jpeg",
      "/roofPics/eps/eps3.jpeg",
      "/roofPics/eps/eps4.jpeg",
    ],
  },
  {
    slug: "others",
    path: "/products/others",
    hero: "/img/heroes/hero-products.jpg",
    cover: "/roofPics/others/product05_01.jpg",
    gallery: ["/roofPics/others/product05_01.jpg", "/roofPics/others/product05_02.jpg"],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export default products;
