import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex | Frontend Developer",
  description: "Профессиональный Frontend разработчик с опытом создания современных веб-приложений. Специализируюсь на React, TypeScript и Next.js",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Development",
    "Frontend разработчик",
    "Веб-разработка",
    "Разработка сайтов"
  ].join(", "),
  authors: [{ name: "Алексей", url: "https://github.com/hellpes" }],
  creator: "Алексей",
  publisher: "Алексей",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://hellpes.dev",
    siteName: "Alex | Frontend Developer",
    title: "Alex | Frontend Developer Portfolio",
    description: "Профессиональный Frontend разработчик. Создаю современные веб-приложения используя React, TypeScript и Next.js",
    images: [
      {
        url: "/og-image.png", // Добавьте свое OG изображение
        width: 1200,
        height: 630,
        alt: "Alex - Frontend Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex | Frontend Developer",
    description: "Профессиональный Frontend разработчик",
    creator: "@your_twitter", // Добавьте свой Twitter
    images: ["/og-image.png"], // То же изображение, что и для OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ваш-код-верификации", // Добавьте код верификации Google Search Console
    yandex: "ваш-код-верификации", // Добавьте код верификации Яндекс.Вебмастер
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
                <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/main.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0f172a" />
                
                {/* Дополнительные мета-теги для SEO */}
                <link rel="canonical" href="https://hellpes.dev" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-slate-950 text-neutral-100 text-md`}
            >
                {children}
            </body>
        </html>
    );
}
