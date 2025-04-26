'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variant === 'default' && 'bg-[#E31837] text-white hover:bg-[#C4142D]',
          variant === 'outline' && 'border border-gray-300 bg-white hover:bg-gray-50',
          variant === 'secondary' && 'bg-white text-[#E31837] hover:bg-gray-50',
          size === 'default' && 'h-10 py-2 px-4',
          size === 'sm' && 'h-8 px-3 text-xs',
          size === 'lg' && 'h-12 px-8 text-base',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button } 