import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  // Добавим логирование для отладки
  console.log("Checking environment variables:", {
    user: process.env.GMAIL_USER ? "exists" : "missing",
    pass: process.env.GMAIL_PASSWORD ? "exists" : "missing",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail", // Используем предустановленный сервис вместо ручной настройки
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const { name, email, message } = await request.json();

    // Логируем данные запроса
    console.log("Received form data:", { name, email, message });

    // Проверяем соединение
    await transporter.verify();
    console.log("SMTP connection verified");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // Отправляем письмо и ждем результата
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    // Подробное логирование ошибки
    console.error("Email sending failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
