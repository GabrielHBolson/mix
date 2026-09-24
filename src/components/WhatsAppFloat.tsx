import { site } from '../data/site'
import { WhatsAppIcon } from './icons'

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a secretaria pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#178F48] px-5 py-3 text-white shadow-lg shadow-ink/25 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="font-bold">Secretaria</span>
    </a>
  )
}