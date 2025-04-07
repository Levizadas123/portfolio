import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/lib/motion";
import SkillBar from "@/components/ui/skill-bar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Skills data organized by category
const skillsData = {
  frontend: [
    { name: "React.js / Next.js", percentage: 95 },
    { name: "JavaScript / TypeScript", percentage: 90 },
    { name: "HTML5 / CSS3 / SASS", percentage: 98 },
    { name: "TailwindCSS / Bootstrap", percentage: 85 }
  ],
  backend: [
    { name: "Node.js / Express", percentage: 88 },
    { name: "MongoDB / PostgreSQL", percentage: 80 },
    { name: "GraphQL / REST API", percentage: 85 },
    { name: "AWS / Firebase", percentage: 75 }
  ],
  mobile: [
    { name: "React Native", percentage: 82 },
    { name: "Flutter", percentage: 70 },
    { name: "iOS / Swift", percentage: 65 },
    { name: "Android / Kotlin", percentage: 60 }
  ],
  design: [
    { name: "Figma / Adobe XD", percentage: 92 },
    { name: "Photoshop / Illustrator", percentage: 85 },
    { name: "UX Research", percentage: 78 },
    { name: "Design Systems", percentage: 88 }
  ]
};

// Stats data
const statsData = [
  { icon: "computer", value: "50+", label: "Projetos Completos" },
  { icon: "users", value: "30+", label: "Clientes Satisfeitos" },
  { icon: "clock", value: "5+", label: "Anos de Experiência" },
  { icon: "award", value: "15+", label: "Prêmios Conquistados" }
];

export default function SkillsSection() {
  const { animationTriggered, ref } = useScrollAnimation();
  
  return (
    <motion.section
      id="skills"
      ref={ref}
      className="py-20 lg:py-32 relative bg-gray-50"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <span className="text-primary font-mono text-sm tracking-wider">ESPECIALIDADES</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Minhas Habilidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As principais tecnologias e ferramentas que utilizo para criar soluções digitais inovadoras e eficientes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          <SkillCategory 
            title="Desenvolvimento Front-end" 
            icon="code" 
            skills={skillsData.frontend} 
            color="primary"
            animated={animationTriggered}
            delay={0.1}
          />
          
          <SkillCategory 
            title="Desenvolvimento Back-end" 
            icon="database" 
            skills={skillsData.backend} 
            color="secondary"
            animated={animationTriggered}
            delay={0.2}
          />
          
          <SkillCategory 
            title="Desenvolvimento Mobile" 
            icon="smartphone" 
            skills={skillsData.mobile} 
            color="accent"
            animated={animationTriggered}
            delay={0.3}
          />
          
          <SkillCategory 
            title="Design & UI/UX" 
            icon="pen-tool" 
            skills={skillsData.design} 
            color="primary"
            animated={animationTriggered}
            delay={0.4}
          />
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {statsData.map((stat, index) => (
            <Stat 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function SkillCategory({ 
  title, 
  icon, 
  skills, 
  color, 
  animated, 
  delay 
}: { 
  title: string; 
  icon: string; 
  skills: { name: string; percentage: number }[]; 
  color: string;
  animated: boolean;
  delay: number;
}) {
  return (
    <motion.div variants={fadeIn("up", "tween", delay, 1)}>
      <h3 className="font-heading text-xl font-bold mb-6 flex items-center">
        <span className={`w-8 h-8 bg-${color} rounded-full flex items-center justify-center text-white mr-2`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {getIconPath(icon)}
          </svg>
        </span>
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            color={color}
            animated={animated} 
            delay={index * 0.1 + delay}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Stat({ icon, value, label, index }: { icon: string; value: string; label: string; index: number }) {
  return (
    <motion.div 
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
      variants={fadeIn("up", "spring", index * 0.1 + 0.1, 0.75)}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.svg 
        className={`w-12 h-12 text-${index % 2 === 0 ? 'primary' : 'secondary'} mx-auto mb-4`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {getIconPath(icon)}
      </motion.svg>
      <motion.h4 
        className="font-heading font-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        {value}
      </motion.h4>
      <motion.p 
        className="text-gray-500 text-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

// Helper function to get SVG path based on icon name
function getIconPath(icon: string) {
  switch (icon) {
    case "code":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>;
    case "database":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>;
    case "smartphone":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>;
    case "pen-tool":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>;
    case "computer":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>;
    case "users":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>;
    case "clock":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>;
    case "award":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>;
    default:
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>;
  }
}
