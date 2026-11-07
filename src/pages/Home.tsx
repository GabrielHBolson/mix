import { useEffect } from 'react'
import ApplyBlock from '../components/ApplyBlock'
import Banner from '../components/Banner'
import EventCard from '../components/EventCard'
import Marquee from '../components/Marquee'
import MoneyMixCard from '../components/MoneyMixCard'
import PlatformCard from '../components/PlatformCard'
import RaffleCard from '../components/RaffleCard'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectorCard from '../components/SectorCard'
import SurveyCard from '../components/SurveyCard'
import { events } from '../data/events'
import { platforms } from '../data/platforms'
import { raffles } from '../data/raffles'
import { sectors } from '../data/sectors'
import { homeCopy, site } from '../data/site'

export default function Home() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <>
      <Banner />
      <Marquee items={platforms.map((p) => p.name)} />

      <div className="container-site flex flex-col gap-24 py-16 sm:py-20">
        <section id="plataformas" className="scroll-mt-24">
          <Section
            eyebrow="Plataformas"
            title={homeCopy.platforms.title}
            subtitle={homeCopy.platforms.subtitle}
          />
          <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5 sm:gap-6">
            {platforms.map((platform, i) => (
              <Reveal key={platform.name} delay={(i % 3) * 90}>
                <PlatformCard platform={platform} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 flex items-start gap-2 rounded-2xl bg-cream px-4 py-3 text-sm text-muted">
              <span
                className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-current text-[10px] font-bold"
                aria-hidden="true"
              >
                i
              </span>
              {homeCopy.platforms.networkNote}
            </p>
          </Reveal>
        </section>

        <MoneyMixCard />

        <section>
          <Section
            eyebrow="Prêmios"
            title={homeCopy.raffles.title}
            subtitle={homeCopy.raffles.subtitle}
          />
          <div className="mt-8 flex flex-col gap-8">
            {raffles.map((raffle, i) => (
              <Reveal key={raffle.title} variant={i % 2 ? 'right' : 'left'}>
                <RaffleCard raffle={raffle} reversed={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
          <ApplyBlock
            className="mt-8"
            title={homeCopy.raffles.applyTitle}
            text={homeCopy.raffles.applyText}
          />
        </section>

        <section>
          <Section
            eyebrow="Na escola"
            title={homeCopy.events.title}
            subtitle={homeCopy.events.subtitle}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 120}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <Section
            eyebrow="Contato"
            title={homeCopy.sectors.title}
            subtitle={homeCopy.sectors.subtitle}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.name} delay={i * 110}>
                <SectorCard sector={sector} />
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <Section
            eyebrow="Sua opinião"
            title={homeCopy.survey.title}
            subtitle={homeCopy.survey.subtitle}
          />
          <Reveal variant="zoom" className="mt-8">
            <SurveyCard />
          </Reveal>
        </section>
      </div>
    </>
  )
}
