// Gera ../index.html a partir de painel.html, com o CSS do Tailwind compilado e embutido.
// Uso: node src/build.mjs [caminho-da-versao-para-o-visualizador.html]
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.join(dir, '..');
const tmp = path.join(dir, '.tailwind.tmp.css');

execSync(`npx --yes tailwindcss@3.4.17 -c "${path.join(dir, 'tailwind.config.js')}" -i "${path.join(dir, 'entrada.css')}" -o "${tmp}" --minify`,
  { cwd: dir, stdio: ['ignore', 'ignore', 'inherit'] });
const css = readFileSync(tmp, 'utf8');
rmSync(tmp);

const html = readFileSync(path.join(dir, 'painel.html'), 'utf8').replace('/*TAILWIND*/', () => css);
writeFileSync(path.join(raiz, 'index.html'), html);
console.log(`index.html gerado (${(html.length / 1024).toFixed(0)} KB, CSS ${(css.length / 1024).toFixed(0)} KB)`);

// Versão para o visualizador de Artifacts: sem doctype/html/head/body próprios
const saida = process.argv[2];
if (saida) {
  let a = html;
  for (const t of ['<!doctype html>\n', '<html lang="pt-BR">\n', '<head>\n', '</head>\n', '<body>\n', '</body>\n', '</html>\n',
    '<meta charset="utf-8">\n', '<meta name="viewport" content="width=device-width, initial-scale=1">\n']) a = a.replace(t, '');
  writeFileSync(saida, a);
  console.log('versão do visualizador gerada em', saida);
}
