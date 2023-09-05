import type { Config } from "tailwindcss";
import twTypography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              paddingLeft: '0',
            },
          },
        },
        xl: {
          css: {
            h2: {
              fontWeight: '400',
            },
            ul: {
              paddingLeft: '0',
            }
          },
        },
      },
    },
  },
  plugins: [
    twTypography,
  ],
} satisfies Config;
