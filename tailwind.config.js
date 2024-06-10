/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        toggledark:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        Instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        YouTube: "hsl(348, 97%, 39%)",
        togglelight: "hsl(230, 22%, 74%)",
        vedarkblueT: "hsl(232, 19%, 15%)",
        darkdesblue: "hsl(228, 28%, 20%)",
        white: "hsl(0, 0%, 100%)",
        vedarkblueB: "hsl(230, 17%, 14%)",
        desBlue: "hsl(228, 34%, 66%)",
        vepaleblue: "hsl(225, 100%, 98%)",
        ligrayblue: "hsl(227, 47%, 96%)",
        dagrayblue: "hsl(228, 12%, 44%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        bodyCopy: "14px",
      },
    },
  },
  plugins: [],
};
