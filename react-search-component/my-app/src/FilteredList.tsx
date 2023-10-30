type Props = {
  list: string[];
  query: string;
};

export function FilteredList({ list, query }: Props) {
  const filteredList = list.filter((n) => n.includes(query));

  return (
    <ul className={filteredList.length > 0 ? 'list-disc p-4' : 'p-4'}>
      {filteredList.length > 0 ? (
        filteredList.map((n, i) => <li key={i}>{n}</li>)
      ) : (
        <li key={0}>No items match the filter.</li>
      )}
    </ul>
  );
}
