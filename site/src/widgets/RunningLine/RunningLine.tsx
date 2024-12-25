interface RunningLineProps {
  items: readonly string[];
  reverse?: boolean;
}

const RunningLine = ({ items, reverse = false }: RunningLineProps) => {
  const animationClass = reverse ? "animate-scroll-reverse" : "animate-scroll";
  const gradientClass = reverse
    ? "from-[#A5C5E9] to-white"
    : "from-white to-[#A5C5E9]";

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 ${animationClass} whitespace-nowrap`}
        style={{
          // Устанавливаем ширину контейнера равной ширине всех элементов
          width: "max-content",
        }}
      >
        {[...items, ...items, ...items, ...items, ...items].map(
          (item, index) => (
            <div
              key={`${item}-${index}`}
              className={`select-none text-2xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent px-4`}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RunningLine;
