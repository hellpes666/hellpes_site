"use client"

import { memo, useEffect, useState } from "react";
import CodeBlock from "@/widgets/CodeBlock/CodeBlock";
import AboutSection from "@/widgets/AboutSection/AboutSection";
import { ProjectsShowcase } from "@/widgets/ProjectsShowCase/ProjectsShowcase";
import QuoteSection from "@/widgets/QuoteSection/QuoteSection";
import { TechStack } from "@/widgets/TechStack/TechStack";
import { HeroSection } from "@/widgets/HeroSection/HeroSection";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

const LoadingScreen = memo(() => (
  <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-1000"
    id="loading-screen">
    <h1 className="text-4xl md:text-6xl font-bold text-transparent animate-pulse
      [text-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff] select-none text-center">
      a developer <br /> who is alone <br /> is the best developer
    </h1>
  </div>
));
LoadingScreen.displayName = "LoadingScreen";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Блокируем скролл при загрузке
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
      }

      setTimeout(() => {
        setIsLoading(false);
        // Разблокируем скролл после загрузки
        document.body.style.overflow = 'unset';
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen relative">
        <div className={`absolute inset-0 -z-10 
          bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] 
          bg-[length:24px_24px] ${isLoading ? "overflow-hidden" : ""}`} />

        <div className="container mx-auto px-6">
          <Header />
          <main className="mt-16 min-h-[calc(100vh-8rem)] flex flex-col justify-between items-stretch">
            <HeroSection />
            <QuoteSection />
            <TechStack />
            <ProjectsShowcase />
            <div className="flex gap-8 mt-24">
              <CodeBlock />
              <AboutSection />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
