# 🎂 LEVEL 25 — Interactive Birthday Experience

Una Single Page Application (SPA) narrativa e cinematografica realizzata appositamente per festeggiare il 25° compleanno del migliore amico.

---

## 🌟 Architettura dell'Esperienza

La SPA guida l'utente attraverso una progressione narrativa ed emotiva in 11 scene:

1. **SCENA 1 — Intro Terminal**: Simulazione terminale interattivo (`$ ./birthday.sh`), caricamento ricordi e amicizia, avviso di sistema *"User has reached level 25"*, richiesta `[Y/n]` con supporto tastiera (tasto `Y` o `Invio`), click/touch e pulsante *Salta Intro*.
2. **SCENA 2 — Level 25**: Transizione minimalista con tipografia d'impatto (*"25 anni. Sembra tanto... Ma se guardiamo bene... sono successe un sacco di cose."*).
3. **SCENA 3 — La nostra storia**: Timeline verticale con foto grandi, capitoli, anni, didascalie ed estratti comici.
4. **SCENA 4 — Inside jokes**: *"Alcune cose non possono essere spiegate. E probabilmente è meglio così."* con schede dedicate alle battute e segreti storici.
5. **SCENA 5 — Achievements**: Traguardi sbloccati lineari e ritmici (*Prima cazzata insieme*, *1000+ risate*, *Ancora amici*, *LEVEL 25*).
6. **SCENA 6 — Il momento serio**: Cambio radicale di atmosfera, pulito ed emotivo: una lettera personale sincera e toccante.
7. **SCENA 7 — Il libro**: Presentazione del regalo fisico, con copertina animata 3D tilt, autore, titolo e dedica.
8. **SCENA 8 — La falsa conclusione**: *"THE END. ... Aspetta. Non è ancora finita."* per creare vera suspense.
9. **SCENA 9 — La sorpresa**: Schermata scura che svela: *"Pensavi che fosse tutto qui? Ho una sorpresa per te. E questa volta non sono stato io a registrarla."*
10. **SCENA 10 — VIDEO (Il Climax)**: Player video cinematografico in **formato verticale (9:16)** ottimizzato per registrazioni da smartphone dello scrittore, con controlli discreti (play/pause, seek bar, volume/mute, fullscreen, poster, gestione errori/fallback elegante).
11. **SCENA 11 — Finale**: Schermata di chiusura *"HAPPY 25 - Buon compleanno, bro. Il bello deve ancora iniziare"*, firma personale, foto conclusiva e cascata di coriandoli dorati.

### 🎮 Easter Egg & Audio
- **Konami Code Easter Egg (`↑ ↑ ↓ ↓ ← → ← → B A`)**: Premendo questa combinazione di tasti sulla tastiera in qualsiasi momento, si apre la finestra confidenziale *"Cheat Code Activated: File Riservato Sbloccato"*, che mostra una fotografia segreta/compromettente accompagnata dalla didascalia (*"«Questa era decisamente meglio tenerla privata...»"*), il perk d'amicizia e una pioggia di coriandoli.
- **Audio d'ambiente opzionale**: Pulsante discreto in basso a destra per attivare/disattivare la musica rilassante di sottofondo (disattivata di default per rispettare la visione del video).

---

## 🛠️ Come personalizzare i contenuti

Tutti i testi, i nomi, le foto e i percorsi sono centralizzati in:
👉 [`src/data/birthday.ts`](file:///D:/brodino/src/data/birthday.ts)

Non serve modificare i componenti React: basta editare questo file per:
- Cambiare il nome dell'amico (`friendName`) e la tua firma (`authorSignature`);
- Aggiungere o modificare i ricordi e le foto della timeline (`memories`);
- Personalizzare battute e inside jokes (`insideJokes`);
- Scrivere la tua lettera personale (`personalMessage`);
- Inserire titolo, autore e descrizione del libro regalato (`book`);
- Impostare i percorsi per il video dello scrittore e poster (`video`);
- Configurare la foto segreta e la didascalia dell'Easter Egg (`easterEgg`).

---

## 📁 Posizionamento degli Asset Personali

Inserisci i tuoi file nelle rispettive cartelle all'interno di `public/`:

- **Fotografie**: [`public/photos/`](file:///D:/brodino/public/photos/)
  - Foto ricordi per la timeline: es. `foto-01.jpg`, `foto-02.jpg`...
  - Foto finale condivisa: `final.jpg`
  - Foto segreta per l'Easter Egg: `easter-egg.jpg`
- **Copertina Libro**: [`public/book/`](file:///D:/brodino/public/book/) (orientamento verticale ~ 2:3)
- **Videomessaggio e poster**: [`public/video/`](file:///D:/brodino/public/video/)
  - Video verticale (9:16): `birthday-message.mp4`
  - Poster verticale: `birthday-message-poster.jpg`

> 💡 Se un'immagine o il video non sono ancora presenti sul disco, l'applicazione mostra un fallback grafico elegante e non distruttivo senza bloccare l'esperienza.

---

## 🚀 Comandi Disponibili

```bash
# Avvia il server di sviluppo locale (porta 3000)
npm run dev

# Compila l'applicazione per la produzione
npm run build

# Anteprima locale della build
npm run preview
```

---

## 🔒 Privacy & Deployment

- Il file `index.html` include il tag `<meta name="robots" content="noindex, nofollow" />` per evitare che il regalo privato venga indicizzato dai motori di ricerca.
- L'app genera un sito statico al 100% (nella cartella `dist/`), che puoi deployare gratuitamente su **Vercel**, **Netlify** o **GitHub Pages**.
