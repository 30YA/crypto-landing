import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CardContent as CardInputs } from './card-content.component';

function OrderCard() {
  return (
    <div className="z-10 mt-10 flex justify-center">
      <Card className=" flex w-[720px] flex-col gap-8 rounded-3xl px-14 py-9">
        <CardContent className="p-0">
          <CardInputs />
        </CardContent>
        <CardFooter className="flex justify-between gap-8 p-0">
          <Button className="grow">خرید</Button>
          <Button className="grow" variant="outline">
            فروش
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OrderCard;
