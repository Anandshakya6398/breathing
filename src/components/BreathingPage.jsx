import { useState, useEffect } from "react";

export default function BreathingPage({ onBack }) {
  const [phase, setPhase] = useState("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    // Phase toggle every 4 seconds
    const phaseInterval = setInterval(() => {
      setPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
      setSecondsLeft(4);
    }, 4000);

    // Countdown timer every second
    const timerInterval = setInterval(() => {
      setSecondsLeft((sec) => (sec > 0 ? sec - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const displayText = phase === "Inhale" ? "Breathe In" : "Breathe Out";
  const emoji = phase === "Inhale" ? "🌬️" : "💨";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animated-bg space-y-8">
      <div
        className={`w-64 h-64 flex flex-col items-center justify-center rounded-full bg-white shadow-xl
          transition-transform duration-[4000ms] ease-in-out
          ${phase === "Inhale" ? "scale-110" : "scale-90"}
        `}
      >
        <span
          key={phase}
          className={`text-4xl font-extrabold flex items-center space-x-3
            ${
              phase === "Inhale"
                ? "text-blue-600 animate-fadeInOut"
                : "text-purple-600 animate-fadeInOut"
            }
          `}
          style={{ animationDuration: "4s" }}
        >
          <span>{emoji}</span>
          <span>{displayText}</span>
        </span>
        <span className="mt-3 text-gray-500 text-xl font-mono">{secondsLeft}s</span>
      </div>

      <button
        onClick={onBack}
        className="px-4 py-2 text-lg rounded-md  bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
      >
        Back
      </button>
    </div>
  );
}
