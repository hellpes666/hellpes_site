const AboutSection = () => {
    return (
        <div className="w-1/3 flex flex-col gap-6 p-8 bg-monokai-bg/50 backdrop-blur-sm rounded-2xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-monokai-fg to-monokai-purple bg-clip-text text-transparent">
                About Me
            </h3>
            <p className="text-monokai-comment leading-relaxed">
                Passionate frontend developer with 3 years of experience in creating modern web applications. 
                Specialized in React ecosystem and TypeScript development.
            </p>
            <div className="mt-auto">
                <button className="px-6 py-3 bg-monokai-purple text-monokai-fg rounded-xl font-semibold hover:bg-monokai-pink transition-colors duration-300">
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default AboutSection; 