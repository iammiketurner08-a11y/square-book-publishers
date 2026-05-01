import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable CORS for all origins (important for cross-domain form submissions)
  app.use(cors());
  app.use(express.json());

  // 1. API ROUTES FIRST (Absolute priority)
  app.get("/api", (req, res) => {
    res.json({ message: "API is active", origin: req.get('origin') || 'unknown' });
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

  // Removed Nodemailer logic as forms are now handled via Firebase Firestore directly
  // from the client side.

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
