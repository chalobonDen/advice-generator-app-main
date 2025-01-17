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
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        blue: {
          150: '#cce0e6',
        },

        gray: {
          50: '#a7b8c0',
          150: '#98a8b1',
          550: '#313a49',
        },
        green: {
          250: '#53ffab',
          350: '#6da696',
        },
      },
    },
  },
  plugins: [],
}
export default config
