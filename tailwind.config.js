/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',

        'secondary': 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',

        // Para cores de elementos, vou seguir o padrão: cor-elemento
        'gray-border': 'var(--color-borders)',

        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'danger': 'var(--color-danger)',
      },
    },
  },
  plugins: [],
};