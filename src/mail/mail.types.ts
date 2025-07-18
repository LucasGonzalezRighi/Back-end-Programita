//Enumeración de servicios
export enum MailServiceType {
  OUTLOOK = "outlook",
  GMAIL = "gmail",
  YAHOO = "yahoo",
}
	
//Estructura de objeto
export interface MailPayload {
  to: string;
  subject: string;
  html: string;
  service: MailServiceType;
  user: string;
  pass: string;
}