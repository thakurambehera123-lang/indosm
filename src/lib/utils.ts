import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines dynamic Tailwind class names cleanly, resolving style conflicts automatically.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}