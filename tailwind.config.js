/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './app/**/*.{ts,tsx}'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    fontFamily: {
      primary: 'Outfit'
    },
    colors: {
      primario: 'var(--primario)',
      negro: 'var(--negro)',
      primary: {
        // Customize it on globals.css :root
        50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
        100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
        200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
        300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
        400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
        500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
        600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
        700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
        800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
        900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)'
      },
      dark: '#262626'
    }
  }
};
