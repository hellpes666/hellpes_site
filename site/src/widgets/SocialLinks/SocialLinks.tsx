import { COMMON_STYLES } from "@/shared/constants/commonStyles";
import { SOCIAL_LINKS } from "@/shared/constants/routes";
import { memo } from "react";
import Image from "next/image";

export const SocialLinks = memo(() => (
    <div className="flex items-center gap-2">
        {SOCIAL_LINKS.map(({ href, title, img }) => (
            <a
                key={title}
                href={href}
                aria-label={title}
                className={COMMON_STYLES.socialLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={img}
                    alt={title}
                    width={20}
                    height={20}
                    quality={100}
                />
            </a>
        ))}
    </div>
));
SocialLinks.displayName = "SocialLinks";