export interface MemoryItem {
  id: string;
  year: number;
  title: string;
  text: string;
  joke?: string;
  image: string;
  alt: string;
  tag?: string;
}

export interface InsideJokeItem {
  id: string;
  badge?: string;
  title: string;
  quote?: string;
  context: string;
  counter?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  unlocked?: boolean;
}

export interface BookInfo {
  title: string;
  author: string;
  cover: string;
  tagline: string;
  description: string;
  note: string;
}

export interface VideoInfo {
  src: string;
  poster: string;
  authorName: string;
  title: string;
  note: string;
  fallbackMessage: string;
}

export interface BirthdayData {
  friendName: string;
  authorSignature: string;
  birthday: {
    age: number;
  };
  introTerminal: {
    command: string;
    loadingMemoriesText: string;
    loadingFriendshipText: string;
    checkingAgeText: string;
    warningText: string;
    promptText: string;
    welcomeText: string;
  };
  level25Intro: {
    leadText: string;
    subText: string;
    revealText: string;
    highlightText: string;
  };
  memories: MemoryItem[];
  insideJokesTitle: {
    title: string;
    subtitle: string;
  };
  insideJokes: InsideJokeItem[];
  achievements: AchievementItem[];
  personalMessage: {
    leadIn: string;
    paragraphs: string[];
    signature: string;
  };
  book: BookInfo;
  fakeConclusion: {
    theEnd: string;
    wait: string;
    notYet: string;
  };
  surprise: {
    heading: string;
    subheading: string;
    revealer: string;
    specialPerson: string;
  };
  video: VideoInfo;
  finalMessage: {
    bigNumber: string;
    title: string;
    subtitle: string;
    authorSign: string;
    finalPhoto?: string;
  };
  easterEgg: {
    unlockedTitle: string;
    unlockedSubtitle: string;
    friendshipLevel: string;
    image?: string;
    imageCaption?: string;
  };
}
