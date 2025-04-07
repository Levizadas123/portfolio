import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  url: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="project-card rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-400 hover:shadow-xl"
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        boxShadow: "0 20px 25px -5px rgba(108, 99, 255, 0.2), 0 10px 10px -5px rgba(108, 99, 255, 0.1)"
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className={`absolute top-4 right-4 bg-${getCategoryColor(project.category)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {getCategoryName(project.category)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={project.url}
          className="text-primary font-medium flex items-center hover:underline"
          whileHover={{ x: 5 }}
        >
          Ver Detalhes
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "web":
      return "primary";
    case "design":
      return "secondary";
    case "mobile":
      return "accent";
    default:
      return "primary";
  }
}

function getCategoryName(category: string): string {
  switch (category) {
    case "web":
      return "Web";
    case "design":
      return "Design";
    case "mobile":
      return "Mobile";
    default:
      return category;
  }
}
