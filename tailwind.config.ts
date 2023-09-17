import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fb4051",
          secondary: "#0D0D0D",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#ECF0F3",
          success: "#521647",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        night: {
          primary: "#11DEDE",
          secondary: "#ffff",
          neutral: "#F3F4F6",
          "base-100": "#0A0F1E",
          info: "#111827",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
