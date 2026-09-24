import { useEffect } from 'react'
import RuleItem from '../components/RuleItem'
import { rules } from '../data/rules'
import { rulesCopy, site } from '../data/site'

export default function Rules() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {rulesCopy.title}
      </h1>
      <p className="mt-2 text-muted">{rulesCopy.subtitle}</p>
      <ol className="mt-8 flex max-w-[720px] flex-col gap-4">
        {rules.map((rule) => (
          <RuleItem key={rule.text} rule={rule} />
        ))}
      </ol>
    </div>
  )
}