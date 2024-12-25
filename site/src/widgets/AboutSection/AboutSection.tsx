"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//TODO Разобраться с отправкой писем и SMTP йоу

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000); // Сбросить статус через 3 секунды
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setError(
        error instanceof Error ? error.message : "Failed to send message"
      );
    }
  };

  return (
    <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <motion.input
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="bg-monokai-bg/30 border border-monokai-purple/20 rounded-lg px-4 py-2 focus:outline-none focus:border-monokai-purple"
        disabled={status === "loading"}
      />
      <motion.input
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="bg-monokai-bg/30 border border-monokai-purple/20 rounded-lg px-4 py-2 focus:outline-none focus:border-monokai-purple"
        disabled={status === "loading"}
      />
      <motion.textarea
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className="bg-monokai-bg/30 border border-monokai-purple/20 rounded-lg px-4 py-2 focus:outline-none focus:border-monokai-purple resize-none"
        disabled={status === "loading"}
      />
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        type="submit"
        className="bg-monokai-purple text-monokai-fg px-6 py-2 rounded-lg hover:bg-monokai-pink transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-green-400 text-center"
          >
            Message sent successfully!
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-center"
          >
            {error || "Failed to send message"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-1/3 flex flex-col gap-6 p-8 bg-monokai-bg/50 backdrop-blur-sm rounded-2xl">
        <h3 className=" select-none text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent">
          About Me
        </h3>
        <p className="text-monokai-comment leading-relaxed select-none">
          Passionate frontend developer with 3 years of experience in creating
          modern web applications. Specialized in React ecosystem and TypeScript
          development.
        </p>
        <div className="mt-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-monokai-purple text-monokai-fg rounded-xl font-semibold hover:bg-monokai-pink transition-colors duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-md mx-auto p-8 bg-monokai-bg rounded-2xl shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent">
                    Contact Me
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-monokai-comment hover:text-monokai-purple transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ContactForm />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;
