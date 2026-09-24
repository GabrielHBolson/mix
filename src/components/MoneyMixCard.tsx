import { money } from '../data/money'

export default function MoneyMixCard() {
  return (
    <section className="rounded-[22px] bg-yellow p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <span
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-red text-sm font-extrabold text-white ring-4 ring-white/60"
          aria-hidden="true"
        >
          MM
        </span>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">{money.title}</h2>
          <p className="mt-1 font-medium text-ink/75">{money.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {money.points.map((point) => (
          <div
            key={point.label}
            className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
          >
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#FFF3C4] text-xl"
              aria-hidden="true"
            >
              {point.emoji}
            </span>
            <span className="font-semibold text-ink">{point.label}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold text-ink/75">{money.footer}</p>
    </section>
  )
}