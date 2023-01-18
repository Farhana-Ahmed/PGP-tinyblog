/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.squarespace-cdn.com/content/v1/5e851d0edecd980ff18aa3e5/a471cb78-d5e2-44b5-be7d-c5c1501737af/Go+Tiny+Blog+Logo?format=1500w')"
       
      }
    },
  },
  plugins: [],
}
