import type { EventCard } from '../types'

export const events: EventCard[] = [
  {
    title: 'Setembro Amarelo',
    badge: 'Mês de conscientização',
    image: '/images/setembro_amarelo.webp',
    imageAlt: 'Campanha Setembro Amarelo: valorização da vida e prevenção ao suicídio',
    highlight: 'Você não está só. Pedir ajuda é um ato de coragem.',
    text: 'O Setembro Amarelo é a campanha de prevenção do suicídio e de valorização da vida. Falar sobre saúde mental, sem julgamento e sem tabu, salva vidas. Tristeza, ansiedade e cansaço acontecem com muita gente, e existe apoio.',
    points: [
      { emoji: '🗣️', label: 'Escute com atenção e sem julgar' },
      { emoji: '🤝', label: 'Mostre que você se importa e está por perto' },
      { emoji: '🙏', label: 'Incentive a busca por ajuda profissional' },
    ],
    help: {
      boxText: 'Precisa conversar agora? Ligue para o CVV, o atendimento é 24 horas e gratuito.',
      buttonLabel: 'Ligar 188',
      buttonHref: 'tel:188',
      note: 'Em emergência, ligue 192 (SAMU). Na escola, você também pode falar com o(a) professor(a) ou com a coordenação pedagógica.',
    },
  },
  {
    title: 'Dia Farroupilha',
    badge: '20 de setembro',
    image: '/images/gaucho_mes.webp',
    imageAlt: 'Dia Farroupilha: tradição e cultura gaúcha no Rio Grande do Sul',
    highlight: 'Dia do Gaúcho: a história e a cultura do Rio Grande do Sul.',
    text: 'Em 20 de setembro de 1835 começou a Revolução Farroupilha, que durou dez anos e marcou a história do estado. A data é lembrada todos os anos, e a Semana Farroupilha, de 14 a 20 de setembro, enche o Rio Grande do Sul de festa e tradição.',
    points: [
      { emoji: '🧉', label: 'Chimarrão, churrasco e o café de galpão' },
      { emoji: '🎵', label: 'Música e dança tradicionalista, como no CTG' },
      { emoji: '🏇', label: 'Trajes típicos: bombacha e vestido de prenda' },
    ],
  },
]