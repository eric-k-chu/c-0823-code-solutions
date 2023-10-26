type Props = {
  color: string;
  onClick: () => void;
};

export function HotButton({ onClick, color }: Props) {
  const style = `${color} p-4 rounded-md border-2 border-black hover:border-amber-400 font-semibold`;
  return (
    <button className={style} onClick={() => onClick()}>
      Hot Button
    </button>
  );
}
