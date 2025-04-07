import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email configuration
const getTransporter = () => {
  // For production, you would use actual SMTP settings
  // This is a development-friendly setup
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "ethereal.user@ethereal.email",
      pass: process.env.SMTP_PASSWORD || "ethereal_pass",
    },
  });
};

export async function sendContactEmail(data: ContactForm): Promise<void> {
  const { name, email, subject, message } = data;
  
  const transporter = getTransporter();
  
  // Format email content
  const mailOptions = {
    from: `"Portfolio Website" <${process.env.SMTP_FROM || "noreply@example.com"}>`,
    to: process.env.CONTACT_EMAIL || "your-email@example.com",
    subject: `Novo contato: ${subject}`,
    text: `
      Nome: ${name}
      Email: ${email}
      
      Mensagem:
      ${message}
    `,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <h3>Mensagem:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };
  
  // Send the email
  await transporter.sendMail(mailOptions);
}
