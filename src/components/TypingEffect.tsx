import { useEffect, useState } from "react";

interface TypingEffectProps {
    texts: string[];
    speed?: number;
    pause?: number;
  }
  
  export const TypingEffect: React.FC<TypingEffectProps> = ({ texts, speed = 100, pause = 1500 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
  
    useEffect(() => {
      if (index >= texts.length) return;
  
      const currentText = texts[index];
  
      if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
  
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }, speed);
  
      return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, texts, speed, pause]);
  
    return (
      <span className="text-transparent bg-clip-text bg-secondary-color !text-xl md:!text-3xl font-semibold">
        {texts[index].substring(0, subIndex)}
        <span className="bg-secondary-color animate-pulse !text-xl md:!text-3xl">|</span>
      </span>
    );
  };
  