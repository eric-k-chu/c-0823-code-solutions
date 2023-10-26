import { HotButton } from './HotButton';
import { Counter } from './Counter';
import { useState } from 'react';

function HotCounter() {
  const [count, setCount] = useState(0);

  function handleClick(): void {
    setCount(count + 1);
  }

  return (
    <div className="flex container justify-center items-center mx-auto h-screen text-black gap-8">
      <HotButton count={count} onClick={handleClick} />
      <Counter count={count} />
    </div>
  );
}

export default HotCounter;
