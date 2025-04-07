import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import TimelineItem from "@/components/ui/timeline-item";

// Experience data
const experienceData = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Tech Solutions Inc.",
    period: "Janeiro 2021 - Presente",
    description: "Liderei o desenvolvimento de vários projetos de grande escala, incluindo e-commerce e aplicações SaaS, supervisionando equipes de até 8 desenvolvedores.",
    color: "primary",
    icon: "briefcase",
    inverse: false
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateLab",
    period: "Março 2018 - Dezembro 2020",
    description: "Desenvolvi aplicações web e móveis utilizando React, Node.js e React Native. Trabalhei diretamente com clientes para entregar soluções personalizadas.",
    color: "secondary",
    icon: "monitor",
    inverse: true
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studios",
    period: "Junho 2016 - Fevereiro 2018",
    description: "Criei interfaces de usuário intuitivas e atraentes para aplicativos e websites. Conduzi pesquisas com usuários e desenvolvi wireframes e protótipos.",
    color: "accent",
    icon: "pen-tool",
    inverse: false
  },
  {
    id: 4,
    title: "Bacharelado em Ciência da Computação",
    company: "Universidade Federal",
    period: "2012 - 2016",
    description: "Formado com honras. Especializei-me em desenvolvimento de software e design de interfaces, com foco em experiência do usuário e acessibilidade.",
    color: "primary",
    icon: "graduation-cap",
    inverse: true
  }
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-20 lg:py-32 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <span className="text-secondary font-mono text-sm tracking-wider">TRAJETÓRIA</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Minha Experiência</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira minha jornada profissional e acadêmica na área de desenvolvimento e design.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {experienceData.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <motion.a
            href="#"
            className="px-8 py-3 bg-secondary text-white rounded-full font-medium inline-flex items-center hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 107, 107, 0.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Download CV Completo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
