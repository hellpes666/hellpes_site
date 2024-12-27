import { HeroCard } from "../HeroCard/HeroCard";
import { memo } from "react";
export const HeroSection = memo(() => (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-4 md:px-0 my-24">
        <HeroCard
            text="What's up?"
            delay={0.2}
            className="self-start hover:rotate-[-1deg]"
        />
        <HeroCard
            text="I'm Alex"
            delay={0.4}
            className="self-center hover:rotate-[1deg]"
        />
        <HeroCard
            text="Frontend"
            delay={0.6}
            className="self-end hover:rotate-[-1deg]"
        />
    </div>
));
HeroSection.displayName = "HeroSection";