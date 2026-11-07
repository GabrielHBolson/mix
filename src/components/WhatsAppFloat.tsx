import { site } from '../data/site'
import { WhatsAppIcon } from './icons'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 animate-pop [animation-delay:900ms]">
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a secretaria pelo WhatsApp"
        className="pulse-ring group relative isolate flex items-center gap-2.5 rounded-full bg-[#178F48] px-5 py-3 text-white shadow-xl shadow-ink/30 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[-12deg]" />
        <span className="font-bold">Secretaria</span>
      </a>
    </div>
  )
}
