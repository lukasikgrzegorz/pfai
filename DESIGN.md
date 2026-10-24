# People First AI — projekt

## Koncepcja i alternatywy
1. Dwie perspektywy przy wspólnym stole: portrety i rozdzielone kolory stopniowo tworzą wspólny proces. Wybrane: najbardziej bezpośrednio wyraża wyróżnik kursu.
2. Marginesy podręcznika: portrety jako komentarze do dużych kart programu. Odrzucone: edukacyjna konwencja osłabia obecność ludzi.
3. Dwa równoległe reportaże: osobne historie managerska i pracownicza zbiegające się na końcu. Odrzucone: opóźnia wspólną obietnicę.

Teza: fotografia Oli i Grzegorza dzieli jasną przestrzeń na brzoskwiniową i niebieską perspektywę, które w rytmie przewijania zbliżają się, a następnie przekładają na wspólny cykl HUMAN i rezultaty programu. Obrazy tworzą atmosferę i identyfikują prowadzących, tekst programu i biogramy stanowią dowód.

## Storyboard
| Scena | Znaczenie i układ | Rozwój i ciągłość | Działanie / mobile |
|---|---|---|---|
|Otwarcie|Duży plakatowy nagłówek nad szeroką fotografią duetu. Obietnica, krótki opis i CTA od razu czytelne.|Peach i blue pola pod fotografią przesuwają się w przeciwne strony, fotografia delikatnie zmienia kadr podczas wyjścia. Z podpisów wynikają dwa spojrzenia.|Program / informacja o zapisach; mobile własne łamanie i szeroki portret, bez obcięcia twarzy.|
|Dwie perspektywy|Wielkie pytanie i dwa nierówne pola rozmowy; managerka i ambasador mówią o tej samej zmianie.|Przełączenie roli aktualizuje pytanie i objaśnienie; pola kolorów z otwarcia wracają jako rozróżnienie ról.|Dostępne przyciski perspektyw.|
|HUMAN|Duże litery w poziomie, pod nimi konkretna interpretacja filarów.|Wskaźnik przewijania kolejno podkreśla pięć filarów, treść stale dostępna; wspólny proces łączy perspektywy.|Na telefonie czytelne pionowe objaśnienia.|
|Program|Pięć rozbudowywanych tygodni, rezultat każdego warsztatu, 10 warsztatów bez ukrywania zakresu.|Od szerokiego modelu do szczegółu narzędzi. Czysta lista pozwala świadomie zwiększyć gęstość.|Natywne details, pierwszy tydzień otwarty.|
|Prowadzący|Dwa duże portrety i różne biogramy, naprzemienna skala zdjęć/tekstu.|Powrót fotograficznego materiału otwarcia, teraz obok dowodów doświadczenia.|Nazwiska, role, biogramy.|
|Rezultat i nauka|Plan końcowy jako duża typograficzna obietnica, 20 godzin i format obok.|Od dwóch osób do pracy uczestnika; bez fikcyjnego interfejsu dokumentu.|Pełne informacje o formule.|
|FAQ i finał|Odpowiedzi z planu, domknięcie hasłem i informacją o zapisach.|Duże słowo „ludzie” i dwa kolory wracają w spokojniejszej kompozycji.|Rzeczywiste kotwice, jawny brak otwartych zapisów.|

## Paleta, typografia i rytm
Ivory #faf8f4 — główna powierzchnia. Navy #062344 — tekst i przyciski. Coral #ff654f — akcent logo. Peach #f5bfaa i jasna #fbe5db — perspektywa Oli. Blue #b9d6ec i jasna #e9f1f7 — perspektywa Grzegorza. White #ffffff — jasne powierzchnie. Muted #526172 — tekst pomocniczy. Tekst ciemny na wszystkich jasnych tłach; coral służy do dużych akcentów, nie drobnego tekstu na ivory.

Fonty: lokalnie hostowane Manrope, wagi 400–800, OFL, pełny zestaw latin-ext, oraz Georgia italic jako akcent redakcyjny (font systemowy). Gdy Manrope nie uda się uzyskać, świadomy fallback Arial z polskimi znakami. Nagłówki płynne 48–104 px, body 16–20 px, line-height 1.6, miara tekstu do 65ch. Maksymalna szerokość 1360 px, marginesy 5vw, duże przerwy 100–140 px. Niewielkie promienie zdjęć; bez powszechnej siatki kart. Logo używane w oryginalnej postaci.

## Język detalu
Dwa kolory wynikają z instrukcji i ról; występują w sesji, podpisach, wyborze perspektyw i miniindeksie programu. Numery tygodni to orientacja w kursie, a litery HUMAN rzeczywista metoda. Linie rozdzielają tygodnie i FAQ, nie każdą sekcję. Serce występuje w logo i jednym akcentowanym fragmencie otwarcia, bez systemu losowych ozdobników. Strzałki oznaczają nawigację, plus oznacza rozwinięcie.

## Ruch
Naturalny scroll, bez przechwytywania wheel/touch. Otwarcie: zakres od 0 do końca sceny → kolorowe warstwy rozchodzą się o do 28 px, zdjęcie skaluje 1–1.035 i przemieszcza do -18 px → podpisy dwóch perspektyw pozostają czytelne → płaszczyzny oddają uwagę sekcji rozmowy. Odwrócenie scrolla odwraca relacje. HUMAN: naturalny postęp przez sekcję podświetla kolejne litery, bez ukrywania treści. Reakcje: przełączenie perspektywy aktualizuje pytanie, opis i kolor; details odsłania treść natywnie. Ruch scrolla w requestAnimationFrame, tylko widoczne zakresy, transform i CSS custom properties. Mobile mniejsza amplituda. Reduced motion: brak transformacji scrolla, kompletna stała treść, brak płynnego przewijania.

## Materiały i wydajność
Logo lokalne. Wygenerowana sesja duetu na podstawie dostarczonych referencji, zapisane prompty i pochodzenie w `output/imagegen/`. Dalsza scena rozmowy jako drugi materiał, jeśli generator ją dostarczy. Bez fikcyjnego reportażu. WebP, jawne wymiary, hero eager/fetchpriority high, reszta lazy. Portrety i zdjęcie wspólne mają osobne kadry mobilne przez object-position. Brak frameworka i zależności runtime; buildless HTML/CSS/JS w dist.

## Weryfikacja i macierz
| Wymaganie | Źródło | Implementacja | Weryfikacja / wynik |
|---|---|---|---|
|Jasne tło i logo|Użytkownik|Ivory, navy, coral|Oczekuje oglądu|
|Ola peach, Grzegorz blue|Użytkownik|Generowana sesja i pola perspektyw|Oczekuje oglądu|
|Dwie perspektywy|Użytkownik|Otwarcie, przełącznik, biogramy|Oczekuje testu|
|Treść kursu|coure-plan.md|Program, HUMAN, format, FAQ|Oczekuje porównania|
|Rytmiczna fotografia|Delegacja, decyzja projektu|Scroll transform i kolorowe płaszczyzny|Oczekuje oglądu w ruchu|
|Responsive i klawiatura|Wymóg jakości|Media queries, details, focus, reduced motion|Oczekuje testu|
|Zapisy bez udawania sukcesu|Brak endpointu|Jawna informacja, brak formularza|Zależność niespełniona|

Sprawdzić desktop 1440×900, mobile 390×844 i 320 px, overflow, zdjęcia, stany programu/FAQ i perspektyw, kotwice, klawiaturę, reduced motion, błędy runtime i zasoby. Ogląd w przeglądarce osobno od kontroli składni. Faktyczne wyniki zostaną dopisane po implementacji.


Aktualizacja po decyzji użytkownika: finał zawiera pole e-mail i przycisk „Powiadom mnie o zapisach” jako świadomie zamówioną zaślepkę. Natywna walidacja e-mail; submit pokazuje informację o wersji podglądowej. Bez wysyłania, zapisywania danych i pozorowania udanego zapisu. Zastępuje wcześniejszą decyzję o samym komunikacie i odnośniku do programu.

Aktualizacja: uzupełniono lokalny plik `assets/rozmowa.webp` wygenerowaną sceną rozmowy prowadzących. W głównym nagłówku litera „o” w People została zastąpiona koralowym sercem SVG nawiązującym do logo; pełny tekst zachowany w aria-label.

Na życzenie użytkownika zdjęcie rozmowy zastąpiono kompozycją typograficzną dwóch perspektyw: brzoskwiniowa managerska i niebieska pracownicza/ambasadorska, połączone centralnym znakiem People First. Pytania są ilustracją podejścia, nie cytatami. Zdjęcia w otwarciu i biogramach pozostają.
