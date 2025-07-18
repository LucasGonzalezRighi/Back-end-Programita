import express, { Request, Response, NextFunction } from "express";
import mailRoutes from "./mail/mail.routes";

const app = express();

// Nombre identificador del servidor (opcional)
app.set("name", "API");

// Middleware para parsear JSON
app.use(express.json());

// Aquí irían tus rutas
app.use("/api/mail", mailRoutes);

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[❌ ERROR] ${status}: ${message}`);

  res.status(status).json({ error: message });
});

export default app;