import type { Platform, Tone } from '../types'

const TONE_BG: Record<Tone, string> = {
  t1: 'bg-t1',
  t2: 'bg-t2',
  t3: 'bg-t3',
  t4: 'bg-t4',
  t5: 'bg-t5',
  t6: 'bg-t6',
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
      className="group block overflow-hidden rounded-[18px] border-[1.5px] border-line bg-white motion-safe:transition motion-safe:duration-200 hover:border-red motion-safe:hover:-translate-y-1"
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${TONE_BG[platform.tone]}`}>
        {platform.image ? (
          <img
            src={platform.image}
            alt={`Foto da plataforma ${platform.name}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/15"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/15"
              aria-hidden="true"
            />
            <span
              className={`absolute inset-0 grid place-items-center whitespace-pre-line px-4 text-center text-3xl font-extrabold leading-tight ${INITIALS_COLOR[platform.tone]}`}
            >
              {platform.initials}
            </span>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-extrabold text-ink">{platform.name}</h3>
        <p className="mt-1 text-sm text-muted">{platform.description}</p>
        <span className="mt-4 inline-flex rounded-full bg-yellow px-6 py-2 text-sm font-bold text-ink transition-colors group-hover:bg-ink group-hover:text-white">
          Entrar
        </span>
      </div>
    </a>
  )
}