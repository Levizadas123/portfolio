import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {
  showOnMobile?: boolean;
}

export default function Cursor({ showOnMobile = false }: CursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    
    const mouseEnterInteractive = () => setCursorVariant("interactive");
    const mouseLeaveInteractive = () => setCursorVariant("default");
    
    interactiveElements.forEach(element => {
      element.addEventListener("mouseenter", mouseEnterInteractive);
      element.addEventListener("mouseleave", mouseLeaveInteractive);
    });
    
    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnterInteractive);
        element.removeEventListener("mouseleave", mouseLeaveInteractive);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    interactive: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: "rgba(108, 99, 255, 0.6)",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };
  
  const outlineVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: "spring",
        mass: 0.8,
      },
    },
    interactive: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: "rgba(108, 99, 255, 0.1)",
      transition: {
        type: "spring",
        mass: 0.8,
      },
    },
  };
  
  return (
    <>
      <motion.div
        className={`cursor-dot fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-50 pointer-events-none ${
          showOnMobile ? "" : "hidden md:block"
        }`}
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className={`cursor-outline fixed top-0 left-0 w-10 h-10 border-2 border-primary border-opacity-50 rounded-full z-50 pointer-events-none ${
          showOnMobile ? "" : "hidden md:block"
        }`}
        variants={outlineVariants}
        animate={cursorVariant}
      />
    </>
  );
}
