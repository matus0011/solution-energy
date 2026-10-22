import type { CSSProperties } from 'react'
import type { TimelineIconName } from '@/lib/timeline'

// Rysunki etapów osi czasu v4, w siatce 160×96. Kreski rysują się po kolei,
// w kolejności z tablicy. `accent` bierze kolor akcentu strony, `flow` dostaje
// po narysowaniu płynące kreskowanie (prąd, gaz, woda).
type Stroke = { d: string; accent?: boolean; flow?: boolean }

const ring = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`

const icons: Record<TimelineIconName, Stroke[]> = {
  cooling: [
    { d: 'M8 82H152M20 82V48L55 20L90 48V82M32 82V56H76V82' },
    { d: 'M55 20V10M104 30H146V72H104Z' },
    { d: 'M125 38V64M114 44L136 58M136 44L114 58', accent: true },
    { d: 'M76 66H104M146 50H154', accent: true, flow: true },
    { d: 'M26 44H84M114 72V82M136 72V82' },
  ],
  storage: [
    { d: 'M8 84H152M45 24C45 12 115 12 115 24V76C115 88 45 88 45 76Z' },
    { d: 'M45 24C45 36 115 36 115 24M45 42H115M45 60H115' },
    { d: 'M24 78V36H45M115 68H138V28', accent: true, flow: true },
    { d: 'M19 47L24 36L29 47M133 39L138 28L143 39', accent: true },
    { d: 'M72 47C80 51 68 55 76 59M87 47C95 51 83 55 91 59', accent: true },
  ],
  // Arkusz z rysunkiem hali i cyrkiel.
  blueprint: [
    { d: 'M20 14H108V82H20Z' },
    { d: 'M80 82V70H108M80 76H108' },
    { d: 'M30 60H68V44L56 36V44L44 36V44L30 36Z' },
    { d: 'M30 67H68M30 64V70M68 64V70', accent: true },
    { d: ring(128, 18, 3) },
    { d: 'M128 15V9' },
    { d: 'M126.5 21L116 78M129.5 21L140 78' },
    { d: 'M121 52H135' },
    { d: 'M140 78A24 24 0 0 0 132 60', accent: true },
  ],
  // Jedna jednostka, trzy wyjścia: prąd, ciepło, chłód.
  trigeneration: [
    { d: 'M14 82H146' },
    { d: 'M56 28H104V74H56Z' },
    { d: 'M56 38H104' },
    { d: 'M64 48H96M64 54H96M64 60H96' },
    { d: 'M62 74V82M98 74V82' },
    { d: 'M18 52H56' },
    { d: 'M28 47L36 57V47L28 57Z' },
    { d: 'M104 36H120M104 52H120M104 68H120', accent: true, flow: true },
    { d: 'M131 28L125 37H133L127 46', accent: true },
    { d: 'M127 47C131 50 123 54 127 57M135 47C139 50 131 54 135 57' },
    { d: 'M131 61V75M125 64.5L137 71.5M137 64.5L125 71.5' },
  ],
  // Zbiornik biogazu i agregat w obudowie wyciszonej.
  biogas: [
    { d: 'M6 82H154' },
    { d: 'M14 82V56H62V82' },
    { d: 'M14 56A24 18 0 0 1 62 56' },
    { d: 'M14 68H62' },
    { d: 'M84 82V46H146V82' },
    { d: 'M92 54H106M92 60H106M92 66H106M92 72H106' },
    { d: 'M118 82V54H136V82' },
    { d: 'M134 46V30M140 46V30M132 30H142' },
    { d: 'M38 38V28H100V46', accent: true, flow: true },
  ],
  // Dwa otwory w warstwach skał i obieg wody przez ciepłownię.
  geothermal: [
    { d: 'M8 30H152' },
    { d: 'M64 30V12H96V30' },
    { d: ring(80, 21, 5) },
    { d: 'M34 30V22H46V30M114 30V22H126V30' },
    { d: 'M36 30V84M44 30V84M116 30V84M124 30V84' },
    { d: 'M8 50H28M52 50H108M132 50H152' },
    { d: 'M8 68H28M52 68H108M132 68H152' },
    { d: 'M96 25H120V84C100 94 60 94 40 84V25H64', accent: true, flow: true },
  ],
  // Budynek z panelami na dachu, pompa ciepła i słońce.
  research: [
    { d: 'M10 82H150' },
    { d: 'M24 82V48H96V82' },
    { d: 'M34 58H46V68H34ZM74 58H86V68H74Z' },
    { d: 'M54 82V64H66V82' },
    { d: 'M28 48L36 38H50L42 48M48 48L56 38H70L62 48M68 48L76 38H90L82 48', accent: true },
    { d: 'M104 82V62H126V82' },
    { d: ring(115, 72, 5) },
    { d: ring(132, 20, 7), accent: true },
    { d: 'M132 6V9M132 31V34M118 20H121M143 20H146M122 10L124 12M140 28L142 30M142 10L140 12', accent: true },
    { d: 'M119 29L92 40', accent: true, flow: true },
  ],
  // Wieża wiertnicza, przewód w głąb i ciepłownia.
  drilling: [
    { d: 'M10 82H150' },
    { d: 'M30 82L42 14H50L62 82' },
    { d: 'M33.5 62H58.5M36.7 44H55.3M39.5 28H52.5' },
    { d: 'M33.5 62L55.3 44M36.7 44L52.5 28' },
    { d: 'M46 14V58M46 82V93', accent: true },
    { d: 'M42 58H50V66H42Z', accent: true },
    { d: 'M84 82V52H134V82' },
    { d: 'M116 52V30H124V52' },
    { d: 'M92 62H106V72H92Z' },
    { d: 'M61 76H84', accent: true, flow: true },
  ],
  // Otwór, kocioł na biomasę i agregat kogeneracyjny.
  biomass: [
    { d: 'M8 70H152' },
    { d: 'M18 70V60H30V70' },
    { d: 'M22 70V92M26 70V92' },
    { d: 'M8 84H16M32 84H62' },
    { d: 'M34 70Q41 60 48 70' },
    { d: 'M52 70V30H92V70' },
    { d: 'M82 30V14H88V30' },
    { d: 'M72 62C62 56 66 46 72 38C74 46 82 50 78 58C77 61 75 62 72 62Z', accent: true },
    { d: 'M104 70V44H146V70' },
    { d: 'M112 52H126M112 58H126M112 64H126' },
    { d: 'M138 44V34M142 44V34M136 34H144' },
    { d: 'M24 60V48H52', accent: true, flow: true },
    { d: 'M92 56H104', accent: true, flow: true },
  ],
  // Silnik gazowy z generatorem i linia przesyłowa.
  cogeneration: [
    { d: 'M8 82H152' },
    { d: 'M16 82V54H74V82' },
    { d: 'M22 54V44H34V54M40 54V44H52V54M58 54V44H70V54' },
    { d: 'M24 66H66' },
    { d: ring(90, 66, 12) },
    { d: ring(90, 66, 4), accent: true },
    { d: 'M74 66H78' },
    { d: 'M120 82L128 20H136L144 82' },
    { d: 'M116 32H148M119 48H145' },
    { d: 'M122.1 66L139.6 48M141.9 66L124.4 48' },
    { d: 'M99 57L116 32', accent: true, flow: true },
    { d: 'M148 32H156M145 48H156', accent: true },
  ],
}

// Rysunek jest trzy razy: blady szkic pod spodem, kreska rysowana przy zapaleniu
// etapu i płynące kreskowanie na wierzchu.
export default function TimelineIcon({ name }: { name: TimelineIconName }) {
  const strokes = icons[name]
  return (
    <svg className="tlv-icon" viewBox="0 0 160 96" width="160" height="96" aria-hidden="true">
      <g className="tlv-icon-ghost">
        {strokes.map((stroke, index) => (
          <path key={index} d={stroke.d} />
        ))}
      </g>
      <g className="tlv-icon-ink">
        {strokes.map((stroke, index) => (
          <path
            key={index}
            d={stroke.d}
            pathLength={1}
            className={stroke.accent ? (stroke.flow ? 'is-accent is-soft' : 'is-accent') : undefined}
            style={{ '--i': index } as CSSProperties}
          />
        ))}
      </g>
      <g className="tlv-icon-flow">
        {strokes
          .filter((stroke) => stroke.flow)
          .map((stroke, index) => (
            <path key={index} d={stroke.d} pathLength={1} />
          ))}
      </g>
    </svg>
  )
}
