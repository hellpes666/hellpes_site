import { memo } from 'react';
import Image from 'next/image';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/shared/constants/routes';
import { TECH_STACK } from '@/shared/constants/stack';
import CodeBlock from '@/widgets/CodeBlock/CodeBlock';
import AboutSection from '@/widgets/AboutSection/AboutSection';
import RunningLine from '@/widgets/RunningLine/RunningLine';

// Константы для часто используемых стилей
const COMMON_STYLES = {
  card: "rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in",
  socialLink: "bg-slate-800 rounded-full w-10 h-10 hover:bg-slate-700 hover:scale-110 transition-all duration-300 flex items-center justify-center",
  navLink: "text-[#A5C5E9] transition-all duration-300 hover:scale-110"
};

const NavigationLinks = memo(() => (
  <div className="flex items-center gap-6">
    {NAVIGATION_ITEMS.map((item) => (
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
NavigationLinks.displayName = 'NavigationLinks';

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
SocialLinks.displayName = 'SocialLinks';

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
Header.displayName = 'Header';

const HeroSection = memo(() => (
  <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-4 md:px-0">
    <div className={`${COMMON_STYLES.card} self-start`}>
      <h2 className="text-2xl font-bold">What&apos;s up?</h2>
    </div>
    <div className={`${COMMON_STYLES.card} self-center`}>
      <h2 className="text-2xl md:text-4xl font-bold">I&apos;m Alex</h2>
    </div>
    <div className={`${COMMON_STYLES.card} self-end`}>
      <h2 className="text-2xl md:text-4xl font-bold">Frontend Developer.</h2>
    </div>
  </div>
));
HeroSection.displayName = 'HeroSection';

const TechStack = memo(() => (
  <div className="relative flex flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
    <RunningLine items={TECH_STACK } />
    <RunningLine items={TECH_STACK} reverse />
  </div>
));
TechStack.displayName = 'TechStack';

export default function Home() {
  return (
    <div className="min-h-screen relative before:absolute before:inset-0 before:bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] before:bg-[length:24px_24px]">
      <div className="mx-24">
        <Header />
        <main className="mt-52 min-h-[calc(100vh-8rem)] flex flex-col justify-between items-stretch">
          <HeroSection />
          <TechStack />
          <div className="flex gap-8 px-4 md:px-0 mt-24">
            <CodeBlock />
            <AboutSection />
          </div>
        </main>
      </div>
    </div>
  );
}
