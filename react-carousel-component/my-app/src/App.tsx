import { Carousel } from './Carousel';
const imgPaths = [
  '/fushiguro.webp',
  '/inumaki.webp',
  '/itadori.webp',
  '/kugisaki.webp',
  '/panda.webp',
  '/zen-in.webp',
];

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel images={imgPaths} />
    </div>
  );
}

export default App;
