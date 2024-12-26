import { memo } from "react";

const QuoteSection = memo(() => {
    return (
        <div className="flex flex-col items-center justify-center py-20 my-24">
            <blockquote
                className="
                font-mono
                text-4xl
                md:text-6xl
                text-center
                text-[#d796f2]
                [text-shadow:0_0_10px_#d796f2]
                overflow-hidden
                whitespace-nowrap
                border-r-4
                border-[#d796f2]
                w-0
                animate-[typing_4s_steps(40)_1s_forwards,blink_1s_steps(1)_1s_2]
                select-none
                "
            >
                &quot;Talk is cheap. Show me the code&quot;
                <footer
                    className="
          text-xl 
          md:text-2xl 
          mt-4 
          text-slate-400 
          font-normal
          [text-shadow:none]
        "
                >
                    - Linus Torvalds
                </footer>
            </blockquote>
        </div>
    );
});

QuoteSection.displayName = "QuoteSection";

export default QuoteSection;
