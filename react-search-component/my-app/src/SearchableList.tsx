import { Searchbar } from './Searchbar';
import { FilteredList } from './FilteredList';
import { useState } from 'react';

type Props = {
  list: string[];
};

export function SearchableList({ list }: Props) {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col w-3/5">
      <Searchbar query={query} onChange={setQuery} />
      <FilteredList list={list} query={query} />
    </div>
  );
}
