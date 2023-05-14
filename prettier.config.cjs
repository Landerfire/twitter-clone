/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  printWidth: 90,
};

module.exports = config;
