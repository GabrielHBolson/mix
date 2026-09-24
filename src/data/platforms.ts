import type { Platform } from '../types'

export const platforms: Platform[] = [
  {
    name: 'Interativo IM',
    description: 'Plataforma EAD do Interativo IM',
    url: 'https://interativoim.ead.imlabs.com.br/login?next_route=/',
    initials: 'IM',
    tone: 't1',
  },
  {
    name: 'IM Talking Aulas',
    description: 'Aulas de inglês na plataforma EAD',
    url: 'https://www.institutomix.com.br/ead/login',
    initials: 'IM\nTalking',
    tone: 't2',
  },
  {
    name: 'IM Talking Atividades',
    description: 'Atividades da Talking Academy',
    url: 'https://imtalkingacademy.com/',
    initials: 'IM\nTalking',
    tone: 't4',
  },
  {
    name: 'MSE Kids',
    description: 'Portal do aluno Kids',
    url: 'http://192.168.0.18:8082/portalAluno/',
    initials: 'Kids',
    tone: 't3',
  },
  {
    name: 'ProEJA',
    description: 'Plataforma da Educação de Jovens e Adultos',
    url: 'https://www.institutomix.com.br/ead/home',
    initials: 'EJA',
    tone: 't5',
  },
  {
    name: 'EADS Obrigatórios',
    description: 'Plataforma EAD dos cursos obrigatórios',
    url: 'https://www.institutomix.com.br/ead/home',
    initials: 'EADS',
    tone: 't6',
  },
]