# SPA INTERATTIVA — COMPLEANNO 25 ANNI

## 1. Obiettivo del progetto

Realizzare una Single Page Application interattiva e fortemente personalizzata come regalo di compleanno per il mio migliore amico, che sta per compiere 25 anni.

Il regalo fisico principale è un libro.

Inoltre, sono riuscito a ottenere un video di auguri personalizzato da parte dello scrittore del libro.

La SPA deve quindi essere una **esperienza narrativa/interattiva**, non un semplice sito web.

L'obiettivo è accompagnare l'utente attraverso una piccola storia fatta di:

1. introduzione;
2. ricordi della nostra amicizia;
3. fotografie;
4. inside jokes / momenti significativi;
5. un messaggio personale;
6. presentazione del libro;
7. rivelazione del fatto che c'è una sorpresa;
8. video dello scrittore;
9. messaggio finale di buon compleanno.

Il video deve essere trattato come il **momento culminante dell'esperienza**.

---

# 2. Filosofia generale

Il sito deve trasmettere:

* amicizia;
* nostalgia;
* ironia;
* affetto;
* sorpresa;
* senso di "storia condivisa";
* qualità artigianale.

Non deve sembrare un sito aziendale.

Non deve sembrare una landing page commerciale.

Non deve sembrare una demo tecnica.

Deve sembrare qualcosa che una persona ha **costruito appositamente per un'altra persona**.

Gli effetti grafici devono essere eleganti e subordinati alla storia.

Evitare assolutamente di sovraccaricare la pagina con animazioni inutili.

La tecnologia deve essere invisibile all'utente.

---

# 3. Concept

Il concept principale è:

## "LEVEL 25"

L'idea è trattare i 25 anni come il raggiungimento di un nuovo livello di un videogioco.

La prima schermata può simulare un terminale.

Esempio:

```text
$ ./birthday.sh

Loading memories...
████████████████████ 100%

Loading friendship...
████████████████████ 100%

Checking age...

WARNING:
User has reached level 25.

Proceed anyway? [Y/n]
```

Dopo una breve animazione:

```text
> Y

Welcome to LEVEL 25.
```

Da qui comincia la vera esperienza.

Questo elemento deve essere ironico e personale, ma non deve trasformare tutto il sito in un tema da videogame.

Il tema "Level 25" è solamente il filo conduttore.

---

# 4. Struttura narrativa

La SPA deve essere composta da diverse "scene".

Non utilizzare necessariamente una navigazione tradizionale.

Preferire una navigazione verticale tramite scroll.

Ogni sezione deve sembrare un nuovo capitolo della storia.

Struttura:

```text
INTRO
  ↓
LEVEL 25
  ↓
LA NOSTRA STORIA
  ↓
RICORDI
  ↓
INSIDE JOKES
  ↓
MESSAGGIO PERSONALE
  ↓
IL REGALO
  ↓
LA SORPRESA
  ↓
VIDEO
  ↓
FINALE
```

---

# 5. SCENA 1 — Intro

Schermata full-screen.

Sfondo molto scuro.

Al centro:

```text
$ ./birthday.sh
```

Il testo deve apparire come se fosse scritto in tempo reale.

Successivamente mostrare:

```text
Loading memories...
```

seguito da una progress bar.

Poi:

```text
Loading friendship...
```

altra progress bar.

Poi:

```text
Checking age...
```

Pausa.

Infine:

```text
WARNING:

User has reached level 25.
```

Breve pausa.

Poi:

```text
Proceed anyway? [Y/n]
```

Dopo qualche secondo oppure tramite click/touch:

```text
> Y
```

e:

```text
WELCOME TO LEVEL 25
```

Successivamente transizione verso la storia.

### Importante

Non obbligare l'utente a cliccare troppo.

L'esperienza deve essere fluida.

Su mobile il terminale deve funzionare perfettamente.

---

# 6. SCENA 2 — "25 anni"

Dopo il terminale mostrare una grande schermata minimal.

Testo:

```text
25 anni.

Sembra tanto.
```

Pausa.

Poi:

```text
Ma se guardiamo bene...
```

e successivamente:

```text
sono successe un sacco di cose.
```

Il testo deve lasciare spazio a una transizione visiva verso le fotografie.

---

# 7. SCENA 3 — La nostra storia

Questa deve essere una delle sezioni principali.

Creare una timeline verticale.

Non necessariamente cronologica al 100%.

Ogni punto della timeline contiene:

* anno;
* fotografia;
* breve descrizione;
* eventualmente una battuta;
* eventuale inside joke.

Esempio:

```text
2018

[ FOTO ]

La prima volta che...

↓

2020

[ FOTO ]

Non chiedermi perché abbiamo deciso di farlo.

↓

2022

[ FOTO ]

Questa giornata meriterebbe un capitolo a parte.

↓

2024

[ FOTO ]

Ancora qui.

↓

2026

[ FOTO ]

E siamo arrivati a 25.
```

Le fotografie devono essere grandi e valorizzate.

Evitare una semplice griglia fotografica.

Preferire un'esperienza narrativa.

---

# 8. Animazioni delle fotografie

Quando una foto entra nel viewport:

* fade-in;
* leggero movimento verticale;
* eventuale parallax molto leggero;
* testo che compare successivamente.

Esempio:

```text
       [ FOTO ]

        ↓

"Questa giornata..."
```

Non utilizzare animazioni aggressive.

Le animazioni devono essere lente, morbide e cinematografiche.

---

# 9. SCENA 4 — Inside jokes

Creare una sezione più ironica.

Titolo:

```text
Alcune cose non possono essere spiegate.
```

Sottotitolo:

```text
E probabilmente è meglio così.
```

Mostrare alcune card contenenti:

* battute;
* citazioni;
* frasi che usiamo tra amici;
* riferimenti comprensibili solo da noi;
* screenshot eventualmente forniti;
* piccole foto.

Esempio:

```text
ACHIEVEMENT UNLOCKED

"Quella volta"

✓ Nessuno deve sapere cosa è successo
```

Oppure:

```text
ACHIEVEMENT UNLOCKED

"Ancora amici"

25 anni di conoscenza
0 denunce
```

Il tono deve essere ironico ma affettuoso.

Lasciare i contenuti facilmente modificabili tramite un file di configurazione.

---

# 10. SCENA 5 — Achievement

Aggiungere una piccola sezione opzionale chiamata:

## ACHIEVEMENTS

Esempi:

```text
✓ Prima cazzata insieme
✓ Prima vacanza
✓ 1000+ risate
✓ Infinite discussioni inutili
✓ Sopravvissuti alle nostre idee
✓ Ancora amici
✓ LEVEL 25
```

Gli achievement possono comparire progressivamente durante lo scroll.

Non renderli troppo "videogame".

Devono essere principalmente un elemento grafico/ironico.

---

# 11. SCENA 6 — Il momento serio

A questo punto il sito deve cambiare completamente tono.

Ridurre drasticamente animazioni e elementi grafici.

Sfondo più pulito.

Testo centrato.

Prima frase:

```text
Però c'è una cosa che non ti ho mai detto abbastanza.
```

Pausa.

Poi mostrare un messaggio personale.

Il testo definitivo verrà fornito successivamente.

L'implementazione deve quindi permettere di sostituire facilmente il testo.

Il messaggio deve essere visualizzato come una lettera/messaggio personale.

Possibilmente con effetto "typewriter" molto lento, oppure semplicemente con fade-in dei paragrafi.

Non usare effetti da terminale in questa sezione.

Questa deve essere la parte emotiva.

---

# 12. SCENA 7 — Il libro

Dopo il messaggio personale:

```text
E visto che alcune storie
meritano di essere raccontate...
```

Pausa.

Poi mostrare la copertina del libro.

Testo:

```text
Questo è il mio regalo per te.
```

La copertina deve essere grande.

Se possibile creare un effetto di profondità/parallax molto leggero.

Non inventare contenuti sul libro.

Il titolo, autore, copertina e qualsiasi altro dettaglio devono essere facilmente configurabili.

---

# 13. SCENA 8 — La falsa conclusione

Dopo la presentazione del libro, fare sembrare che l'esperienza sia terminata.

Per esempio:

```text
THE END.
```

Pausa.

Poi:

```text
...
```

Pausa.

Poi:

```text
Aspetta.
```

Pausa.

Poi:

```text
Non è ancora finita.
```

Questo deve creare una piccola sorpresa.

---

# 14. SCENA 9 — La sorpresa

Schermata scura.

Testo:

```text
Pensavi che fosse tutto qui?
```

Pausa.

```text
Ho una sorpresa per te.
```

Pausa.

```text
E questa volta...
```

Pausa.

```text
non sono stato io a registrarla.
```

Poi:

```text
▶ UNA PERSONA SPECIALE HA QUALCOSA DA DIRTI
```

Questa frase può essere modificata successivamente.

---

# 15. SCENA 10 — VIDEO

Questa è la parte più importante.

Inserire il video dello scrittore.

Il video deve essere mostrato in un player grande e centrale.

Il video deve avere:

* controlli;
* possibilità di fullscreen;
* responsive design;
* supporto mobile;
* poster/thumbnail personalizzata;
* caricamento progressivo;
* gestione elegante del loading.

Prima del video:

```text
Per te.
```

oppure:

```text
Buon compleanno.
Questo è per te.
```

Il video non deve partire automaticamente con audio.

Preferibilmente deve essere l'utente a premere PLAY.

Se tecnicamente appropriato, si può utilizzare autoplay muted solamente per una piccola preview, ma il contenuto principale deve essere avviato volontariamente.

---

# 16. SCENA 11 — Finale

Una volta terminato il video, mostrare una schermata finale.

Sfondo scuro.

Testo grande:

```text
HAPPY
25
```

Poi:

```text
Buon compleanno, bro.
```

Successivamente:

```text
Il bello deve ancora iniziare.
```

Infine:

```text
— [NOME]
```

Eventualmente mostrare una fotografia particolarmente significativa di noi due.

L'ultima schermata deve essere molto semplice.

Niente CTA.

Niente menu.

Niente elementi inutili.

Deve sembrare la fine di un piccolo film.

---

# 17. Direzione grafica

La grafica deve essere moderna, elegante e cinematografica.

Palette consigliata:

* nero / quasi nero;
* bianco;
* grigi;
* un solo colore accent.

Evitare arcobaleni e colori eccessivamente saturi.

Possibile estetica:

* dark mode;
* typography grande;
* molto spazio vuoto;
* fotografie con bordi leggermente arrotondati;
* grana/noise molto leggera;
* gradienti estremamente discreti.

Il design deve funzionare bene anche senza immagini.

---

# 18. Tipografia

Utilizzare massimo 2 font.

Un font moderno per il testo principale.

Un font monospace solamente per la parte terminale/technical.

Il testo principale deve essere molto leggibile.

Prestare particolare attenzione al mobile.

Le frasi importanti possono essere molto grandi.

Esempio:

```text
25
```

può occupare gran parte dello schermo.

---

# 19. Animazioni

Le animazioni sono importanti ma devono essere utilizzate con criterio.

Preferire:

* opacity;
* transform;
* translateY;
* scale;
* blur molto leggero;
* parallax;
* scroll-driven animations.

Evitare:

* animazioni infinite aggressive;
* bounce continui;
* effetti 3D inutili;
* transizioni troppo veloci;
* elementi che distraggono dal contenuto.

L'esperienza deve sembrare cinematografica.

---

# 20. Tecnologie

Scegliere uno stack moderno e semplice da mantenere.

Preferenza:

* React;
* TypeScript;
* Vite oppure Next.js;
* CSS moderno oppure Tailwind;
* una libreria per animazioni se realmente necessaria.

Possibili librerie:

* GSAP;
* Framer Motion / Motion;
* Lenis per smooth scrolling.

Non aggiungere dipendenze solo per comodità.

La priorità è:

1. performance;
2. semplicità;
3. qualità delle animazioni;
4. facilità di modifica.

---

# 21. Architettura

Organizzare il progetto in componenti.

Esempio:

```text
src/
├── components/
│   ├── IntroTerminal
│   ├── Level25
│   ├── Timeline
│   ├── MemoryCard
│   ├── Achievement
│   ├── PersonalMessage
│   ├── BookReveal
│   ├── SurpriseReveal
│   ├── VideoSection
│   └── FinalScreen
│
├── data/
│   └── birthday.ts
│
├── assets/
│   ├── photos/
│   ├── book/
│   └── video/
│
├── styles/
│
└── App.tsx
```

---

# 22. Contenuti configurabili

È fondamentale che i contenuti personali non siano hardcoded dentro i componenti.

Creare ad esempio:

```typescript
export const birthdayData = {
  friendName: "...",

  birthday: {
    age: 25
  },

  memories: [
    {
      year: 2018,
      image: "/photos/photo-01.jpg",
      title: "...",
      text: "..."
    }
  ],

  achievements: [
    {
      title: "...",
      description: "..."
    }
  ],

  personalMessage: [
    "Paragrafo 1...",
    "Paragrafo 2..."
  ],

  book: {
    title: "...",
    author: "...",
    cover: "/book/cover.jpg"
  },

  video: {
    src: "/video/message.mp4",
    poster: "/video/poster.jpg"
  },

  finalMessage: {
    title: "Buon compleanno, bro.",
    subtitle: "Il bello deve ancora iniziare."
  }
};
```

In questo modo potrò modificare facilmente il contenuto senza dover modificare la logica dell'applicazione.

---

# 23. Gestione delle fotografie

Prevedere una cartella:

```text
/public/photos/
```

e utilizzare immagini ottimizzate.

Non caricare fotografie enormi direttamente.

Utilizzare:

* WebP;
* AVIF quando appropriato;
* lazy loading;
* dimensioni responsive.

Per ogni immagine prevedere:

* alt text;
* aspect ratio coerente;
* fallback se l'immagine manca.

---

# 24. Gestione del video

Il video è un asset importante.

Prevedere:

```text
/public/video/
    birthday-message.mp4
    birthday-message-poster.jpg
```

Ottimizzare il video per il web.

Se possibile:

* H.264;
* bitrate ragionevole;
* risoluzione adeguata;
* poster image;
* preload metadata;
* evitare di scaricare il video completamente prima che sia necessario.

Il video non deve rallentare il caricamento iniziale della SPA.

---

# 25. Responsive

La SPA deve essere progettata mobile-first.

Deve funzionare perfettamente su:

* smartphone;
* tablet;
* desktop;
* monitor grandi.

Prestare particolare attenzione al video e alle fotografie.

Non progettare prima desktop e poi "adattare" il mobile.

Il mobile deve essere considerato una modalità primaria.

---

# 26. Audio

Non aggiungere musica di sottofondo automaticamente.

Se si decide di aggiungerla, deve essere:

* opzionale;
* controllabile dall'utente;
* disattivata inizialmente.

Il video dello scrittore deve rimanere il principale contenuto audio.

---

# 27. Performance

La pagina deve caricarsi rapidamente.

Importante:

* lazy loading delle sezioni non necessarie;
* lazy loading immagini;
* non caricare il video all'avvio;
* code splitting se necessario;
* minimizzare JavaScript inutile;
* evitare librerie pesanti se non necessarie.

La prima schermata deve essere immediatamente visualizzabile.

---

# 28. Accessibilità

Anche se il progetto è personale, implementare almeno:

* navigazione da tastiera;
* contrasto adeguato;
* alt text;
* `prefers-reduced-motion`;
* controlli video accessibili;
* focus states.

Se l'utente ha `prefers-reduced-motion`, ridurre le animazioni mantenendo comunque la narrativa.

---

# 29. Easter egg

Aggiungere eventualmente 1-2 piccoli easter egg.

Non renderli necessari per completare l'esperienza.

Esempio:

Digitando una determinata sequenza di tasti:

```text
↑ ↑ ↓ ↓ ← → ← →
```

può apparire:

```text
CHEAT CODE ACTIVATED

Friendship +100
```

Oppure una piccola console nascosta.

Gli easter egg devono essere discreti.

---

# 30. Error handling

La SPA deve continuare a funzionare anche se:

* una foto manca;
* il video non viene caricato;
* un asset non è disponibile.

Se il video non viene caricato, mostrare un messaggio elegante:

```text
Sembra che il video abbia deciso
di fare il difficile.

Riprova.
```

Non mostrare errori tecnici all'utente.

---

# 31. Deployment

Il progetto deve poter essere facilmente deployato come sito statico.

Preferenza:

* Vercel;
* Netlify;
* GitHub Pages;
* oppure hosting statico personale.

Se possibile non introdurre backend.

Non è necessario salvare dati dell'utente.

Non è necessario utilizzare database.

---

# 32. Privacy

Il sito è un regalo privato.

Non implementare:

* analytics;
* tracking;
* cookie non necessari;
* raccolta dati.

Il video e le fotografie sono contenuti personali.

Se possibile, prevedere una modalità di deployment tramite URL non indicizzato dai motori di ricerca.

Aggiungere:

```html
<meta name="robots" content="noindex, nofollow">
```

Non inserire contenuti personali in servizi di terze parti non necessari.

---

# 33. SEO

La SEO non è una priorità.

La pagina deve essere privata/non indicizzata.

Impostare un title appropriato, ad esempio:

```text
LEVEL 25 — Buon compleanno
```

e una description minimale.

---

# 34. Esperienza complessiva

L'esperienza ideale deve durare circa:

## 5–10 minuti

Non deve essere troppo lunga.

L'utente deve sentirsi accompagnato attraverso una storia.

La progressione emotiva deve essere:

```text
IRONIA
   ↓
CURIOSITÀ
   ↓
NOSTALGIA
   ↓
DIVERTIMENTO
   ↓
EMOZIONE
   ↓
SORPRESA
   ↓
VIDEO
   ↓
BUON COMPLEANNO
```

Il video deve rappresentare il climax.

---

# 35. Cosa NON fare

Evitare:

* navbar classica;
* footer tradizionale;
* "Home / About / Contact";
* design da portfolio;
* troppe animazioni;
* troppe librerie;
* colori casuali;
* autoplay del video con audio;
* musica invasiva;
* testi generici;
* frasi motivazionali da Pinterest;
* stock photos;
* elementi che sembrano generati automaticamente.

Ogni elemento deve avere una ragione.

---

# 36. Prima implementazione

Prima di completare il progetto:

1. creare l'intera struttura della SPA;
2. implementare tutte le scene;
3. utilizzare contenuti placeholder;
4. verificare tutte le animazioni;
5. verificare il responsive;
6. verificare il flusso completo;
7. solo successivamente sostituire i placeholder con:

    * fotografie;
    * testi;
    * copertina del libro;
    * video;
    * nome;
    * inside jokes.

Non bloccare lo sviluppo aspettando gli asset definitivi.

---

# 37. Criterio finale di qualità

Quando il progetto sarà terminato, l'esperienza deve dare questa sensazione:

"Questo non è un sito che potrebbe essere stato fatto per chiunque.

Questo sito è stato fatto apposta per me."

La parte tecnica deve essere invisibile.

La storia, le fotografie, il messaggio e soprattutto il video devono essere i protagonisti.

Prima di considerare il lavoro concluso, verificare l'esperienza dall'inizio alla fine su desktop e smartphone e correggere qualsiasi elemento che interrompa il ritmo narrativo.

