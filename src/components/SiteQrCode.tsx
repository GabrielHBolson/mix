import { QRCodeSVG } from 'qrcode.react'
import { site } from '../data/site'

/** Endereço do portal: o fixo de site.ts ou, se vazio, o da página aberta (sem a rota). */
function portalUrl() {
  if (site.publicUrl) return site.publicUrl
  if (typeof window === 'undefined') return ''
  return `${window.location.origin}${window.location.pathname}`
}

interface SiteQrCodeProps {
  className?: string
}

export default function SiteQrCode({ className }: SiteQrCodeProps) {
  const url = portalUrl()
  if (!url) return null

  const label = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div
      className={`group inline-flex items-center gap-4 rounded-3xl bg-white/10 p-3 pr-6 ring-1 ring-white/25 backdrop-blur transition-all duration-300 hover:bg-white/15 ${className ?? ''}`}
    >
      <div className="relative shrink-0 rounded-2xl bg-white p-2 shadow-xl shadow-ink/25 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-105 group-hover:-rotate-2">
        <QRCodeSVG
          value={url}
          size={96}
          level="M"
          fgColor="#231313"
          title={`QR code para abrir o portal no celular: ${label}`}
        />
        <span
          className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-yellow text-sm shadow-md animate-float"
          aria-hidden="true"
        >
          📱
        </span>
      </div>
      <div>
        <p className="text-base font-extrabold leading-tight">Acesse pelo celular</p>
        <p className="mt-1 max-w-[13rem] text-sm text-white/85">
          Aponte a câmera para o código e abra o portal no seu celular.
        </p>
        <p className="mt-1.5 max-w-[13rem] truncate text-xs font-semibold text-yellow">{label}</p>
      </div>
    </div>
  )
}
