import { useEffect } from 'react'
import ApplyBlock from '../components/ApplyBlock'
import JobCard from '../components/JobCard'
import { CheckIcon } from '../components/icons'
import {
  generalRequirements,
  jobFeature,
  jobOpenings,
} from '../data/jobs'
import { jobsCopy, site } from '../data/site'

export default function Jobs() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <div className="container-site flex flex-col gap-16 py-12">
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {jobsCopy.title}
        </h1>
        <p className="mt-2 text-muted">{jobsCopy.subtitle}</p>
      </section>

      <section>
        <JobCard job={jobFeature} />
      </section>

      <section>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {jobsCopy.openingsTitle}
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {jobsCopy.generalTitle}
        </h2>
        <div className="mt-6 max-w-[720px] rounded-2xl border border-line p-6">
          <ul className="flex flex-col gap-2">
            {generalRequirements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-medium text-ink">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ApplyBlock title={jobsCopy.apply.title} text={jobsCopy.apply.text} />
    </div>
  )
}