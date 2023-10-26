import './HotCounter.css';
import { HotButton } from './HotButton';
import { Counter } from './Counter';
import { useState } from 'react';

function HotCounter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('hot');

  function handleClick(): void {
    switch (count) {
      case 2:
        setColor('hot-3');
        break;
      case 5:
        setColor('hot-6');
        break;
      case 8:
        setColor('hot-9');
        break;
      case 11:
        setColor('hot-12');
        break;
      case 14:
        setColor('hot-15');
        break;
      case 17:
        setColor('hot-18');
        break;
    }
    setCount(count + 1);
  }

  return (
    <div className="flex container justify-center items-center mx-auto h-screen text-black gap-8">
      <HotButton color={color} onClick={handleClick} />
      <Counter count={count} />
    </div>
  );
}

export default HotCounter;
