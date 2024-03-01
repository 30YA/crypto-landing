import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectContentProps {
  label: string;
  value: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  selectTrigger: string;
  selectContent: SelectContentProps[];
  selectorClassName?: string;
}

const InputSelect = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      selectTrigger,
      selectContent,
      selectorClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className="dark:bg-black-1100 relative mb-2 flex items-center justify-center gap-2 rounded-md bg-gray-1000">
        <Select>
          <SelectTrigger
            className={cn(
              'absolute right-0 mr-2 h-10 w-auto min-w-[120px] max-w-[140px]',
              selectorClassName
            )}
          >
            <SelectValue placeholder={selectTrigger} />
          </SelectTrigger>
          <SelectContent>
            {selectContent.map((item, index) => {
              return (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <input
          type={type}
          dir="rtl"
          className={cn(
            'dark:bg-black-1100 flex h-14 w-full truncate rounded-lg bg-gray-1000 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-1100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-transparent dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-600',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InputSelect.displayName = 'Input';

export { InputSelect };
