import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#112E53', // Dark navy blue (from Buy With Us card)
          light: '#3E5A82',
          dark: '#0A1B31',
        },
        secondary: {
          DEFAULT: '#6B7D96', // Slate blue/gray (from Sell With Us card)
          light: '#8A99AF',
          dark: '#50607A',
        },
        tertiary: {
          DEFAULT: '#D8E1E9', // Light blue-gray (from Find an Agent card)
          light: '#EBF0F4',
          dark: '#B8C6D3',
        },
        text: {
          DEFAULT: '#333333', // Dark text
          secondary: '#666666', // Secondary text
          light: '#999999', // Light text
        },
        background: {
          DEFAULT: '#FFFFFF', // White background
          light: '#F7F9FB', // Light off-white
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 