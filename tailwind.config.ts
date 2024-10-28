import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui-kit/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"URW Geometric"', "sans-serif"],
      },
      fontSize: {
        h1: ["128px", { lineHeight: "1.1", fontWeight: "900" }],
        h2: ["60px", { lineHeight: "1.2", fontWeight: "800" }],
        h3: ["44px", { lineHeight: "1.2", fontWeight: "800" }],
        h4: ["32px", { lineHeight: "1.3", fontWeight: "800" }],
        h5: ["24px", { lineHeight: "1.3", fontWeight: "800" }],
        h6: ["20px", { lineHeight: "1.4", fontWeight: "700" }],
        h7: ["16px", { lineHeight: "1.5", fontWeight: "600" }],
        h8: ["14px", { lineHeight: "1.5", fontWeight: "600" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#02BA39",
        "flash-green": "#CDFF3A",
        black: "#000000",
        white: "#FFFFFF",
        "super-light-grey": "#F9F9F9",
        "light-grey": "#EDEDED",
        "medium-grey": "#D1D1D1",
        gray: "#BABABA",
        "dark-gray": "#717171",
        stroke: "#00000033",
        red: "#BB2A54",
        brown: "#E8730B",
        lilac: "#9283FF",
        turquoise: "#00AF98",
      },
    },
  },
  plugins: [],
};
export default config;
