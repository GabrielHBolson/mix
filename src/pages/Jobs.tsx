import { useEffect } from 'react'
import ApplyBlock from '../components/ApplyBlock'
import JobCard from '../components/JobCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { CheckIcon } from '../components/icons'
import { generalRequirements, jobFeature, jobOpenings } from '../data/jobs'
import { jobsCopy, site } from '../data/site'

export default function Jobs() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <>
      <PageHero eyebrow="Carreiras" title={jobsCopy.title} subtitle={jobsCopy.subtitle} />
      <div className="container-site flex flex-col gap-20 py-14 sm:py-16">
        <Reveal variant="zoom">
          <JobCard job={jobFeature} />
        </Reveal>

        <section>
          <Section eyebrow="Oportunidades" title={jobsCopy.openingsTitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.title} delay={(i % 3) * 110}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <Section eyebrow="O que buscamos" title={jobsCopy.generalTitle} />
          <Reveal className="mt-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {generalRequirements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow hover:bg-cream"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <ApplyBlock title={jobsCopy.apply.title} text={jobsCopy.apply.text} />
      </div>
    </>
  )
}
