import { memo } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import { BurgerMenu } from "./BurgerMenu";

export const Header = memo(() => (
    <header className="border border-solid border-slate-800 rounded-b-2xl px-1 pb-1 animate-border sticky top-0 z-50">
        <nav className="bg-slate-900 py-6 px-4 flex items-center justify-between rounded-b-2xl">
            <strong className="animate-shimmer bg-gradient-to-r from-white via-[#A5C5E9] to-white bg-clip-text text-transparent bg-[length:200%_100%] font-bold select-none">
                developer.
            </strong>
            <div className="hidden md:block">
                <NavigationLinks />
            </div>
            <div className="hidden md:block">
                <SocialLinks />
            </div>
            <BurgerMenu />
        </nav>
    </header>
));
Header.displayName = "Header";