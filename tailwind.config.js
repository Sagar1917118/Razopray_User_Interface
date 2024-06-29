/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      mullish:["Mulish","sans-serif"],
    },
    colors: {
      deepBlue:"#02042a",
      lightBlue:"#2b84ea",
      lightBlue300:"#4b94ed",
      lightBlue500:"#0b72e7",
      lightGreen:"#61cea6",
      grayText:"#818597",
      lightGray:"#e2e2e2",
      gratBlue:"#344a6c",
      deepBluehead:"#162f56",
      gray2:"#525a76",
    },
    animation:{
      'motion':'scroll-y 10s linear infinite',
    },
    keyframes :{
      'scroll-y':{
      '0%':{transform: 'translateY(0%)'},
      '100%':{transform: 'translateY(-100%)'},
    },
  },
  },
  },
  plugins: [],
}

