import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface TimelineItemProps {
  item: {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    color: string;
    icon: string;
    inverse: boolean;
  };
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div 
      className="mb-12 md:mb-20"
      variants={fadeIn("up", "tween", index * 0.1 + 0.2, 1)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 md:pr-12 ${item.inverse ? "md:order-1" : ""} md:text-${item.inverse ? "left" : "right"} mb-6 md:mb-0`}>
          {!item.inverse || window.innerWidth < 768 ? (
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <h3 className="font-heading font-bold text-xl mb-1">{item.title}</h3>
              <p className={`text-${item.color} font-medium mb-2`}>{item.company}</p>
              <p className="text-gray-500 text-sm mb-4">{item.period}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ) : <div className="md:hidden"></div>}
        </div>
        
        <motion.div 
          className={`w-10 h-10 rounded-full bg-${item.color} flex items-center justify-center text-white z-10 ${item.inverse ? "md:order-2" : ""}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {getIconPath(item.icon)}
          </svg>
        </motion.div>
        
        <div className={`md:w-1/2 md:pl-12 ${item.inverse ? "md:order-3" : ""} md:text-${item.inverse ? "left" : "right"}`}>
          {item.inverse && window.innerWidth >= 768 ? (
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <h3 className="font-heading font-bold text-xl mb-1">{item.title}</h3>
              <p className={`text-${item.color} font-medium mb-2`}>{item.company}</p>
              <p className="text-gray-500 text-sm mb-4">{item.period}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ) : <div className="md:hidden"></div>}
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to get SVG path based on icon name
function getIconPath(icon: string) {
  switch (icon) {
    case "briefcase":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>;
    case "monitor":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>;
    case "pen-tool":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>;
    case "graduation-cap":
      return (
        <>
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </>
      );
    default:
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>;
  }
}
