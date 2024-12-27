import { COMMON_STYLES } from "@/shared/constants/commonStyles";
import { NAVIGATION_ITEMS } from "@/shared/constants/routes";
import { motion } from "framer-motion";
import { memo } from "react";

export const NavigationLinks = memo(() => (
    <div className="flex items-center gap-6">
        {NAVIGATION_ITEMS.map(item => (
            <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={COMMON_STYLES.navLink}
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
        ))}
    </div>
));
NavigationLinks.displayName = "NavigationLinks";
