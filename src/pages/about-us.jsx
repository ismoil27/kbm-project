import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  TrophyIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { PageHero, Reveal, SectionHeading, Counter } from "@/widgets/ui";
import { useLang } from "@/i18n";

const valueIcons = [TrophyIcon, LightBulbIcon, UserGroupIcon];
const milestoneValues = [2000, 2700, 5];
const milestoneSuffix = ["", "+", ""];

export function AboutUs() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        image="/img/heroes/hero-about.jpg"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.lede}
      />

      {/* Intro split */}
      <section className="py-16 sm:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="overflow-hidden rounded-3xl">
            <img
              src="/roofPics/roofing-professional-workers.jpg"
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-smooth hover:scale-105 lg:aspect-[4/5]"
            />
          </Reveal>

          <div>
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.about.story.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.about.story.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-5">{t.about.story.body1}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="lede mt-4">{t.about.story.body2}</p>
            </Reveal>

            <Reveal delay={240} className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.story.assurances.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-steel-700">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-y border-steel-200 bg-steel-50 py-14">
        <div className="shell grid gap-10 text-center sm:grid-cols-3">
          {t.about.milestones.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {i === 0 ? (
                  milestoneValues[i]
                ) : (
                  <Counter to={milestoneValues[i]} suffix={milestoneSuffix[i]} />
                )}
              </div>
              <p className="mt-2 text-sm text-steel-500">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={t.about.values.eyebrow}
            title={t.about.values.title}
            description={t.about.values.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.about.values.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
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

      {/* Video */}
      <section className="pb-16 sm:pb-24">
        <div className="shell">
          <Reveal className="overflow-hidden rounded-3xl shadow-2xl shadow-ink/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/road.mp4"
              className="aspect-video w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="shell space-y-12">
          {[t.about.mission, t.about.vision].map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="grid gap-4 border-t border-steel-300 pt-8 lg:grid-cols-[1fr_2.4fr] lg:gap-12"
            >
              <h2 className="heading-md">{item.title}</h2>
              <p className="lede">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="shell flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <h2 className="heading-md max-w-xl text-white">{t.about.cta.title}</h2>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
          >
            {t.about.cta.button}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
