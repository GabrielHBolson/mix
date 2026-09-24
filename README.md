# Portal Passo Fundo Centro

Portal do aluno do Instituto Mix. Vite + React + TypeScript + Tailwind CSS v4, sem backend — todo o conteúdo vem de arquivos de dados em `src/data`.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (gera ./dist)
npm run lint     # checagem de lint
npm run preview  # serve o build de produção localmente
```

## Como editar o conteúdo

Todo o texto e os links ficam em arquivos tipados em `src/data`. Edite sem mexer nos componentes:

| Arquivo | o que contém |
| --- | --- |
| `site.ts` | nome do site, contatos do rodapé, link da pesquisa, link/número do WhatsApp e textos das seções |
| `platforms.ts` | cards da grade "Acesse sua plataforma" |
| `money.ts` | bloco Money Mix |
| `raffles.ts` | sorteios (Rota Premiada, Kit mateiro etc.) |
| `events.ts` | campanhas como Setembro Amarelo e Dia Farroupilha |
| `sectors.ts` | cards de setores (Secretaria, Financeiro, Coordenação) |
| `rules.ts` | lista de regras da página Regras |
| `jobs.ts` | estágio, vagas e requisitos da página Trabalhe conosco |

Os tipos das interfaces estão em `src/types.ts`.

## Imagens

Coloque os arquivos em `public/images`:

- `logo_instituto_mix.png` — logo completa (usada no banner)
- `moto_para_sorteio.webp` — moto da Rota Premiada (referenciado em `src/data/raffles.ts`)
- `sorteio_mateira.jpeg` — kit mateiro (referenciado em `src/data/raffles.ts`)
- `setembro_amarelo.webp` — campanha (referenciado em `src/data/events.ts`)
- `gaucho_mes.webp` — Dia Farroupilha (referenciado em `src/data/events.ts`)

Para trocar a foto de um card de plataforma, adicione a propriedade opcional `image` no item em `platforms.ts`.

## Publicar

O site usa HashRouter (rotas `#/`, `#/regras`, `#/trabalhe-conosco`), então não precisa de configuração de rotas no servidor.

**Netlify:** importe o repositório, com `build command` = `npm run build` e `publish directory` = `dist`.

**Vercel:** importe o repositório; o framework Vite é detectado automaticamente (`build` = `npm run build`, output = `dist`).