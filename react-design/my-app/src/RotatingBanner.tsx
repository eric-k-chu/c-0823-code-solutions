import { useState } from 'react';
import { Indicators } from './Indicators';
import { Button } from './Button';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleIncrementIndex(): void {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleDecrementIndex(): void {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleSetIndex(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <div className="flex flex-col gap-y-4 items-center w-full">
      <h2 className="text-lg font-semibold">{items[currentIndex]}</h2>
      <Button text="Prev" onClick={handleDecrementIndex} />
      <Indicators
        items={items}
        currentIndex={currentIndex}
        onClick={handleSetIndex}
      />
      <Button text="Next" onClick={handleIncrementIndex} />
    </div>
  );
}
