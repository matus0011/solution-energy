# CONTEXT.md

Słownik pojęć domenowych i założeń projektowych dla projektu **Energy Solution**.

## Dokumenty Architektoniczne (ADR)
- [ADR 0001: Wybór stacku prototypu frontendowego przed migracją do WordPress / Elementor](docs/adr/0001-frontend-prototype-stack.md)

## Pojęcia domenowe (Ubiquitous Language)

### Prototyp Wizualno-Funkcjonalny (Prototype)
Interaktywna strona demonstracyjna oparta na nowoczesnym stacku frontendowym (Vite + React + TS + Tailwind), uruchamiana na platformie hostingowej (np. Vercel) w celu akceptacji wizualnej, UX i logiki przez klienta przed faktycznym wdrożeniem do CMS.

### Strona Usługowa (Website / Landing Page)
Kompletna witryna firmowa dla branży rozwiązań energetycznych, przygotowywana pod docelowy układ i kierunek wizualny dostarczony przez użytkownika.

### Lead Capture / Formularz Ofertowy
Moduł zbierania zapytań ofertowych od klientów z symulacją wysyłki (mock/frontend state) na etapie prototypu.

### Migracja CMS (WordPress & Elementor Target)
Docelowy etap projektu, w którym zatwierdzone przez klienta sekcje i style prototypu zostaną odtworzone jako szablony PHP, sekcje Elementora lub dedykowane widgety w ekosystemie WordPress.
