import { RotatingIndicator } from './RotatingIndicator';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div className="flex flex-col gap-y-2 items-center w-full">
      <h2 className="text-lg font-semibold">{items[0]}</h2>
      <button className="w-16 flex justify-center">Prev</button>
      <RotatingIndicator items={items} />
      <button className="w-16 flex justify-center">Next</button>
    </div>
  );
}
