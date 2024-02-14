/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        color_primary:'#000e3c',
        color_secondary:'#112bb1',
        color_light_red:  '#fe4852',
        color_red_orange: '#fc5d2c',
        color_yellow: '#ffd612',
        color_blue:'#112bb1',
        color_dark : '#000e3c',
        color_green:'#1FC157',
        color_global_secondary: '#54595F',
        text_color : '#717171',
        text_global_color:'#7A7A7A',
        heading_color:'#000e3c',
        border_color:'#3d3d3d',
        border_gray:'#e8eaf2',
        border_dark: '#242424',
        stroke_light:'#e8e8e8',
      },
      fontFamily:{
       roboto:'"Roboto", sans-serif' 
      },
  
    }
  },
  plugins: [require("daisyui")],
}

// primary-color: #000e3c;
//   --secondary-color: #112bb1;
//   --text-color: #717171;
//   --heading-color: #000e3c;
//   --light-red-color: #fe4852;
//   --red-orange-color: #fc5d2c;
//   --yellow-color: #ffd612;
//   --blue-color: #112bb1;
//   --dark-color: #000e3c;
//   --green-color: #1FC157;
//   --border-color: #3d3d3d;
//   --border-gray: #e8eaf2;
//   --border-dark: #242424;
//   --light-stroke: #e8e8e8;


// -color-primary: #6EC1E4;
//   --e-global-color-secondary: #54595F;
//   --e-global-color-text: #7A7A7A;
//   --e-global-color-accent: #61CE70;