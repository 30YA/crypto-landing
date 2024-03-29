'use client';
import React from 'react';

import Logo from '~/assets/images/svg/base-logo-title.svg';
import LogoDark from '~/assets/images/svg/base-logo-dark-title.svg';

function Title() {
  return (
    <div className="z-30 flex flex-col items-center justify-center gap-6 font-semibold">
      <Logo className="z-30 dark:hidden" />
      <LogoDark className="z-30 hidden dark:block" />
      <h1 className="text-black-1000 z-30 text-center text-2xl dark:text-white">
        صرافی فارسی مرجع خرید و فروش رمزارز تتر و ترون
      </h1>
    </div>
  );
}

export default Title;
