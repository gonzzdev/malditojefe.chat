import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#16161E',
        customWhite:'#E5E4F9',
        customRed:'#F4222D',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient-empty-achievement': 'linear-gradient(0deg, #E5E4F9, #16161E)',
        'custom-gradient-achievement': 'linear-gradient(0deg, #F4222D, #16161E)'
      },
    },
  },
  plugins: [],
};
export default config;
