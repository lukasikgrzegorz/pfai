# People First AI — prezentacja

16 slajdów, proporcje 16:9, na podstawie lokalnej strony głównej (`index.html`, `styles.css`, `app.js`).

- `People-First-AI.pptx` — edytowalna prezentacja PowerPoint.
- `People-First-AI.pdf` — prezentacja z osadzonymi czcionkami.
- `People-First-AI.html` — samodzielny podgląd z osadzonymi zdjęciami i Manrope; działa bez internetu. Strzałki przechodzą między slajdami.
- `podglad.jpg` — podgląd wszystkich slajdów.
- `fonts/` — te same trzy pliki Manrope co na stronie, wraz z licencją OFL. Zainstaluj je przed edycją PowerPointa.

Zachowano hasła, logo, zdjęcie duetu i kadry portretowe, kolorystykę oraz rodzinę Manrope. PowerPoint i HTML wskazują Georgia dla akcentów kursywą, tak jak strona. Georgia nie jest dostępna w środowisku generowania: PDF używa w tych miejscach Liberation Serif Italic. W PowerPoint potrzebna jest zainstalowana Georgia, aby uniknąć automatycznego zastępowania jej inną czcionką. Manrope jest osadzony w PDF i HTML.

Fotografia kampanii pochodzi z materiałów strony i została stworzona z pomocą AI na podstawie zdjęć prowadzących. Nie dodawano niepotwierdzonych cen, terminów ani adresów zapisów.

Ponowne wygenerowanie: `python3 presentation/build.py` z katalogu repozytorium. Wymagane Python z python-pptx, Pillow, reportlab oraz Node.js do odczytu danych programu z `app.js`. PDF wymaga lokalnego Liberation Serif Italic w ścieżce wskazanej w skrypcie. Układ jest wspólny dla trzech formatów.
