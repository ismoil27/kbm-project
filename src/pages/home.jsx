import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
  FireIcon,
  SparklesIcon,
  ClockIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Reveal, Counter, SectionHeading, HeroSlider, Marquee } from "@/widgets/ui";
import { products } from "@/data/products-data";
import { site } from "@/data/site";
import { useLang } from "@/i18n";

const heroSlides = [
  "/img/heroes/hero-home-1.jpg",
  "/img/heroes/hero-home-2.jpg",
  "/img/heroes/hero-home-3.jpg",
];

const statValues = [1280, 1420, 20, 800];
const statSuffix = ["", "", "+", ""];

const whyIcons = [
  FireIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
];

export function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ============ Hero ============ */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden pb-20 pt-28 sm:min-h-[660px] sm:pb-24 sm:pt-32 lg:min-h-[88vh]">
        <HeroSlider images={heroSlides} />

        {/* Light overall tint keeps the photo obvious; the left-hand gradient
            does the heavy lifting only where the copy sits. */}
        <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/90 to-transparent"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="max-w-2xl">
            <Reveal className="eyebrow mb-4 text-brand-400">
              <span className="h-px w-8 bg-brand-400" />
              {t.home.eyebrow}
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
                {t.home.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
                {t.home.lede}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/products/urenthane-panel"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-500/25 transition duration-300 hover:bg-brand-600"
                >
                  {t.home.ctaPrimary}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-ink/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-ink/80"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {t.home.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Stats ============ */}
      <section className="border-b border-steel-200 bg-white py-10 sm:py-12">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {t.home.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="text-center lg:text-left">
              <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                <Counter to={statValues[i]} suffix={statSuffix[i]} />
              </div>
              <p className="mt-1 text-xs text-steel-500 sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Capability marquee ============ */}
      <section className="border-b border-steel-200 bg-steel-50 py-5">
        <Marquee items={t.home.capabilities} />
      </section>

      {/* ============ Intro + video ============ */}
      <section className="py-20 sm:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.home.intro.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.home.intro.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-5">{t.home.intro.body}</p>
            </Reveal>

            <Reveal delay={180} className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.home.intro.points.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-steel-700">{item}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={240}>
              <a
                href={site.phoneHref}
                className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-steel-200 bg-white p-4 transition duration-300 hover:border-brand-300 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-steel-400">
                    {t.home.intro.phoneLabel}
                  </span>
                  <span className="block font-display text-lg font-bold text-ink">
                    {site.phone}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120} className="overflow-hidden rounded-3xl shadow-2xl shadow-ink/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/roofing2.mp4"
              className="aspect-video h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ Products ============ */}
      <section className="bg-steel-50 py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.productsSection.eyebrow}
            title={t.home.productsSection.title}
            description={t.home.productsSection.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const copy = t.products[product.slug];
              return (
                <Reveal key={product.slug} delay={i * 80}>
                  <Link
                    to={product.path}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-30px_rgba(10,15,28,0.4)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
                      <img
                        src={product.cover}
                        alt={copy.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-ink">{copy.name}</h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-500">
                        {copy.tagline}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-500">
                        {copy.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-brand-500">
                        {t.common.learnMore}
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Why choose us ============ */}
      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.why.eyebrow}
            title={t.home.why.title}
            description={t.home.why.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className="group rounded-2xl border border-steel-200 bg-white p-7 transition duration-500 ease-smooth hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_28px_70px_-32px_rgba(10,15,28,0.35)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-50 text-brand-500 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-500">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-[url('/img/heroes/hero-projects.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="shell relative text-center">
          <Reveal>
            <h2 className="heading-lg mx-auto max-w-2xl text-white">{t.home.cta.title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              {t.home.cta.body}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
              >
                {t.common.contactTeam}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                {t.common.seeProjects}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
