"use client";
import { NAVIGATION_ITEMS } from "@/shared/constants/routes";
import { memo, useState } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";

const styleStaticAnimate = `
text-slate-400
relative 
w-fit
transition-all
duration-300
hover:text-white
hover:pl-6
after:content-['']
after:absolute
after:w-0
after:h-[1px]
after:bottom-0
after:left-0
after:bg-white
after:transition-all
after:duration-300
hover:after:w-full
before:content-['→']
before:absolute
before:left-0
before:opacity-0
before:transition-all
before:duration-300
hover:before:opacity-100
hover:before:left-1
`;

const styleStaticAnimateLink = `
relative
    w-fit
    text-slate-400
    transition-all
    duration-300
    hover:text-white
    hover:pl-6
    flex
    items-center
    gap-2
    after:content-['']
    after:absolute
    after:w-0
    after:h-[1px]
    after:bottom-0
    after:left-0
    after:bg-white
    after:transition-all
    after:duration-300
    hover:after:w-full
    before:content-['→']
    before:absolute
    before:left-0
    before:opacity-0
    before:transition-all
    before:duration-300
    hover:before:opacity-100
    hover:before:left-1`;


export const Footer = memo(() => {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setError(null);

        try {
            const response = await fetch("/api/sendNotify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to subscribe");
            }

            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            setStatus("error");
            setError(
                error instanceof Error ? error.message : "Failed to subscribe"
            );
        }
    };

    return (
        <footer className="mt-[8rem] border-t border-slate-800">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Левая колонка */}
                    <div className="flex flex-col gap-4">
                        <h3 className="select-none text-xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent cursor-default">
                            Alex
                        </h3>
                        <p className="select-none text-slate-400 max-w-xs cursor-default">
                            Frontend developer passionate about creating beautiful and
                            functional web applications
                        </p>
                        <SocialLinks />
                    </div>

                    {/* Центральная колонка */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-slate-200 cursor-default">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {NAVIGATION_ITEMS.map(item => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={styleStaticAnimate}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Правая колонка */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-slate-200 cursor-default">
                            Contact
                        </h3>
                        <div className="flex flex-col h-full justify-between text-slate-400">
                            <div className="flex flex-col gap-2">

                                <a
                                    href="mailto:hellpes.developer@gmail.com"
                                    className={styleStaticAnimateLink}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    hellpes.developer@gmail.com
                                </a>

                                <a
                                    href="https://github.com/hellpes666"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styleStaticAnimateLink}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>

                            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="flex-1 p-2.5 rounded-lg bg-slate-800/50 
                                    text-slate-300 flex-2 border border-slate-700
                                    placeholder:text-slate-500
                                    focus:outline-none focus:border-[#ae7cff]
                                    focus:ring-2 focus:ring-[#ae7cff]/20
                                    transition-all duration-300
                                    disabled:opacity-50"
                                        disabled={status === "loading"}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="flex-2 p-2.5 rounded-lg font-medium
                                    bg-gradient-to-r from-[#ae7cff] to-[#c39fff]
                                    text-white shadow-lg shadow-[#ae7cff]/20
                                    hover:shadow-[#ae7cff]/40 hover:scale-[1.02]
                                    active:scale-[0.98]
                                    transition-all duration-300
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    relative overflow-hidden"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Subscribing...
                                            </span>
                                        ) : "Subscribe"}
                                    </button>
                                </div>
                                {status === "success" && (
                                    <p className="text-green-400 text-sm animate-fade-in">
                                        ✓ Successfully subscribed!
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-400 text-sm animate-fade-in">
                                        ✕ {error || "Something went wrong"}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
                    <p
                        className="
    cursor-default 
    relative 
    inline-block
    font-bold
    tracking-wider
    hover:animate-glitch-text
    before:content-['©_2024_Alex._All_rights_reserved.']
    before:absolute 
    before:w-full
    before:h-full
    before:left-0
    before:top-0
    before:text-[#ff0000]
    before:opacity-0
    hover:before:opacity-[0.9]
    hover:before:animate-glitch-1
    after:content-['©_2024_Alex._All_rights_reserved.']
    after:absolute 
    after:w-full
    after:h-full
    after:left-0
    after:top-0
    after:text-[#0000ff]
    after:opacity-0
    hover:after:opacity-[0.9]
    hover:after:animate-glitch-2
    [text-shadow:3px_3px_0_#ff000060,_-3px_-3px_0_#0000ff60]
    hover:[animation:glitch-skew_0.2s_infinite_linear_alternate-reverse]
  "
                    >
                        © {new Date().getFullYear()} Alex. All rights reserved.
                    </p>
                </div>
                {" "}
            </div>
        </footer>
    );
});
Footer.displayName = "Footer";