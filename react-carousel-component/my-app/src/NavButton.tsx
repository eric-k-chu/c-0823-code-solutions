import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type Props = {
  type: 'prev' | 'next';
  onClick: () => void;
};

export function NavButton({ type, onClick }: Props) {
  return (
    <div onClick={onClick} className="hover:cursor-pointer">
      {type === 'prev' ? (
        <FaChevronLeft size={24} />
      ) : (
        <FaChevronRight size={24} />
      )}
    </div>
  );
}
