'use client';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

import Logo from '~/assets/images/svg/logo.svg';
import DarkLogo from '~/assets/images/svg/logo-dark.svg';

import BaseLogo from '~/assets/images/svg/base-logo.svg';
import BaseLogoDark from '~/assets/images/svg/base-logo-dark.svg';

import { Switch } from '@/components/ui/switch';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>('home');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const siavash = (e: boolean) => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(e);
  };

  return (
    <nav className=" dark:bg-black-1200 z-50 flex h-[88px] w-full items-center justify-between overflow-hidden bg-white px-[120px] shadow-[0_8px_40px_0_#00000010] dark:shadow-[0_8px_40px_0_#00000050;] md:px-4">
      <div className="shrink">
        {darkMode ? (
          <>
            <DarkLogo className="xs:hidden h-full w-[251px]" />
            <BaseLogoDark className="xs:block hidden" />
          </>
        ) : (
          <>
            <Logo className="xs:hidden h-full w-[251px]" />
            <BaseLogo className="xs:block hidden" />
          </>
        )}
      </div>
      <ul className="mx-2 flex h-full w-[800px] justify-center gap-[30px] xl:hidden">
        <li
          onClick={() => handleItemClick('home')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'home' ? 'text-black-1000 border-b-4 !border-primary font-semibold dark:text-white' : ''}`}
        >
          خانه
        </li>
        <li
          onClick={() => handleItemClick('aboutUs')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'aboutUs' ? 'text-black-1000 border-b-4 !border-primary font-semibold dark:text-white' : ''}`}
        >
          درباره ما
        </li>
        <li
          onClick={() => handleItemClick('rules')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'rules' ? 'text-black-1000 border-b-4 !border-primary font-semibold dark:text-white' : ''}`}
        >
          قوانین استفاده
        </li>
        <li
          onClick={() => handleItemClick('help')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'help' ? 'text-black-1000 border-b-4 !border-primary font-semibold dark:text-white' : ''}`}
        >
          راهنما
        </li>
      </ul>
      <div className="flex min-w-[251px] items-center justify-end xl:min-w-[0]">
        <Switch className="ml-2" onCheckedChange={(e) => siavash(e)} />
        <Button className="rounded-lg">ورود / ثبت نام</Button>
      </div>
    </nav>
  );
}

export default NavBar;
