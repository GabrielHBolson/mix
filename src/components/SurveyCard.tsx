import { homeCopy, site } from '../data/site'

export default function SurveyCard() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-line border-l-8 border-l-yellow bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-extrabold tracking-tight text-ink">
          {homeCopy.survey.cardTitle}
        </h3>
        <p className="mt-2 max-w-xl text-muted">{homeCopy.survey.cardText}</p>
      </div>
      <a
        href={site.surveyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-red px-6 py-3 text-center font-bold text-white transition-colors hover:bg-red-deep"
      >
        {homeCopy.survey.buttonLabel}
      </a>
    </div>
  )
}