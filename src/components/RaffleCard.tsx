import type { Raffle } from '../types'
import { CheckIcon, MateSvg } from './icons'

interface RaffleCardProps {
  raffle: Raffle
}

export default function RaffleCard({ raffle }: RaffleCardProps) {
  const sizes = raffle.featured ? 'aspect-square md:aspect-auto' : 'aspect-[4/3]'

  return (
    <article
      className={`overflow-hidden rounded-[18px] border border-line bg-white ${
        raffle.featured ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      {raffle.image && raffle.fixedImage ? (
        <div className="flex items-center justify-center bg-[#FFF9E3] p-3 sm:p-4">
          <img
            src={raffle.image}
            alt={raffle.imageAlt ?? `Cartaz do sorteio ${raffle.title}`}
            className="aspect-square w-full max-w-80 rounded-2xl border border-line object-cover shadow-sm"
          />
        </div>
      ) : (
        <div className={`relative w-full ${sizes}`}>
          {raffle.image ? (
            <img
              src={raffle.image}
              alt={raffle.imageAlt ?? `Cartaz do sorteio ${raffle.title}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : raffle.art === 'mate' ? (
            <div className="absolute inset-0 h-full w-full bg-[#2f9e5f]">
              <MateSvg className="h-full w-full" />
            </div>
          ) : null}
        </div>
      )}

      <div className="p-6 sm:p-7">
        <span className="inline-flex rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          {raffle.badge}
        </span>
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">{raffle.title}</h3>
        <p className="mt-2 text-lg font-bold text-red">{raffle.highlight}</p>
        <p className="mt-2 text-muted">{raffle.text}</p>

        {raffle.listTitle && raffle.list ? (
          <div className="mt-5 rounded-xl border border-line bg-[#FFF9E3] p-4">
            <h4 className="font-extrabold text-ink">{raffle.listTitle}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {raffle.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
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