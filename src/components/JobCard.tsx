import type { JobFeature, JobOpening } from '../types'
import { CheckIcon } from './icons'

type Job = JobFeature | JobOpening

interface JobCardProps {
  job: Job
}

function JobItemList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm font-medium text-ink">
          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function isFeature(job: Job): job is JobFeature {
  return 'columns' in job
}

export default function JobCard({ job }: JobCardProps) {
  if (isFeature(job)) {
    return (
      <article className="rounded-2xl border border-line border-l-8 border-l-yellow bg-white p-6 sm:p-8">
        <span className="inline-flex rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          {job.badge}
        </span>
        <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink">{job.title}</h2>
        <p className="mt-2 text-muted">{job.text}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {job.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-extrabold text-ink">{column.title}</h3>
              <div className="mt-3">
                <JobItemList items={column.items} />
              </div>
            </div>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article className="flex flex-col rounded-2xl border border-line border-l-8 border-l-red bg-white p-6">
      <h3 className="text-lg font-extrabold tracking-tight text-ink">{job.title}</h3>
      <p className="mt-4 font-bold text-ink">Atividades:</p>
      <div className="mt-3">
        <JobItemList items={job.activities} />
      </div>
    </article>
  )
}