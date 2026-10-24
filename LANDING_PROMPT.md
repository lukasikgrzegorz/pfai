# Zlecenie wykonawcze — People First AI

Zaprojektuj i zbuduj oryginalny, dopracowany landing page polskiego kursu People First AI. Materiałem organizującym przestrzeń są fotografie dwojga prowadzących, nie gotowa siatka komponentów. Jasna powierzchnia, skala portretów, napięcie między brzoskwinią a niebieskim i zmienna gęstość tekstu mają prowadzić od ludzkiego problemu do konkretnego programu. Dostarcz działającą responsywną stronę oraz brief, specyfikację i uczciwy raport weryfikacji.

Ruch jest częścią kompozycji: dwie płaszczyzny koloru i kadr fotografii zmieniają wzajemne położenie podczas naturalnego przewijania. Dwa punkty widzenia mają spotkać się w jednym procesie, nie rywalizować. Użyj ograniczonej choreografii warstw i zmiany kadru; nie zastępuj jej samymi fade-in. Zaprojektuj spójne wejście, rozwój, wyjście i odwrotny scroll, bez zatrzymywania przewijania i bez ukrywania CTA. Sekcja HUMAN rozwija wspólny model przez pięć filarów, a przełącznik perspektyw pokazuje dwa pytania o tę samą transformację.

Desktop i telefon są świadomie skomponowanymi wersjami tej samej idei. Zachowaj polskie znaki, kontrast, semantykę, focus, klawiaturę i pełną treść bez animacji. Zmniejszenie ruchu zachowuje opowieść i funkcje. Optymalizuj media, rezerwuj ich wymiary, unikaj ciężkich zależności i nadmiernej liczby kart.

Uruchom i obejrzyj stronę w dostępnej przeglądarce, sprawdź wszystkie interakcje i sekwencje, popraw słabe kadry, kolizje, obce kolory i nieczytelne fragmenty. Kontrola kodu nie zastępuje oglądu; jawnie opisz brakujące narzędzia. Nie deklaruj gotowych zapisów bez integracji.

## Oferta, odbiorcy i prawdziwe źródła
Źródło `coure-plan.md`: kurs kohortowy, 5 tygodni, 10 warsztatów na żywo, 20 godzin. HUMAN: Hear/Wysłuchaj, Understand/Zrozum, Mobilize/Zaangażuj, Adapt/Wspieraj adaptację, Nurture/Rozwijaj. Rezultat: People-Centred AI Change Plan. Odbiorcy: HR, L&D, liderzy, change managerowie, ambasadorzy AI. Robocza hipoteza: dostrzegają już, że narzędzia nie wystarczają; potrzebują sposobu wspierania ludzi i konkretów do decyzji firmowej. Nie wymyślaj efektów, opinii, cen ani dat.

Nagłówek: „W firmie AI First zrób miejsce dla People First”. Objaśnienie: „Naucz się przeprowadzać ludzi przez zmianę AI. Z perspektywy lidera i osoby, która doświadcza jej na co dzień.” CTA: „Powiadom mnie o zapisach”, pomocniczo „Poznaj program”. Brak endpointu: prowadź do jawnej informacji o nieotwartych zapisach, nie zbieraj e-maili ani nie pokazuj sukcesu. Cena i termin nieogłoszone. Lokalna realizacja w tym repozytorium, bez rejestracji hostingu i publikacji.

## Mechanizm artystyczny i sceny
Otwarcie to szeroki plakat: wyrazisty nagłówek, krótka obietnica i przyciski nad fotografią duetu, podpisy perspektyw powiązane z osobami. Ola po lewej w brzoskwiniowej stylizacji, Grzegorz po prawej w niebieskiej. Fotografia dominuje nad ozdobą, a pastelowe płaszczyzny wychodzą spod kadru i delikatnie rozchodzą się podczas scrolla. Duża skala przechodzi w spokojniejszą rozmowę o tym, czego potrzebują ludzie.

Następnie sekcja dwóch perspektyw: managerka pyta o prowadzenie zespołu, ambasador/pracownik o sprawczość i doświadczenie zmiany. Dwa prawdziwe przyciski aktualizują pytanie i objaśnienie; stan jest dostępny klawiaturą i oznaczony aria-pressed. Bez udawania cytatów z rzeczywistych rozmów. HUMAN rozszerza perspektywę w pięć kroków i cykl, z dużymi literami i objaśnieniami. Podświetlanie postępu przewijania nie jest warunkiem dostępu do tekstu.

Program to pięć rozdziałów z natywnymi details: tydzień 1 psychologia i zaufanie, 2 komunikacja i liderzy, 3 kompetencje i ambasadorzy, 4 interwencje i pomiar, 5 ciągły rozwój i niepowodzenia. Przenieś wszystkie 10 tytułów oraz rezultaty z planu. Pierwszy tydzień otwarty. Układ tekstowy i duże numery zastępują kartową siatkę. Potem portrety prowadzących i pełne, zredagowane biogramy z dostarczonego źródła: Aleksandra Brzozowska i Grzegorz Łukasik. Nie twórz innych ekspertów z placeholderów w planie.

W dalszej części wyróżnij projekt końcowy i naukę przez ćwiczenia, symulacje oraz feedback; pokaż format i grupy odbiorców. FAQ odpowiada na pytania z planu. Finał wraca do hasła „Zmiana technologiczna. Ludzkie podejście.” i jasnej informacji o przygotowywanych zapisach.

## Reguły graficzne
Ivory #faf8f4, navy #062344, coral #ff654f, peach #f5bfaa/#fbe5db, blue #b9d6ec/#e9f1f7, pomocniczy #526172. Logo z `logo.png`, nie odtwarzaj go tekstem. Ciemne litery na pastelach, coral do dużych akcentów. Lokalny Manrope OFL z polskimi znakami, italic Georgia do nielicznych ludzkich akcentów. Duże nagłówki, oddech i kontrast gęstości. Maksymalna szerokość 1360 px, body około 18 px. Podpisy wyjaśniają role; numery orientują w programie; linie rozdzielają treść list. Nie powielaj dekoracyjnej oprawy w każdej sekcji.

## Materiały i sposób wykonania
Załącz: `logo.png`, `coure-plan.md`, fotografie z `sources/photos/ola/` i `sources/photos/grzesiek/`, `LANDING_BRIEF.md`, `DESIGN.md`, prompty z `output/imagegen/`. Generuj fotorealistyczną sesję na podstawie podobizn, z naturalnymi twarzami i brzoskwiniową/niebieską stylizacją. Osobno szerokie ujęcie duetu oraz scena swobodnej rozmowy przy jasnym stole; to sesja kampanii, nie dowód odbytych warsztatów. W stopce ujawnij wykorzystanie AI w sesji. Zapisz obrazy lokalnie, zoptymalizuj do WebP, zachowaj oryginały i prompty.

Buildless HTML/CSS/JS w katalogu głównym repozytorium, bez frameworka, backendu i analityki. Natywne details dla programu i FAQ, nawigacja kotwicami, przełącznik perspektyw, bounded scroll transforms przez requestAnimationFrame. Na telefonie tekst nad fotografią, skrócona amplituda, program pionowy, pełne nazwiska i biogramy. Reduced motion wyłącza scroll transforms i smooth scroll. Jeśli fontu nie da się uzyskać, zastosuj jawny fallback i opisz ograniczenie.

## Ukończenie
Najpierw brief/specyfikacja, następnie otwarcie i kluczowa późniejsza scena z prawdziwym ruchem, ogląd, rozszerzenie całości. Zweryfikuj 1440×900, 390×844, 320 px, kotwice, przełącznik obu ról, wszystkie details, focus, overflow, reduced motion, brak błędów i zasobów 404. Obejrzyj wejście/środek/wyjście/rewers ruchu. Uzupełnij macierz w DESIGN.md rzeczywistymi wynikami. Dostarcz pliki i instrukcję lokalnego uruchomienia. Wymień brak integracji zapisów jako zależność, a niewykonane kontrole jako niewykonane.


Aktualizacja po decyzji użytkownika: finał zawiera pole e-mail i przycisk „Powiadom mnie o zapisach” jako świadomie zamówioną zaślepkę. Natywna walidacja e-mail; submit pokazuje informację o wersji podglądowej. Bez wysyłania, zapisywania danych i pozorowania udanego zapisu. Zastępuje wcześniejszą decyzję o samym komunikacie i odnośniku do programu.
