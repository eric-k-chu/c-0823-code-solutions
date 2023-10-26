import './App.css';
import { Button } from './button';
import { useState } from 'react';

function App() {
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
      <Button
        style={`${color} p-4 rounded-md border-2 border-black hover:border-amber-400`}
        onClick={handleClick}
      />
      <h3 className="flex justify-center items-center bg-[#FFBF00] rounded-md min-w-[4rem] h-14 px-2 shadow-md">
        {count < 2 ? count + ' click' : count + ' clicks'}
      </h3>
    </div>
  );
}

export default App;
