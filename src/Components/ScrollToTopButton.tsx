import { useEffect, useState, type JSX } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Show button if scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    const lenis = (window as any).lenis;
    if (lenis) {
      // Use Lenis smooth scrolling if active
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A25D] text-white shadow-lg transition-all duration-500 hover:bg-[#e88f43] hover:scale-115 active:scale-90 cursor-pointer ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="h-6 w-6 stroke-[2.5]" />
    </button>
  );
}
