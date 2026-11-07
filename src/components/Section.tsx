import Reveal from './Reveal'

interface SectionProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function Section({ title, subtitle, eyebrow }: SectionProps) {
  return (
    <Reveal>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red">
          <span className="h-0.5 w-6 rounded-full bg-red" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        <span className="mark-yellow">{title}</span>
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  )
}
