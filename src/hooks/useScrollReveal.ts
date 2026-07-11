import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.05) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Ensure the baseline class is present
    element.classList.add("reveal-parent");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Stop observing once animated in
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px", // Trigger when element is slightly above the bottom viewport edge
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return ref;
}
