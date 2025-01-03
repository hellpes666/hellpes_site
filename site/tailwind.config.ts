import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        monokai: {
          bg: "#2D2A2E",
          fg: "#FCFCFA",
          blue: "#78DCE8",
          green: "#A9DC76",
          orange: "#FC9867",
          pink: "#FF6188",
          purple: "#AB9DF2",
          yellow: "#FFD866",
          comment: "#727072",
        },
        primary: "#A5C5E9",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        scroll: "scroll 20s linear infinite",
        "scroll-reverse": "scroll-reverse 20s linear infinite",
        "type-line": "type-line 0.5s ease-out forwards",
        "fade-in": "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "type-line": {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%", borderColor: "transparent" },
        },
        blink: {
          "0%, 100%": { borderColor: "#d796f2" },
          "50%": { borderColor: "transparent" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
