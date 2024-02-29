import React from 'react';

import Coin1 from '~/assets/images/svg/coin-1.svg';
import Coin2 from '~/assets/images/svg/coin-2.svg';
import Coin3 from '~/assets/images/svg/coin-3.svg';
import Coin4 from '~/assets/images/svg/coin-4.svg';

import Ellipse1 from '~/assets/images/svg/ellipse.svg';
import Ellipse2 from '~/assets/images/svg/ellipse-2.svg';
import Ellipse3 from '~/assets/images/svg/ellipse-3.svg';

function AnimatePics() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full">
      <div className="animate-siavash2 absolute -top-5 right-[7%] animate-siavash">
        <Coin1 className="animate-siavashhhh" />
      </div>
      <div className="absolute right-[12%] top-[250px] animate-siavash">
        <Coin2 className="animate-siavashhhh" />
      </div>
      <div className="absolute left-[10%] top-[80px] animate-siavash">
        <Coin3 className="animate-siavashhhh" />
      </div>
      <div className="absolute left-[14%] top-[270px] animate-siavash">
        <Coin4 className="animate-siavashhhh" />
      </div>
      <div className="absolute left-0 top-0 -z-20">
        <Ellipse1 />
      </div>
      <div className="absolute right-10 top-0 -z-20">
        <Ellipse2 />
      </div>
      <div className="absolute bottom-0 right-10 animate-siavash">
        <Ellipse3 />
      </div>
    </div>
  );
}

export default AnimatePics;
