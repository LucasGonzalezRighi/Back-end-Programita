import nodemailer from "nodemailer";
import { MailPayload } from "./mail.types";

interface BasicEmailPayload {
    to: string;
    subject: string;
    html: string;
}
export const sendEmailBasic = async ({ to, subject, html}: BasicEmailPayload): Promise<void> {

    const transporter = nodemailer.createTransport({
        auth: {
            user,
            pass
        }
    });

    await transporter.sendMail({
        from: user,
        to,
        subject,
        html
    });

}

//notificacion a Gaston
export const invoiceNotificationUserToAdmin = async (payload: MailPayload): Promise<void> => {

}

//Respuesta de Gaston
export const invoiceNotificationAdminToUser = async (payload: MailPayload): Promise<void> => {

}