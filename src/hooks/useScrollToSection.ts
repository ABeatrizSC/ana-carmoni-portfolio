import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
};
