# People First AI

Responsywny landing page kursu. Lokalna strona statyczna bez frameworka i bez instalowania zależności.

## Uruchomienie

W katalogu repozytorium:

```bash
npm run dev
```

Otwórz http://127.0.0.1:4173. Wymagane Python 3 i opcjonalnie npm (alternatywnie uruchom bezpośrednio `python3 -m http.server 4173 --bind 127.0.0.1 --directory .`).

## Pliki

- `index.html` — strona główna w katalogu repozytorium.
- `styles.css`, `app.js`, `assets/` — style, skrypt i lokalne zasoby strony; wraz z `index.html` stanowią komplet plików do publikacji.
- `LANDING_BRIEF.md` — ustalenia, źródła i zależności.
- `DESIGN.md` — koncepcja, kompozycja, ruch i wyniki weryfikacji.
- `LANDING_PROMPT.md` — samodzielne zlecenie wykonawcze.
- `output/imagegen/` — oryginały wygenerowanej sesji i prompty.
- `output/qa/` — materiały z weryfikacji, jeśli były dostępne.

## Stan zapisów

Przyciski „Powiadom mnie o zapisach” prowadzą do jawnej informacji o przygotowywanej edycji. Strona nie zbiera danych, nie wysyła wiadomości i nie udaje zapisu. Do aktywowania listy potrzebny jest prawdziwy formularz/endpoint oraz odpowiednie informacje o przetwarzaniu danych. Cena, data startu, harmonogram, platforma i limit miejsc wymagają uzupełnienia przez organizatorów.

Treść i biogramy pochodzą z `coure-plan.md`. Fotografie kampanii wygenerowano z pomocą AI na podstawie dostarczonych zdjęć prowadzących. Informacja o tym znajduje się też na stronie.


Aktualizacja po decyzji użytkownika: finał zawiera pole e-mail i przycisk „Powiadom mnie o zapisach” jako świadomie zamówioną zaślepkę. Natywna walidacja e-mail; submit pokazuje informację o wersji podglądowej. Bez wysyłania, zapisywania danych i pozorowania udanego zapisu. Zastępuje wcześniejszą decyzję o samym komunikacie i odnośniku do programu.
