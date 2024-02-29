'use client';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import Logo from '~/assets/images/svg/logo.svg';

function NavBar() {
  const [activeItem, setActiveItem] = useState<string | null>('home');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className=" z-50 flex w-full items-center justify-between bg-white px-[120px] shadow-[0_8px_40px_0_#0000000D]">
      <div className="ab">
        <Logo />
      </div>
      <ul className="flex justify-center gap-[30px]">
        <li
          onClick={() => handleItemClick('home')}
          className={`flex h-[70px] w-32 cursor-pointer items-center justify-center border-b-4 border-transparent text-lg text-gray-default ${activeItem === 'home' ? 'border-b-4 !border-primary font-semibold text-black' : ''}`}
        >
          خانه
        </li>
        <li
          onClick={() => handleItemClick('aboutUs')}
          className={`flex h-[70px] w-32 cursor-pointer items-center justify-center border-b-4 border-transparent text-lg text-gray-default ${activeItem === 'aboutUs' ? 'border-b-4 !border-primary font-semibold text-black' : ''}`}
        >
          درباره ما
        </li>
        <li
          onClick={() => handleItemClick('rules')}
          className={`flex h-[70px] w-32 cursor-pointer items-center justify-center border-b-4 border-transparent text-lg text-gray-default ${activeItem === 'rules' ? 'border-b-4 !border-primary font-semibold text-black' : ''}`}
        >
          قوانین استفاده
        </li>
        <li
          onClick={() => handleItemClick('help')}
          className={`flex h-[70px] w-32 cursor-pointer items-center justify-center border-b-4 border-transparent text-lg text-gray-default ${activeItem === 'help' ? 'border-b-4 !border-primary font-semibold text-black' : ''}`}
        >
          راهنما
        </li>
      </ul>
      <div className="flex w-[251px] justify-end">
        <Button className="rounded-lg">ورود / ثبت نام</Button>
      </div>
    </nav>
  );
}

export default NavBar;
