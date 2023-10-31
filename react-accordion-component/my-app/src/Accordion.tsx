import { useState } from 'react';
import { AccordionItem } from './AccordionItem';

export type Topic = {
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  function handleSelection(index: number): void {
    // if current topic is open, close it
    if (currentIndex === index) {
      setCurrentIndex(null);

      // if current topic is closed, open it
    } else {
      setCurrentIndex(index);
    }
  }

  return (
    <div className="flex flex-col w-3/5 gap-y-2">
      {topics.map((n, i) => (
        <AccordionItem
          key={i}
          topic={n}
          index={i}
          currentIndex={currentIndex}
          onSelect={handleSelection}
        />
      ))}
    </div>
  );
}
