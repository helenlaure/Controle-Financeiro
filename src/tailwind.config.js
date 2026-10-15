/** Configuração do Tailwind usada por build.mjs */
module.exports = {
  content: [__dirname + '/painel.html'],
  darkMode: 'class',
  theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] } } },
};
