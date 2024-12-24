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
    title: "hellpes_dev",
    description: "Russian Fullstack Developer",
    keywords:
        "Fullstack Developer, Russian Developer, Web Development, Programming, Frontend, Backend",
    authors: { name: "Алексей" }, // Укажите имя автора
    openGraph: {
        title: "hellpes_dev",
        description: "Russian Fullstack Developer",
        // url: "https://ваш-сайт.com", // Укажите URL вашего сайта
        siteName: "hellpes_dev",
        // images: [
        //     {
        //         url: "https://ваш-сайт.com/image.jpg", // Укажите изображение для Open Graph
        //         width: 800,
        //         height: 600,
        //         alt: "Описание изображения",
        //     },
        // ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "hellpes_dev",
        description: "Russian Fullstack Developer",
        // image: "https://ваш-сайт.com/image.jpg", // Укажите изображение для Twitter
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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-slate-950 text-neutral-100 text-md`}
            >
                {children}
            </body>
        </html>
    );
}
