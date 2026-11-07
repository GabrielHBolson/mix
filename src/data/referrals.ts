export interface ReferralReward {
  /** Número da matrícula paga feita por um indicado. */
  step: number
  value: string
  detail: string
  highlight?: boolean
}

export const referralRewards: ReferralReward[] = [
  { step: 1, value: 'R$ 20', detail: 'de desconto' },
  { step: 2, value: 'R$ 20', detail: 'de desconto' },
  { step: 3, value: 'R$ 20', detail: 'de desconto' },
  { step: 4, value: '1 parcela isenta', detail: '+ os R$ 60 já acumulados', highlight: true },
]
