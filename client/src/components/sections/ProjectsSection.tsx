import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import ProjectCard from "@/components/ui/project-card";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard completo para gerenciamento de loja online com análise de dados e painel administrativo.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    url: "#",
  },
  {
    id: 2,
    title: "Fitness App UI/UX",
    description: "Design de aplicativo de fitness com foco em experiência do usuário e monitoramento de atividades.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    category: "design",
    tags: ["Figma", "Adobe XD", "Protótipo"],
    url: "#",
  },
  {
    id: 3,
    title: "Delivery Mobile App",
    description: "Aplicativo móvel para entrega de comida com rastreamento em tempo real e sistema de pagamento.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "mobile",
    tags: ["React Native", "Firebase", "Google Maps API"],
    url: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Website de portfólio responsivo com animações e transições suaves.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    category: "web",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    url: "#",
  },
  {
    id: 5,
    title: "Brand Identity System",
    description: "Sistema completo de identidade visual para startup de tecnologia.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "design",
    tags: ["Branding", "Typography", "Color Theory"],
    url: "#",
  },
  {
    id: 6,
    title: "Healthcare Mobile App",
    description: "Aplicativo de saúde para monitoramento de sintomas e consultas médicas virtuais.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Health API"],
    url: "#",
  }
];

type ProjectCategory = "all" | "web" | "design" | "mobile";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <motion.section
      id="projects"
      className="py-20 lg:py-32 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="diagonal-section bg-dark py-20 lg:py-32 relative" style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)" }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            <span className="text-accent font-mono text-sm tracking-wider">PORTFÓLIO</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-6">Meus Projetos</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Confira alguns dos meus trabalhos recentes em desenvolvimento web, design de interfaces e criação de experiências digitais inovadoras.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <FilterButton 
              active={activeFilter === "all"} 
              onClick={() => setActiveFilter("all")}
            >
              Todos
            </FilterButton>
            <FilterButton 
              active={activeFilter === "web"} 
              onClick={() => setActiveFilter("web")}
            >
              Web
            </FilterButton>
            <FilterButton 
              active={activeFilter === "design"} 
              onClick={() => setActiveFilter("design")}
            >
              Design
            </FilterButton>
            <FilterButton 
              active={activeFilter === "mobile"} 
              onClick={() => setActiveFilter("mobile")}
            >
              Mobile
            </FilterButton>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <motion.a
              href="#"
              className="px-8 py-3 bg-accent text-white rounded-full font-medium inline-flex items-center hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(78, 205, 196, 0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Ver Todos os Projetos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
        active 
          ? "bg-primary text-white" 
          : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
      }`}
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </motion.button>
  );
}
