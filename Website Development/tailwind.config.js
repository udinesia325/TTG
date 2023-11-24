/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        "primary":"#353535",
        "success":"#6EBE45",
        "grey":"#5B5B5B",
        "light":"#F1F2F6"
      },
      container:{
        center:true
      },
      fontFamily:{
        dobro:['Dobro Fat'],
      }
    },
  },
  plugins: [],
}

