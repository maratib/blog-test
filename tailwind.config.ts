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
        'app-border': '#D0D5DD',
        'navy-blue-primary': '#294F74',
        'navy-blue-100': '#EDF2F5',
        'light-gray': '#f8f8f8'
      },
      boxShadow: {
        'footer-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'banner-card': '0px 5.342px 33.386px 0px rgba(0, 0, 0, 0.08);'
      },
      letterSpacing: {
        'thinnest': '0.24px'
      }
    },
  },
  plugins: [],
};
export default config;
