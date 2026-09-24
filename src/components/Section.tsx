interface SectionProps {
  title: string
  subtitle?: string
}

export default function Section({ title, subtitle }: SectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
    </div>
  )
}