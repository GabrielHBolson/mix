import type { EventCard as EventCardData } from '../types'

interface EventCardProps {
  event: EventCardData
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-line bg-white">
      <div className="relative aspect-[4/3]">
        <img
          src={event.image}
          alt={event.imageAlt ?? event.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          {event.badge}
        </span>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-xl font-extrabold tracking-tight text-ink">{event.title}</h3>
        <p className="font-bold text-red">{event.highlight}</p>
        <p className="text-muted">{event.text}</p>

        <div className="rounded-xl border border-line p-4">
          <ul className="flex flex-col gap-2">
            {event.points.map((point) => (
              <li key={point.label} className="flex items-start gap-3 text-sm font-medium text-ink">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#FFF3C4] text-base"
                  aria-hidden="true"
                >
                  {point.emoji}
                </span>
                <span className="pt-1">{point.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {event.help ? (
          <div className="rounded-xl bg-[#FFF3C4] p-4">
            <p className="text-sm font-medium text-ink">{event.help.boxText}</p>
            <div className="mt-3">
              <a
                href={event.help.buttonHref}
                className="inline-flex rounded-full bg-red px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-red-deep"
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