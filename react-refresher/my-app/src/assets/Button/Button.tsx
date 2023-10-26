type Prop = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: Prop) {
  return <button onClick={() => onClick()}>{text}</button>;
}
