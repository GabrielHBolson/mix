import { referralRewards } from '../data/referrals'
import Reveal from './Reveal'

export default function ReferralRewards() {
  return (
    <section aria-labelledby="referral-rewards-title" className="flex flex-col gap-6">
      <h2 id="referral-rewards-title" className="sr-only">
        Como funciona a indicação
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal variant="left">
          <article className="relative isolate h-full overflow-hidden rounded-3xl bg-yellow p-7 shadow-xl shadow-yellow/30 sm:p-8">
            <div className="bg-dots-ink absolute inset-0 -z-10" aria-hidden="true" />
            <span
              className="pointer-events-none absolute -bottom-6 -right-2 -z-10 select-none text-[8rem] leading-none opacity-20"
              aria-hidden="true"
            >
              🎓
            </span>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink/70">
              Quem você indica
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Ganha um curso <span className="text-red">gratuito</span>
            </h3>
            <p className="mt-3 max-w-sm font-medium text-ink/80">
              Sem custo nenhum para o seu colega. É gratuito mesmo.
            </p>
          </article>
        </Reveal>

        <Reveal variant="right" delay={100}>
          <article className="relative isolate h-full overflow-hidden rounded-3xl bg-gradient-to-br from-red to-red-deep p-7 text-white shadow-xl shadow-red/25 sm:p-8">
            <div className="bg-dots absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
            <span
              className="pointer-events-none absolute -bottom-6 -right-2 -z-10 select-none text-[8rem] leading-none opacity-20"
              aria-hidden="true"
            >
              💰
            </span>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/75">
              Você ganha
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Desconto na <span className="text-yellow">sua mensalidade</span>
            </h3>
            <p className="mt-3 max-w-sm font-medium text-white/85">
              A cada indicado que se matricular em um <strong>curso pago</strong>.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-3xl border border-line bg-white p-6 shadow-lg shadow-ink/5 sm:p-8">
          <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Sua recompensa por matrícula
          </h3>
          <p className="mt-1 text-sm text-muted">
            Conta cada indicado que fizer matrícula em um curso pago.
          </p>

          <div className="relative mt-8">
            <span
              className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-1 rounded-full bg-gradient-to-r from-red/20 via-red/40 to-yellow lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {referralRewards.map((reward, i) => (
                <Reveal as="li" key={reward.step} delay={i * 110} variant="zoom">
                  <div
                    className={`group relative flex h-full items-center gap-4 rounded-2xl p-4 text-left transition-all sm:flex-col sm:gap-0 sm:p-5 sm:text-center duration-500 ease-[var(--ease-spring)] hover:-translate-y-1 ${
                      reward.highlight
                        ? 'bg-ink text-white shadow-xl shadow-ink/25 ring-2 ring-yellow'
                        : 'bg-cream text-ink'
                    }`}
                  >
                    <span
                      className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-extrabold shadow-md transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-110 ${
                        reward.highlight ? 'bg-yellow text-ink' : 'bg-red text-white'
                      }`}
                    >
                      {reward.step}ª
                      {reward.highlight ? (
                        <span
                          className="absolute -right-2 -top-2 text-xl animate-float"
                          aria-hidden="true"
                        >
                          ⭐
                        </span>
                      ) : null}
                    </span>
                    <span className="flex flex-col sm:items-center">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider sm:mt-3 ${
                          reward.highlight ? 'text-white/70' : 'text-muted'
                        }`}
                      >
                        {reward.step}ª matrícula
                      </span>
                      <span
                        className={`mt-1 font-extrabold leading-tight tracking-tight ${
                          reward.highlight ? 'text-2xl text-yellow' : 'text-3xl text-red'
                        }`}
                      >
                        {reward.value}
                      </span>
                      <span
                        className={`mt-1 text-sm font-semibold ${
                          reward.highlight ? 'text-white/85' : 'text-ink/70'
                        }`}
                      >
                        {reward.detail}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-cream p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-ink">
              Com 4 matrículas: <span className="text-red">R$ 60 de desconto</span> +{' '}
              <span className="text-red">1 parcela isenta</span>.
            </p>
            <p className="text-muted">
              Se o indicado fizer só o curso gratuito, ele não paga nada.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
