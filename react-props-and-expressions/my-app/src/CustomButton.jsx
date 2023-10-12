// using style: <button style={{backgroundColor: color }}>{text}</button>
function CustomButton({ text, color }) {
  return <button className={color}>{text}</button>;
}

export default CustomButton;
