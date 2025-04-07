import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/motion";
import { PARTICLES_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  const [particles, setParticles] = useState<{ id: number; x: string; y: string; size: number; color: string; duration: number; delay: number }[]>([]);
  
  useEffect(() => {
    // Create particles
    const particlesArray = Array.from({ length: 20 }, (_, i) => {
      const colors = ["#6C63FF", "#FF6B6B", "#4ECDC4"];
      return {
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
      };
    });
    
    setParticles(particlesArray);
  }, []);
  
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Particles */}
      <div className="particles-container absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: 0.6
            }}
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary opacity-20 blur-[60px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-secondary opacity-20 blur-[60px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Olá, eu sou <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Rafael Silva</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light">
              Desenvolvedor Full Stack & Designer de Experiência
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Entre em Contato
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 bg-accent rounded-full absolute -z-10 -top-6 -left-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Developer portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl z-10 shadow-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-sm">Disponível para projetos</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
