import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(currency: string){
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
});
}