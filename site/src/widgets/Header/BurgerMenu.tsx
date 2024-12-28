import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const BurgerMenu = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1.5 p-2"
                aria-label="Меню"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block"
                />
                <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white block"
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 right-0 top-[calc(100%+4px)] bg-slate-900 p-4 rounded-b-2xl border border-slate-800"
                    >
                        <div className="flex flex-col gap-6">
                            <NavigationLinks />
                            <SocialLinks />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

BurgerMenu.displayName = "BurgerMenu";