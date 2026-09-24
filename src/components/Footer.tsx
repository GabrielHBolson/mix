import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-12 text-white">
      <div className="container-site">
        <h2 className="text-xl font-extrabold tracking-tight">Fale com a secretaria</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-white/85">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-yellow hover:underline"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className="transition-colors hover:text-yellow hover:underline">
              {site.phone}
            </a>
          </li>
          <li>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-yellow hover:underline"
            >
              {site.instagram}
            </a>
          </li>
        </ul>

        <div className="mt-8 border-t border-white/15 pt-8">
          <h3 className="text-lg font-extrabold tracking-tight">Onde estamos</h3>
          <address className="mt-3 flex items-start gap-2 text-sm not-italic text-white/85">
            <span aria-hidden="true">📍</span>
            {site.address}
          </address>
          <a
            href={site.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm font-semibold text-yellow transition-colors hover:text-white"
          >
            Abrir no Google Maps
          </a>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/15">
            <iframe
              src={site.mapEmbedUrl}
              title="Mapa com a localização do Instituto Mix Passo Fundo Centro"
              width="100%"
              height="260"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-1.5 border-t border-white/15 pt-5 text-sm text-white/60">
          <span>Instituto Mix</span>
          <span aria-hidden="true">·</span>
          <span>Passo Fundo Centro</span>
        </div>
      </div>
    </footer>
  )
}