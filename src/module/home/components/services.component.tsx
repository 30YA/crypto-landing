import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import CustomerService from '~/assets/images/svg/customer-service-icon.svg';
import LeftRight from '~/assets/images/svg/arrow-left-right-icon.svg';
import SecurePayment from '~/assets/images/svg/secure-payment-icon.svg';
import HandCoin from '~/assets/images/svg/hand-coin-icon.svg';

function Services() {
  return (
    <div className="z-10 mt-14 flex w-full justify-center gap-9 overflow-hidden">
      <Card className="shrink-1 flex min-h-28 max-w-[250px] grow flex-col justify-center gap-2 rounded-xl">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
          <CustomerService />
          <p>پشتیبانی ۲۴ ساعته</p>
        </CardContent>
      </Card>
      <Card className="shrink-1 flex min-h-28 max-w-[250px] grow flex-col justify-center gap-2 rounded-xl">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
          <LeftRight />
          <p>معامله خودکار</p>
        </CardContent>
      </Card>
      <Card className="shrink-1 flex min-h-28 max-w-[250px] grow flex-col justify-center gap-2 rounded-xl">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
          <SecurePayment />
          <p>احراز هویت سریع</p>
        </CardContent>
      </Card>
      <Card className="shrink-1 flex min-h-28 max-w-[250px] grow flex-col justify-center gap-2 rounded-xl">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
          <HandCoin />
          <p>قیمت ثابت و کارمزد کم</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Services;
