import { useState } from 'react';
import { AppDrawer } from './AppDrawer';

const links: string[] = ['About', 'Get Started', 'Sign In'];

function App() {
  const [header, setHeader] = useState(links[0]);

  return (
    <div className="flex flex-col h-screen w-screen bg-white">
      <div className="flex w-full basis-1/12 min-h-[4rem] bg-[#242424] items-center gap-x-4 px-8 text-white">
        <AppDrawer heading="Menu" links={links} onSelect={setHeader} />
        <span className="text-xl font-semibold">{header}</span>
      </div>
      <div className="flex w-full basis-11/12 justify-center items-center p-8 text-black">
        <p>React + Tailwind = word vomit</p>
      </div>
    </div>
  );
}

export default App;
