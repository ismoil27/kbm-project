import React, { useCallback, useEffect } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function Lightbox({ images, index, onClose, onIndexChange }) {
  const open = index !== null && index >= 0;

  const step = useCallback(
    (delta) => onIndexChange((index + delta + images.length) % images.length),
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, step]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product image viewer"
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-4 top-4 rounded-full border border-white/20 p-2.5 text-white transition hover:bg-white/10 sm:right-6 sm:top-6"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 rounded-full border border-white/20 p-2.5 text-white transition hover:bg-white/10 sm:left-6"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 rounded-full border border-white/20 p-2.5 text-white transition hover:bg-white/10 sm:right-6"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt=""
          className="mx-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-white/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}

export default Lightbox;
