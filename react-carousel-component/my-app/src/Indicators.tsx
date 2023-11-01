import { BiCircle, BiSolidCircle } from 'react-icons/bi';

type Props = {
  items: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export function Indicators({ items, currentIndex, onSelect }: Props) {
  return (
    <div className="flex justify-evenly items-center w-3/5 basis-1/12">
      {items.map((_, i) => (
        <div
          key={i}
          onClick={() => onSelect(i)}
          className="hover:cursor-pointer">
          {currentIndex === i ? <BiSolidCircle /> : <BiCircle />}
        </div>
      ))}
    </div>
  );
}
