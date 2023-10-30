type Props = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: Props) {
  return (
    <button className="w-16 flex justify-center" onClick={onClick}>
      {text}
    </button>
  );
}
