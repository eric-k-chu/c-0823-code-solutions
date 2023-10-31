import { useState } from 'react';
import { DrawerItem } from './DrawerItem';
import { FaBars } from 'react-icons/fa';

type Props = {
  heading: string;
  links: string[];
  onSelect: (header: string) => void;
};

export function AppDrawer({ heading, links, onSelect }: Props) {
  const [showDrawer, setShowDrawer] = useState(false);

  function handleSelection(header: string): void {
    onSelect(header);
    setShowDrawer(false);
  }

  return (
    <>
      {showDrawer ? (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black/50 flex items-center text-black">
          <div className={`w-72 h-screen bg-white flex flex-col gap-y-2`}>
            <h2 className="text-xl font-semibold py-2 px-8">{heading}</h2>
            <div className="flex flex-col gap-y-2">
              {links.map((n, i) => (
                <DrawerItem key={i} text={n} onSelect={handleSelection} />
              ))}
            </div>
          </div>
          <div
            className={`basis-full h-full`}
            onClick={() => setShowDrawer(false)}></div>
        </div>
      ) : (
        <div
          onClick={() => setShowDrawer(true)}
          className="hover:cursor-pointer p-8">
          <FaBars size={24} />
        </div>
      )}
    </>
  );
}
