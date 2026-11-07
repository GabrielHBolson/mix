import { homeCopy, site } from '../data/site'

export default function SurveyCard() {
  return (
    <div className="relative isolate flex flex-col gap-6 overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div className="bg-dots absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <div
        className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red/40 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-10 -z-10 h-56 w-56 rounded-full bg-yellow/25 blur-3xl animate-blob [animation-delay:-7s]"
        aria-hidden="true"
      />
      <div>
        <span className="text-3xl" aria-hidden="true">
          ⭐⭐⭐⭐⭐
        </span>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {homeCopy.survey.cardTitle}
        </h3>
        <p className="mt-2 max-w-xl text-white/80">{homeCopy.survey.cardText}</p>
      </div>
      <a
        href={site.surveyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-center font-extrabold text-ink shadow-lg shadow-yellow/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
      >
        {homeCopy.survey.buttonLabel}
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </a>
    </div>
  )
}
