'use client';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import Logo from '~/assets/images/svg/logo.svg';
import DarkLogo from '~/assets/images/svg/logo-dark.svg';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>('home');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className=" z-50 flex h-[88px] w-full items-center justify-between overflow-hidden bg-white px-[120px] shadow-[0_8px_40px_0_#00000010] dark:bg-black-1200 dark:shadow-[0_8px_40px_0_#00000050;] md:px-4">
      <div className="shrink">
        {darkMode ? (
          <DarkLogo className="h-full w-[251px] sm:w-[200px]" />
        ) : (
          <Logo className="h-full w-[251px] sm:w-[200px]" />
        )}
      </div>
      <ul className="mx-2 flex h-full w-[800px] justify-center gap-[30px] xl:hidden">
        <li
          onClick={() => handleItemClick('home')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'home' ? 'border-b-4 !border-primary font-semibold text-black-1000 dark:text-white' : ''}`}
        >
          خانه
        </li>
        <li
          onClick={() => handleItemClick('aboutUs')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'aboutUs' ? 'border-b-4 !border-primary font-semibold text-black-1000 dark:text-white' : ''}`}
        >
          درباره ما
        </li>
        <li
          onClick={() => handleItemClick('rules')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'rules' ? 'border-b-4 !border-primary font-semibold text-black-1000 dark:text-white' : ''}`}
        >
          قوانین استفاده
        </li>
        <li
          onClick={() => handleItemClick('help')}
          className={`flex h-full w-[120px] grow cursor-pointer items-center justify-center border-b-4 border-transparent text-base text-gray-default ${activeItem === 'help' ? 'border-b-4 !border-primary font-semibold text-black-1000 dark:text-white' : ''}`}
        >
          راهنما
        </li>
      </ul>
      <div className="flex min-w-[251px] justify-end xl:min-w-[0]">
        <Button className="rounded-lg" onClick={toggleDarkMode}>
          ورود / ثبت نام
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
