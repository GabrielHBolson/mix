import type { Sector } from '../types'

interface SectorCardProps {
  sector: Sector
}

export default function SectorCard({ sector }: SectorCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-line border-t-8 bg-white p-5 ${
        sector.accent === 'yellow' ? 'border-t-yellow' : 'border-t-red'
      }`}
    >
      <h3 className="font-extrabold text-ink">{sector.name}</h3>
      <p className="mt-1 text-lg font-bold text-red">{sector.phone}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={sector.phoneHref}
          className="rounded-full bg-yellow px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Ligar
        </a>
        {sector.hasWhatsApp && sector.whatsappHref ? (
          <a
            href={sector.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-deep px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red"
          >
            WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  )
}