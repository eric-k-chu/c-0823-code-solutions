import { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';

export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: number | null = null;

    if (!isPaused) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer ?? 0);
    }

    return () => clearInterval(timer ?? 0);
  }, [count, isPaused]);

  function handleReset() {
    if (isPaused) setCount(0);
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
      <button
        className="hover:cursor-pointer"
        onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? <FaPlay size={42} /> : <FaPause size={42} />}
      </button>
    </div>
  );
}
