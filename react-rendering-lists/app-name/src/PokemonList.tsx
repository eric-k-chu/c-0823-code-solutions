export type PokeEntry = {
  number: string;
  name: string;
};

type Props = {
  pokedex: PokeEntry[];
};

export function PokemonList({ pokedex }: Props) {
  return (
    <ul className="text-black font-semibold text-center">
      {pokedex.map((n) => (
        <li key={n.number} className="bg-emerald-200 my-2 p-4 rounded-lg">
          {n.name}
        </li>
      ))}
    </ul>
  );
}
