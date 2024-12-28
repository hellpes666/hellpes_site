import { COMMON_STYLES } from "@/shared/constants/commonStyles";
import { NAVIGATION_ITEMS } from "@/shared/constants/routes";
import { motion } from "framer-motion";
import { memo } from "react";
import { useActiveSection } from "../Header/useActiveSection";

export const NavigationLinks = memo(() => {
    const activeSection = useActiveSection();
    console.log('Active section:', activeSection); 


    return (
        <div className="flex md:flex-row flex-col items-center gap-6">
            {NAVIGATION_ITEMS.map(item => {
                const isActive = activeSection === item.toLowerCase();

                return (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={COMMON_STYLES.navLink}
                        data-active={isActive}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        }}
                    >
                        {item}
                    </motion.a>
                );
            })}
        </div>
    );
});

NavigationLinks.displayName = "NavigationLinks";