'use strict';
const weeks = [
  { title: 'Psychologia zmiany i zaufanie', pillar: 'H — HEAR / U — UNDERSTAND', workshops: [
    ['Psychologia zmiany AI','Poznasz emocje towarzyszące transformacji, obawy o przyszłość zawodową oraz znaczenie tożsamości i poczucia sprawczości.','AI Change Readiness & Emotions Map'],
    ['Lęk, opór i bezpieczeństwo psychologiczne','Zrozumiesz, co może stać za oporem. Przećwiczysz budowanie zaufania i trudne rozmowy bez bagatelizowania realnych problemów.','AI Fear & Trust Conversation Toolkit']] },
  { title: 'Komunikacja i przywództwo', pillar: 'M — MOBILIZE', workshops: [
    ['Komunikacja transformacji AI','Przygotujesz transparentną narrację zmiany, odpowiedzi na trudne pytania i sposób prowadzenia dialogu z pracownikami.','AI Change Communication Plan'],
    ['Menedżer jako lider zmiany','Poznasz sposoby wspierania zespołów, prowadzenia rozmów 1:1 i rozwijania gotowości do eksperymentowania.','AI Change Manager Toolkit']] },
  { title: 'Kompetencje i zaangażowanie', pillar: 'M — MOBILIZE / A — ADAPT', workshops: [
    ['Upskilling i reskilling','Nauczysz się identyfikować luki kompetencyjne, analizować wpływ AI na role i projektować ścieżki rozwoju.','AI Skills Development Roadmap'],
    ['Program ambasadorski i społeczności','Zaplanujesz wsparcie ambasadorów AI, rozwój społeczności praktyków i oddolną wymianę wiedzy.','AI Ambassador Program Canvas']] },
  { title: 'Projektowanie i mierzenie zmiany', pillar: 'A — ADAPT / N — NURTURE', workshops: [
    ['Projektowanie interwencji zmiany','Przełożysz diagnozę na konkretne działania, bezpieczne eksperymenty i plan wdrożenia uwzględniający potrzeby ludzi.','Human-Centered AI Change Canvas'],
    ['Mierzenie adopcji i efektów','Odróżnisz samo używanie narzędzi od zmiany sposobu pracy. Ocenisz efekty z perspektywy ludzi i organizacji.','AI Change Impact Scorecard']] },
  { title: 'Ciągła adaptacja i wyciąganie wniosków', pillar: 'N — NURTURE → H — HEAR', workshops: [
    ['Co, jeśli adopcja AI się uda?','Przygotujesz działania utrzymujące zaangażowanie, rozwijające kompetencje i gotowość na kolejne zmiany.','Continuous AI Evolution Roadmap'],
    ['Co, jeśli adopcja AI się nie uda?','Nauczysz się analizować niepowodzenia bez szukania winnych, odbudowywać zaufanie i decydować o dalszym kierunku.','AI Change Recovery Playbook']] }
];
const programList = document.querySelector('#program-list');
weeks.forEach((week, i) => {
  const details = document.createElement('details');
  details.className = 'program-week';
  details.open = i === 0;
  details.innerHTML = `<summary><span class="week-number">0${i + 1}</span><span class="week-title"><small>TYDZIEŃ ${i + 1} · ${week.pillar}</small><strong>${week.title}</strong></span><span class="week-plus" aria-hidden="true">+</span></summary><div class="workshops">${week.workshops.map((w,j) => `<article class="workshop"><h3><span>WARSZTAT ${i * 2 + j + 1}</span>${w[0]}</h3><p>${w[1]}</p><p class="workshop-result"><span>WYCHODZISZ Z</span>${w[2]}</p></article>`).join('')}</div>`;
  programList.append(details);
});
const faqs = [
 ['Czy muszę znać AI, żeby wziąć udział?', 'Nie musisz programować ani mieć zaawansowanych umiejętności technicznych. Przyda się podstawowa orientacja w możliwościach AI i zainteresowanie jego wpływem na ludzi oraz organizacje.'],
 ['Czy ten kurs jest tylko dla HR?', 'Nie. Zapraszamy też osoby z L&D, menedżerów, liderów zespołów, ambasadorów AI i osoby zajmujące się zarządzaniem zmianą.'],
 ['Czy nauczę się prompt engineeringu?', 'AI wykorzystasz w ćwiczeniach, ale techniczna obsługa narzędzi nie jest głównym celem. Skupiamy się na prowadzeniu ludzi przez zmianę, komunikacji i budowaniu zaufania. Nie budujemy własnej aplikacji.'],
 ['Czy kurs dotyczy konkretnej platformy AI?', 'Nie. Koncentrujemy się na kompetencjach i procesach transformacji, które można stosować niezależnie od wybranej technologii.'],
 ['Na jakich przykładach będziemy pracować?', 'Program obejmuje przypadki organizacyjne, ćwiczenia i symulacje. Możesz opracowywać własne wyzwanie lub przygotowane studium przypadku, bez ujawniania informacji poufnych.'],
 ['Co otrzymam po zakończeniu?', 'Doświadczenie z ćwiczeń warsztatowych, zestaw przygotowanych artefaktów i własny People-Centred AI Change Plan — punkt wyjścia do pracy nad zmianą w organizacji.'],
 ['A jeśli wdrażanie AI już się u nas rozpoczęło?', 'Program obejmuje diagnozę trwającej transformacji, usprawnianie komunikacji, rozwój kompetencji, ocenę efektów i naprawianie działań, które nie przynoszą oczekiwanych rezultatów.'],
 ['Kiedy startujemy i jaka jest cena?', 'Termin, cena, harmonogram spotkań i szczegóły zapisów nie zostały jeszcze ogłoszone. Potwierdzony zakres programu to 5 tygodni, 10 warsztatów na żywo i 20 godzin zajęć.']
];
faqs.forEach(([question, answer]) => {
  const item = document.createElement('details');
  item.innerHTML = `<summary>${question}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${answer}</p>`;
  document.querySelector('#faq-list').append(item);
});
const perspectives = {
  manager: {person:'PERSPEKTYWA OLI',question:'Jak prowadzić zmianę,\nkiedy zespół ma obawy?',answer:'Nie musisz znać odpowiedzi na każde pytanie o AI. Potrzebujesz umieć słuchać, rozmawiać o niepewności i tworzyć warunki, w których ludzie mogą próbować.',tags:'Przywództwo · zaufanie · rozwój'},
  employee: {person:'PERSPEKTYWA GRZEGORZA',question:'Jak oswoić AI,\nnie tracąc własnego głosu?',answer:'Zmiana dzieje się w codziennej pracy. Potrzebujesz przestrzeni na pytania, bezpieczne eksperymenty i dzielenie się wiedzą. Ambasador pomaga innym próbować — i przekazuje dalej ich potrzeby.',tags:'Sprawczość · praktyka · społeczność'}
};
document.querySelectorAll('[data-role]').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.role;
  const data = perspectives[selected];
  document.querySelectorAll('[data-role]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelector('.perspective-panel').dataset.perspective = selected;
  document.querySelector('#perspective-person').textContent = data.person;
  const heading = document.querySelector('#perspective-question');
  heading.replaceChildren();
  data.question.split('\n').forEach((line,i) => { if(i) heading.append(document.createElement('br')); heading.append(document.createTextNode(line)); });
  document.querySelector('#perspective-answer').textContent = data.answer;
  document.querySelector('#perspective-tags').textContent = data.tags;
}));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const human = document.querySelector('.human-section');
const letters = [...document.querySelectorAll('.human-letters span')];
let frame = null;
function renderScroll(){
  frame = null;
  const heroRect = hero.getBoundingClientRect();
  const progress = Math.min(1,Math.max(0,-heroRect.top / (heroRect.height * .75)));
  document.querySelector('#hero-visual').style.setProperty('--scroll',reducedMotion.matches ? 0 : progress);
  const humanRect = human.getBoundingClientRect();
  const humanProgress = Math.min(.999,Math.max(0,(innerHeight * .7 - humanRect.top) / (humanRect.height * .85)));
  letters.forEach((letter,i) => letter.classList.toggle('active',i === Math.floor(humanProgress * 5)));
}
function requestRender(){if(frame === null) frame = requestAnimationFrame(renderScroll);}
window.addEventListener('scroll',requestRender,{passive:true});
window.addEventListener('resize',requestRender);
reducedMotion.addEventListener('change',requestRender);
renderScroll();

// Podgląd formularza: bez wysyłania i przechowywania adresu.
document.querySelector('#signup-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#signup-form-status').textContent = 'To podgląd formularza. Twój adres nie został zapisany — zapisy uruchomimy wkrótce.';
});
