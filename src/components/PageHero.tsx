import { CommaIcon } from './icons'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-red to-red-deep text-white">
      <div className="bg-dots absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-yellow/25 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <CommaIcon className="absolute bottom-16 right-[10%] -z-10 hidden h-20 w-20 text-yellow/60 animate-float sm:block" />

      <div className="container-site pb-20 pt-12 sm:pb-24 sm:pt-16">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-yellow animate-pop">
          <span className="h-0.5 w-6 rounded-full bg-yellow" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight animate-pop [animation-delay:100ms] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-white/90 animate-pop [animation-delay:200ms]">
          {subtitle}
        </p>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 h-10 w-full text-white sm:h-16"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 80c160-30 320-44 480-30s320 50 480 46 320-40 480-50v74H0Z"
        />
      </svg>
    </section>
  )
}
