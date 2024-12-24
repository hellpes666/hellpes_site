import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/shared/constants/routes';
import { TECH_STACK } from '@/shared/constants/stack';
import CodeBlock from '@/widgets/CodeBlock/CodeBlock';
import AboutSection from '@/widgets/AboutSection/AboutSection';
import RunningLine from '@/widgets/RunningLine/RunningLine';

export default function Home() {
    return (
        <div className="min-h-screen relative before:absolute before:inset-0 before:bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] before:bg-[length:24px_24px]">
            <div className="mx-24">
                {/* Header section */}
                <header className="border border-solid border-slate-800 rounded-b-2xl px-1 pb-1 animate-border sticky top-0 z-50">
                    <nav className="bg-slate-900 py-6 px-4 flex items-center justify-between rounded-b-2xl">
                        <strong className="animate-shimmer bg-gradient-to-r from-white via-[#A5C5E9] to-white bg-clip-text text-transparent bg-[length:200%_100%] font-bold">
                            developer.
                        </strong>
                        
                        <div className="flex items-center gap-6">
                            {NAVIGATION_ITEMS.map((item) => (
                                <a 
                                    key={item}
                                    href={`${item.toLowerCase()}`} 
                                    className="text-[#A5C5E9] transition-all duration-300 hover:scale-110"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            {SOCIAL_LINKS.map(({ href, title }) => (
                                <a 
                                    key={title}
                                    href={href}
                                    aria-label={title}
                                    className="bg-slate-800 rounded-full w-10 h-10 hover:bg-slate-700 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                />
                            ))}
                        </div>
                    </nav>
                </header>

                <main className='mt-52 min-h-[calc(100vh-8rem)] flex flex-col justify-between items-stretch'>
                    {/* Hero section */}
                    <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-4 md:px-0">
                        <div className="rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in self-start">
                            <h2 className="text-2xl font-bold">What&apos;s up?</h2>
                        </div>
                        <div className="text-center rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in self-center">
                            <h2 className='text-2xl md:text-4xl font-bold'>I&apos;m Alex</h2>
                        </div>
                        <div className="text-end rounded-2xl bg-slate-800 p-4 w-fit animate-fade-in self-end">
                            <h2 className='text-2xl md:text-4xl font-bold'>Frontend Developer.</h2>
                        </div>
                    </div>

                    {/* Running lines */}
                    <div className="relative flex flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <RunningLine items={TECH_STACK} />
                        <RunningLine items={TECH_STACK} reverse />
                    </div>

                    {/* Code and About section */}
                    <div className="flex gap-8 px-4 md:px-0 mt-24">
                        <CodeBlock />
                        <AboutSection />
                    </div>
                </main>
            </div>
        </div>
    );
}
