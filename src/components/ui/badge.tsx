import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge as tw } from 'tailwind-merge';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent transition-colors bg-rose-500/10 text-rose-500 hover:bg-rose-500/20',
        success:
          'border-transparent transition-colors bg-green-500/10 text-green-500 hover:bg-green-500/20',
        warning:
          'border-transparent transition-colors bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
        destructiveBorder:
          'border-transparent transition-colors bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border border-rose-300 dark:border-muted',
        outline: 'text-foreground',
        active:
          'border-transparent transition-colors bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
        activeBorder:
          'border-transparent transition-colors bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-300 dark:border-muted',
        accentBorder:
          'border-transparent text-brand-navbar-light/80 transition-colors bg-brand-navbar-light/10 hover:bg-brand-navbar-light-500/20 border border-brand-navbar-light/80 dark:border-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={tw(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
