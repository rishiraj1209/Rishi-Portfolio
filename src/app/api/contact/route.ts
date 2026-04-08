import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    try {
        const {name,phone, email, message} = await req.json();

        const data = await resend.emails.send({
            from:"onboarding@resend.dev",
            to:"rishiraj825268@gmail.com",
            subject:`New Contact Form message from ${name}`,
            html:`
                <h3>New Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone No.</strong> ${phone}</p>
                <p><strong>Message:</strong>${message}</p>
            `,
        });

        return Response.json({success:true, data});
    } catch (error) {
        return Response.json({success:false, error});
    }
}