import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hash]);
}

export default useScrollToHash;
