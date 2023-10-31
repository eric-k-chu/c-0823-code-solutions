import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';

export function StopwatchAlt() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  function handlePlay(): void {
    if (!isPaused) {
      clearInterval(timer);
    } else {
      const timeId = setInterval(() => setCount((prev) => prev + 1), 1000);
      setTimer(timeId);
    }
    setIsPaused(!isPaused);
  }

  function handleReset(): void {
    if (isPaused) {
      setCount(0);
      setIsPaused(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-y-8">
      <div
        onClick={handleReset}
        className={`${
          isPaused && 'hover:cursor-pointer'
        } flex justify-center items-center rounded-full border-black border-[16px] w-60 h-60`}>
        <p className="text-5xl font-semibold select-none">{count}</p>
      </div>
      <button className="hover:cursor-pointer" onClick={handlePlay}>
        {isPaused ? <FaPlay size={42} /> : <FaPause size={42} />}
      </button>
    </div>
  );
}
