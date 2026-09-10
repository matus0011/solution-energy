import { Link } from 'react-router-dom'
import { projects } from '@/lib/projects'

// Na razie nie ma prawdziwego API/CMS z treścią per wpis — na test zawsze
// pokazujemy pierwszą pozycję z listy, niezależnie od parametru w adresie.
// Do podmiany, gdy dojdą realne dane dla poszczególnych aktualności.
const project = projects[0]

export default function AktualnoscSzczegoly() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-7xl items-center overflow-hidden sm:h-[380px]">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-5xl">
            {project.title}
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/">Strona główna</Link> / <Link to="/realizacje">Aktualności</Link>
          </span>
        </div>
      </div>

      <div className="px-6 pb-20 pt-16 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <span className="text-[16px] font-bold uppercase tracking-wide text-[#777777]">
            {project.date} / Aktualności
          </span>

          <p className="text-[18px] font-normal leading-relaxed text-[#777777]">{project.desc}</p>

          {/* Treść aktualności — docelowo surowy HTML z WordPressa (np. przez
              dangerouslySetInnerHTML). Klasa .entry-content (src/index.css) stylizuje
              gołe tagi, więc obsłuży dowolne bloki, jakie przyjdą z edytora: akapity,
              nagłówki, cytaty, listy, obrazy, wideo/embedy, tabele itd. */}
          <div className="entry-content">
            <p>
              Pełna treść aktualności — do uzupełnienia. W tym miejscu pojawi się opis realizacji: zakres prac,
              zastosowane rozwiązania techniczne, harmonogram oraz efekty wdrożenia.
            </p>

            <blockquote>
              Cytat — do uzupełnienia, np. opinia klienta o współpracy przy tej realizacji.
              <cite>— Imię i nazwisko, stanowisko</cite>
            </blockquote>

            <p>Kolejny akapit — do uzupełnienia. Zakres prac obejmował m.in.:</p>

            <ul>
              <li>Punkt pierwszy — do uzupełnienia</li>
              <li>Punkt drugi — do uzupełnienia</li>
              <li>Punkt trzeci — do uzupełnienia</li>
            </ul>

            <h2>Śródtytuł — do uzupełnienia</h2>

            <p>Kolejny akapit pod śródtytułem — do uzupełnienia rzeczywistą treścią po stronie klienta.</p>

            <div className="flex h-[240px] items-center justify-center bg-slate-100 text-sm font-medium uppercase tracking-wide text-slate-400">
              Miejsce na wideo — do uzupełnienia
            </div>

            <p>Ostatni akapit — do uzupełnienia rzeczywistą treścią po stronie klienta.</p>
          </div>

          <Link
            to="/realizacje"
            className="group/cta mt-4 flex w-fit cursor-pointer items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#fbba00] text-lg font-semibold leading-none text-[#fbba00] transition-colors duration-300 group-hover/cta:border-[#26282C] group-hover/cta:text-[#26282C]">
              ‹
            </span>
            <span className="text-[16px] font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 group-hover/cta:text-[#26282C]">
              Wróć do listy
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
