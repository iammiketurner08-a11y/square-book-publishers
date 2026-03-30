import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend lazily
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY environment variable is required");
      }
      resend = new Resend(apiKey);
    }
    return resend;
  };

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, genre, status, message } = req.body;
    
    console.log("Form Submission Received:", { name, email, phone, genre, status, message });
    
    try {
      const resendClient = getResend();
      
      const { data, error } = await resendClient.emails.send({
        from: "Square Book Publishers <onboarding@resend.dev>", // Default Resend domain for testing
        to: ["query@squarebookpublishers.com"],
        subject: `New Inquiry: ${name} - ${genre}`,
        html: `
          <h2>New Book Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Genre:</strong> ${genre}</p>
          <p><strong>Manuscript Status:</strong> ${status}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided.'}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, message: "Failed to send email notification." });
      }

      res.json({ success: true, message: "Inquiry received successfully!", data });
    } catch (err) {
      console.error("Server Error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      res.status(500).json({ success: false, message: errorMessage });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
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
