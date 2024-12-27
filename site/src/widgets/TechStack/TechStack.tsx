import { OTHER_STACK, TECH_STACK } from "@/shared/constants/stack";
import { memo } from "react";
import RunningLine from "../RunningLine/RunningLine";

export const TechStack = memo(() => (
    <div className="relative flex flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] my-24">
        <RunningLine items={TECH_STACK} />
        <RunningLine items={OTHER_STACK} reverse />
    </div>
));
TechStack.displayName = "TechStack";