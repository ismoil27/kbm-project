import React from "react";
import Reveal from "./reveal";

export function PageHero({ image, eyebrow, title, description, children }) {
  return (
    <header className="relative flex min-h-[400px] items-center overflow-hidden pb-14 pt-28 sm:min-h-[460px] sm:pb-16 sm:pt-32 lg:min-h-[500px]">
      <div
        className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      {/* Light overall tint keeps the photo obvious; the left-hand gradient
          does the heavy lifting only where the copy sits. */}
      <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent"
        aria-hidden="true"
      />
      {/* Top scrim keeps the overlaid navbar legible against bright photos. */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/90 to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          {eyebrow && (
            <Reveal className="eyebrow mb-3 text-brand-400">
              <span className="h-px w-8 bg-brand-400" />
              {eyebrow}
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
                {description}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={240}>{children}</Reveal>}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <Reveal className={`eyebrow mb-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-brand-500" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="heading-lg">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p className="lede mt-4">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export default PageHero;
