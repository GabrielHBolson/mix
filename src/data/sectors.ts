import type { Sector } from '../types'

export const sectors: Sector[] = [
  {
    name: 'Secretaria',
    phone: '(54) 99264-2198',
    phoneHref: 'tel:+5554992642198',
    whatsappHref: 'https://wa.me/5554992642198?text=Olá! Vim pelo Portal do Aluno.',
    hasWhatsApp: true,
    accent: 'red',
  },
  {
    name: 'Setor financeiro',
    phone: '(54) 8166-0062',
    phoneHref: 'tel:+555481660062',
    hasWhatsApp: false,
    accent: 'yellow',
  },
  {
    name: 'Coordenação pedagógica',
    phone: '(54) 99271-3980',
    phoneHref: 'tel:+5554992713980',
    whatsappHref: 'https://wa.me/5554992713980?text=Olá! Vim pelo Portal do Aluno.',
    hasWhatsApp: true,
    accent: 'red',
  },
]