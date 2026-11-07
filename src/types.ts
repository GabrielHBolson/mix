export type Tone = 't1' | 't2' | 't3' | 't4' | 't5' | 't6'

export interface Platform {
  name: string
  description: string
  url: string
  initials: string
  tone: Tone
  image?: string
}

export interface Raffle {
  title: string
  badge: string
  highlight: string
  text: string
  listTitle?: string
  list?: string[]
  note?: string
  featured: boolean
  image?: string
  imageAlt?: string
  fixedImage?: boolean
}

export interface EventPoint {
  emoji: string
  label: string
}

export interface EventHelp {
  boxText: string
  buttonLabel: string
  buttonHref: string
  note: string
}

export interface EventCard {
  title: string
  badge: string
  image: string
  imageAlt?: string
  /** Arte com texto próprio: exibida inteira, sem título sobreposto. */
  poster?: boolean
  highlight: string
  text: string
  points: EventPoint[]
  help?: EventHelp
}

export interface Sector {
  name: string
  phone: string
  phoneHref: string
  whatsappHref?: string
  hasWhatsApp: boolean
  accent: 'red' | 'yellow'
}

export interface Rule {
  emoji: string
  text: string
}

export interface JobColumn {
  title: string
  items: string[]
}

export interface JobFeature {
  badge: string
  title: string
  text: string
  columns: JobColumn[]
}

export interface JobOpening {
  title: string
  activities: string[]
}

export interface SiteInfo {
  title: string
  email: string
  phone: string
  phoneHref: string
  instagram: string
  instagramUrl: string
  whatsappUrl: string
  surveyUrl: string
  /** Número (com DDI e DDD, só dígitos) que recebe as indicações pelo WhatsApp. */
  referralWhatsApp: string
  address: string
  mapEmbedUrl: string
  mapLinkUrl: string
}

export interface CopyText {
  title: string
  subtitle: string
}

export interface SectionCopy extends CopyText {
  additional?: string
}