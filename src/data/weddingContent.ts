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
};

export const weddingContent = {
  couple: 'Ramzi & Sana',
  names: {
    first: 'Ramzi',
    second: 'Sana',
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
  address: 'Chemin de la Geneste, 78117 Châteaufort, France',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Chemin%20de%20la%20Geneste%2C%2078117%20Ch%C3%A2teaufort%2C%20France',
  rsvpLink: '[REMPLACER_PAR_LIEN_GOOGLE_FORM]',
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
  intro: {
    overline: {
      fr: 'Invitation privée',
      en: 'Sealed invitation',
    },
    title: {
      fr: '12 septembre 2026',
      en: 'September 12, 2026',
    },
    body: {
      fr: 'Domaine de la Geneste, Châteaufort',
      en: 'Domaine de la Geneste, Châteaufort',
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
      fr: 'Invitation privée',
      en: 'Private invitation',
    },
    title: {
      fr: '12 septembre 2026',
      en: 'September 12, 2026',
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
      fr: 'Domaine de la Geneste, Châteaufort',
      en: 'Domaine de la Geneste, Châteaufort',
    },
  },
  countdown: {
    title: {
      fr: 'Le compte à rebours est lancé',
      en: 'The countdown has begun',
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
      fr: 'Nous serions heureux de vous retrouver pour célébrer notre mariage.',
      en: 'We would be delighted to celebrate our wedding with you.',
    },
    body: {
      fr:
        "Le 12 septembre 2026, nous vous donnons rendez-vous au Domaine de la Geneste, à Châteaufort, pour célébrer notre mariage. À partir de 17h, nous nous retrouverons pour une cérémonie, un cocktail dînatoire, de la musique, de la danse et une très belle soirée à partager avec vous.",
      en:
        'On September 12th, 2026, we invite you to join us at Domaine de la Geneste in Châteaufort to celebrate our wedding. From 5 PM, we will gather for a ceremony, a cocktail buffet, music, dancing and a beautiful evening shared with you.',
    },
  },
  programme: {
    title: {
      fr: 'Le programme',
      en: 'The programme',
    },
    note: {
      fr: "Il ne s'agira pas d'un dîner assis traditionnel : l'esprit sera plus libre, plus vivant et plus festif.",
      en: 'This will not be a traditional seated dinner: the evening is designed to feel freer, more alive, and more festive.',
    },
    timeline: [
      {
        time: '17h00',
        label: { fr: 'Cérémonie', en: 'Ceremony' },
      },
      {
        time: '18h00',
        label: { fr: 'Cocktail', en: 'Cocktail' },
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
        label: { fr: 'La nuit fera le reste', en: 'The night will decide the rest' },
      },
    ] as TimelineItem[],
  },
  venueSection: {
    title: {
      fr: 'Domaine de la Geneste',
      en: 'Domaine de la Geneste',
    },
    subtitle: {
      fr: 'Châteaufort, aux portes de Paris',
      en: 'Châteaufort, just outside Paris',
    },
    body: {
      fr:
        "Un domaine caché dans la Vallée de Chevreuse, avec son château, son parc, ses gîtes et cette impression rare d'être à la fois tout près de Paris et déjà ailleurs.",
      en:
        'A hidden estate in the Chevreuse Valley, with its chateau, gardens, guest houses and that rare feeling of being both close to Paris and already somewhere else.',
    },
    mapCta: {
      fr: 'Ouvrir dans Google Maps',
      en: 'Open in Google Maps',
    },
    imageCaption: {
      fr: 'Placeholder photo du domaine — à remplacer plus tard.',
      en: 'Venue photo placeholder — to be replaced later.',
    },
  },
  dressCode: {
    title: {
      fr: 'Dress code',
      en: 'Dress code',
    },
    body: {
      fr:
        "Pas de thème imposé. Venez élégants, venez vous-mêmes. Chic, audacieux, confortable pour danser — l'essentiel est que vous vous sentiez bien.",
      en:
        'No strict dress code. Come beautiful, come as yourself. Elegant, chic, bold, comfortable enough to dance — the only rule is to feel good.',
    },
  },
  rsvp: {
    title: {
      fr: 'RSVP',
      en: 'RSVP',
    },
    body: {
      fr: 'Merci de nous répondre avant le 15 juin 2026.',
      en: 'Please reply before June 15, 2026.',
    },
    help: {
      fr: 'Si besoin, vous pouvez aussi nous écrire à',
      en: 'If needed, you can also reach us at',
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
        title: { fr: 'Depuis Paris', en: 'From Paris' },
        body: {
          fr: 'Le domaine se situe à Châteaufort, dans les Yvelines, à environ 30 minutes de Paris selon le trafic.',
          en: 'The estate is in Châteaufort, in the Yvelines area, around 30 minutes from Paris depending on traffic.',
        },
      },
      {
        title: { fr: 'Train / RER', en: 'Train / RER' },
        body: {
          fr: 'La gare RER la plus pratique sera à confirmer. Prévoir taxi ou VTC depuis la gare.',
          en: 'The most convenient RER station will be confirmed. Plan for a taxi or ride-share from the station.',
        },
      },
      {
        title: { fr: 'Voiture', en: 'By car' },
        body: {
          fr: 'Parking disponible à proximité ou sur place — à confirmer avec le domaine.',
          en: 'Parking should be available nearby or on site — to be confirmed with the venue.',
        },
      },
      {
        title: { fr: 'Hébergement', en: 'Staying nearby' },
        body: {
          fr: "Quelques hébergements existent sur place ou à proximité. Nous partagerons une liste d'options plus tard.",
          en: 'A few accommodation options exist on site or nearby. We will share a list later on.',
        },
      },
      {
        title: { fr: 'Retour', en: 'Getting back' },
        body: {
          fr: 'Pensez à anticiper taxi, VTC ou covoiturage pour le retour.',
          en: 'Please plan ahead for taxis, ride-shares or carpooling for the way back.',
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
          en: 'May I bring a plus-one?',
        },
        answer: {
          fr: 'Merci de vérifier votre invitation. Si un +1 est prévu, il sera indiqué.',
          en: 'Please check your invitation. If a plus-one is included, it will be indicated there.',
        },
      },
      {
        question: {
          fr: 'Les enfants sont-ils invités ?',
          en: 'Are children invited?',
        },
        answer: {
          fr: 'Nous préciserons cela individuellement selon les invitations.',
          en: 'We will clarify this individually depending on each invitation.',
        },
      },
      {
        question: {
          fr: 'À quelle heure arriver ?',
          en: 'What time should we arrive?',
        },
        answer: {
          fr: 'Idéalement entre 16h30 et 16h50 pour commencer à 17h.',
          en: 'Ideally between 4:30 PM and 4:50 PM so we can begin at 5 PM.',
        },
      },
      {
        question: {
          fr: 'Y aura-t-il un dîner assis ?',
          en: 'Will there be a seated dinner?',
        },
        answer: {
          fr: 'Non, nous prévoyons plutôt un cocktail dînatoire / buffet, plus libre et convivial.',
          en: 'No, we are planning a cocktail buffet instead, with a freer and more convivial flow.',
        },
      },
      {
        question: {
          fr: 'Où dormir ?',
          en: 'Where should we stay?',
        },
        answer: {
          fr: 'Nous partagerons bientôt quelques recommandations.',
          en: 'We will share a few recommendations soon.',
        },
      },
      {
        question: {
          fr: 'Y a-t-il un dress code ?',
          en: 'Is there a dress code?',
        },
        answer: {
          fr: 'Pas de dress code strict : élégant, chic, vous-mêmes.',
          en: 'No strict dress code: elegant, chic, and entirely yourselves.',
        },
      },
    ] as FaqItem[],
  },
  gallery: {
    title: {
      fr: 'À venir',
      en: 'Coming soon',
    },
    intro: {
      fr: 'Quelques images viendront bientôt habiter cette invitation.',
      en: 'A few images will soon find their way into this invitation.',
    },
    items: [
      {
        title: { fr: 'Le domaine', en: 'The estate' },
        caption: { fr: 'Placeholder du lieu', en: 'Venue placeholder' },
      },
      {
        title: { fr: 'Nous', en: 'Us' },
        caption: { fr: 'Placeholder portrait', en: 'Portrait placeholder' },
      },
      {
        title: { fr: 'La nuit', en: 'The night' },
        caption: { fr: 'Placeholder ambiance', en: 'Mood placeholder' },
      },
    ] as GalleryItem[],
  },
  calendar: {
    title: 'Ramzi & Sana Wedding',
    details: {
      fr: 'Célébration de mariage au Domaine de la Geneste. Cérémonie, cocktail dînatoire, musique et danse.',
      en: 'Wedding celebration at Domaine de la Geneste. Ceremony, cocktail buffet, music and dancing.',
    },
    endIso: '2026-09-13T02:00:00+02:00',
  },
  footer: {
    signature: 'Ramzi & Sana — 12.09.2026',
    line: {
      fr: 'Ramzi & Sana vous attendent au Domaine de la Geneste.',
      en: 'Ramzi & Sana are looking forward to welcoming you at Domaine de la Geneste.',
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
