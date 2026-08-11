import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Cross-fading background slideshow for the home hero.
 * Auto-advances, pauses when the tab is hidden, and stops entirely for
 * users who prefer reduced motion.
 */
export function HeroSlider({ images, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const start = useCallback(() => {
    if (reduced || images.length < 2) return;
    clearInterval(timer.current);
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
  }, [images.length, interval, reduced]);

  useEffect(() => {
    start();
    const onVisibility = () =>
      document.hidden ? clearInterval(timer.current) : start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [start]);

  const goTo = (i) => {
    setIndex(i);
    start();
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-smooth ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>

      {images.length > 1 && !reduced && (
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ease-smooth ${
                i === index ? "w-8 bg-brand-500" : "w-4 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default HeroSlider;
