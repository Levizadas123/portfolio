import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  animated: boolean;
  delay: number;
}

export default function SkillBar({ name, percentage, color, animated, delay }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`bg-${color} rounded-full h-2`}
          initial={{ width: "0%" }}
          animate={{ width: animated ? `${percentage}%` : "0%" }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut", 
            delay 
          }}
        ></motion.div>
      </div>
    </div>
  );
}
