import { homeCopy, site } from '../data/site'

const survey = homeCopy.survey

function DateChip({ day, month }: { day: string; month: string }) {
  return (
    <span className="flex w-20 flex-col overflow-hidden rounded-xl bg-white text-center shadow-lg">
      <span className="bg-yellow py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink">
        {month}
      </span>
      <span className="py-1.5 text-3xl font-extrabold leading-none text-ink">{day}</span>
    </span>
  )
}

export default function SurveyCard() {
  return (
    <article className="group relative isolate grid overflow-hidden rounded-[32px] bg-gradient-to-br from-[#3a0a0a] via-ink to-[#120808] text-white shadow-2xl shadow-red/20 ring-1 ring-white/10 md:grid-cols-[1fr_1.05fr]">
      <div className="bg-dots absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div
        className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-red/50 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 right-0 -z-10 h-72 w-72 rounded-full bg-yellow/25 blur-3xl animate-blob [animation-delay:-7s]"
        aria-hidden="true"
      />

      <a
        href={site.surveyUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block p-5 sm:p-8 md:p-10"
      >
        <img
          src={survey.image}
          alt=""
          className="w-full rotate-[-2deg] rounded-3xl shadow-2xl shadow-black/50 ring-4 ring-white/10 transition-transform duration-700 ease-[var(--ease-spring)] group-hover:rotate-0 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 grid h-16 w-16 rotate-12 place-items-center rounded-full bg-yellow text-center text-[11px] font-extrabold uppercase leading-tight text-ink shadow-xl animate-float sm:right-5 sm:top-5 sm:h-20 sm:w-20 sm:text-xs">
          Vale
          <br />
          prêmio
        </span>
      </a>
      <span className="sr-only">{survey.imageAlt}</span>

      <div className="flex flex-col justify-center px-6 pb-8 sm:px-10 md:py-10 md:pl-0">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow" />
          </span>
          {survey.badge}
        </span>
        <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {survey.cardTitle}
        </h3>
        <p className="mt-3 max-w-md text-white/80">{survey.cardText}</p>

        <div className="mt-6 flex items-center gap-3">
          <DateChip {...survey.periodStart} />
          <span className="text-sm font-bold text-white/60">até</span>
          <DateChip {...survey.periodEnd} />
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-yellow/30">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow text-2xl transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-10deg] group-hover:scale-110"
            aria-hidden="true"
          >
            🔊
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">
              {survey.prizeLabel}
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-yellow">{survey.prize}</p>
          </div>
        </div>

        <a
          href={site.surveyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow px-8 py-4 text-lg font-extrabold text-ink shadow-xl shadow-yellow/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-fit"
        >
          {survey.buttonLabel}
          <span
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </article>
  )
}
