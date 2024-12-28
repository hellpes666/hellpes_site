interface CodeLine {
  content: React.ReactNode;
  delay: number;
}

const CodeBlock = () => {
  const codeLines: CodeLine[] = [
    // Interface
    {
      content: (
        <>
          <span className="text-monokai-pink">interface</span>{" "}
          <span className="text-monokai-yellow">IDeveloper</span> {"{"}
        </>
      ),
      delay: 0.1,
    },
    {
      content: (
        <>
          {" ".repeat(2)}name:{" "}
          <span className="text-monokai-green">'Alex'</span>;
        </>
      ),
      delay: 0.6,
    },
    {
      content: (
        <>
          {" ".repeat(2)}role:{" "}
          <span className="text-monokai-green">'Frontend Developer'</span>;
        </>
      ),
      delay: 1.1,
    },
    {
      content: (
        <>
          {" ".repeat(2)}skills:{" "}
          <span className="text-monokai-blue">Array</span>
          {"<"}string{">"};
        </>
      ),
      delay: 1.6,
    },
    {
      content: (
        <>
          {" ".repeat(2)}experience:{" "}
          <span className="text-monokai-orange">number</span>;
        </>
      ),
      delay: 2.1,
    },
    { content: "}", delay: 2.6 },
    { content: "", delay: 3.1 }, // Empty line
    // Implementation
    {
      content: (
        <>
          <span className="text-monokai-pink">const</span>{" "}
          <span className="text-monokai-purple">developer</span>:{" "}
          <span className="text-monokai-yellow">IDeveloper</span> = {"{"}
        </>
      ),
      delay: 3.6,
    },
    {
      content: (
        <>
          {" ".repeat(2)}name:{" "}
          <span className="text-monokai-green">'Alex'</span>,
        </>
      ),
      delay: 4.1,
    },
    {
      content: (
        <>
          {" ".repeat(2)}role:{" "}
          <span className="text-monokai-green">'Frontend Developer'</span>,
        </>
      ),
      delay: 4.6,
    },
    { content: <>{" ".repeat(2)}skills: [</>, delay: 5.1 },
    {
      content: (
        <>
          {" ".repeat(4)}
          <span className="text-monokai-green">'React'</span>,
        </>
      ),
      delay: 5.6,
    },
    {
      content: (
        <>
          {" ".repeat(4)}
          <span className="text-monokai-green">'TypeScript'</span>,
        </>
      ),
      delay: 6.1,
    },
    {
      content: (
        <>
          {" ".repeat(4)}
          <span className="text-monokai-green">'Next.js'</span>,
        </>
      ),
      delay: 6.6,
    },
    {
      content: (
        <>
          {" ".repeat(4)}
          <span className="text-monokai-green">'Node.js'</span>
        </>
      ),
      delay: 7.1,
    },
    { content: <>{" ".repeat(2)}],</>, delay: 7.6 },
    {
      content: (
        <>
          {" ".repeat(2)}experience:{" "}
          <span className="text-monokai-orange">3</span>
        </>
      ),
      delay: 8.1,
    },
    { content: "};", delay: 8.6 },
  ];

  return (
    <div className="w-full bg-monokai-bg/50 backdrop-blur-sm rounded-2xl p-8 md:w-2/3">
      <pre className="text-sm md:text-base font-mono overflow-x-auto">
        <code className="language-typescript whitespace-pre-wrap flex flex-col">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className="select-none opacity-0 animate-[type-line_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${line.delay}s` }}
            >
              {line.content}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
