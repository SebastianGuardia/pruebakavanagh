module.exports = {
  content: [
    'node_modules/flowbite-react/tw-elements/node_modules/dist/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280x',
        '2xl': '1536px',
      },
      backgroundImage:{
        'hero-pattern': 'url("./components/img/prueba.png")',
        'footer-patter': 'url("./components/img/navbarprueba.jpg")',
        'why-pattern':'url("./components/img/Decore.png")',
        'company-bg':'url("./components/img/companybackground.png")',
        'card-pattern':'url("./components/img/whybackground.png")', 
        'contact-background':'url("./components/img/contactbg.png")',  
        'testimonials-bg':'url("./components/img/testimonialsbackground.png")',     
      },
      fontFamily:{
        'body': ['Poppins', 'sans-serif'] ,
      },
    },
  plugins: [ require('tw-elements/dist/plugin')
],
}
