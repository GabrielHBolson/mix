import { Link } from 'react-router-dom'
import { site } from '../data/site'
import Reveal from './Reveal'

const contacts = [
  { icon: '✉️', label: site.email, href: `mailto:${site.email}`, external: false },
  { icon: '📞', label: site.phone, href: site.phoneHref, external: false },
  { icon: '📸', label: site.instagram, href: site.instagramUrl, external: true },
]

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink pb-28 pt-16 text-white">
      <div className="bg-dots absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div
        className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-red/25 blur-3xl animate-blob"
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal variant="left">
            <img
              src="/images/logo_instituto_mix.png"
              alt="Logo do Instituto Mix"
              className="h-14 w-14 rounded-full object-contain"
            />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
              Fale com a <span className="text-yellow">secretaria</span>
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-all duration-300 hover:translate-x-1 hover:bg-white/10 hover:ring-yellow/50"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-lg transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {c.icon}
                    </span>
                    <span className="break-all text-sm font-semibold text-white/90 group-hover:text-yellow">
                      {c.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <h3 className="text-xl font-extrabold tracking-tight">Onde estamos</h3>
            <address className="mt-3 flex items-start gap-2 text-sm not-italic text-white/85">
              <span aria-hidden="true">📍</span>
              {site.address}
            </address>
            <a
              href={site.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold text-yellow transition-colors hover:text-white"
            >
              Abrir no Google Maps
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <div className="mt-4 overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl">
              <iframe
                src={site.mapEmbedUrl}
                title="Mapa com a localização do Instituto Mix Passo Fundo Centro"
                width="100%"
                height="280"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[30%] transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Instituto Mix <span aria-hidden="true">·</span> Passo Fundo Centro
          </span>
          <nav aria-label="Links do rodapé" className="flex gap-5">
            <Link to="/" className="transition-colors hover:text-yellow">
              Início
            </Link>
            <Link to="/regras" className="transition-colors hover:text-yellow">
              Regras
            </Link>
            <Link to="/trabalhe-conosco" className="transition-colors hover:text-yellow">
              Trabalhe conosco
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
