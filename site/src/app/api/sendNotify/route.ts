import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #A5C5E9; padding: 20px; background-color: #0f172a; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(174, 124, 255, 0.1); border: 1px solid #334155;">
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="background: linear-gradient(to right, #ae7cff, #c39fff); -webkit-background-clip: text; background-clip: text; color: #ae7cff; font-weight: bold; margin: 0; font-size: 24px;">
                    Добро пожаловать в нашу рассылку! 🎉
                </h1>
            </div>
            
            <div style="margin-bottom: 20px; color: #94a3b8;">
                <p>Привет! <span style="color: #ae7cff;">Спасибо за подписку</span> на нашу рассылку!</p>
                <p>Теперь вы будете получать обновления о:</p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="padding: 8px 0 8px 24px; position: relative;">
                        <span style="position: absolute; left: 0; color: #ae7cff;">→</span>
                        Новых проектах и разработках
                    </li>
                    <li style="padding: 8px 0 8px 24px; position: relative;">
                        <span style="position: absolute; left: 0; color: #ae7cff;">→</span>
                        Технических инсайтах и советах
                    </li>
                    <li style="padding: 8px 0 8px 24px; position: relative;">
                        <span style="position: absolute; left: 0; color: #ae7cff;">→</span>
                        Специальных анонсах
                    </li>
                </ul>
                <p>Следите за обновлениями!</p>
            </div>
            
            <div style="text-align: center; font-size: 0.9em; color: #64748b; border-top: 1px solid #334155; padding-top: 20px; margin-top: 20px;">
                <p style="margin: 0;">Если вы не подписывались на эту рассылку, пожалуйста, проигнорируйте это письмо.</p>
            </div>
        </div>
    </body>
</html>
`;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Отправляем подтверждение подписки
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Newsletter Subscription Confirmation",
      html: emailTemplate,
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
