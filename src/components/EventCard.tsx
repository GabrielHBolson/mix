import type { EventCard as EventCardData } from '../types'

interface EventCardProps {
  event: EventCardData
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-500 ease-[var(--ease-spring)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.imageAlt ?? event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-spring)] group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-md">
          {event.badge}
        </span>
        <h3 className="absolute inset-x-5 bottom-4 text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
          {event.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="font-bold text-red">{event.highlight}</p>
        <p className="text-muted">{event.text}</p>

        <ul className="flex flex-col gap-2.5">
          {event.points.map((point) => (
            <li
              key={point.label}
              className="flex items-center gap-3 rounded-xl border border-line p-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-yellow hover:bg-cream"
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#FFF3C4] text-base"
                aria-hidden="true"
              >
                {point.emoji}
              </span>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>

        {event.help ? (
          <div className="mt-auto rounded-2xl bg-[#FFF3C4] p-5">
            <p className="text-sm font-medium text-ink">{event.help.boxText}</p>
            <div className="mt-3">
              <a
                href={event.help.buttonHref}
                className="inline-flex rounded-full bg-red px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-red/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-deep"
              >
                {event.help.buttonLabel}
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">{event.help.note}</p>
          </div>
        ) : null}
      </div>
    </article>
  )
}
