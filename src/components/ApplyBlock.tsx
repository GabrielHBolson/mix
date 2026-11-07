import { site } from '../data/site'
import Reveal from './Reveal'

interface ApplyBlockProps {
  title: string
  text: string
  className?: string
}

export default function ApplyBlock({ title, text, className }: ApplyBlockProps) {
  return (
    <Reveal className={className}>
      <section className="relative isolate flex flex-col gap-5 overflow-hidden rounded-3xl bg-yellow p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="bg-dots-ink absolute inset-0 -z-10" aria-hidden="true" />
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{title}</h3>
          <p className="mt-2 font-medium text-ink/75">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="rounded-full bg-white px-6 py-3 font-bold text-ink shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
          >
            Ligar
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-deep px-6 py-3 font-bold text-white shadow-md shadow-red/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </Reveal>
  )
}
