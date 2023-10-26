import './App.css';
import { Button } from './button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState<string>('hot');
  console.log(count);
  console.log(color);

  function handleClick(): void {
    switch (count) {
      case 3:
        setColor('hot-3');
        break;
      case 6:
        setColor('hot-6');
        break;
      case 9:
        setColor('hot-9');
        break;
      case 12:
        setColor('hot-12');
        break;
      case 15:
        setColor('hot-15');
        break;
      case 18:
        setColor('hot-18');
        break;
    }
    setCount(count + 1);
  }

  return (
    <div className="flex container justify-center items-center mx-auto h-screen text-black gap-8">
      <Button
        style={`${color} p-4 rounded-md shadow-md`}
        onClick={handleClick}
      />
      <h3 className="flex justify-center items-center bg-[#FFBF00] rounded-md min-w-[4rem] h-14 px-2">
        {count < 2 ? count + ' click' : count + ' clicks'}
      </h3>
    </div>
  );
}

export default App;
