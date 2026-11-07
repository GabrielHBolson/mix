import { site } from '../data/site'
import { CommaIcon, WhatsAppIcon } from './icons'

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-red via-red to-red-deep text-white">
      {/* Background decoration */}
      <div className="bg-dots absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-yellow/25 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#7a0000]/50 blur-3xl animate-blob [animation-delay:-5s]"
        aria-hidden="true"
      />
      <CommaIcon className="absolute right-[8%] top-10 -z-10 hidden h-16 w-16 text-yellow/70 animate-float md:block" />
      <CommaIcon className="absolute bottom-24 left-[46%] -z-10 hidden h-10 w-10 rotate-12 text-white/30 animate-float-slow md:block" />

      <div className="container-site grid items-center gap-10 pb-24 pt-12 sm:pt-16 md:grid-cols-[1.15fr_1fr] md:pb-32 md:pt-20">
        <div>
          <div className="animate-pop">
            <button
              type="button"
              onClick={() =>
                document.getElementById('pesquisa')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/15 py-1.5 pl-1.5 pr-4 text-left text-xs font-bold ring-1 ring-white/25 backdrop-blur transition-all duration-300 hover:bg-white/25 sm:text-sm"
            >
              <span className="rounded-full bg-yellow px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink sm:text-xs">
                Novo
              </span>
              Pesquisa de satisfação: concorra a uma JBL GO 2
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block animate-pop [animation-delay:120ms]">Portal</span>
            <span className="block animate-pop [animation-delay:240ms]">
              do <span className="text-gradient">Aluno</span>
            </span>
          </h1>

          <p className="mt-5 max-w-md text-lg text-white/90 animate-pop [animation-delay:360ms]">
            Escolha a sua plataforma e comece a estudar. Tudo o que você precisa, em um só lugar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-pop [animation-delay:480ms]">
            <button
              type="button"
              onClick={() =>
                document.getElementById('plataformas')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-yellow px-7 py-3.5 font-extrabold text-ink shadow-xl shadow-ink/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Acessar plataformas
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </button>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 font-bold text-white ring-1 ring-white/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Secretaria
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-pop [animation-delay:300ms] md:max-w-md">
          <div
            className="absolute inset-6 rounded-full border-2 border-dashed border-white/30 animate-spin-slow"
            aria-hidden="true"
          />
          <div
            className="absolute inset-14 rounded-full bg-white/15 blur-2xl"
            aria-hidden="true"
          />
          <img
            src="/images/logo_instituto_mix.png"
            alt="Logo completa do Instituto Mix"
            className="relative w-full rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(35,19,19,0.5)] ring-1 ring-white/20 animate-float"
          />
        </div>
      </div>

      {/* Wave divider */}
      <svg
        className="absolute inset-x-0 bottom-0 h-12 w-full text-white sm:h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 64c120 26 240 40 360 32S600 52 720 44s240 4 360 22 240 30 360 14v40H0Z"
        />
      </svg>
    </section>
  )
}
