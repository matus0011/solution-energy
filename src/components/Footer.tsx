import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { InstagramIcon, YoutubeIcon } from '@/components/icons/SocialIcons'

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FaFacebook },
  { label: 'LinkedIn', href: '#', Icon: FaLinkedin },
  { label: 'X', href: '#', Icon: FaSquareXTwitter },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#26282C] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Link to="/" className="inline-block w-fit">
              <img
                src="/logos/logotyp_energysolutions_crv_white.png"
                alt="Energy Solutions — strona główna"
                className="h-14 w-auto"
              />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white">
              Zawsze celujemy w dobrą energię do współpracy.
            </p>
            <div className="mt-1 flex items-end gap-6 lg:mt-auto">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white transition hover:text-[#fbba00]"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5 text-base text-white lg:items-start">
            <span className="font-heading text-2xl font-bold tracking-wide text-[#fbba00] mb-6">
              Kontakt
            </span>
            <span>
              <span className="font-bold">ul.</span> Wiesława Wody 27, 33-100 Tarnów
            </span>
            <a href="tel:+48146571105" className="w-fit transition hover:text-[#fbba00]">
              <span className="font-bold">tel.</span> +48 (14) 657 11 05
            </a>
            <span>
              <span className="font-bold">fax</span> +48 (14) 657 11 06
            </span>
            <a href="mailto:biuro@energysolutions.pl" className="w-fit transition hover:text-[#fbba00]">
              <span className="font-bold">e-mail:</span> biuro@energysolutions.pl
            </a>
          </div>

          <div className="flex flex-col items-center gap-2.5 text-base text-white lg:items-start">
            <span className="font-heading text-2xl font-bold tracking-wide text-[#fbba00] mb-6">
              Dane rejestrowe
            </span>
            <span><span className="font-bold">NIP:</span> 873-308-78-05</span>
            <span><span className="font-bold">KRS:</span> 0000245582</span>
            <span><span className="font-bold">BDO:</span> 000566462</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-white lg:flex-row lg:justify-between lg:text-left">
          <span>© {year} Energy Solutions Sp. z o.o. Wszelkie prawa zastrzeżone.</span>
          <a
            href="https://mateuszklich.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#fbba00]"
          >
            Projekt i wykonanie MK
          </a>
        </div>
      </div>
    </footer>
  )
}
