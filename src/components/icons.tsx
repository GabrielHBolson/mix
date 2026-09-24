interface IconProps {
  className?: string
}

export function CommaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="30" cy="12" r="8" />
        <path d="M20 16c-6 2.6-9.6 7.6-8.4 13.2.9 4.2 4 6.6 8.4 6.6 3.4 0 5.8-1.5 7.2-4.3l-4.7-3.1c-.5.9-1.4 1.4-2.5 1.4-1.8 0-3-1.2-3.2-2.9-.3-2.4 1.3-5 4.5-7.2L20 16z" />
      </g>
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function MateSvg({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 640 640"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustração de um kit mateiro com cuia, bomba e garrafa térmica"
      className={className}
    >
      <rect width="640" height="640" fill="#2f9e5f" />
      <circle cx="540" cy="110" r="160" fill="#ffffff" opacity="0.08" />
      <circle cx="90" cy="540" r="190" fill="#1c5c38" opacity="0.25" />

      <g>
        <path d="M150 380h230c0 96-52 170-115 170S150 476 150 380z" fill="#6f4222" />
        <ellipse cx="265" cy="380" rx="115" ry="26" fill="#1f2a24" />
        <path d="M150 380h230v-14c-14 8-28 12-44 12H194c-16 0-30-4-44-12z" fill="#57341a" />
      </g>

      <g>
        <rect x="210" y="330" width="30" height="200" rx="15" transform="rotate(-22 225 430)" fill="#b08a3e" />
        <circle cx="238" cy="318" r="16" fill="#c7a252" />
        <circle cx="238" cy="318" r="8" fill="#2f9e5f" />
      </g>

      <g>
        <rect x="430" y="180" width="120" height="330" rx="34" fill="#ffffff" />
        <path d="M430 340h120v14H430z" fill="#bfe6d3" />
        <path d="M430 430h120v14H430z" fill="#bfe6d3" />
        <path d="M448 180h84v40h-84z" fill="#d8efe4" />
      </g>
    </svg>
  )
}