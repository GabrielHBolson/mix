import type { Sector } from '../types'

interface SectorCardProps {
  sector: Sector
}

export default function SectorCard({ sector }: SectorCardProps) {
  const isYellow = sector.accent === 'yellow'

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm transition-all duration-500 ease-[var(--ease-spring)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10">
      <div
        className={`absolute inset-x-0 top-0 h-1.5 origin-left transition-transform duration-500 ${
          isYellow ? 'bg-yellow' : 'bg-red'
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
          isYellow ? 'bg-yellow/40' : 'bg-red/20'
        }`}
        aria-hidden="true"
      />
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl text-xl transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-8deg] group-hover:scale-110 ${
          isYellow ? 'bg-yellow text-ink' : 'bg-red text-white'
        }`}
        aria-hidden="true"
      >
        ☎
      </span>
      <h3 className="mt-4 text-lg font-extrabold text-ink">{sector.name}</h3>
      <p className="mt-1 text-xl font-bold tracking-tight text-red">{sector.phone}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <a
          href={sector.phoneHref}
          className="rounded-full bg-yellow px-5 py-2 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
        >
          Ligar
        </a>
        {sector.hasWhatsApp && sector.whatsappHref ? (
          <a
            href={sector.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-deep px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red"
          >
            WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  )
}
