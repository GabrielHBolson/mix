import type { JobFeature, JobOpening } from '../types'

export const jobFeature: JobFeature = {
  badge: 'Estágio',
  title: 'Oportunidade de estágio: Telemarketing',
  text: 'Estamos selecionando estagiários(as) a partir de 16 anos para fazer parte da nossa equipe!',
  columns: [
    {
      title: 'Principais atividades',
      items: [
        'Atendimento e contato com clientes',
        'Realização de ligações',
        'Agendamento de atendimentos',
        'Divulgação de cursos',
        'Auxílio nas atividades do setor comercial',
      ],
    },
    {
      title: 'Requisitos',
      items: [
        'Ter 16 anos ou mais',
        'Estar matriculado(a) e frequentando a escola',
        'Boa comunicação',
        'Proatividade e vontade de aprender',
        'Responsabilidade e organização',
      ],
    },
  ],
}

export const jobOpenings: JobOpening[] = [
  {
    title: 'Orientador(a) comercial',
    activities: [
      'Atendimento e prospecção de clientes',
      'Apresentação de cursos e serviços',
      'Negociação e fechamento de matrículas',
      'Acompanhamento de leads e pós-venda',
    ],
  },
  {
    title: 'Assistente comercial',
    activities: [
      'Suporte à equipe comercial',
      'Atendimento aos clientes',
      'Organização de informações e documentos',
      'Acompanhamento de leads e processos comerciais',
    ],
  },
  {
    title: 'Assistente financeiro(a)',
    activities: [
      'Atendimento financeiro',
      'Controle de pagamentos e recebimentos',
      'Organização de documentos',
      'Lançamentos e conferência de informações financeiras',
      'Apoio às rotinas administrativas do setor',
    ],
  },
]

export const generalRequirements: string[] = [
  'Boa comunicação',
  'Organização e responsabilidade',
  'Proatividade',
  'Facilidade com atendimento ao público',
  'Experiência na área será um diferencial',
]