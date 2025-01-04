/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if you're using TypeScript or other file extensions
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'hsl(75, 94%, 57%)',
        grey800: 'hsl(0, 0%, 12%)',
        grey700: 'hsl(0, 0%, 20%)'
      },
    },
  },
  plugins: [],
}

