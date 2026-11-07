import type { Rule } from '../types'

interface RuleItemProps {
  rule: Rule
  index: number
}

export default function RuleItem({ rule, index }: RuleItemProps) {
  return (
    <div className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm transition-all duration-500 ease-[var(--ease-spring)] hover:-translate-y-1 hover:border-red/30 hover:shadow-xl hover:shadow-red/10 sm:p-6">
      <span
        className="absolute inset-y-0 left-0 w-1.5 origin-top scale-y-50 bg-red transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-y-100"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-extrabold text-ink/[0.05] transition-colors duration-500 group-hover:text-red/10"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FFF3C4] text-2xl transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-10deg] group-hover:scale-110"
        aria-hidden="true"
      >
        {rule.emoji}
      </span>
      <p className="relative pt-2.5 font-medium leading-relaxed text-ink">{rule.text}</p>
    </div>
  )
}
