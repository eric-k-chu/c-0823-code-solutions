import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  function handleToggleOn() {
    setIsOn(!isOn);
  }

  const on =
    'light flex justify-center items-center container mx-auto h-screen gap-8';
  const off =
    'dark flex justify-center items-center container mx-auto h-screen gap-8';

  return (
    <div className={isOn ? on : off}>
      <button
        onClick={handleToggleOn}
        className="bg-green-500 dark:bg-zinc-200 w-16 h-8 rounded-3xl text-black flex flex-col justify-center border-2 border-black">
        <div className="bg-white w-7 h-7 rounded-full border-2 border-black self-end dark:self-start" />
      </button>
      {isOn ? 'On' : 'Off'}
    </div>
  );
}
