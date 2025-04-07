import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactEmail } from "./email";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório e deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto é obrigatório e deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem é obrigatória e deve ter pelo menos 10 caracteres")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = contactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: result.error.format() 
        });
      }
      
      const { name, email, subject, message } = result.data;
      
      // Send email
      await sendContactEmail({
        name,
        email,
        subject,
        message
      });
      
      return res.status(200).json({ 
        success: true, 
        message: "Mensagem enviada com sucesso" 
      });
    } catch (error) {
      console.error("Error sending contact email:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Erro ao enviar mensagem, tente novamente mais tarde" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
