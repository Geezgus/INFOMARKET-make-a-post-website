/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'chat-pattern': 'url(./images/chat-dots-bold.svg)',
      },
    },
  },
  plugins: [],
}
