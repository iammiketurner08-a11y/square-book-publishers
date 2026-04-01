import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 1. API ROUTES FIRST (Absolute priority)
  app.get("/api", (req, res) => {
    res.json({ message: "API is active" });
  });

  app.get("/api/debug", (req, res) => {
    res.json({ 
      status: "online", 
      env: process.env.NODE_ENV,
      gmailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_PASS),
      timestamp: new Date().toISOString(),
      url: req.url
    });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || "development" });
  });

  // Initialize Nodemailer transporter lazily
  let transporter: nodemailer.Transporter | null = null;
  const getTransporter = () => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;
    
    if (!user || !pass) {
      console.error("[Server] CRITICAL: GMAIL_USER or GMAIL_PASS is missing.");
      throw new Error("Gmail service is not configured. Please add GMAIL_USER and GMAIL_PASS (App Password) to Settings.");
    }
    
    if (!transporter) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: pass,
        },
      });
    }
    return transporter;
  };

  app.post(["/api/contact", "/api/contact/"], async (req, res) => {
    const { name, email, phone, genre, status, message } = req.body;
    console.log(`[API] POST /api/contact - Submission from: ${name}`);
    
    try {
      const mailTransporter = getTransporter();
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "query@squarebookpublishers.com",
        subject: `New Inquiry: ${name} - ${genre}`,
        text: `
New Inquiry Received

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Genre: ${genre}
Status: ${status}

Message:
${message || 'No message provided.'}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #f27d26; padding-bottom: 10px;">New Book Inquiry</h2>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Genre:</strong> ${genre}</p>
              <p><strong>Manuscript Status:</strong> ${status}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #eee; padding-top: 10px;">
              This inquiry was sent from the Square Book Publishers contact form.
            </p>
          </div>
        `,
      };

      const info = await mailTransporter.sendMail(mailOptions);
      console.log("[API] Email sent successfully:", info.messageId);
      
      res.json({ success: true, message: "Inquiry received!", data: { id: info.messageId } });
    } catch (err) {
      console.error("[Server Error]:", err);
      res.status(500).json({ success: false, message: err instanceof Error ? err.message : "Error sending email" });
    }
  });

  // 2. MIDDLEWARE & LOGGING
  app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
  });

  // Catch-all for API routes to prevent HTML fallback
  app.all("/api/*", (req, res) => {
    res.status(404).json({ success: false, message: `API route not found: ${req.method} ${req.url}` });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    console.log(`[Server] Serving static files from: ${distPath}`);
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
