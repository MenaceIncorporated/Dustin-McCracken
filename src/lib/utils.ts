import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export function formatAddress(address: string, city: string, state: string, zip: string): string {
  return `${address}, ${city}, ${state} ${zip}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function getImagePlaceholder(index: number): string {
  // Array of placeholder colors
  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
    'bg-gray-200',
  ];
  
  return colors[index % colors.length];
} 