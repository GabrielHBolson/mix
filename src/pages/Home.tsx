import { useEffect } from 'react'
import ApplyBlock from '../components/ApplyBlock'
import Banner from '../components/Banner'
import EventCard from '../components/EventCard'
import MoneyMixCard from '../components/MoneyMixCard'
import PlatformCard from '../components/PlatformCard'
import RaffleCard from '../components/RaffleCard'
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
      <div className="container-site flex flex-col gap-16 py-12">
        <section>
          <Section title={homeCopy.platforms.title} subtitle={homeCopy.platforms.subtitle} />
          <div className="mt-6 grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
            {platforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm text-muted">
            <span
              className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-current text-[10px] font-bold"
              aria-hidden="true"
            >
              i
            </span>
            {homeCopy.platforms.networkNote}
          </p>
        </section>

        <MoneyMixCard />

        <section>
          <Section title={homeCopy.raffles.title} subtitle={homeCopy.raffles.subtitle} />
          <div className="mt-6 flex flex-col gap-6">
            {raffles.map((raffle) => (
              <RaffleCard key={raffle.title} raffle={raffle} />
            ))}
          </div>
          <ApplyBlock
            className="mt-8"
            title={homeCopy.raffles.applyTitle}
            text={homeCopy.raffles.applyText}
          />
        </section>

        <section>
          <Section title={homeCopy.events.title} subtitle={homeCopy.events.subtitle} />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </section>

        <section>
          <Section title={homeCopy.sectors.title} subtitle={homeCopy.sectors.subtitle} />
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {sectors.map((sector) => (
              <SectorCard key={sector.name} sector={sector} />
            ))}
          </div>
        </section>

        <section>
          <Section title={homeCopy.survey.title} subtitle={homeCopy.survey.subtitle} />
          <div className="mt-6">
            <SurveyCard />
          </div>
        </section>
      </div>
    </>
  )
}