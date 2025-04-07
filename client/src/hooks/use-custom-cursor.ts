import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement;
    
    if (!cursorDot || !cursorOutline || window.innerWidth < 768) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      
      // Add slight delay to outline for smooth effect
      setTimeout(() => {
        cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }, 50);
    };
    
    const handleMouseOver = () => {
      cursorOutline.style.width = "60px";
      cursorOutline.style.height = "60px";
      cursorOutline.style.backgroundColor = "rgba(108, 99, 255, 0.1)";
    };
    
    const handleMouseOut = () => {
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
      cursorOutline.style.backgroundColor = "transparent";
    };
    
    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    
    // Add interactive hover effects
    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);
}
