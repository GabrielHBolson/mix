import { CommaIcon } from './icons'

interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const row = [...items, ...items]

  return (
    <div
      className="relative -mt-px overflow-hidden border-y-2 border-ink bg-yellow py-3 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[row, row].map((group, g) => (
          <div key={g} className="flex shrink-0 items-center">
            {group.map((item, i) => (
              <span
                key={`${g}-${i}`}
                className="flex items-center gap-6 px-6 text-sm font-extrabold uppercase tracking-[0.14em] text-ink sm:text-base"
              >
                {item}
                <CommaIcon className="h-5 w-5 text-red" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
