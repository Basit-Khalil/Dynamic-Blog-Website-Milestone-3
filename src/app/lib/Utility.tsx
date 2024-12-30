import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function that combines clsx and tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs)); // Merge the output of clsx with tailwind-merge
}

