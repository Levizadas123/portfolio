import { useState, useCallback } from "react";

interface ParallaxStyles {
  transform: string;
}

export function useParallax(intensity = 20) {
  const [style, setStyle] = useState<ParallaxStyles>({ transform: "translate(0px, 0px) rotate(3deg)" });
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const moveX = mouseX * intensity;
    const moveY = mouseY * intensity;
    
    setStyle({ transform: `translate(${moveX}px, ${moveY}px) rotate(3deg)` });
  }, [intensity]);
  
  return { handleMouseMove, style };
}
