import { SMTPClient } from 'emailjs';

export async function POST(req) {
    try {
        const client = new SMTPClient({
            user: process.env.API_EMAIL,
            password: process.env.API_EMAIL_PASSWORD,
            host: 'smtp.gmail.com',
            ssl: true
        })

        const { name, email, message } = await req.json()

        const text = `Nome: ${name}\n` + `Email: ${email}\n` + `Mensagem: ${message}.` 

        client.send({
            subject: `Nova mensagem de ${name} - Estagios Gov`,
            text: text,
            from: "creaprodv@gmail.com",
            to: process.env.API_EMAIL_TO,
            attachments: [
                { data: text, alternative: true }
            ]
        })

        return Response.json({ status: "success" })
    } catch (e) {
        return Response.json({ status: "error" }, { status: 500 })
    }
}
