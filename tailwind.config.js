/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        // BuyYou 라이트모드 키컬러: HSL 220 85% 42% = #1047C2 (Deep Blue)
        primary: {
          50:  '#eef3ff',
          100: '#dbe5ff',
          200: '#b8ccff',
          300: '#8aaaff',
          400: '#5680f5',
          500: '#2c63d3',
          600: '#1047C2', // base
          700: '#0d3aa3',
          800: '#0b3084',
          900: '#0a2570',
        },
        // 인사이트 카드 배경: 소프트 블루 HSL 210 35% 88% = #d3dde9 계열
        'card-soft-blue': '#d3dde9',
        // 다크 토큰은 더 이상 사용하지 않음 (라이트 테마 전환)
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
