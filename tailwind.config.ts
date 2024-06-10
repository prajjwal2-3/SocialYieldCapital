import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      
    },
    extend: {
      screens: {
        '3xl': '1700px',
        '4xl':'2000px'
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        "Brand/Primary":"#507B8B",
        "black":"#000000",
        "Brand/Light":"#8aa7b1",
        "Brand/Dark":"#395763",
        "Sur-Gradient":"#507b8b",
        "Sur-White":"#ffffff",
        "Border":"#538586",
        "Sur-light-100":"#f6f8f9",
        "Sur-light-200":"#e3eaec",
        "Sur-light-300":"#D3DEE2",
        "Sur-light-400":"#C4D2D8",
        "Primary":"#e6e6e6",
        "L-Primary":"#1c2b31",
        "L-Secondary":"#6b7579",
        "D-Primary":"#ffffff",
        "D-Secondary":"#C9D6D8"
      },
      
      keyframes: {
        orbit: {
          "0%": {
              transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
              transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
      },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        shimmer2: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "200% 0",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        marquee: "marquee 60s linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shimmer: "shimmer 2s linear infinite",
        shimmer2:"shimmer2 2s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config