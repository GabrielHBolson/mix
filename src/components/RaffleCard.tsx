import type { Raffle } from '../types'
import { CheckIcon } from './icons'

interface RaffleCardProps {
  raffle: Raffle
  reversed?: boolean
}

export default function RaffleCard({ raffle, reversed = false }: RaffleCardProps) {
  const sizes = raffle.featured ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-[4/3]'

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-500 ease-[var(--ease-spring)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10 ${
        raffle.featured ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      {raffle.image && raffle.fixedImage ? (
        <div
          className={`relative flex items-center justify-center overflow-hidden bg-cream p-5 sm:p-8 ${
            reversed ? 'md:order-2' : ''
          }`}
        >
          <div className="bg-dots-ink absolute inset-0" aria-hidden="true" />
          <img
            src={raffle.image}
            alt={raffle.imageAlt ?? `Cartaz do sorteio ${raffle.title}`}
            className="relative aspect-square w-full max-w-80 rotate-[-2deg] rounded-2xl border-4 border-white object-cover shadow-xl transition-transform duration-700 ease-[var(--ease-spring)] group-hover:rotate-0 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={`relative w-full overflow-hidden ${sizes} ${reversed ? 'md:order-2' : ''}`}>
          {raffle.image ? (
            <img
              src={raffle.image}
              alt={raffle.imageAlt ?? `Cartaz do sorteio ${raffle.title}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-spring)] group-hover:scale-110"
            />
          ) : null}
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="flex flex-col justify-center p-6 sm:p-9">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red" />
          </span>
          {raffle.badge}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {raffle.title}
        </h3>
        <p className="mt-2 text-lg font-bold text-red">{raffle.highlight}</p>
        <p className="mt-2 text-muted">{raffle.text}</p>

        {raffle.listTitle && raffle.list ? (
          <div className="mt-5 rounded-2xl border border-line bg-cream p-5">
            <h4 className="font-extrabold text-ink">{raffle.listTitle}</h4>
            <ul className="mt-3 flex flex-col gap-2.5">
              {raffle.list.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {raffle.note ? <p className="mt-4 text-xs text-muted">{raffle.note}</p> : null}
      </div>
    </article>
  )
}
