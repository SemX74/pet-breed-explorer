import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-dark": "#493628",
        brown: "#AB886D",
        "brown-light": "#D6C0B3",
        "brown-grey": "#E4E0E1",
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
