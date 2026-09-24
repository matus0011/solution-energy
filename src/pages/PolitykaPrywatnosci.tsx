import { Link } from 'react-router-dom'

export default function PolitykaPrywatnosci() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg"
          alt="Polityka prywatności"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Polityka prywatności
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            / Polityka prywatności
          </span>
        </div>
      </div>

      <div className="px-6 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 text-[#555555]">
          {/* Treść polityki */}
          <div className="flex flex-col gap-10 leading-relaxed text-[17px]">
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 1. Postanowienia ogólne
              </h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
                użytkowników korzystających z serwisu internetowego prowadzonego pod adresem energysolutions.pl,
                zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
                w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO).
              </p>
              <p>
                Administratorem danych osobowych jest <strong>Energy Solutions Sp. z o.o.</strong> z siedzibą przy
                ul. Wiesława Wody 27, 33-100 Tarnów, NIP: 873-308-78-05, KRS: 0000245582, BDO: 000566462 (kontakt:
                e-mail: <a href="mailto:biuro@energysolutions.pl" className="text-[#fbba00] underline">biuro@energysolutions.pl</a>,
                tel. <a href="tel:+48146571105" className="text-[#fbba00] underline">+48 (14) 657 11 05</a>).
              </p>
              <p>
                Dokładamy szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w
                szczególności zapewniamy, że zbierane dane są przetwarzane zgodnie z prawem, rzetelnie i w sposób
                przejrzysty.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 2. Cele i podstawy prawne przetwarzania danych
              </h2>
              <p>Dane osobowe użytkowników przetwarzane są w następujących celach:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>
                    <strong>Obsługa zapytań i kontaktu</strong> — w celu odpowiedzi na wiadomości przesyłane drogą
                    elektroniczną, formularz kontaktowy lub telefonicznie (podstawa prawna: art. 6 ust. 1 lit. f RODO
                    — prawnie uzasadniony interes Administratora polegający na budowaniu relacji z klientami).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>
                    <strong>Przygotowanie oferty i realizacja umów</strong> — w celu przygotowania wyceny, audytu
                    energetycznego lub zawarcia i wykonania umowy na realizację instalacji fotowoltaicznych,
                    wiatrowych bądź stacji ładowania (art. 6 ust. 1 lit. b RODO).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>
                    <strong>Wypełnienie obowiązków prawnych</strong> — ciążących na Administratorze, wynikających w
                    szczególności z przepisów prawa podatkowego i rachunkowości (art. 6 ust. 1 lit. c RODO).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>
                    <strong>Rekrutacja</strong> — w przypadku przesyłania aplikacji na publikowane oferty pracy
                    (podstawa prawna: przepisy Kodeksu Pracy oraz zgoda kandydata — art. 6 ust. 1 lit. a RODO).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>
                    <strong>Ustalenie, obrona lub dochodzenie roszczeń</strong> — związanych z prowadzoną działalnością
                    (art. 6 ust. 1 lit. f RODO).
                  </span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 3. Okres przechowywania danych
              </h2>
              <p>Dane osobowe przechowywane są przez okres:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Niezbędny do obsługi zapytania i prowadzenia korespondencji handlowej,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Wykonywania umowy oraz przedawnienia ewentualnych roszczeń z niej wynikających,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Wymagany przepisami prawa podatkowego i księgowego (zazwyczaj 5 lat od końca roku kalendarzowego),</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Do czasu cofnięcia zgody lub wniesienia skutecznego sprzeciwu wobec przetwarzania.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 4. Prawa osób, których dane dotyczą
              </h2>
              <p>Każdej osobie, której dane są przetwarzane, przysługuje prawo do:</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Dostępu do danych</strong>
                  <span className="text-sm">Możliwość uzyskania potwierdzenia i kopii przetwarzanych danych.</span>
                </li>
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Sprostowania danych</strong>
                  <span className="text-sm">Poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.</span>
                </li>
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Usunięcia danych („bycia zapomnianym”)</strong>
                  <span className="text-sm">W przypadkach przewidzianych przepisami art. 17 RODO.</span>
                </li>
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Ograniczenia przetwarzania</strong>
                  <span className="text-sm">Wstrzymania operacji na danych na warunkach określonych w art. 18 RODO.</span>
                </li>
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Przenoszenia danych</strong>
                  <span className="text-sm">Otrzymania danych w ustrukturyzowanym, powszechnym formacie.</span>
                </li>
                <li className="rounded-lg border border-[#e5e5e5] p-4">
                  <strong className="block text-[#26282C]">Sprzeciwu</strong>
                  <span className="text-sm">Sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie.</span>
                </li>
              </ul>
              <p className="mt-2">
                W celu realizacji swoich praw prosimy o kontakt pod adresem:{' '}
                <a href="mailto:biuro@energysolutions.pl" className="font-semibold text-[#fbba00] underline">
                  biuro@energysolutions.pl
                </a>
                . Osobie przysługuje również prawo wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 5. Odbiorcy danych
              </h2>
              <p>
                Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem wyłącznie w zakresie
                niezbędnym do realizacji celów przetwarzania:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Dostawcom usług IT, hostingu i poczty elektronicznej,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Podmiotom świadczącym usługi księgowe, prawne i audytorskie,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Podwykonawcom i partnerom technicznym przy realizacji instalacji OZE,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Organom władzy publicznej, o ile obowiązek taki wynika z powszechnie obowiązujących przepisów prawa.</span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 6. Pliki cookies i technologie internetowe
              </h2>
              <p>
                Serwis korzysta z plików cookies (tzw. ciasteczek) — niewielkich plików tekstowych wysyłanych przez
                serwer www i zapisywanych na urządzeniu końcowym użytkownika.
              </p>
              <p>Pliki cookies wykorzystywane są w celu:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Zapewnienia prawidłowego działania serwisu i jego bezpieczeństwa (cookies techniczne),</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Dostosowania zawartości strony do preferencji użytkownika,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbba00]" />
                  <span>Tworzenia anonimowych statystyk pomagających zrozumieć sposób korzystania z serwisu.</span>
                </li>
              </ul>
              <p>
                Użytkownik może w każdej chwili samodzielnie zmienić ustawienia dotyczące plików cookies w swojej
                przeglądarce internetowej, w tym zablokować ich zapisywanie.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#26282C]">
                § 7. Zmiany polityki prywatności
              </h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności w związku
                z rozwojem technologii, zmianami przepisów prawa lub zmianami w sposobie funkcjonowania serwisu.
              </p>
              <p className="text-sm text-[#777777]">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
