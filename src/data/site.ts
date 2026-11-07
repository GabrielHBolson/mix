import type { SiteInfo } from '../types'

const address = 'Av. Brasil Centro, 178 - Centro, Passo Fundo - RS'
const mapQuery = encodeURIComponent(address)

export const site: SiteInfo = {
  title: 'Portal Passo Fundo Centro',
  email: 'interativoimpassofundo@gmail.com',
  phone: '(54) 99264-2198',
  phoneHref: 'tel:+5554992642198',
  instagram: '@institutomixpassofundo',
  instagramUrl: 'https://www.instagram.com/institutomixpassofundo',
  whatsappUrl: 'https://wa.me/5554992642198?text=Olá! Vim pelo Portal do Aluno.',
  surveyUrl: 'https://jeito.im/Pesquisa26',
  referralWhatsApp: '5554992642198',
  address,
  mapEmbedUrl: `https://www.google.com/maps?q=${mapQuery}&hl=pt-BR&z=17&output=embed`,
  mapLinkUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
}

export const homeCopy = {
  platforms: {
    title: 'Acesse sua plataforma',
    subtitle: 'Toque no card do seu curso para entrar com o seu login.',
  },
  raffles: {
    title: 'Sorteios em andamento',
    subtitle: 'Participe e concorra a prêmios no Instituto Mix.',
    applyTitle: 'Quer saber como participar?',
    applyText: 'Data e regras dos sorteios: fale com a secretaria.',
  },
  events: {
    title: 'Ações da escola',
    subtitle: 'Campanhas e datas especiais que a gente celebra por aqui.',
  },
  sectors: {
    title: 'Entre em contato',
    subtitle: 'Escolha o setor e fale com a gente por ligação ou WhatsApp.',
  },
  survey: {
    title: 'Deixe seu feedback',
    subtitle:
      'Conte como está sendo a sua experiência com os cursos. Você pode enviar um elogio, uma sugestão ou uma reclamação.',
    badge: 'Aberta até 30 de novembro',
    cardTitle: 'Pesquisa de satisfação 2026/2',
    cardText:
      'Leva poucos minutos. Responda, conte o que você acha dos cursos e concorra a um prêmio.',
    periodStart: { day: '01', month: 'Novembro' },
    periodEnd: { day: '30', month: 'Novembro' },
    prizeLabel: 'Participe e concorra a 1 caixa de som',
    prize: 'JBL GO 2',
    image: '/images/pesquisa_satisfacao_2026_2.webp',
    imageAlt:
      'Cartaz da Pesquisa de Satisfação 2026/2: de 1º a 30 de novembro, participe e concorra a uma caixa de som JBL GO 2',
    buttonLabel: 'Responder pesquisa',
  },
}

export const rulesCopy = {
  title: 'Regras',
  subtitle: 'Combinados para todos aproveitarem bem as aulas.',
}

export const jobsCopy = {
  title: 'Trabalhe conosco',
  subtitle: 'Oportunidades para fazer parte da equipe do Instituto Mix.',
  openingsTitle: 'Vagas disponíveis',
  generalTitle: 'Requisitos gerais',
  apply: {
    title: 'Quer saber mais ou se candidatar?',
    text: 'Fale com a secretaria.',
  },
}
export const referralsCopy = {
  eyebrow: 'Indique um amigo',
  title: 'Indicações',
  subtitle:
    'Indique seus colegas: eles ganham um curso gratuito e você ganha desconto quando eles se matriculam em um curso pago.',
}
