"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Double rAF ensures the DOM is fully painted before we touch opacity,
    // so content is never invisible if JS is slow or the observer misfires.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>("[data-animate]")
        );

        if (!elements.length) return;

        // Hide elements via JS only — if JS never runs, content stays visible
        elements.forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(24px)";
          el.style.transition =
            "opacity 0.55s ease-out, transform 0.55s ease-out";
        });

        const makeVisible = (el: HTMLElement) => {
          const delay = el.dataset.animateDelay
            ? parseInt(el.dataset.animateDelay)
            : 0;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        };

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                makeVisible(entry.target as HTMLElement);
                observer.unobserve(entry.target);
              }
            });
          },
          // No negative rootMargin — catches elements already in viewport
          { threshold: 0.05, rootMargin: "0px" }
        );

        elements.forEach((el) => observer.observe(el));
      });
    });
  }, []);

  return null;
}
