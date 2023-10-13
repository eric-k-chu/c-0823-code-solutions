import { useState } from 'react';
import './ToggleButton.css';

function ToggleButton({ color, text }) {
  let [isClicked, setClick] = useState(false);

  console.log('useState', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setClick(() => !isClicked);
    console.log('after setter', isClicked);
  }

  return isClicked ? (
    <button className={color} onClick={handleClick}>
      {text}
    </button>
  ) : (
    <button className="white" onClick={handleClick}>
      {text}
    </button>
  );
}

export default ToggleButton;
