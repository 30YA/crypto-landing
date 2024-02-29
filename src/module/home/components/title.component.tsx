import React from 'react';

import Logo from '~/assets/images/svg/base-logo.svg';

function Title() {
  return (
    <div className="z-10 flex flex-col items-center justify-center gap-6 font-semibold">
      <Logo />
      <h1 className="text-2xl">
        صرافی فارسی مرجع خرید و فروش رمزارز تتر و ترون
      </h1>
    </div>
  );
}

export default Title;
