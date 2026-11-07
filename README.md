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
| `site.ts` | nome do site, contatos do rodapé, link da pesquisa, WhatsApp (secretaria e indicações), endereço público para o QR code (`publicUrl`) e textos das páginas |
| `platforms.ts` | cards da grade "Acesse sua plataforma" |
| `raffles.ts` | sorteios em andamento (Rota Premiada) |
| `events.ts` | campanhas do mês (Novembro Azul) |
| `sectors.ts` | cards de setores (Secretaria, Financeiro, Coordenação) |
| `rules.ts` | lista de regras da página Regras |
| `jobs.ts` | estágio, vagas e requisitos da página Trabalhe conosco |
| `referrals.ts` | recompensas por matrícula da página Indicações |

Os tipos das interfaces estão em `src/types.ts`.

## Imagens

Coloque os arquivos em `public/images`:

- `logo_instituto_mix.png` — logo completa (usada no banner)
- `moto_para_sorteio.webp` — moto da Rota Premiada (referenciado em `src/data/raffles.ts`)
- `novembro_azul.webp` — campanha Novembro Azul (referenciado em `src/data/events.ts`)
- `pesquisa_satisfacao_2026_2.webp` — cartaz da pesquisa (referenciado em `src/data/site.ts`)

Para trocar a foto de um card de plataforma, adicione a propriedade opcional `image` no item em `platforms.ts`.

## Publicar

O site usa HashRouter (rotas `#/`, `#/regras`, `#/trabalhe-conosco`, `#/indicacoes`), então não precisa de configuração de rotas no servidor.

**Netlify:** importe o repositório, com `build command` = `npm run build` e `publish directory` = `dist`.

**Vercel:** importe o repositório; o framework Vite é detectado automaticamente (`build` = `npm run build`, output = `dist`).
**QR code:** o QR code do topo da página inicial usa o endereço em que o site estiver aberto. Para fixar um endereço (por exemplo, um domínio próprio), preencha `publicUrl` em `src/data/site.ts`.
