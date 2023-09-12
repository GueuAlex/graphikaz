/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4B3F",
        secondary: "#5BBB7B",
        tertiary: "#ffecec",
        tertiary2: "#5492d6",
       /*  "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3", */
      },
      
      backgroundImage: {
        "banner-img": "url('/public/banner3.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
