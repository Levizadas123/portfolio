import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-dark py-8 text-white border-t border-gray-800"
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PORTFOLIO
            </a>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {currentYear} Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ por Rafael Silva</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
