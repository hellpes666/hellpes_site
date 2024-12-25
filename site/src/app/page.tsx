import { memo } from "react";
import Image from "next/image";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/shared/constants/routes";
import { OTHER_STACK, TECH_STACK } from "@/shared/constants/stack";
import CodeBlock from "@/widgets/CodeBlock/CodeBlock";
import AboutSection from "@/widgets/AboutSection/AboutSection";
import RunningLine from "@/widgets/RunningLine/RunningLine";
import { HeroCard } from "@/widgets/HeroCard/HeroCard";
import { ProjectsShowcase } from "@/widgets/ProjectsShowCase/ProjectsShowcase";

const COMMON_STYLES = {
  card: "rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in",
  socialLink:
    "bg-slate-800 rounded-full w-10 h-10 hover:bg-slate-700 hover:scale-110 transition-all duration-300 flex items-center justify-center",
  navLink: "text-[#A5C5E9] transition-all duration-300 hover:scale-110",
};

const ContactForm = memo(() => (
  <div className="w-1/3 flex flex-col gap-6 p-8 bg-monokai-bg/50 backdrop-blur-sm rounded-2xl">
    <h3 className="text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent">
      Contact Me
    </h3>
  </div>
));
ContactForm.displayName = "ContactForm";

const NavigationLinks = memo(() => (
  <div className="flex items-center gap-6">
    {NAVIGATION_ITEMS.map(item => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className={COMMON_STYLES.navLink}
      >
        {item}
      </a>
    ))}
  </div>
));
NavigationLinks.displayName = "NavigationLinks";

const SocialLinks = memo(() => (
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
        <Image src={img} alt={title} width={20} height={20} />
      </a>
    ))}
  </div>
));
SocialLinks.displayName = "SocialLinks";

const Header = memo(() => (
  <header className="border border-solid border-slate-800 rounded-b-2xl px-1 pb-1 animate-border sticky top-0 z-50">
    <nav className="bg-slate-900 py-6 px-4 flex items-center justify-between rounded-b-2xl">
      <strong className="animate-shimmer bg-gradient-to-r from-white via-[#A5C5E9] to-white bg-clip-text text-transparent bg-[length:200%_100%] font-bold select-none">
        developer.
      </strong>
      <NavigationLinks />
      <SocialLinks />
    </nav>
  </header>
));
Header.displayName = "Header";

const HeroSection = memo(() => (
  <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-4 md:px-0">
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

const TechStack = memo(() => (
  <div className="relative flex flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] my-24">
    <RunningLine items={TECH_STACK} />
    <RunningLine items={OTHER_STACK} reverse />
  </div>
));
TechStack.displayName = "TechStack";

const styleStaticAnimate = `
text-slate-400
relative 
w-fit
transition-all
duration-300
hover:text-white
hover:pl-6
after:content-['']
after:absolute
after:w-0
after:h-[1px]
after:bottom-0
after:left-0
after:bg-white
after:transition-all
after:duration-300
hover:after:w-full
before:content-['→']
before:absolute
before:left-0
before:opacity-0
before:transition-all
before:duration-300
hover:before:opacity-100
hover:before:left-1
`;

const styleStaticAnimateLink = `
relative
    w-fit
    text-slate-400
    transition-all
    duration-300
    hover:text-white
    hover:pl-6
    flex
    items-center
    gap-2
    after:content-['']
    after:absolute
    after:w-0
    after:h-[1px]
    after:bottom-0
    after:left-0
    after:bg-white
    after:transition-all
    after:duration-300
    hover:after:w-full
    before:content-['→']
    before:absolute
    before:left-0
    before:opacity-0
    before:transition-all
    before:duration-300
    hover:before:opacity-100
    hover:before:left-1`;

const Footer = memo(() => (
  <footer className="mt-[8rem] border-t border-slate-800">
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Левая колонка */}
        <div className="flex flex-col gap-4">
          <h3 className="select-none text-xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent cursor-default">
            Alex
          </h3>
          <p className="select-none text-slate-400 max-w-xs cursor-default">
            Frontend developer passionate about creating beautiful and
            functional web applications
          </p>
          <SocialLinks />
        </div>

        {/* Центральная колонка */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-200 cursor-default">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styleStaticAnimate}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-200 cursor-default">
            Contact
          </h3>
          <div className="flex flex-col gap-2 text-slate-400">
            <a
              href="mailto:hellpes.developer@gmail.com"
              className={styleStaticAnimateLink}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              hellpes.developer@gmail.com
            </a>

            <a
              href="https://github.com/hellpes666"
              target="_blank"
              rel="noopener noreferrer"
              className={styleStaticAnimateLink}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Нижняя часть футера */}
      <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
        <p
          className="
    cursor-default 
    relative 
    inline-block
    font-bold
    tracking-wider
    hover:animate-glitch-text
    before:content-['©_2024_Alex._All_rights_reserved.']
    before:absolute 
    before:w-full
    before:h-full
    before:left-0
    before:top-0
    before:text-[#ff0000]
    before:opacity-0
    hover:before:opacity-[0.9]
    hover:before:animate-glitch-1
    after:content-['©_2024_Alex._All_rights_reserved.']
    after:absolute 
    after:w-full
    after:h-full
    after:left-0
    after:top-0
    after:text-[#0000ff]
    after:opacity-0
    hover:after:opacity-[0.9]
    hover:after:animate-glitch-2
    [text-shadow:3px_3px_0_#ff000060,_-3px_-3px_0_#0000ff60]
    hover:[animation:glitch-skew_0.2s_infinite_linear_alternate-reverse]
  "
        >
          © {new Date().getFullYear()} Alex. All rights reserved.
        </p>
      </div>
      ``{" "}
    </div>
  </footer>
));
Footer.displayName = "Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] before:bg-[length:24px_24px]">
      <div className="mx-24">
        <Header />
        <main className="mt-16 min-h-[calc(100vh-8rem)] flex flex-col justify-between items-stretch">
          <HeroSection />
          <TechStack />
          <ProjectsShowcase />
          <div className="flex gap-8 px-4 md:px-0 mt-24">
            <CodeBlock />
            <AboutSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
