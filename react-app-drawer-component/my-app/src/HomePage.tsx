import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppDrawer } from './AppDrawer';
import React from 'react';

export function HomePage() {
  const [showDrawer /*setShowDrawer*/] = useState(false);
  return (
    <div className="flex basis-full p-8 bg-[#242424]">
      <FaBars />
      {showDrawer && <AppDrawer />}
    </div>
  );
}
