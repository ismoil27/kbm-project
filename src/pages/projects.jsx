import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  MapPinIcon,
  ArrowRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { PageHero, Reveal, SectionHeading, Lightbox } from "@/widgets/ui";
import { useLang } from "@/i18n";

// Language-neutral project metadata; copy lives in translations under projects.items.
const projectMeta = [
  { key: "metatech", category: "Industrial", image: "/roofPics/projects/metatech.jpeg" },
  { key: "jinhap", category: "Industrial", image: "/roofPics/projects/projects1_2.jpeg" },
  { key: "hanla", category: "Heavy Industry", image: "/roofPics/projects/projects1_3.jpeg" },
  { key: "carbon", category: "Manufacturing", image: "/roofPics/projects/projects1_4.jpeg" },
];

export function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = useMemo(
    () => ["All", ...new Set(projectMeta.map((p) => p.category))],
    []
  );

  const visible = useMemo(
    () => (filter === "All" ? projectMeta : projectMeta.filter((p) => p.category === filter)),
    [filter]
  );

  const label = (category) =>
    category === "All" ? t.projects.portfolio.all : t.projects.categories[category] ?? category;

  return (
    <>
      <PageHero
        image="/img/heroes/hero-projects.jpg"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.lede}
      />

      {/* Featured intro */}
      <section className="py-16 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.projects.featured.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.projects.featured.title}</h2>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-1">
            <p className="lede">{t.projects.featured.body}</p>
          </Reveal>

          <Reveal delay={180} className="grid grid-cols-2 gap-3 lg:col-span-1 lg:grid-cols-1">
            {t.projects.featured.outcomes.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-sm font-medium text-steel-700">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={t.projects.portfolio.eyebrow}
            title={t.projects.portfolio.title}
            description={t.projects.portfolio.description}
          />

          <div className="no-scrollbar mt-10 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${
                  filter === category
                    ? "bg-ink text-white"
                    : "border border-steel-200 bg-white text-steel-600 hover:border-steel-400"
                }`}
              >
                {label(category)}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {visible.map((project, i) => {
              const copy = t.projects.items[project.key];
              return (
                <Reveal
                  key={project.key}
                  delay={i * 80}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-30px_rgba(10,15,28,0.4)]"
                >
                  <button
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`${t.common.viewFullScreen}: ${copy.title}`}
                    className="relative aspect-[16/9] overflow-hidden bg-steel-100"
                  >
                    <img
                      src={project.image}
                      alt={copy.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition duration-500 group-hover:bg-ink/40 group-hover:opacity-100">
                      <ArrowsPointingOutIcon className="h-9 w-9 text-white" />
                    </span>
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                      {label(project.category)}
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      {copy.title}
                    </h3>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-steel-400">
                      <MapPinIcon className="h-4 w-4" />
                      {copy.location}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-500">
                      {copy.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="shell flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="heading-md text-white">{t.projects.cta.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {t.projects.cta.body}
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
          >
            {t.projects.cta.button}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Lightbox
        images={visible.map((p) => p.image)}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}

export default Projects;
