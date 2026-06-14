import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to #anchor when navigating to a URL with a hash,
 * and resets to top when navigating without one.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Wait for the destination page to render
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempt < 10) {
          setTimeout(() => tryScroll(attempt + 1), 80);
        }
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [pathname, hash]);

  return null;
}
