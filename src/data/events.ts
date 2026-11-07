import type { EventCard } from '../types'

export const events: EventCard[] = [
  {
    title: 'Novembro Azul',
    badge: 'Mês de conscientização',
    image: '/images/novembro_azul.webp',
    poster: true,
    imageAlt:
      'Cartaz do Novembro Azul: laço azul com a mensagem Cuide-se. Previna-se. Faça o exame. A saúde também é coisa de homem!',
    highlight: 'Cuidar da saúde também é coisa de homem.',
    text: 'O Novembro Azul é a campanha de conscientização sobre a saúde do homem e a prevenção do câncer de próstata. Quando descoberto cedo, as chances de cura são muito maiores. Converse com quem você ama e incentive a ida ao médico.',
    points: [
      { emoji: '🩺', label: 'Faça check-ups regulares e converse com o médico' },
      { emoji: '🎂', label: 'A partir dos 50 anos (ou 45, com histórico na família), procure avaliação' },
      { emoji: '🥗', label: 'Alimentação equilibrada, atividade física e menos álcool e cigarro' },
    ],
    help: {
      boxText:
        'Tem dúvidas ou quer saber onde fazer os exames? Procure a Unidade Básica de Saúde (UBS) mais próxima ou ligue para o Disque Saúde.',
      buttonLabel: 'Ligar 136',
      buttonHref: 'tel:136',
      note: 'O atendimento pelo SUS é gratuito. Compartilhe essa informação com os homens da sua família.',
    },
  },
]
