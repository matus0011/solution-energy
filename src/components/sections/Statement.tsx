import { useEffect, useRef } from 'react'

// Sekcja-manifest w stylu „zakreślacza": całe hasło jest jasnoszare, a tam
// gdzie leży żółty blok, prześwituje jego ciemna wersja. Robimy to przez
// nałożone kopie tego samego tekstu przyciętte `clip-path` do kształtu bloku —
// dzięki temu litery same się nie ruszają, zmienia się wyłącznie to, który
// fragment jest „zakreślony".
//
// Kopie są `aria-hidden`, więc czytnik ekranu widzi hasło tylko raz.

const lines = ['Cała inwestycja.', 'Jeden wykonawca.']

// Kształty zakreśleń. To nie są skośne prostokąty — każdy ma ścięty
// (sfazowany) dolny róg: krawędź boczna schodzi w dół i urywa się ukośnym
// cięciem do dolnej krawędzi. Ta faza daje im „blacharski", techniczny
// charakter zamiast wyglądu przekrzywionego prostokąta.
//
// Wszystkie wymiary w procentach obszaru hasła. Obszar jest wyższy niż sam
// tekst (`blockArea` dokłada pionowy zapas), dzięki czemu bloki wychodzą nad
// pierwszą i pod drugą linijkę.
interface Block {
  x: number
  y: number
  w: number
  h: number
  /** O ile górna krawędź jest przesunięta w prawo względem dolnej. */
  skew: number
  /** Rozmiar ścięcia — w poziomie i w pionie osobno, bo % liczą się od
      różnych wymiarów kontenera. */
  chamferX: number
  chamferY: number
  /** Który dolny róg jest ścięty. */
  corner: 'left' | 'right'
}

function toPolygon({ x, y, w, h, skew, chamferX, chamferY, corner }: Block) {
  const top = y
  const bottom = y + h
  const topLeft = x + skew
  const topRight = x + w + skew

  // Punkt na krawędzi bocznej, w którym zaczyna się ścięcie. Krawędź jest
  // pochylona o `skew`, więc przesuwamy go proporcjonalnie do wysokości cięcia.
  const lean = (skew * chamferY) / h

  const points =
    corner === 'right'
      ? [
          [topLeft, top],
          [topRight, top],
          [x + w + lean, bottom - chamferY],
          [x + w - chamferX, bottom],
          [x, bottom],
        ]
      : [
          [topLeft, top],
          [topRight, top],
          [x + w, bottom],
          [x + chamferX, bottom],
          [x - lean, bottom - chamferY],
        ]

  return `polygon(${points.map(([px, py]) => `${px.toFixed(1)}% ${py.toFixed(1)}%`).join(', ')})`
}

const blocks: string[] = (
  [
    { x: 14, y: 3, w: 29, h: 45, skew: 4, chamferX: 7, chamferY: 15, corner: 'right' },
    { x: 36, y: 37, w: 28, h: 38, skew: 4, chamferX: 7, chamferY: 14, corner: 'left' },
    { x: 62, y: 60, w: 22, h: 38, skew: 4, chamferX: 7, chamferY: 14, corner: 'right' },
  ] satisfies Block[]
).map(toPolygon)

const blockArea = 'py-8 sm:py-12 lg:py-16'

const textClass =
  'text-center font-heading text-[34px] font-semibold leading-[1.45] tracking-[0.01em] sm:text-6xl lg:text-[86px]'

// Blok jadący za kursorem — ten sam sfazowany kształt, tylko liczony w px
// wokół pozycji myszy zamiast w procentach obszaru.
const cursorWidth = 250
const cursorHeight = 118
const cursorSkew = 22
const cursorChamfer = 34

function cursorPolygon(left: number, top: number) {
  const right = left + cursorWidth
  const bottom = top + cursorHeight
  const lean = (cursorSkew * cursorChamfer) / cursorHeight

  return [
    [left + cursorSkew, top],
    [right + cursorSkew, top],
    [right + lean, bottom - cursorChamfer],
    [right - cursorChamfer, bottom],
    [left, bottom],
  ]
    .map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`)
    .join(', ')
}

export default function Statement() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const cursor = cursorRef.current
    if (!wrap || !cursor) return

    // Tylko myszka/trackpad. Na dotyku nie ma najechania, więc zostają same
    // bloki statyczne — inaczej blok utknąłby w miejscu ostatniego dotknięcia.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return

    let frame = 0

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const left = x - cursorWidth / 2
        const top = y - cursorHeight / 2

        cursor.style.clipPath = `polygon(${cursorPolygon(left, top)})`
        cursor.style.opacity = '1'
      })
    }

    const leave = () => {
      cancelAnimationFrame(frame)
      cursor.style.opacity = '0'
    }

    wrap.addEventListener('pointermove', move)
    wrap.addEventListener('pointerleave', leave)

    return () => {
      cancelAnimationFrame(frame)
      wrap.removeEventListener('pointermove', move)
      wrap.removeEventListener('pointerleave', leave)
    }
  }, [])

  const phrase = lines.map((line) => (
    <span key={line} className="block whitespace-nowrap">
      {line}
    </span>
  ))

  return (
    <section className="bg-white px-6 py-24 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <div ref={wrapRef} className={`relative mx-auto w-fit select-none ${blockArea}`}>
          <h2 className={`${textClass} text-[#dcdcdc]`}>{phrase}</h2>

          {blocks.map((clip) => (
            <div
              key={clip}
              aria-hidden="true"
              className={`absolute inset-0 ${blockArea}`}
              style={{ clipPath: clip }}
            >
              <div className="absolute inset-0 bg-[#fbba00]" />
              <div className={`relative ${textClass} text-[#26282C]`}>{phrase}</div>
            </div>
          ))}

          {/* Blok jadący za kursorem — „zakreśla" kolejne fragmenty hasła. */}
          <div
            ref={cursorRef}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ${blockArea}`}
          >
            <div className="absolute inset-0 bg-[#fbba00]" />
            <div className={`relative ${textClass} text-[#26282C]`}>{phrase}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
