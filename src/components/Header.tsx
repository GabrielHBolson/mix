import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/regras', label: 'Regras', end: false },
  { to: '/trabalhe-conosco', label: 'Trabalhe conosco', end: false },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-red text-white">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <NavLink to="/" aria-label="Página inicial do portal" className="flex items-center gap-2.5">
          <img
            src="/images/logo_instituto_mix.png"
            alt="Logo do Instituto Mix"
            className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-10 sm:w-10"
          />
          <span className="text-sm font-extrabold leading-tight tracking-tight sm:text-base">
            Portal Passo Fundo Centro
          </span>
        </NavLink>
        <nav aria-label="Navegação principal">
          <ul className="flex items-stretch gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex h-16 items-center border-b-4 px-2.5 text-sm font-bold transition-colors sm:px-4 ${
                      isActive
                        ? 'border-yellow text-white'
                        : 'border-transparent text-white/85 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}