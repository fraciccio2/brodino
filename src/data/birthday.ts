import { BirthdayData } from '../types';

export const birthdayData: BirthdayData = {
  friendName: "Leonardo",
  authorSignature: "Il tuo Brodino",
  
  birthday: {
    age: 25
  },

  introTerminal: {
    command: "./birthday.sh",
    loadingMemoriesText: "Loading memories...",
    loadingFriendshipText: "Loading friendship...",
    checkingAgeText: "Checking age...",
    warningText: "WARNING: User has reached level 25.",
    promptText: "Proceed anyway? [Y/n]",
    welcomeText: "WELCOME TO LEVEL 25"
  },

  level25Intro: {
    leadText: "25 anni.",
    subText: "Sembra tanto.",
    revealText: "Ma se guardiamo bene...",
    highlightText: "sono successe un sacco di cose."
  },

  memories: [
    {
      id: "mem-2013",
      year: 2013,
      title: "L'inizio di tutto",
      text: "Prima foto che ho trovato che conferma il fatto che male che va ci conosciamo già da 13 anni, più di metà della nostra vita...",
      joke: "Una cosa è certa però, sempre stato un'amante della fregna.",
      image: "/photos/2013.jpg",
      alt: "Foto ricordo 2013",
      tag: "Origins"
    },
    {
      id: "mem-2019",
      year: 2019,
      title: "La maggiore età",
      text: "Il tempo è passato, siamo cresciuti e siamo cambiati un bel po', diventando maggiorenni ma sempre affianco.",
      joke: "Qualcuno durante il percorso lo abbiamo perso, ma le persone importanti restano.",
      image: "/photos/2019.jpg",
      alt: "Foto ricordo 2019",
      tag: "Eighteen"
    },
    {
      id: "mem-2022",
      year: 2022,
      title: "Le intramontabili Ghluin Kloin",
      text: "Tappa fissa di ogni estate, le nostre Ghluin Kloin, non sarebbe estate senza di loro oramai, mutande false ma amicizia autentica.",
      joke: "Oramai sono con noi dal 2021, quest'anno hanno fatto 5 anni, crazy.",
      image: "/photos/2022.jpg",
      alt: "Foto ricordo 2022",
      tag: "Ghluin Kloin"
    },
    {
      id: "mem-2024",
      year: 2024,
      title: "Primo viaggio insieme",
      text: "E finalmente dopo tanto tempo abbiamo fatto un viaggio insieme, viaggio che penso non dimenticherò mai, nella piccola isola di Zante ma con grandissimi ricordi.",
      joke: "In soli 5 giorni siamo riusciti a creare un sacco di ricordi, alcuni che rimarranno indelebili.",
      image: "/photos/2024.jpg",
      alt: "Foto ricordo 2024",
      tag: "Road Trip"
    },
    {
      id: "mem-2026",
      year: 2026,
      title: "Level 25",
      text: "E alla fine siamo arrivati al quarto di secolo. Sembrava una data lontanissima sul calendario.",
      joke: "Statistiche aggiornate: Carisma +5, Caldo +30, Bollente: +100.",
      image: "/photos/2026.jpg",
      alt: "Foto ricordo 2026",
      tag: "Now"
    }
  ],

  insideJokesTitle: {
    title: "Alcune cose non possono essere spiegate.",
    subtitle: "E probabilmente è molto meglio così."
  },

  insideJokes: [
    {
      id: "joke-1",
      badge: "ACHIEVEMENT UNLOCKED",
      title: "\"Quanti segreti\"",
      quote: "«Meglio che certe cose non escano altrimenti finirebbe male...»",
      context: "Il patto di riservatezza più rigoroso della storia dell'umanità.",
      counter: "Segreti: ∞"
    },
    {
      id: "joke-2",
      badge: "ACHIEVEMENT UNLOCKED",
      title: "\"Sempre amici\"",
      quote: "«Se siamo sopravvissuti a tutto questo fino ad ora, possiamo superare qualsiasi cosa.»",
      context: "25 anni di vita, una quantità infinita di ore al telefono, 0 denunce depositate (per ora).",
      counter: "100% Affidabilità"
    },
    {
      id: "joke-3",
      badge: "INSIDE REFERENCE",
      title: "\"La teoria dei 5 minuti\"",
      quote: "«Sto arrivando, 5 minuti e sono sotto.»",
      context: "Traduzione: ho appena iniziato la doccia e non ho ancora deciso cosa mettermi.",
      counter: "Ritardo medio: ~42 min"
    },
    {
      id: "joke-4",
      badge: "LORE ENTRY",
      title: "\"Il piano infallibile\"",
      quote: "«Fidati di me, cosa potrebbe mai andare storto?»",
      context: "Tutto. Ma è esattamente per questo che le storie migliori nascono così.",
      counter: "Successo caotico: 10/10"
    }
  ],

  achievements: [
    { id: "ach-1", title: "Prima cazzata insieme", description: "Collaudo iniziale superato senza danni permanenti", unlocked: true },
    { id: "ach-2", title: "Prima vacanza condivisa", description: "Sopravvissuti alla convivenza forzata e alle intemperie", unlocked: true },
    { id: "ach-3", title: "1000+ risate a crepapelle", description: "Spesso nei momenti meno opportuni e più silenziosi", unlocked: true },
    { id: "ach-4", title: "Infinite discussioni", description: "Dibattiti di 3 ore su questioni filosofiche e no", unlocked: true },
    { id: "ach-5", title: "Sopravvissuti alle nostre idee", description: "Piani astuti che avrebbero dovuto mandarci nei guai", unlocked: true },
    { id: "ach-6", title: "Ancora e sempre qui", description: "Un'amicizia che non ha bisogno di presentazioni né di filtri", unlocked: true },
    { id: "ach-7", title: "LEVEL 25", description: "Nuovo rango raggiunto con onore e stile", unlocked: true }
  ],

  personalMessage: {
    leadIn: "Però c'è una cosa che non ti ho mai detto abbastanza.",
    paragraphs: [
      "In questi anni abbiamo fatto di tutto: riso fino a non respirare, affrontato momenti in cui le cose non giravano nel verso giusto, condiviso traguardi importanti e pomeriggi passati semplicemente a non fare niente.",
      "Trovare una persona con cui puoi essere autentico al 100%, senza maschere e senza il bisogno di sembrare all'altezza di nulla, è una delle cose più rare e preziose che possano capitare.",
      "Compiere 25 anni è una tappa simbolica: si chiudono le prime fasi della giovinezza e si apre il periodo in cui si costruisce davvero ciò che si vuole essere. Vederti crescere, affrontare le tue sfide e rimanere la stessa persona speciale e leale di sempre è un privilegio enorme.",
      "Grazie per ogni consiglio, ogni sfogo, ogni risata e ogni momento in cui ci sei stato senza nemmeno bisogno di chiedertelo. Sono fiero dell'amico che sei e di quello che stai diventando."
    ],
    signature: "Con tutto il bene del mondo."
  },

  book: {
    title: "VIVA LA FREGNA - Zagai Sawamba",
    author: "Alfredo Crielesi",
    tagline: "E visto che alcune storie meritano di essere raccontate...",
    description: "Un libro che parla di una delle tue grandi passioni, non c'è bisogno di dire quale...",
    note: "Questo è il mio regalo per te.",
    cover: "/book/copertina-libro.jpg"
  },

  fakeConclusion: {
    theEnd: "THE END.",
    wait: "Aspetta...",
    notYet: "Non è ancora finita."
  },

  surprise: {
    heading: "Pensavi che fosse tutto qui?",
    subheading: "Ho un'ultima sorpresa per te.",
    revealer: "E questa volta... non sono stato io a registrarla.",
    specialPerson: "UNA PERSONA SPECIALE HA QUALCOSA DA DIRTI"
  },

  video: {
    src: "/video/birthday-message.mp4",
    poster: "/photos/birthday-message-poster.jpg",
    authorName: "L'Autore",
    title: "Un videomessaggio dedicato",
    note: "Buon compleanno. Questo è per te.",
    fallbackMessage: "Sembra che il video abbia deciso di fare il difficile. Verifica che il file sia presente in /public/video/birthday-message.mp4 o riprova."
  },

  finalMessage: {
    bigNumber: "25",
    title: "Buon compleanno, brodino.",
    subtitle: "Il bello deve ancora iniziare.",
    authorSign: "— Il tuo amico di sempre",
    finalPhoto: "/photos/final.jpg"
  },

  easterEgg: {
    unlockedTitle: "CHEAT CODE ACTIVATED",
    unlockedSubtitle: "Codice segreto inserito con successo!",
    friendshipLevel: "Friendship +100 • Livello Leggenda Sbloccato 🚀"
  }
};
