export type Language = 'fr' | 'en';

type LocalizedText = Record<Language, string>;

export type TimelineItem = {
  time: string | LocalizedText;
  label: LocalizedText;
};

export type InfoCard = {
  title: LocalizedText;
  body: LocalizedText;
};

export type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type GalleryItem = {
  title: LocalizedText;
  caption: LocalizedText;
  image: string;
  alt: LocalizedText;
};

export const weddingContent = {
  couple: 'Sana & Ramzi',
  names: {
    first: 'Sana',
    second: 'Ramzi',
  },
  date: {
    iso: '2026-09-12T17:00:00+02:00',
    display: {
      fr: '12 septembre 2026',
      en: 'September 12, 2026',
    },
  },
  scheduleStartTime: {
    fr: '17h00',
    en: '5:00 PM',
  },
  city: 'Châteaufort, France',
  venue: 'Domaine de la Geneste',
  venueShort: {
    fr: 'Domaine de la Geneste — Châteaufort',
    en: 'Domaine de la Geneste — Châteaufort',
  },
  venueDisplay: {
    fr: 'Domaine de la Geneste — 78117 Châteaufort',
    en: 'Domaine de la Geneste — 78117 Châteaufort',
  },
  address: 'Chemin de la Geneste, 78117 Châteaufort, France',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Chemin%20de%20la%20Geneste%2C%2078117%20Ch%C3%A2teaufort%2C%20France',
  rsvpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdi2tlFE4cRWuOifaA_FT9PEC_5zWp4xzG-3ASeuYFXwMMCuA/viewform?usp=publish-editor',
  rsvpEmail: '[REMPLACER_PAR_EMAIL]',
  rsvpDeadline: {
    fr: '15 juin 2026',
    en: 'June 15, 2026',
  },
  navigation: {
    details: { fr: 'Programme', en: 'Details' },
    venue: { fr: 'Lieu', en: 'Venue' },
    practical: { fr: 'Infos', en: 'Travel' },
    faq: { fr: 'FAQ', en: 'FAQ' },
    rsvp: { fr: 'RSVP', en: 'RSVP' },
  },
  ui: {
    languageLabel: { fr: 'Langue', en: 'Language' },
    venueEyebrow: { fr: 'Le lieu', en: 'The venue' },
    addressLabel: { fr: 'Adresse', en: 'Address' },
    startLabel: { fr: 'Début', en: 'Start' },
    venuePlaceholder: {
      fr: 'Photo du domaine à insérer ici',
      en: 'Venue photo goes here',
    },
    floatingRsvp: { fr: 'RSVP', en: 'RSVP' },
  },
  images: {
    hero: 'pics/AD6693BE-EA31-4DC5-B8DB-64E7D733DDB9_1_105_c.jpeg',
    venue: 'pics/domaine.jpg',
  },
  intro: {
    overline: {
      fr: 'Sana & Ramzi',
      en: 'Sana & Ramzi',
    },
    title: {
      fr: '12 septembre 2026',
      en: '12 September 2026',
    },
    body: {
      fr: '',
      en: '',
    },
    cta: {
      fr: 'Entrer',
      en: 'Enter',
    },
    hint: {
      fr: 'Appuyer pour ouvrir',
      en: 'Press to open',
    },
  },
  hero: {
    eyebrow: {
      fr: 'Mariage',
      en: 'Wedding',
    },
    location: {
      fr: '12 septembre 2026 — Domaine de la Geneste',
      en: '12 September 2026 — Domaine de la Geneste',
    },
    access: {
      fr: '',
      en: '',
    },
    title: {
      fr: '',
      en: '',
    },
    primaryCta: {
      fr: "Répondre à l'invitation",
      en: 'RSVP',
    },
    secondaryCta: {
      fr: 'Découvrir le programme',
      en: 'See the details',
    },
    signature: {
      fr: '',
      en: '',
    },
  },
  countdown: {
    title: {
      fr: 'Avant le 12 septembre',
      en: 'Until 12 September',
    },
    labels: {
      days: { fr: 'Jours', en: 'Days' },
      hours: { fr: 'Heures', en: 'Hours' },
      minutes: { fr: 'Minutes', en: 'Minutes' },
      seconds: { fr: 'Secondes', en: 'Seconds' },
    },
    completed: {
      fr: 'La soirée a commencé.',
      en: 'The night has begun.',
    },
  },
  invitation: {
    title: {
      fr: 'Notre invitation',
      en: 'Our invitation',
    },
    lead: {
      fr: '',
      en: '',
    },
    body: {
      fr:
        'Nous serions très heureux de vous recevoir au Domaine de la Geneste, à Châteaufort 78117, pour célébrer notre mariage. Après la cérémonie, la soirée se poursuivra autour d’un cocktail dînatoire, d’un buffet, de musique et de danse — simplement, avec les personnes qui comptent pour nous.',
      en:
        'We would be delighted to welcome you to Domaine de la Geneste, in Châteaufort, to celebrate our wedding. After the ceremony, the evening will continue with a cocktail reception, buffet, music and dancing — simply, with the people who matter most to us.',
    },
  },
  programme: {
    title: {
      fr: 'Programme',
      en: 'Schedule',
    },
    intro: {
      fr: 'Rendez-vous à partir de 17h00.',
      en: 'Please join us from 5:00 PM.',
    },
    note: {
      fr: 'La soirée se poursuivra autour d’un cocktail dînatoire et d’un buffet, dans un format libre, élégant et convivial — sans dîner assis traditionnel.',
      en: 'The evening will continue with a cocktail reception and buffet — an elegant, relaxed format without a traditional seated dinner.',
    },
    timeline: [
      {
        time: '17h00',
        label: { fr: 'Arrivée sur les lieux et vin d’honneur avec les mariés', en: 'Arrival at the venue and welcome drinks with the newlyweds' },
      },
      {
        time: '19h30',
        label: { fr: 'Cocktail dînatoire / buffet', en: 'Cocktail buffet' },
      },
      {
        time: '22h00',
        label: { fr: 'Fête, musique et danse', en: 'Party, music and dancing' },
      },
      {
        time: {
          fr: 'Fin à préciser',
          en: 'End time to be confirmed',
        },
        label: { fr: 'Derniers verres, dernière danse', en: 'Last drinks, last dance' },
      },
    ] as TimelineItem[],
  },
  venueSection: {
    title: {
      fr: 'Le Domaine de la Geneste',
      en: 'Domaine de la Geneste',
    },
    subtitle: {
      fr: 'Châteaufort, aux portes de Paris',
      en: 'Châteaufort, just outside Paris',
    },
    body: {
      fr:
        'À seulement trente minutes de Paris en voiture, le Domaine de la Geneste nous accueille dans un cadre privé, calme et élégant. Un lieu à part, entouré de verdure, pour célébrer cette journée avec simplicité et caractère.',
      en:
        'Around thirty minutes from Paris by car, Domaine de la Geneste offers a private and elegant setting surrounded by greenery. A beautiful place to gather, celebrate, and spend the evening together.',
    },
    mapCta: {
      fr: 'Ouvrir dans Google Maps',
      en: 'Open in Google Maps',
    },
    imageCaption: {
      fr: 'Le domaine, à Châteaufort.',
      en: 'The estate in Châteaufort.',
    },
  },
  dressCode: {
    title: {
      fr: 'Dress code',
      en: 'Dress code',
    },
    body: {
      fr:
        'Aucun dress code imposé. Venez chic, élégant, fidèle à vous-même — et suffisamment à l’aise pour danser.',
      en:
        'There is no strict dress code. Come chic, elegant, and true to yourself — with something you can dance in.',
    },
  },
  rsvp: {
    title: {
      fr: 'RSVP',
      en: 'RSVP',
    },
    body: {
      fr: 'Merci de nous confirmer votre présence avant le 15 juin 2026.',
      en: 'Please confirm your attendance by June 15, 2026.',
    },
    help: {
      fr: 'Le formulaire de réponse sera disponible prochainement.',
      en: 'The RSVP form will be available soon.',
    },
    primaryCta: {
      fr: "Répondre à l'invitation",
      en: 'Open RSVP form',
    },
    calendarCta: {
      fr: 'Ajouter au calendrier',
      en: 'Add to calendar',
    },
    googleCalendarCta: {
      fr: 'Ou ouvrir dans Google Calendar',
      en: 'Or open in Google Calendar',
    },
  },
  practicalInfo: {
    title: {
      fr: 'Infos pratiques',
      en: 'Practical information',
    },
    cards: [
      {
        title: { fr: 'Adresse', en: 'Address' },
        body: {
          fr: 'Domaine de la Geneste, Chem. de la Geneste, 78117 Châteaufort',
          en: 'Domaine de la Geneste, Chem. de la Geneste, 78117 Châteaufort',
        },
      },
      {
        title: { fr: 'Depuis Paris en voiture', en: 'From Paris by car' },
        body: {
          fr: 'Le Domaine de la Geneste se trouve à Châteaufort, à environ 30 minutes de Paris en voiture.',
          en: 'Domaine de la Geneste is located in Châteaufort, around thirty minutes from Paris by car.',
        },
      },
      {
        title: { fr: 'Train / RER', en: 'Train / RER' },
        body: {
          fr: 'Accès possible en RER B, puis bus, taxi ou VTC jusqu’au domaine.',
          en: 'The venue can be reached via RER B, followed by a bus, taxi, or private ride.',
        },
      },
      {
        title: { fr: 'Retour', en: 'Return' },
        body: {
          fr: 'Nous vous conseillons d’anticiper votre retour en taxi ou VTC, surtout en fin de soirée.',
          en: 'We recommend arranging a taxi or private ride in advance, especially for the end of the evening.',
        },
      },
    ] as InfoCard[],
  },
  faq: {
    title: {
      fr: 'FAQ',
      en: 'FAQ',
    },
    items: [
      {
        question: {
          fr: 'Puis-je venir accompagné(e) ?',
          en: 'Can I bring a guest?',
        },
        answer: {
          fr: 'Merci de vous référer à votre invitation. Elle précisera les personnes attendues.',
          en: 'Please refer to your invitation. It will specify who is included.',
        },
      },
      {
        question: {
          fr: 'Les enfants sont-ils invités ?',
          en: 'Are children invited?',
        },
        answer: {
          fr: 'Sauf mention contraire, la soirée est pensée comme un moment entre adultes.',
          en: 'Unless stated otherwise, the evening is planned as an adults-only celebration.',
        },
      },
      {
        question: {
          fr: 'À quelle heure arriver ?',
          en: 'What time should I arrive?',
        },
        answer: {
          fr: 'Nous vous attendons à partir de 17h00. Merci d’arriver quelques minutes avant le début de la cérémonie.',
          en: 'We look forward to welcoming you from 5:00 PM. Please arrive a few minutes before the ceremony begins.',
        },
      },
      {
        question: {
          fr: 'Y aura-t-il un dîner assis ?',
          en: 'Will there be a seated dinner?',
        },
        answer: {
          fr: 'La soirée se déroulera autour d’un cocktail dînatoire.',
          en: 'No. The evening will be arranged as a cocktail reception and buffet, without assigned seating.',
        },
      },
      {
        question: {
          fr: 'Y a-t-il un dress code ?',
          en: 'Is there a dress code?',
        },
        answer: {
          fr: 'Une tenue chic et élégante sera parfaite.',
          en: 'There is no strict dress code. Chic and elegant will be perfect.',
        },
      },
    ] as FaqItem[],
  },
  gallery: {
    title: {
      fr: 'Quelques images',
      en: 'A few images',
    },
    intro: {
      fr: 'Le lieu, l’atmosphère, les premiers détails.',
      en: 'The place, the atmosphere, the first details.',
    },
    items: [
      {
        title: { fr: 'Le domaine', en: 'The estate' },
        caption: { fr: 'Le lieu', en: 'The venue' },
        image: 'pics/domaine.jpg',
        alt: {
          fr: 'Le Domaine de la Geneste à Châteaufort',
          en: 'Domaine de la Geneste in Châteaufort',
        },
      },
      {
        title: { fr: 'Nous', en: 'Us' },
        caption: { fr: 'Portrait', en: 'Portrait' },
        image: 'pics/83A3EA6C-1B04-47F1-83F0-2DA0C8C61CE0_4_5005_c.jpeg',
        alt: {
          fr: 'Sana et Ramzi',
          en: 'Sana and Ramzi',
        },
      },
      {
        title: { fr: 'La nuit', en: 'The night' },
        caption: { fr: 'Ambiance', en: 'Mood' },
        image: 'pics/44FAACDF-8F67-4297-8215-C6384873A08C_1_105_c.jpeg',
        alt: {
          fr: 'Ambiance de la soirée',
          en: 'Evening atmosphere',
        },
      },
    ] as GalleryItem[],
  },
  calendar: {
    title: 'Sana & Ramzi Wedding',
    details: {
      fr: 'Célébration de mariage au Domaine de la Geneste. Cérémonie, cocktail dînatoire, musique et danse.',
      en: 'Wedding celebration at Domaine de la Geneste. Ceremony, cocktail buffet, music and dancing.',
    },
    endIso: '2026-09-13T02:00:00+02:00',
  },
  footer: {
    signature: 'Sana & Ramzi — 12.09.2026',
    line: {
      fr: 'Avec vous, ce sera encore plus beau.',
      en: 'It will mean even more with you there.',
    },
  },
} as const;

export const sectionIds = {
  programme: 'programme',
  venue: 'lieu',
  practical: 'infos',
  faq: 'faq',
  rsvp: 'rsvp',
} as const;
