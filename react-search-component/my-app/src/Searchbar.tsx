import searchIcon from '../../search-solid.svg';

type Props = {
  query: string;
  onChange: (value: string) => void;
};

export function Searchbar({ query, onChange }: Props) {
  return (
    <div className="w-full flex items-center border-2 h-8 border-black rounded-3xl p-4 gap-x-2">
      <img src={searchIcon} className="w-4 h-4" />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent w-full text-black"
      />
    </div>
  );
}
