export const COMMON_STYLES = {
  card: "rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in",
  socialLink:
    "bg-slate-800 rounded-full w-10 h-10 hover:bg-slate-700 hover:scale-110 transition-all duration-300 flex items-center justify-center",
  navLink: `
    relative 
    text-[#A5C5E9] 
    transition-all 
    duration-300  
    py-2
    px-4
    hover:text-white
    data-[active=true]:text-white
    data-[active=true]:bg-gradient-to-r
    data-[active=true]:from-monokai-purple/10
    data-[active=true]:to-monokai-fg/10
    data-[active=true]:rounded-lg
    data-[active=true]:shadow-[0_0_15px_rgba(174,124,255,0.15)]
    data-[active=true]:border-l-2
    data-[active=true]:border-r-2
    data-[active=true]:border-monokai-purple
    before:content-['']
    before:absolute
    before:bottom-0
    before:left-0
    before:w-0
    before:h-[2px]
    before:bg-gradient-to-r
    before:from-monokai-purple
    before:to-monokai-fg
    before:transition-all
    before:duration-300
    hover:before:w-full
    after:content-['']
    after:absolute
    after:top-0
    after:right-0
    after:w-0
    after:h-[2px]
    after:bg-gradient-to-l
    after:from-monokai-purple
    after:to-monokai-fg
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:translate-y-[-2px]
    hover:shadow-lg
    hover:shadow-monokai-purple/20
  `,
} as const;
