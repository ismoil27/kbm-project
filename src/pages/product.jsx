import React, { useState } from "react";
import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import { ArrowRightIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { PageHero, Reveal, SectionHeading, Lightbox } from "@/widgets/ui";
import { products, getProduct } from "@/data/products-data";
import { useLang } from "@/i18n";

export function ProductPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const product = getProduct(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!product) return <Navigate to="/products/urenthane-panel" replace />;

  const copy = t.products[slug];

  return (
    <>
      <PageHero
        image={product.hero}
        eyebrow={t.product.eyebrow}
        title={copy.name}
        description={copy.summary}
      />

      {/* Product switcher — scrollable chips on mobile, sticky rail on desktop */}
      <nav className="sticky top-[60px] z-30 border-b border-steel-200 bg-white/90 backdrop-blur-xl">
        <div className="shell">
          <ul className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-3">
            {products.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "bg-ink text-white" : "text-steel-600 hover:bg-steel-100"
                    }`
                  }
                >
                  {t.products[item.slug].shortName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Highlights */}
      <section className="py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={t.product.strengths.eyebrow}
            title={t.product.strengths.title}
            description={copy.tagline}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="rounded-2xl border border-steel-200 bg-white p-7 transition duration-500 ease-smooth hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_28px_70px_-32px_rgba(10,15,28,0.35)]"
              >
                <span className="font-display text-4xl font-extrabold text-brand-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-500">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={120}
            className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-steel-200 bg-steel-200 sm:grid-cols-3"
          >
            {copy.specs.map((spec) => (
              <div key={spec.label} className="bg-white p-6 text-center">
                <p className="text-xs uppercase tracking-wider text-steel-400">{spec.label}</p>
                <p className="mt-2 font-display text-lg font-bold text-ink">{spec.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={t.product.gallery.eyebrow}
            title={t.product.gallery.title}
            description={t.product.gallery.description}
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {product.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 60}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-steel-200 bg-white"
                  aria-label={`${t.common.viewFullScreen} ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${copy.name} — ${i + 1}`}
                    loading="lazy"
                    className="w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition duration-500 group-hover:bg-ink/40 group-hover:opacity-100">
                    <ArrowsPointingOutIcon className="h-9 w-9 text-white" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="shell flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="heading-md text-white">{t.product.cta.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {t.product.cta.body}
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
          >
            {t.common.requestQuote}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Lightbox
        images={product.gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}

export default ProductPage;
