"use client";

import { useState } from "react";
import HomeScreen from "./components/home/HomeScreen";
import InputScreen from "./components/input/InputScreen";
import ResultScreen from "./components/result/ResultScreen";
import type { AgeResult } from "./lib/calculateAge";

type Screen = "home" | "input" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [result, setResult] = useState<AgeResult | null>(null);

  const handleStart = () => {
    setScreen("input");
  };

  const handleResult = (ageResult: AgeResult) => {
    setResult(ageResult);
    setScreen("result");
  };

  const handleBackToHome = () => {
    setResult(null);
    setScreen("home");
  };

  const handleBackToInput = () => {
    setScreen("input");
  };

  if (screen === "input") {
    return <InputScreen onBack={handleBackToHome} onResult={handleResult} />;
  }

  if (screen === "result" && result) {
    return <ResultScreen result={result} onRestart={handleBackToHome} />;
  }

  return <HomeScreen onStart={handleStart} />;
}
