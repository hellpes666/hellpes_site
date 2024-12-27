import { memo } from "react";

export const ContactForm = memo(() => (
    <div className="w-1/3 flex flex-col gap-6 p-8 bg-monokai-bg/50 backdrop-blur-sm rounded-2xl">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent">
            Contact Me
        </h3>
    </div>
));
ContactForm.displayName = "ContactForm";