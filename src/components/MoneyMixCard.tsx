import { money } from '../data/money'
import Reveal from './Reveal'

export default function MoneyMixCard() {
  return (
    <Reveal variant="zoom">
      <section className="relative isolate overflow-hidden rounded-[28px] bg-yellow p-6 shadow-xl shadow-yellow/30 sm:p-10">
        <div className="bg-dots-ink absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-white/40 blur-2xl animate-blob"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-10 right-4 -z-10 select-none text-[10rem] font-extrabold leading-none text-ink/[0.06] sm:text-[14rem]"
          aria-hidden="true"
        >
          $
        </span>

        <div className="flex items-center gap-4">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-red text-base font-extrabold text-white shadow-lg shadow-red/30 ring-4 ring-white/70 animate-float"
            aria-hidden="true"
          >
            MM
          </span>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {money.title}
            </h2>
            <p className="mt-1 font-medium text-ink/75">{money.subtitle}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {money.points.map((point, i) => (
            <Reveal key={point.label} delay={120 + i * 90}>
              <div className="group flex items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cream text-2xl transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-10deg] group-hover:scale-110"
                  aria-hidden="true"
                >
                  {point.emoji}
                </span>
                <span className="font-semibold text-ink">{point.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-ink/75">{money.footer}</p>
      </section>
    </Reveal>
  )
}
