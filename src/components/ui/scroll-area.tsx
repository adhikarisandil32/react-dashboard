import { type HTMLAttributes } from 'react';
import { twMerge as tw } from 'tailwind-merge';

export function ScrollArea({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={tw('relative overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ScrollBar() {
  return (
    <div className="w-2 absolute top-0 right-0 bottom-0 rounded-t-full rounded-b-full border border-white">
      <div className="absolute h-12 w-1.5 rounded-t-full rounded-b-full bg-gray-400"></div>
    </div>
  );
}
