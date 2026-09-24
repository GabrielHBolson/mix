import { site } from '../data/site'

interface ApplyBlockProps {
  title: string
  text: string
  className?: string
}

export default function ApplyBlock({ title, text, className }: ApplyBlockProps) {
  return (
    <section className={`rounded-[22px] bg-yellow p-6 sm:p-8 ${className ?? ''}`}>
      <h3 className="text-2xl font-extrabold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 font-medium text-ink/75">{text}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={site.phoneHref}
          className="rounded-full bg-white px-6 py-2.5 font-bold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Ligar
        </a>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-red-deep px-6 py-2.5 font-bold text-white transition-colors hover:bg-red"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}