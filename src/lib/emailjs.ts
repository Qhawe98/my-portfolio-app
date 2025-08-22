import type { EmailModel } from "../models/emailModel"
import emailjs from "@emailjs/browser"

const sendCustomEmail = async (formData: EmailModel): Promise<{ status: number }>  => {

    const catOffset = 2;

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const catTime = new Date(utc + catOffset * 3600000);

    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            from_name: formData.nameFrom,
            name: formData.nameFrom,
            from_email: formData.emailFrom,
            subject: formData.subject,
            message: formData.message,
            time: catTime.toLocaleString("en-ZA"), // Format to South African locale
        }
    )
        .then(
            (response) => {
                return { status: response?.status }
            })
        .catch((error) => {
            console.error("Error sending email:", error)
        });

    return { status: 200 } 
}

export default sendCustomEmail
