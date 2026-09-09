# 1. Wybór stacku prototypu frontendowego przed migracją do WordPress / Elementor

Date: 2026-09-09

## Status
Zaakceptowana (Accepted)

## Kontekst
Klient potrzebuje działającego, interaktywnego prototypu serwisu internetowego dla firmy z branży rozwiązań energetycznych (`Energy Solution`), który można szybko udostępnić online (np. na platformie Vercel) w celu walidacji układu, estetyki i założeń biznesowych. 

Docelowym środowiskiem produkcyjnym witryny ma być WordPress (najprawdopodobniej z użyciem Elementora i/lub szablonów PHP).

Rozważane były podejścia:
1. Bezpośrednie tworzenie strony w WordPressie/Elementorze na serwerze stagingowym.
2. Zbudowanie czystego prototypu HTML/CSS.
3. Zbudowanie prototypu w Vite + React + TypeScript + Tailwind CSS.

## Decyzja
Wybieramy **Vite + React + TypeScript + Tailwind CSS** jako fundament pod pierwszy prototyp aplikacji.

Układ kodu będzie ściśle modularny (komponenty odpowiadające logicznym sekcjom strony), co umożliwi:
- Błyskawiczny podgląd i deploy na Vercelu (automatyczny build z GitHuba).
- Łatwe mapowanie sekcji (Hero, Oferta, Formularz) 1:1 na kontenery Elementora lub szablony PHP w kolejnym etapie.
- Wykorzystanie klas narzędziowych Tailwind, które bezpośrednio tłumaczą się na style CSS lub ustawienia wizualne w Elementorze.

## Konsekwencje
- **Pozytywne**:
  - Bardzo szybki cykl iteracji z klientem (Hot Module Replacement, nowoczesny tooling).
  - Możliwość natychmiastowego pokazania klikalnej wersji na bezpłatnym hostingu z certyfikatem SSL.
- **Negatywne**:
  - Kod komponentów Reactowych na etapie wdrożenia produkcyjnego w WordPressie będzie wymagał przeniesienia do bloków/widżetów Elementora, szablonów PHP motywu lub osadzenia jako skompilowany bundle skryptu.
