"use client";

import React, { useState, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  formatValue?: (value: number) => string;
  label?: string;
  valueDisplay?: string | number;
  showValue?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({
  className,
  formatValue,
  label,
  valueDisplay,
  showValue = true,
  ...props
}, ref) => {
  const [displayValue, setDisplayValue] = useState<string | number>(
    valueDisplay !== undefined
      ? valueDisplay
      : props.defaultValue
      ? Array.isArray(props.defaultValue)
        ? props.defaultValue[0]
        : props.defaultValue
      : 0
  );

  useEffect(() => {
    if (valueDisplay !== undefined) {
      setDisplayValue(valueDisplay);
    }
  }, [valueDisplay]);

  const handleValueChange = (values: number[]) => {
    const newValue = values[0];
    if (formatValue) {
      setDisplayValue(formatValue(newValue));
    } else {
      setDisplayValue(newValue);
    }
    
    if (props.onValueChange) {
      props.onValueChange(values);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-secondary">{label}</label>
          {showValue && <span className="text-sm font-medium text-text">{displayValue}</span>}
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-tertiary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = "Slider";

export { Slider }; 