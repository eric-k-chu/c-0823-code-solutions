import { useState } from 'react';
import { Button } from './assets/Button/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleClickDecrement(): void {
    setCount(count - 1);
  }

  function handleClickIncrement(): void {
    setCount(count + 1);
  }

  return (
    <div className="main">
      <Button text="Down" onClick={handleClickDecrement} />
      <h3>{count}</h3>
      <Button text="Up" onClick={handleClickIncrement} />
    </div>
  );
}

export default App;
