/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";


export default {
  content: [
    "./index.htnml",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}