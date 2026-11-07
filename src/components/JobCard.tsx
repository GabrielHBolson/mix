import type { JobFeature, JobOpening } from '../types'
import { CheckIcon } from './icons'

type Job = JobFeature | JobOpening

interface JobCardProps {
  job: Job
}

function JobItemList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-ink">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red/10 text-red">
            <CheckIcon className="h-3 w-3" />
          </span>
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
      <article className="relative isolate overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-lg shadow-ink/5 sm:p-10">
        <div
          className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-yellow/30 blur-3xl animate-blob"
          aria-hidden="true"
        />
        <div className="absolute inset-y-0 left-0 w-2 bg-yellow" aria-hidden="true" />
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red" />
          </span>
          {job.badge}
        </span>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {job.title}
        </h2>
        <p className="mt-2 max-w-2xl text-muted">{job.text}</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {job.columns.map((column) => (
            <div key={column.title} className="rounded-2xl bg-cream p-5">
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm transition-all duration-500 ease-[var(--ease-spring)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-red/10">
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-25 bg-red transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-x-100"
        aria-hidden="true"
      />
      <h3 className="text-xl font-extrabold tracking-tight text-ink">{job.title}</h3>
      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-red">
        Atividades
      </p>
      <div className="mt-3">
        <JobItemList items={job.activities} />
      </div>
    </article>
  )
}
