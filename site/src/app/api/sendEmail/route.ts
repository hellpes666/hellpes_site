import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
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
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                background-color: #2D2A2E;
                color: #FCFCFA;
                margin: 0;
                padding: 20px;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: rgba(45, 42, 46, 0.8);
                border-radius: 12px;
                padding: 32px;
                border: 1px solid rgba(171, 157, 242, 0.2);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                margin-bottom: 32px;
                padding-bottom: 16px;
                border-bottom: 1px solid rgba(171, 157, 242, 0.2);
              }
              .header h1 {
                color: #AB9DF2;
                font-size: 24px;
                margin: 0;
                background: linear-gradient(135deg, #FCFCFA, #AB9DF2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .content {
                background-color: rgba(45, 42, 46, 0.5);
                border-radius: 8px;
                padding: 24px;
                margin-bottom: 24px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
              }
              .field {
                margin-bottom: 20px;
                transition: transform 0.2s ease;
              }
              .field:hover {
                transform: translateX(4px);
              }
              .label {
                color: #78DCE8;
                font-weight: 600;
                margin-bottom: 8px;
                display: block;
                letter-spacing: 0.5px;
              }
              .value {
                color: #A9DC76;
                background-color: rgba(45, 42, 46, 0.3);
                padding: 12px 16px;
                border-radius: 6px;
                border: 1px solid rgba(171, 157, 242, 0.1);
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
                word-break: break-word;
              }
              .message {
                white-space: pre-wrap;
                line-height: 1.8;
              }
              .footer {
                text-align: center;
                color: #727072;
                font-size: 14px;
                margin-top: 32px;
                padding-top: 16px;
                border-top: 1px solid rgba(171, 157, 242, 0.2);
              }
              .timestamp {
                color: #FC9867;
                font-size: 12px;
                text-align: right;
                margin-top: 16px;
                font-style: italic;
              }
              @media (max-width: 600px) {
                body {
                  padding: 12px;
                }
                .container {
                  padding: 20px;
                }
                .content {
                  padding: 16px;
                }
                .header h1 {
                  font-size: 20px;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ New Contact Form Message ✨</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">👤 From:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">💌 Message:</div>
                  <div class="value message">${message}</div>
                </div>

                <div class="timestamp">
                  🕒 Received at: ${new Date().toLocaleString("ru-RU", {
                    dateStyle: "full",
                    timeStyle: "medium",
                  })}
                </div>
              </div>
              
              <div class="footer">
                Это сообщение было отправлено через контактную форму вашего портфолио
              </div>
            </div>
          </body>
        </html>
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
