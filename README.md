# Controle de Gastos e Investimentos

Painel pessoal de finanças em um único arquivo HTML: gastos mensais com orçamento por categoria, renda fixa (aportes, resgates e saldos mensais), matriz mensal de lucro, dividendos e consolidado por banco.

## Como usar

Abra o `index.html` no navegador ou acesse a versão publicada no GitHub Pages.

Os dados ficam salvos **no navegador de quem usa** (localStorage). Nada é enviado para servidor, e quem abrir o site vê o próprio painel, nunca os seus números. Para levar os dados para outro aparelho, use **Exportar backup** e **Importar backup**.

## Como alterar

O código-fonte fica em `src/`. O `index.html` é gerado pelo build, que compila o Tailwind e embute o CSS:

```bash
node src/build.mjs
```

Não edite o `index.html` diretamente: a mudança se perde no próximo build.
