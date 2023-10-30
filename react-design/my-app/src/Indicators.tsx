import { Button } from './Button';

type Props = {
  items: string[];
  currentIndex: number;
  onClick: (index: number) => void;
};

export function Indicators({ items, currentIndex, onClick }: Props) {
  const inactive = 'flex justify-center items-center rounded-md bg-[#1a1a1a]';
  const active =
    'flex justify-center items-center rounded-md bg-[#1a1a1a] border-2 border-[#646cff]';

  return (
    <ul className="flex items-center gap-x-6">
      {items.map((_n, i) => (
        <li key={i} className={currentIndex === i ? active : inactive}>
          <Button text={i.toString()} onClick={() => onClick(i)} />
        </li>
      ))}
    </ul>
  );
}
