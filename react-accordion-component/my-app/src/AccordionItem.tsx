import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { Topic } from './Accordion';

type Props = {
  topic: Topic;
  index: number;
  currentIndex: number | null;
  onSelect: (index: number) => void;
};

export function AccordionItem({ topic, index, currentIndex, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      <div
        className="flex items-center justify-between bg-white p-4 rounded-md"
        onClick={() => onSelect(index)}>
        <span className="text-xl font-semibold">{topic.title}</span>
        {currentIndex === index ? <HiChevronDown /> : <HiChevronRight />}
      </div>
      {currentIndex === index && (
        <p className="bg-zinc-200 p-4 rounded-md">{topic.content}</p>
      )}
    </div>
  );
}
