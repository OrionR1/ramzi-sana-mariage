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
    fr: 'Domaine de la Geneste — Chateaufort',
    en: 'Domaine de la Geneste — Chateaufort',
  },
  address: 'Chemin de la Geneste, 78117 Châteaufort, France',
  mapsLink: '[REMPLACER_PAR_LIEN_GOOGLE_MAPS]',
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
    startLabel: { fr: 'Debut', en: 'Start' },
    venuePlaceholder: {
      fr: 'Photo du domaine a inserer ici',
      en: 'Venue photo goes here',
    },
    floatingRsvp: { fr: 'RSVP', en: 'RSVP' },
  },
  intro: {
    overline: {
      fr: 'Invitation scellee',
      en: 'Sealed invitation',
    },
    title: {
      fr: '12 septembre 2026',
      en: 'September 12, 2026',
    },
    body: {
      fr: 'Domaine de la Geneste, Chateaufort',
      en: 'Domaine de la Geneste, Chateaufort',
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
      fr: 'Invitation privee',
      en: 'Private invitation',
    },
    title: {
      fr: '12 septembre 2026',
      en: 'September 12, 2026',
    },
    primaryCta: {
      fr: "Repondre a l'invitation",
      en: 'RSVP',
    },
    secondaryCta: {
      fr: 'Decouvrir le programme',
      en: 'See the details',
    },
    signature: {
      fr: 'Domaine de la Geneste, Chateaufort',
      en: 'Domaine de la Geneste, Chateaufort',
    },
  },
  countdown: {
    title: {
      fr: 'Le compte a rebours est lance',
      en: 'The countdown has begun',
    },
    labels: {
      days: { fr: 'Jours', en: 'Days' },
      hours: { fr: 'Heures', en: 'Hours' },
      minutes: { fr: 'Minutes', en: 'Minutes' },
      seconds: { fr: 'Secondes', en: 'Seconds' },
    },
    completed: {
      fr: 'La soiree a commence.',
      en: 'The night has begun.',
    },
  },
  invitation: {
    title: {
      fr: 'Notre invitation',
      en: 'Our invitation',
    },
    lead: {
      fr: 'Une soiree pour se retrouver, lever les verres, danser trop longtemps et faire durer la fin de l ete.',
      en: 'A night to reunite, raise our glasses, dance too long and stretch the last breath of summer.',
    },
    body: {
      fr:
        "Le 12 septembre 2026, nous vous invitons a nous rejoindre au Domaine de la Geneste pour celebrer notre mariage. A partir de 17h, le chateau, le parc et la soiree seront a nous : une ceremonie, un cocktail dinatoire, des verres leves, des retrouvailles, de la musique, de la danse et une tres belle facon de feter ce moment avec vous.",
      en:
        'On September 12th, 2026, we invite you to join us at Domaine de la Geneste to celebrate our wedding. From 5 PM, the chateau, the gardens and the evening will be ours: a ceremony, a cocktail buffet, raised glasses, reunions, music, dancing and a beautiful way to celebrate this moment with you.',
    },
  },
  programme: {
    title: {
      fr: 'Le programme',
      en: 'The programme',
    },
    note: {
      fr: "Il ne s'agira pas d'un diner assis traditionnel : l'esprit sera plus libre, plus vivant, plus festif.",
      en: 'This will not be a traditional seated dinner: the evening is designed to feel freer, more alive, and more festive.',
    },
    timeline: [
      {
        time: '17h00',
        label: { fr: 'Ceremonie', en: 'Ceremony' },
      },
      {
        time: '18h00',
        label: { fr: 'Cocktail', en: 'Cocktail' },
      },
      {
        time: '19h30',
        label: { fr: 'Cocktail dinatoire / buffet', en: 'Cocktail buffet' },
      },
      {
        time: '22h00',
        label: { fr: 'Fete, musique et danse', en: 'Party, music and dancing' },
      },
      {
        time: {
          fr: 'Fin a preciser',
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
      fr: 'Chateaufort, aux portes de Paris',
      en: 'Chateaufort, just outside Paris',
    },
    body: {
      fr:
        "Un domaine cache dans la Vallee de Chevreuse, avec son chateau, son parc, ses gites et cette impression rare d'etre a la fois tout pres de Paris et deja ailleurs.",
      en:
        'A hidden estate in the Chevreuse Valley, with its chateau, gardens, guest houses and that rare feeling of being both close to Paris and already somewhere else.',
    },
    mapCta: {
      fr: 'Ouvrir dans Google Maps',
      en: 'Open in Google Maps',
    },
    imageCaption: {
      fr: 'Placeholder photo du domaine — a remplacer plus tard.',
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
        "Pas de theme impose. Venez beaux, venez vous-memes. Elegant, chic, audacieux, confortable pour danser — l'essentiel est que vous vous sentiez bien.",
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
      fr: 'Merci de nous repondre avant le 15 juin 2026.',
      en: 'Please reply before June 15, 2026.',
    },
    help: {
      fr: 'Si besoin, vous pouvez aussi nous ecrire a',
      en: 'If needed, you can also reach us at',
    },
    primaryCta: {
      fr: "Repondre a l'invitation",
      en: 'Open RSVP form',
    },
    calendarCta: {
      fr: "Ajouter au calendrier",
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
          fr: "Le domaine se situe a Chateaufort, dans les Yvelines, a environ 30 minutes de Paris selon le trafic.",
          en: 'The estate is in Chateaufort, in the Yvelines area, around 30 minutes from Paris depending on traffic.',
        },
      },
      {
        title: { fr: 'Train / RER', en: 'Train / RER' },
        body: {
          fr: 'La gare RER la plus pratique sera a confirmer. Prevoir taxi ou VTC depuis la gare.',
          en: 'The most convenient RER station will be confirmed. Plan for a taxi or ride-share from the station.',
        },
      },
      {
        title: { fr: 'Voiture', en: 'By car' },
        body: {
          fr: 'Parking disponible a proximite ou sur place — a confirmer avec le domaine.',
          en: 'Parking should be available nearby or on site — to be confirmed with the venue.',
        },
      },
      {
        title: { fr: 'Hebergement', en: 'Staying nearby' },
        body: {
          fr: "Quelques hebergements existent sur place ou a proximite. Nous partagerons une liste d'options plus tard.",
          en: 'A few accommodation options exist on site or nearby. We will share a list later on.',
        },
      },
      {
        title: { fr: 'Retour', en: 'Getting back' },
        body: {
          fr: 'Pensez a anticiper taxi, VTC ou covoiturage pour le retour.',
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
          fr: 'Puis-je venir accompagne(e) ?',
          en: 'May I bring a plus-one?',
        },
        answer: {
          fr: "Merci de verifier votre invitation. Si un +1 est prevu, il sera indique.",
          en: 'Please check your invitation. If a plus-one is included, it will be indicated there.',
        },
      },
      {
        question: {
          fr: 'Les enfants sont-ils invites ?',
          en: 'Are children invited?',
        },
        answer: {
          fr: 'Nous preciserons cela individuellement selon les invitations.',
          en: 'We will clarify this individually depending on each invitation.',
        },
      },
      {
        question: {
          fr: 'A quelle heure arriver ?',
          en: 'What time should we arrive?',
        },
        answer: {
          fr: 'Idealement entre 16h30 et 16h50 pour commencer a 17h.',
          en: 'Ideally between 4:30 PM and 4:50 PM so we can begin at 5 PM.',
        },
      },
      {
        question: {
          fr: 'Y aura-t-il un diner assis ?',
          en: 'Will there be a seated dinner?',
        },
        answer: {
          fr: 'Non, nous prevoyons plutot un cocktail dinatoire / buffet, plus libre et convivial.',
          en: 'No, we are planning a cocktail buffet instead, with a freer and more convivial flow.',
        },
      },
      {
        question: {
          fr: 'Ou dormir ?',
          en: 'Where should we stay?',
        },
        answer: {
          fr: 'Nous partagerons bientot quelques recommandations.',
          en: 'We will share a few recommendations soon.',
        },
      },
      {
        question: {
          fr: 'Y a-t-il un dress code ?',
          en: 'Is there a dress code?',
        },
        answer: {
          fr: 'Pas de dress code strict : elegant, chic, vous-memes.',
          en: 'No strict dress code: elegant, chic, and entirely yourselves.',
        },
      },
    ] as FaqItem[],
  },
  gallery: {
    title: {
      fr: 'A venir',
      en: 'Coming soon',
    },
    intro: {
      fr: 'Quelques images viendront bientot habiter cette invitation.',
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
      fr: 'Celebration de mariage au Domaine de la Geneste. Ceremonie, cocktail dinatoire, musique et danse.',
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
