'use client';
import React from 'react';
import Image from 'next/image';

import Ellipse1 from '~/assets/images/svg/ellipse.svg';
import Ellipse2 from '~/assets/images/svg/ellipse-2.svg';
import Ellipse3 from '~/assets/images/svg/ellipse-3.svg';

function AnimatePics() {
  return (
    <div className="absolute left-0 top-0 w-full">
      <Image
        src="./assets/images/png/coin-1.png"
        alt="coin"
        width={307}
        height={307}
        className="animate-UpDownSpin absolute -top-5 right-[7%] z-20 dark:hidden md:hidden"
      />
      <Image
        src="./assets/images/png/coin-1-dark.png"
        alt="coin"
        width={307}
        height={307}
        className="animate-UpDownSpin absolute -top-5 right-[7%] z-20 hidden dark:block dark:md:hidden"
      />
      <Image
        src="./assets/images/png/coin-2.png"
        alt="coin"
        width={215}
        height={215}
        className="animate-UpDownSpin absolute right-[12%] top-[250px] z-20 dark:hidden md:hidden"
      />
      <Image
        src="./assets/images/png/coin-2-dark.png"
        alt="coin"
        width={215}
        height={215}
        className="animate-UpDownSpin absolute right-[12%] top-[250px] z-20 hidden dark:block dark:md:hidden"
      />
      <Image
        src="./assets/images/png/coin-3.png"
        alt="coin"
        width={178}
        height={180}
        className="animate-UpDownSpin absolute left-[10%] top-[80px] z-20 dark:hidden md:hidden"
      />
      <Image
        src="./assets/images/png/coin-3-dark.png"
        alt="coin"
        width={178}
        height={180}
        className="animate-UpDownSpin absolute left-[10%] top-[80px] z-20 hidden dark:block dark:md:hidden"
      />
      <Image
        src="./assets/images/png/coin-4.png"
        alt="coin"
        width={135}
        height={138}
        className="animate-UpDownSpin absolute left-[14%] top-[320px] z-20 dark:hidden md:hidden"
      />
      <Image
        src="./assets/images/png/coin-4-dark.png"
        alt="coin"
        width={135}
        height={138}
        className="animate-UpDownSpin absolute left-[14%] top-[320px] z-20 hidden dark:block dark:md:hidden"
      />

      <Ellipse1 className="absolute left-0 top-0 z-10" />
      <Ellipse2 className="absolute right-0 top-0 z-10" />
      <Ellipse3 className="absolute bottom-0 left-0 z-10" />
    </div>
  );
}

export default AnimatePics;
