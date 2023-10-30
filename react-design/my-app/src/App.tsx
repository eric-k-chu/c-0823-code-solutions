import { RotatingBanner } from './RotatingBanner';

const items: string[] = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RotatingBanner items={items} />
    </div>
  );
}

export default App;
