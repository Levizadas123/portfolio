import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion, useScroll, useSpring } from "framer-motion";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX }}
    />
  );
}

createRoot(document.getElementById("root")!).render(
  <>
    <ProgressBar />
    <App />
  </>
);
