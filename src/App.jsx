import React, { useState } from "react";
import StartPage from "./components/StartPage";
import BreathingPage from "./components/BreathingPage";

function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <BreathingPage onBack={() => setStarted(false)} />
  ) : (
    <StartPage onStart={() => setStarted(true)} />
  );
}

export default App;
