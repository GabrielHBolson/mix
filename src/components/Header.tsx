import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início', short: 'Início', end: true },
  { to: '/regras', label: 'Regras', short: 'Regras', end: false },
  { to: '/trabalhe-conosco', label: 'Trabalhe conosco', short: 'Vagas', end: false },
  { to: '/indicacoes', label: 'Indicações', short: 'Indicar', end: false },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 12)
      barRef.current?.style.setProperty('--progress', String(max > 0 ? y / max : 0))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-[background-color,box-shadow] duration-500 ${
        scrolled ? 'bg-red/90 shadow-lg shadow-red/20 backdrop-blur-md' : 'bg-red'
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-3 transition-[height] duration-500 ease-[var(--ease-spring)] ${
          scrolled ? 'h-14' : 'h-16 sm:h-[4.5rem]'
        }`}
      >
        <NavLink
          to="/"
          aria-label="Página inicial do portal"
          className="group flex items-center gap-2.5"
        >
          <span className="relative grid shrink-0 place-items-center">
            <span
              className="absolute inset-0 rounded-full bg-yellow/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <img
              src="/images/logo_instituto_mix.png"
              alt="Logo do Instituto Mix"
              className="relative h-9 w-9 rounded-full object-contain transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-8deg] group-hover:scale-110 sm:h-10 sm:w-10"
            />
          </span>
          <span className="hidden text-sm font-extrabold leading-tight tracking-tight lg:block lg:text-base">
            Portal Passo Fundo Centro
          </span>
        </NavLink>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-white/15">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative block whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-bold transition-all duration-300 sm:px-4 sm:text-sm ${
                      isActive
                        ? 'bg-yellow text-ink shadow-md shadow-ink/20'
                        : 'text-white/85 hover:bg-white/15 hover:text-white'
                    }`
                  }
                >
                  <span className="md:hidden">{link.short}</span>
                  <span className="hidden md:inline">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        ref={barRef}
        className="scroll-progress absolute inset-x-0 bottom-0 h-[3px] bg-yellow"
        aria-hidden="true"
      />
    </header>
  )
}
