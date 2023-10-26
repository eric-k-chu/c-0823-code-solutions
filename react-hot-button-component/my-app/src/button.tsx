type Prop = {
  style: string;
  onClick: () => void;
};

export function Button({ onClick, style }: Prop) {
  return (
    <button className={style} onClick={() => onClick()}>
      Hot Button
    </button>
  );
}
