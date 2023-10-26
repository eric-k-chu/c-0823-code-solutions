import './HotButton.css';

type Props = {
  count: number;
  onClick: () => void;
};

export function HotButton({ count, onClick }: Props) {
  let color;
  if (count < 3) {
    color = 'hot';
  } else if (count < 6) {
    color = 'hot-3';
  } else if (count < 9) {
    color = 'hot-6';
  } else if (count < 12) {
    color = 'hot-9';
  } else if (count < 15) {
    color = 'hot-12';
  } else if (count < 18) {
    color = 'hot-15';
  } else {
    color = 'hot-18';
  }

  return (
    <button
      className={`${color} p-4 rounded-md border-2 border-black hover:border-amber-400 font-semibold`}
      onClick={() => onClick()}>
      Hot Button
    </button>
  );
}
