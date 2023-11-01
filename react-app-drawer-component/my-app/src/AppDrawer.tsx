import { useState } from 'react';
import { DrawerItem } from './DrawerItem';
import { FaBars } from 'react-icons/fa';

type Props = {
  heading: string;
  links: string[];
  onSelect: (pageHeader: string) => void;
};

export function AppDrawer({ heading, links, onSelect }: Props) {
  const [showDrawer, setShowDrawer] = useState(false);

  function handleSelection(pageHeader: string): void {
    onSelect(pageHeader);
    setShowDrawer(false);
  }

  return (
    <>
      <div
        className={`transition-colors ${
          showDrawer ? 'bg-black/50' : 'pointer-events-none bg-transparent'
        } absolute w-screen h-screen top-0 left-0 flex items-center text-black`}>
        <div
          className={`transition-transform ${
            showDrawer ? 'translate-x-0' : '-translate-x-[283px]'
          } w-72 h-screen bg-white flex flex-col gap-y-2 rounded-r-xl shadow-md`}>
          <h2 className="text-xl font-semibold py-2 px-8">{heading}</h2>
          <div className="flex flex-col gap-y-2">
            {links.map((n, i) => (
              <DrawerItem key={i} text={n} onSelect={handleSelection} />
            ))}
          </div>
        </div>
        <div
          className="w-full h-full"
          onClick={() => setShowDrawer(false)}></div>
      </div>
      <div className="hover:cursor-pointer hover:bg-white/10 w-8 h-8 flex items-center justify-center rounded-lg">
        <FaBars size={20} onClick={() => setShowDrawer(true)} />
      </div>
    </>
  );
}
