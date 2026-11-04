/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: '#F6F7F8',
        border: '#C8CCD414',
        verticalDash: '#EDEDED',
        text: '#072635',
        activeState: '#01F0D0',
        respiratory: '#E0F3FA',
        temperature: '#FFE6E9',
        heartRate: '#FFE6F1',
        sideText: '#707070',
        verticalBorder: '#EDEDED',
        activePatient: '#D8FCF7',
        graphBg: '#F4F0FE',
        scrollSecondary: '#E3E4E6',
        borderColor: '#CBC8D4',
        ellipse1: '#E66FD2',
        ellipse2: '#8C6FE6',
      },
    },

  },
  plugins: [],
}

