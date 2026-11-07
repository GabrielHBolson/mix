import { useEffect, useRef, useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import ReferralRewards from '../components/ReferralRewards'
import Reveal from '../components/Reveal'
import { WhatsAppIcon } from '../components/icons'
import { referralsCopy, site } from '../data/site'

interface Friend {
  id: number
  name: string
  phone: string
  course: string
}

const MAX_FRIENDS = 10

function onlyDigits(value: string) {
  return value.replace(/\D/g, '')
}

/** Formata como (54) 99999-9999 enquanto o aluno digita. */
function formatPhone(value: string) {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function isValidPhone(value: string) {
  const len = onlyDigits(value).length
  return len === 10 || len === 11
}

function buildMessage(referrer: string, friends: Friend[]) {
  const name = referrer.trim() || '(seu nome)'
  const header = `Olá! Estes são os alunos indicados por *${name}* para o curso gratuito:`

  const list = friends.map((f, i) => {
    const lines = [
      `${i + 1}. *${f.name.trim() || '(nome do colega)'}*`,
      `   WhatsApp: ${f.phone || '(número)'}`,
    ]
    if (f.course.trim()) lines.push(`   Curso de interesse: ${f.course.trim()}`)
    return lines.join('\n')
  })

  return [header, '', ...list, '', 'Enviado pelo Portal do Aluno.'].join('\n')
}

/** Mostra a prévia como o WhatsApp exibe: *texto* vira negrito. */
function WhatsAppText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*\n]+\*)/g).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <strong key={i}>{part.slice(1, -1)}</strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-red focus:outline-none focus:ring-4 focus:ring-red/10'

const errorInputClass = 'border-red bg-red/[0.03]'

export default function Referrals() {
  const nextId = useRef(2)
  const [referrer, setReferrer] = useState('')
  const [friends, setFriends] = useState<Friend[]>([{ id: 1, name: '', phone: '', course: '' }])
  const [submitted, setSubmitted] = useState(false)
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  useEffect(() => {
    document.title = `${referralsCopy.title} · ${site.title}`
    return () => {
      document.title = site.title
    }
  }, [])

  const message = buildMessage(referrer, friends)

  const referrerError = submitted && !referrer.trim()
  const friendErrors = friends.map((f) => ({
    name: submitted && !f.name.trim(),
    phone: submitted && !isValidPhone(f.phone),
  }))

  function updateFriend(id: number, field: keyof Omit<Friend, 'id'>, value: string) {
    setFriends((list) =>
      list.map((f) =>
        f.id === id ? { ...f, [field]: field === 'phone' ? formatPhone(value) : value } : f,
      ),
    )
  }

  function addFriend() {
    if (friends.length >= MAX_FRIENDS) return
    const id = nextId.current++
    setFriends((list) => [...list, { id, name: '', phone: '', course: '' }])
    requestAnimationFrame(() => document.getElementById(`friend-name-${id}`)?.focus())
  }

  function removeFriend(id: number) {
    setFriends((list) => (list.length > 1 ? list.filter((f) => f.id !== id) : list))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)

    const valid =
      referrer.trim() && friends.every((f) => f.name.trim() && isValidPhone(f.phone))

    if (!valid) {
      requestAnimationFrame(() =>
        document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      )
      return
    }

    const url = `https://wa.me/${site.referralWhatsApp}?text=${encodeURIComponent(message)}`
    setSentUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function resetForm() {
    setReferrer('')
    setFriends([{ id: nextId.current++, name: '', phone: '', course: '' }])
    setSubmitted(false)
    setSentUrl(null)
  }

  return (
    <>
      <PageHero
        eyebrow={referralsCopy.eyebrow}
        title={referralsCopy.title}
        subtitle={referralsCopy.subtitle}
      />

      <div className="container-site py-14 sm:py-16">
        <ReferralRewards />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          <Reveal>
            {sentUrl ? (
              <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-white p-8 text-center shadow-lg shadow-ink/5 sm:p-12">
                <div
                  className="absolute -top-24 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#25d366]/20 blur-3xl"
                  aria-hidden="true"
                />
                <span
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#178F48] text-white shadow-xl shadow-[#178F48]/30 animate-pop"
                  aria-hidden="true"
                >
                  <WhatsAppIcon className="h-10 w-10" />
                </span>
                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Mensagem pronta!
                </h2>
                <p className="mx-auto mt-3 max-w-md text-muted" role="status">
                  Abrimos o WhatsApp com a sua indicação. É só tocar em{' '}
                  <strong className="text-ink">enviar</strong> por lá. Obrigado por indicar!
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={sentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#178F48] px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#127a3c]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Abrir o WhatsApp de novo
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="cursor-pointer rounded-full bg-yellow px-6 py-3 font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                  >
                    Fazer nova indicação
                  </button>
                </div>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-3xl border border-line bg-white p-6 shadow-lg shadow-ink/5 sm:p-8"
              >
                <fieldset>
                  <legend className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-ink">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-red text-sm text-white">
                      1
                    </span>
                    Seus dados
                  </legend>
                  <div className="mt-5">
                    <div>
                      <label htmlFor="referrer" className="mb-1.5 block text-sm font-bold text-ink">
                        Seu nome completo <span className="text-red">*</span>
                      </label>
                      <input
                        id="referrer"
                        type="text"
                        autoComplete="name"
                        value={referrer}
                        onChange={(e) => setReferrer(e.target.value)}
                        aria-invalid={referrerError}
                        aria-describedby={referrerError ? 'referrer-error' : undefined}
                        placeholder="Ex.: Maria da Silva"
                        className={`${inputClass} ${referrerError ? errorInputClass : ''}`}
                      />
                      {referrerError ? (
                        <p id="referrer-error" className="mt-1.5 text-sm font-semibold text-red">
                          Informe o seu nome.
                        </p>
                      ) : null}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-10">
                  <legend className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-ink">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-red text-sm text-white">
                      2
                    </span>
                    Colegas indicados
                  </legend>

                  <ol className="mt-5 flex flex-col gap-4">
                    {friends.map((friend, i) => (
                      <li
                        key={friend.id}
                        className="relative rounded-2xl border border-line bg-cream/60 p-4 animate-pop sm:p-5"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-extrabold uppercase tracking-wider text-red">
                            Indicado {i + 1}
                          </span>
                          {friends.length > 1 ? (
                            <button
                              type="button"
                              onClick={() => removeFriend(friend.id)}
                              aria-label={`Remover indicado ${i + 1}`}
                              className="cursor-pointer rounded-full px-3 py-1 text-sm font-bold text-muted transition-colors hover:bg-red/10 hover:text-red"
                            >
                              Remover
                            </button>
                          ) : null}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor={`friend-name-${friend.id}`}
                              className="mb-1.5 block text-sm font-bold text-ink"
                            >
                              Nome <span className="text-red">*</span>
                            </label>
                            <input
                              id={`friend-name-${friend.id}`}
                              type="text"
                              value={friend.name}
                              onChange={(e) => updateFriend(friend.id, 'name', e.target.value)}
                              aria-invalid={friendErrors[i].name}
                              placeholder="Nome do colega"
                              className={`${inputClass} ${friendErrors[i].name ? errorInputClass : ''}`}
                            />
                            {friendErrors[i].name ? (
                              <p className="mt-1.5 text-sm font-semibold text-red">
                                Informe o nome.
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label
                              htmlFor={`friend-phone-${friend.id}`}
                              className="mb-1.5 block text-sm font-bold text-ink"
                            >
                              WhatsApp <span className="text-red">*</span>
                            </label>
                            <input
                              id={`friend-phone-${friend.id}`}
                              type="tel"
                              inputMode="numeric"
                              value={friend.phone}
                              onChange={(e) => updateFriend(friend.id, 'phone', e.target.value)}
                              aria-invalid={friendErrors[i].phone}
                              placeholder="(54) 99999-9999"
                              className={`${inputClass} ${friendErrors[i].phone ? errorInputClass : ''}`}
                            />
                            {friendErrors[i].phone ? (
                              <p className="mt-1.5 text-sm font-semibold text-red">
                                Informe um número com DDD.
                              </p>
                            ) : null}
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`friend-course-${friend.id}`}
                              className="mb-1.5 block text-sm font-bold text-ink"
                            >
                              Curso de interesse{' '}
                              <span className="font-medium text-muted">(opcional)</span>
                            </label>
                            <input
                              id={`friend-course-${friend.id}`}
                              type="text"
                              value={friend.course}
                              onChange={(e) => updateFriend(friend.id, 'course', e.target.value)}
                              placeholder="Ex.: Inglês, Administração..."
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>

                  {friends.length < MAX_FRIENDS ? (
                    <button
                      type="button"
                      onClick={addFriend}
                      className="group mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line py-4 font-bold text-muted transition-all duration-300 hover:border-red hover:bg-red/[0.03] hover:text-red"
                    >
                      <span
                        className="grid h-6 w-6 place-items-center rounded-full bg-current/10 text-lg leading-none transition-transform duration-300 group-hover:rotate-90"
                        aria-hidden="true"
                      >
                        +
                      </span>
                      Adicionar outro colega
                    </button>
                  ) : (
                    <p className="mt-4 text-center text-sm text-muted">
                      Limite de {MAX_FRIENDS} indicações por envio.
                    </p>
                  )}
                </fieldset>

                <button
                  type="submit"
                  className="group mt-10 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#178F48] px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-[#178F48]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#127a3c]"
                >
                  <WhatsAppIcon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[-12deg]" />
                  Enviar indicações pelo WhatsApp
                </button>
                <p className="mt-3 text-center text-xs text-muted">
                  Vamos abrir o WhatsApp com a mensagem pronta. Confira e toque em enviar.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal variant="right" delay={120} className="lg:sticky lg:top-24">
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#0b141a] p-5 text-white shadow-2xl sm:p-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#178F48]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold leading-tight">Instituto Mix</p>
                  <p className="text-xs text-white/60">Prévia da sua mensagem</p>
                </div>
              </div>
              <div className="mt-4 max-h-[26rem] overflow-y-auto">
                <div className="ml-auto w-fit max-w-full rounded-2xl rounded-tr-sm bg-[#005c4b] px-4 py-3 shadow-md">
                  <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                    <WhatsAppText text={message} />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-line bg-white p-6">
              <h2 className="text-lg font-extrabold tracking-tight text-ink">Como funciona</h2>
              <ol className="mt-4 flex flex-col gap-4">
                {[
                  ['✍️', 'Preencha o seu nome completo e os dados dos colegas.'],
                  ['📲', 'Toque em enviar: o WhatsApp abre com a mensagem pronta.'],
                  ['🎓', 'A nossa equipe fala com os indicados sobre o curso gratuito.'],
                  ['💰', 'Indicado matriculado em curso pago? Você ganha o desconto.'],
                ].map(([emoji, text]) => (
                  <li key={text} className="flex items-start gap-3 text-sm font-medium text-ink">
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF3C4] text-base"
                      aria-hidden="true"
                    >
                      {emoji}
                    </span>
                    <span className="pt-2">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
