import type { Rule } from '../types'

interface RuleItemProps {
  rule: Rule
}

export default function RuleItem({ rule }: RuleItemProps) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-line border-l-8 border-l-red bg-white p-4">
      <span
        className="grid h-[2.6rem] w-[2.6rem] shrink-0 place-items-center rounded-xl bg-[#FFF3C4] text-xl"
        aria-hidden="true"
      >
        {rule.emoji}
      </span>
      <p className="pt-2 font-medium leading-relaxed text-ink">{rule.text}</p>
    </li>
  )
}