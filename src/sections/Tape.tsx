import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimization",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-hidden">
      <div className="relative -rotate-3 -mx-1">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400"></div>
        <div className="relative flex overflow-x-hidden">
          <div
            className="animate-move-left whitespace-nowrap flex items-center py-3"
            style={{
              animationDuration: "60s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {words.concat(words).map((word, index) => (
              <div key={`${word}-${index}`} className="inline-flex items-center mx-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="w-6 h-6 text-gray-900 -rotate-12 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};