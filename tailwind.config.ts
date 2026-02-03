import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        'full': '0',
      },
      colors: {
        'architectural': {
          'paper': '#FFFFFF',
          'white': '#FFFFFF',
          'tertiary': '#FAFAFA',
          'ink': '#0A0A0A',
          'accent': '#1A1A1A',
          'graphite': '#666666',
          'tertiary-text': '#999999',
          'subtle': '#D4D4D4',
          'gold': '#C4A77D',
        }
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        'micro': '8px',
        'small': '16px',
        'medium': '32px',
        'large': '64px',
        'xlarge': '128px',
      },
    },
  },
  plugins: [],
};

export default config;