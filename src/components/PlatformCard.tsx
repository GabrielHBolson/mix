import type { Platform, Tone } from '../types'

const TONE_BG: Record<Tone, string> = {
  t1: 'bg-gradient-to-br from-t1 to-red-deep',
  t2: 'bg-gradient-to-br from-t2 to-[#ffb300]',
  t3: 'bg-gradient-to-br from-[#3d2424] to-t3',
  t4: 'bg-gradient-to-br from-t4 to-t6',
  t5: 'bg-gradient-to-br from-[#ff7a1a] to-t5',
  t6: 'bg-gradient-to-br from-t6 to-[#4a0000]',
}

const INITIALS_COLOR: Record<Tone, string> = {
  t1: 'text-white',
  t2: 'text-ink',
  t3: 'text-white',
  t4: 'text-white',
  t5: 'text-white',
  t6: 'text-white',
}

interface PlatformCardProps {
  platform: Platform
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Entrar na plataforma ${platform.name}. Abre em uma nova aba.`}
      className="shine group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all sm:rounded-3xl duration-500 ease-[var(--ease-spring)] hover:-translate-y-2 hover:border-red/40 hover:shadow-2xl hover:shadow-red/15"
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${TONE_BG[platform.tone]}`}>
        {platform.image ? (
          <img
            src={platform.image}
            alt={`Foto da plataforma ${platform.name}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <>
            <div className="bg-dots absolute inset-0 opacity-50" aria-hidden="true" />
            <div
              className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/15 transition-transform duration-700 ease-[var(--ease-spring)] group-hover:scale-150"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/15 transition-transform duration-700 ease-[var(--ease-spring)] group-hover:translate-x-6 group-hover:scale-125"
              aria-hidden="true"
            />
            <span
              className={`absolute inset-0 grid place-items-center whitespace-pre-line px-4 text-center text-2xl font-extrabold sm:text-4xl leading-tight tracking-tight transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-110 ${INITIALS_COLOR[platform.tone]}`}
            >
              {platform.initials}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <h3 className="text-sm font-extrabold leading-tight tracking-tight text-ink sm:text-lg">{platform.name}</h3>
        <p className="mt-1 flex-1 text-xs text-muted sm:text-sm">{platform.description}</p>
        <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-yellow px-4 py-1.5 text-xs sm:mt-5 sm:px-5 sm:py-2 sm:text-sm font-bold text-ink transition-all duration-300 group-hover:gap-3 group-hover:bg-ink group-hover:text-white">
          Entrar
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  )
}
