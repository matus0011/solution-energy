import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { InstagramIcon, YoutubeIcon } from '@/components/icons/SocialIcons'

// Te same linki co w stopce (patrz src/components/Footer.tsx) — na razie
// placeholdery "#", do podmiany na realne profile firmy.
const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FaFacebook },
  { label: 'LinkedIn', href: '#', Icon: FaLinkedin },
  { label: 'X', href: '#', Icon: FaSquareXTwitter },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

export default function Kontakt() {
  return (
    <>
      <div className="relative flex h-[160px] items-center overflow-hidden sm:h-[300px]">
        <img
          src="https://pixabay.com/images/download/peterdargatz-windmill-50512_640.jpg"
          alt="Kontakt"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-2 px-6 text-left sm:px-10 lg:px-14">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
            Strona główna / Kontakt
          </span>
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Kontakt
          </h1>
        </div>
      </div>

      <div className="px-6 pb-20 pt-16 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <div className="relative sm:mb-28 lg:mb-36">
            <div className="h-[420px] w-full overflow-hidden sm:h-[520px]">
              <iframe
                title="Mapa — siedziba Energy Solutions"
                src="https://www.google.com/maps?q=Wies%C5%82awa+Wody+27,+33-100+Tarn%C3%B3w&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative z-10 mx-0 w-full mt-0 flex flex-col gap-6 bg-[#26282C] px-6 py-8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:absolute sm:top-16 sm:right-[-190px] sm:w-full sm:max-w-[700px] sm:gap-8 sm:px-16 sm:py-20 lg:right-[-136px]">
              {/* Własny znak — ręcznie rysowana błyskawica: żółty "cień" przesunięty
                  za konturową błyskawicą, jak na referencji od klienta. */}
              <svg viewBox="0 0 24 24" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="14 2 4 14 12 14 10 22 20 10 12 10 14 2"
                  fill="#fbba00"
                  transform="translate(1.8 1.8)"
                />
                <polygon
                  points="14 2 4 14 12 14 10 22 20 10 12 10 14 2"
                  fill="white"
                  stroke="#26282C"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="font-heading text-[34px] font-bold uppercase tracking-wide text-white">
                Skontaktuj się
              </h2>

              <div className="flex flex-col gap-5 text-[19px] leading-relaxed text-white/80">
                <div>
                  <span className="mb-1 block text-[20px] font-semibold uppercase tracking-wide text-white">
                    Adres:
                  </span>
                  Wiesława Wody 27, 33-100 Tarnów
                </div>
                <div>
                  <span className="mb-1 block text-[20px] font-semibold uppercase tracking-wide text-white">
                    Telefon:
                  </span>
                  <a href="tel:+48146571105" className="transition-colors hover:text-[#fbba00]">
                    +48 (14) 657 11 05
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#fbba00] transition-colors hover:text-white"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formularz — na razie sam wizualny szkielet, bez obsługi wysyłki.
              Docelowo podpięty pod formularz WordPressa (np. Contact Form 7 /
              WPForms) po migracji do Elementora. */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#fbba00]">
                Masz pytania?
              </span>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#26282C] sm:text-4xl">
                Napisz do nas
              </h2>
              <p className="max-w-xl text-[17px] leading-relaxed text-[#777777]">
                Chętnie odpowiemy na pytania dotyczące Twojego projektu energetycznego — napiszemy z powrotem
                najszybciej, jak to możliwe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-bold uppercase tracking-wide text-[#26282C]">
                  Imię i nazwisko
                </span>
                <input
                  type="text"
                  name="name"
                  className="border border-[#e5e5e5] px-4 py-3 text-[16px] text-[#26282C] outline-none transition-colors focus:border-[#fbba00]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-bold uppercase tracking-wide text-[#26282C]">E-mail</span>
                <input
                  type="email"
                  name="email"
                  className="border border-[#e5e5e5] px-4 py-3 text-[16px] text-[#26282C] outline-none transition-colors focus:border-[#fbba00]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-bold uppercase tracking-wide text-[#26282C]">Telefon</span>
                <input
                  type="tel"
                  name="phone"
                  className="border border-[#e5e5e5] px-4 py-3 text-[16px] text-[#26282C] outline-none transition-colors focus:border-[#fbba00]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-bold uppercase tracking-wide text-[#26282C]">Temat</span>
                <input
                  type="text"
                  name="subject"
                  className="border border-[#e5e5e5] px-4 py-3 text-[16px] text-[#26282C] outline-none transition-colors focus:border-[#fbba00]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-bold uppercase tracking-wide text-[#26282C]">Wiadomość</span>
              <textarea
                name="message"
                rows={6}
                className="border border-[#e5e5e5] px-4 py-3 text-[16px] text-[#26282C] outline-none transition-colors focus:border-[#fbba00]"
              />
            </label>

            <label className="flex items-start gap-3 text-[14px] leading-relaxed text-[#777777]">
              <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 accent-[#fbba00]" />
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na przesłane
              zapytanie — treść zgody do uzupełnienia zgodnie z polityką prywatności.
            </label>

            <button
              type="submit"
              className="w-fit bg-[#fbba00] px-8 py-3 text-[16px] font-bold uppercase tracking-wide text-[#26282C] transition-colors duration-300 hover:bg-[#26282C] hover:text-white"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
