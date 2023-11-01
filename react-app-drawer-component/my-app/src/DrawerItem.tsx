type Props = {
  text: string;
  onSelect: (header: string) => void;
};

export function DrawerItem({ text, onSelect }: Props) {
  return (
    <div
      className="py-2 px-8 text-black hover:bg-black/20 hover:cursor-pointer"
      onClick={() => onSelect(text)}>
      {text}
    </div>
  );
}
