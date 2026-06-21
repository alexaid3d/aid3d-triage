export default function Logo() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse-glow"
    >
      <defs>
        <filter id="g" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon
        points="44,10 78,28 44,46 10,28"
        fill="none"
        stroke="#3a3f48"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
      <polygon
        points="10,28 44,46 44,78 10,60"
        fill="none"
        stroke="#2a2e36"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
      <polygon
        points="78,28 78,60 44,78 44,46"
        fill="none"
        stroke="#30343c"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />

      <line x1="44" y1="10" x2="44" y2="46" stroke="#2a2e36" strokeWidth="0.4" />
      <line x1="10" y1="28" x2="44" y2="46" stroke="#2a2e36" strokeWidth="0.4" />
      <line x1="78" y1="28" x2="44" y2="46" stroke="#2a2e36" strokeWidth="0.4" />

      <circle cx="27" cy="36" r="2" fill="#00d4ee" opacity="0.4" />
      <circle cx="61" cy="36" r="2" fill="#00d4ee" opacity="0.3" />
      <circle cx="44" cy="62" r="2" fill="#00d4ee" opacity="0.35" />

      <line x1="27" y1="36" x2="44" y2="46" stroke="#00d4ee" strokeWidth="0.6" opacity="0.25" />
      <line x1="61" y1="36" x2="44" y2="46" stroke="#00d4ee" strokeWidth="0.6" opacity="0.25" />
      <line x1="44" y1="62" x2="44" y2="46" stroke="#00d4ee" strokeWidth="0.6" opacity="0.25" />

      <polyline
        points="8,44 14,44 20,36 26,54 34,26 42,60 50,32 58,50 66,44 80,44"
        stroke="#00d4ee"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="280"
        strokeDashoffset="280"
        className="animate-ekg"
        opacity="0.85"
        filter="url(#g)"
      />

      <circle cx="44" cy="46" r="2.5" fill="#00d4ee" opacity="0.45" />
    </svg>
  )
}
