import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RuleItem from '../components/RuleItem'
import { rules } from '../data/rules'
import { rulesCopy, site } from '../data/site'

export default function Rules() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <>
      <PageHero eyebrow="Combinados" title={rulesCopy.title} subtitle={rulesCopy.subtitle} />
      <div className="container-site py-14 sm:py-16">
        <ol className="grid gap-4 md:grid-cols-2">
          {rules.map((rule, i) => (
            <Reveal as="li" key={rule.text} delay={(i % 2) * 100}>
              <RuleItem rule={rule} index={i} />
            </Reveal>
          ))}
        </ol>
      </div>
    </>
  )
}
