import { Request, Response } from "express";
import { envioEmail } from "./mail.service";
import { MailServiceType} from "./mail.types";

export async function handleEnviomail(req: Request, res: Response) {
  const requiredFields = ["to", "subject", "html", "service", "user", "pass"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  const { to, subject, html, service, user, pass } = req.body;

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: "Faltan completar datos obligatorios",
      missing: missingFields,
    });
  }


  // Validar que el servicio esté soportado
  const serviciosDisponibles = Object.values(MailServiceType);
  if (!serviciosDisponibles.includes(service)) {
    return res.status(400).json({
      error: `Servicio de correo no soportado: '${service}'`,
      validos: serviciosDisponibles,
    });
  }

  try {
    await envioEmail({ to, subject, html, service, user, pass });
    return res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error: any) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({
      error: "Error interno al enviar el correo",
      detalle: error.message || "No se pudo enviar el mensaje",
    });
  }
}