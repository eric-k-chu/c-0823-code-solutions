import { PokemonList, PokeEntry } from './PokemonList';

function App() {
  const pokedex: PokeEntry[] = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];

  return (
    <div className="flex justify-center items-center container h-screen mx-auto">
      <PokemonList pokedex={pokedex} />
    </div>
  );
}

export default App;
