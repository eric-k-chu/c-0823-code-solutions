import { useState } from 'react';
import { AppDrawer } from './AppDrawer';

const heading = 'Menu';
const links: string[] = ['About', 'Get Started', 'Sign In'];

export function HomePage() {
  const [header, setHeader] = useState(links[0]);

  return (
    <div className="flex w-full basis-1/12 min-h-[4rem] bg-[#242424] items-center">
      <AppDrawer heading={heading} links={links} onSelect={setHeader} />
      <span className="text-white">{header}</span>
    </div>
  );
}
