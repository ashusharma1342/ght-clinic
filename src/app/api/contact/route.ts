import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const emailHTML = `
    <div style="font-family:Arial, sans-serif;background:#f8fafc;padding:30px">
      <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:30px">
        
        <h2 style="color:#0f172a;margin-bottom:10px">
          New Appointment Request
        </h2>

        <p style="color:#475569">
          A patient submitted a contact form on your clinic website.
        </p>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr/>

        <p style="font-size:14px;color:#64748b">
          GHT Clinic Website Lead
        </p>

      </div>
    </div>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"GHT Clinic Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New GHT Clinic Appointment Request",
      html: emailHTML,
    });

    await transporter.sendMail({
      from: `"GHT Clinic" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Appointment Request Received",
      html: `
  <div style="font-family:Arial;padding:30px">
    <h2>Thank you ${name}!</h2>
    <p>Your appointment request has been received.</p>
    <p>Our clinic team will contact you shortly.</p>

    <br/>

    <b>GHT Clinic</b><br/>
    📍 3, K-2, opp. ICICI Bank, DLF Phase 2, Sector 25, Gurugram, Sarhol, Haryana 122002<br/>
    📞 +91-7015486410
  </div>
  `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
}
