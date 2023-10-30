type Props = {
  items: string[];
};

export function RotatingIndicator({ items }: Props) {
  return (
    <ul className="flex items-center gap-x-2">
      {items.map((_n, i) => (
        <li
          key={i}
          className="flex justify-center items-center w-8 h-8 p-2 rounded-md bg-[#1a1a1a]">
          {i}
        </li>
      ))}
    </ul>
  );
}
