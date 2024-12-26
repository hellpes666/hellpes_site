"use client";

import { motion } from "framer-motion";
import { memo } from "react";

export const ProjectsShowcase = memo(() => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm"
    >
        <h3 className="col-span-full text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent mb-4">
            Немножко проектов
        </h3>

        {[1, 2, 3].map((_, index) => (
            <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                className="relative group overflow-hidden rounded-xl bg-slate-700/50 p-4"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-monokai-purple/20 to-monokai-fg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-xl font-semibold mb-2">Проект {index + 1}</h4>
                <p className="text-slate-400 mb-4">
                    ЙОУУУУУУУУУУУУУУУУУУУУУУУУ
                </p>
                <div className="flex gap-2">
                    {["React", "TypeScript", "Tailwind"].map(tech => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-slate-600/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}
    </motion.div>
));
ProjectsShowcase.displayName = "ProjectsShowcase";
