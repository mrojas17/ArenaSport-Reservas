import nodemailer from "nodemailer";
import { PASSWORD_EMAIL, USERNAME_EMAIL } from "../config/envs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: USERNAME_EMAIL, 
    pass: PASSWORD_EMAIL, 
  },
});

export const sendConfirmationEmail = async (to: string, appointment: any) => {
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to,
    subject: "Confirmación de Reserva - ArenaSport Club",
    html: `
      <h2>¡Tu turno ha sido reservado con éxito!</h2>
      <p><strong>Asunto:</strong> ${appointment.asunto}</p>
      <p><strong>Fecha:</strong> ${appointment.date}</p>
      <p><strong>Hora:</strong> ${appointment.time}</p>
      <p><strong>Estado:</strong> ${appointment.status}</p>
      <br>
      <p>¡Gracias por reservar en ArenaSport Club!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Correo de confirmación enviado a:", to);
  } catch (error) {
    console.error("❌ Error enviando el correo:", error);
    throw new Error("No se pudo enviar el correo de confirmación.");
  }
};
