import React from "react";

/**
 * CSS-only infinite marquee.
 *
 * The track holds the item list twice; the keyframe translates it by -50%,
 * which is exactly one list width, so the loop is seamless. Pure CSS keeps it
 * dependency-free and it degrades to a static strip under reduced-motion.
 */
export function Marquee({ items, className = "" }) {
  const List = ({ hidden }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="mx-6 inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-steel-500"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <List />
        <List hidden />
      </div>
    </div>
  );
}

export default Marquee;
