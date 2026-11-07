import type { Raffle } from '../types'

export const raffles: Raffle[] = [
  {
    title: 'Rota Premiada',
    badge: 'Sorteio em dezembro',
    highlight: 'Scooter elétrica ou R$ 10.800,00 em dinheiro.',
    text: 'O sorteio acontece em dezembro. Veja como concorrer:',
    listTitle: 'Requisitos para concorrer',
    list: ['Antecipe suas parcelas', 'Quite o seu curso', 'Ou se matricule em um curso novo'],
    note: 'Para mais informações, consulte a secretaria. Imagem meramente ilustrativa.',
    featured: true,
    image: '/images/moto_para_sorteio.webp',
    imageAlt:
      'Cartaz da Rota Premiada: scooter elétrica ou R$ 10.800,00 em dinheiro',
  },
]