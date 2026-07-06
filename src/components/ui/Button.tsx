import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  
  // Base styling rules shared across all structural variants
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer';
  
  // Design variations mapping definitions
  const variants = {
    primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 shadow-sm',
    secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-95',
    outline: 'border border-[var(--border)] bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]',
    ghost: 'bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]',
  };

  // Dimensional size constraint maps
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-11 px-8 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}