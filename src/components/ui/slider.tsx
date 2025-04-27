'use client'

import React, { useState } from 'react';
import { Slider as HeadlessSlider } from '@headlessui/react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  formatValue?: (value: number) => string;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  label,
  formatValue = (val) => val.toString(),
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          <span className="text-sm text-gray-500">{formatValue(value)}</span>
        </div>
      )}
      <HeadlessSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="relative h-2 w-full rounded-full bg-gray-200"
      >
        <HeadlessSlider.Track className="absolute h-2 w-full rounded-full bg-gray-200">
          <HeadlessSlider.Range className="absolute h-2 rounded-full bg-primary" />
        </HeadlessSlider.Track>
        <HeadlessSlider.Thumb className="relative h-5 w-5 rounded-full bg-white shadow-lg ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
      </HeadlessSlider>
    </div>
  );
}; 