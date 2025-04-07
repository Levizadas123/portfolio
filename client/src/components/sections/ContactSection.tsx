import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Initialize form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      
      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entrarei em contato em breve.",
          variant: "default",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <motion.section
      id="contact"
      className="py-20 lg:py-32 relative bg-dark text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary opacity-20 blur-[60px]"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-secondary opacity-20 blur-[60px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <span className="text-accent font-mono text-sm tracking-wider">VAMOS CONVERSAR</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Entre em Contato</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tem um projeto interessante em mente ou está buscando um desenvolvedor para sua equipe? Vamos trabalhar juntos para criar algo incrível!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Seu Nome</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Seu Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Assunto</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5} 
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full px-8 py-6 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <ContactInfo 
              icon="mail" 
              title="Email" 
              description="Para propostas de trabalho:" 
              contact="contato@seudominio.com"
              color="primary"
            />
            
            <ContactInfo 
              icon="phone" 
              title="Telefone" 
              description="Disponível em horário comercial:" 
              contact="+55 (11) 99999-9999"
              color="secondary"
            />
            
            <ContactInfo 
              icon="map-pin" 
              title="Localização" 
              description="Baseado em:" 
              contact="São Paulo, Brasil"
              color="accent"
              extraInfo="Disponível para trabalhos remotos globais"
            />
            
            <div className="pt-8">
              <h3 className="text-xl font-heading font-bold mb-4">Me siga nas redes</h3>
              <div className="flex gap-4">
                <SocialIcon url="#" platform="linkedin" />
                <SocialIcon url="#" platform="instagram" />
                <SocialIcon url="#" platform="twitter" />
                <SocialIcon url="#" platform="github" />
                <SocialIcon url="#" platform="dribbble" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

interface ContactInfoProps {
  icon: string;
  title: string;
  description: string;
  contact: string;
  color: string;
  extraInfo?: string;
}

function ContactInfo({ icon, title, description, contact, color, extraInfo }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-full bg-${color} bg-opacity-20 flex items-center justify-center shrink-0`}>
        <svg className={`w-6 h-6 text-${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {getIconPath(icon)}
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <a href={getLinkHref(icon, contact)} className="text-accent hover:underline">
          {contact}
        </a>
        {extraInfo && <p className="text-gray-300 mt-2">{extraInfo}</p>}
      </div>
    </div>
  );
}

function SocialIcon({ url, platform }: { url: string; platform: string }) {
  return (
    <motion.a
      href={url}
      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
      whileHover={{ y: -5, backgroundColor: "#6C63FF" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      aria-label={`Follow on ${platform}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {getSocialIconPath(platform)}
      </svg>
    </motion.a>
  );
}

// Helper function to get appropriate href based on contact type
function getLinkHref(icon: string, contact: string): string {
  switch (icon) {
    case "mail":
      return `mailto:${contact}`;
    case "phone":
      return `tel:${contact.replace(/\D/g, "")}`;
    default:
      return "#";
  }
}

// Helper function to get SVG path based on icon name
function getIconPath(icon: string) {
  switch (icon) {
    case "mail":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>;
    case "phone":
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>;
    case "map-pin":
      return (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </>
      );
    default:
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>;
  }
}

// Helper function to get social icon SVG path
function getSocialIconPath(platform: string) {
  switch (platform) {
    case "linkedin":
      return <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>;
    case "instagram":
      return <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>;
    case "twitter":
      return <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>;
    case "github":
      return <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>;
    case "dribbble":
      return <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>;
    default:
      return <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>;
  }
}
