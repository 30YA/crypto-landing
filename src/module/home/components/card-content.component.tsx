import React from 'react';

import { Input } from '@/components/ui/input';
import { InputSelect } from '@/components/ui/input-select';

export function CardContent() {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <p className="text-sm font-medium">مبلغ (تومان)</p>
        <p className="text-sm font-normal text-gray-1100">
          1 ترون = 56,450 تومان
        </p>
      </div>
      <InputSelect
        className="text-center"
        placeholder="مبلغ مورد نظر جهت خرید / فروش تتر را وارد کنید"
        selectTrigger="ارز"
        // here we can also pass a icon for every content but for now i used emoji
        selectContent={[
          { label: '🥲 تتر', value: 'value1' },
          { label: '😎 بیتکوین', value: 'value2' },
          { label: '🔥 ترون', value: 'value3' },
        ]}
      />
      <div className="mb-4 mt-8 flex justify-between">
        <p className="text-sm font-medium">مقدار</p>
        <p className="text-sm font-normal text-gray-1100">حداکثر ۵,۰۰۰ تتر</p>
      </div>
      <Input className="text-center" placeholder="مقدار تتر قابل خرید / فروش" />
      <div className="mt-4 flex justify-between">
        <p className="text-sm font-normal text-gray-1100">
          نرخ تغییر در ۲۴ ساعت:
        </p>
        <p className="text-sm font-normal text-red-500">٪ ۱.۳۳</p>
      </div>
    </div>
  );
}
