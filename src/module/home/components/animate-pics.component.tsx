import React from 'react';

import Coin1 from '~/assets/images/svg/coin-1.svg';
import Coin2 from '~/assets/images/svg/coin-2.svg';
import Coin3 from '~/assets/images/svg/coin-3.svg';
import Coin4 from '~/assets/images/svg/coin-4.svg';

import Coin1Dark from '~/assets/images/svg/coin-1-dark.svg';
import Coin2Dark from '~/assets/images/svg/coin-2-dark.svg';
import Coin3Dark from '~/assets/images/svg/coin-3-dark.svg';
import Coin4Dark from '~/assets/images/svg/coin-4-dark.svg';

import Ellipse1 from '~/assets/images/svg/ellipse.svg';
import Ellipse2 from '~/assets/images/svg/ellipse-2.svg';
import Ellipse3 from '~/assets/images/svg/ellipse-3.svg';

function AnimatePics() {
  return (
    <div className="absolute left-0 top-0 w-full">
      <Coin1 className="absolute -top-5 right-[7%] z-20 animate-UpDownSpin dark:hidden md:hidden" />
      <Coin1Dark className="absolute -top-5 right-[7%] z-20 hidden animate-UpDownSpin dark:block dark:md:hidden" />

      <Coin2 className="absolute right-[12%] top-[250px] z-20 animate-UpDownSpin dark:hidden md:hidden" />
      <Coin2Dark className="absolute right-[12%] top-[250px] z-20 hidden animate-UpDownSpin dark:block dark:md:hidden" />

      <Coin3 className="absolute left-[10%] top-[80px] z-20 animate-UpDownSpin dark:hidden md:hidden" />
      <Coin3Dark className="absolute left-[10%] top-[80px] z-20 hidden animate-UpDownSpin dark:block dark:md:hidden" />

      <Coin4 className="absolute left-[14%] top-[320px] z-20 animate-UpDownSpin dark:hidden md:hidden" />
      <Coin4Dark className="absolute left-[14%] top-[320px] z-20 hidden animate-UpDownSpin dark:block dark:md:hidden" />

      <Ellipse1 className="absolute left-0 top-0 z-10" />
      <Ellipse2 className="absolute right-0 top-0 z-10" />
      <Ellipse3 className="absolute bottom-0 left-0 z-10" />
    </div>
  );
}

export default AnimatePics;
