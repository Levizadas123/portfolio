import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/motion";
import { useParallax } from "@/hooks/use-parallax";

export default function AboutSection() {
  const { handleMouseMove, style } = useParallax();
  
  return (
    <motion.section
      id="about"
      className="py-20 lg:py-32 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-accent opacity-20 blur-[60px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 relative"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div className="relative">
              <motion.div 
                className="w-72 h-72 md:w-96 md:h-96 bg-primary rounded-3xl absolute -z-10 -top-6 -left-6"
                variants={zoomIn(0.2, 1)}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Working on projects"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl z-10 shadow-xl transform rotate-3"
                style={style}
              />
            </div>
            
            <motion.div 
              className="hidden md:block absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl"
              variants={fadeIn("up", "tween", 0.4, 1)}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experiência</p>
                  <p className="font-heading font-bold text-xl">+5 Anos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="lg:w-1/2"
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <span className="text-primary font-mono text-sm tracking-wider">SOBRE MIM</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-6">Transformando ideias em experiências digitais notáveis</h2>
            
            <p className="text-gray-600 mb-4 text-lg">
              Sou um desenvolvedor full stack e designer UX/UI apaixonado por criar soluções digitais inovadoras que combinam estética e funcionalidade.
            </p>
            
            <p className="text-gray-600 mb-6">
              Com mais de 5 anos de experiência, já trabalhei em diversos projetos para startups e empresas estabelecidas, ajudando a traduzir visões de negócio em realidade digital. Meu objetivo é sempre criar experiências memoráveis e interfaces intuitivas que resolvam problemas reais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <AboutFeature title="Desenvolvimento Web" subtitle="Front-end e Back-end" />
              <AboutFeature title="UI/UX Design" subtitle="Interface e Experiência" />
              <AboutFeature title="Desenvolvimento Mobile" subtitle="iOS e Android" />
              <AboutFeature title="Consultoria" subtitle="Estratégia Digital" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Download CV
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
        </div>
      </div>
    </motion.section>
  );
}

function AboutFeature({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div 
      className="flex items-start gap-3"
      whileHover={{ x: 5 }}
    >
      <div className="text-primary mt-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </motion.div>
  );
}
