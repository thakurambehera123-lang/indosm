import React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = 1, children, className }: HeadingProps) {
  // Map dynamic semantic element tags conditionally based on programmatic logic input
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  // Visual styling variants mapped exactly to structural content levels
  const styles = {
    1: 'text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl',
    2: 'text-3xl font-bold tracking-tight sm:text-4xl',
    3: 'text-2xl font-bold tracking-tight',
    4: 'text-xl font-semibold tracking-tight',
    5: 'text-lg font-semibold tracking-tight',
    6: 'text-base font-semibold tracking-tight',
  };

  return (
    <Tag className={cn('text-[var(--foreground)] font-sans', styles[level], className)}>
      {children}
    </Tag>
  );
}