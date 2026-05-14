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

export type DaySummaryItem = {
  time: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
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
  rsvpLink: '#rsvp',
  rsvpEndpoint: 'https://script.google.com/macros/s/AKfycbw9iKRx-NqDlYPsWb5cJAtL5kLK4EjJ4Emk4SZ4s_F1kKRf6w-BhvsTypZ1dDwyt1kn/exec',
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
    intro: 'pics/us2.jpeg',
    hero: 'pics/us-20260514.jpeg',
    neuilly: 'pics/neuilly.jpg',
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
      fr: '12 septembre 2026',
      en: '12 September 2026',
    },
    access: {
      fr: '14h00 — Mairie de Neuilly-sur-Seine\n17h00 — Domaine de la Geneste',
      en: '2:00 PM — Neuilly-sur-Seine town hall\n5:00 PM — Domaine de la Geneste',
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
        'Nous serions très heureux de partager cette journée si spéciale avec vous.\n\nRendez-vous à 14h00 à la mairie de Neuilly-sur-Seine pour notre mariage civil, avant de poursuivre les festivités à partir de 17h00 au Domaine de la Geneste, à Châteaufort.\n\nNous avons hâte de célébrer ce moment entourés des personnes qui comptent le plus pour nous.',
      en:
        'We would be so happy to share this very special day with you.\n\nPlease join us at 2:00 PM at Neuilly-sur-Seine town hall for our civil wedding, before continuing the celebration from 5:00 PM at Domaine de la Geneste, in Châteaufort.\n\nWe cannot wait to celebrate this moment surrounded by the people who mean the most to us.',
    },
  },
  dayAtGlance: {
    title: {
      fr: 'En un coup d’œil',
      en: 'At a glance',
    },
    items: [
      {
        time: { fr: '14h00', en: '2:00 PM' },
        title: {
          fr: 'Mairie de Neuilly-sur-Seine',
          en: 'Neuilly-sur-Seine town hall',
        },
        body: {
          fr: 'Mariage civil et premier temps fort de la journée.',
          en: 'Civil wedding and the first key moment of the day.',
        },
      },
      {
        time: { fr: '17h00', en: '5:00 PM' },
        title: {
          fr: 'Domaine de la Geneste',
          en: 'Domaine de la Geneste',
        },
        body: {
          fr: 'Début des festivités, cocktail dînatoire et soirée.',
          en: 'Celebration begins, followed by dinner cocktail and the evening party.',
        },
      },
    ] as DaySummaryItem[],
  },
  programme: {
    title: {
      fr: 'Programme',
      en: 'Schedule',
    },
    intro: {
      fr: 'Rendez-vous à 14h00 à la mairie de Neuilly-sur-Seine, puis à 17h00 au Domaine de la Geneste.',
      en: 'Please join us at 2:00 PM at Neuilly-sur-Seine town hall, then at 5:00 PM at Domaine de la Geneste.',
    },
    note: {
      fr: '',
      en: '',
    },
    timeline: [
      {
        time: '14h00',
        label: { fr: 'Mariage civil à la mairie de Neuilly-sur-Seine', en: 'Civil ceremony at Neuilly-sur-Seine town hall' },
      },
      {
        time: '17h00',
        label: { fr: 'Arrivée sur les lieux et vin d’honneur avec les mariés', en: 'Arrival at the venue and welcome drinks with the newlyweds' },
      },
      {
        time: '19h30',
        label: { fr: 'Cocktail dînatoire', en: 'Cocktail-style dinner' },
      },
      {
        time: '22h00',
        label: { fr: 'Fête, musique et danse', en: 'Party, music and dancing' },
      },
      {
        time: {
          fr: '02h00',
          en: '2:00 AM',
        },
        label: { fr: 'Derniers verres, dernière danse', en: 'Last drinks, last dance' },
      },
    ] as TimelineItem[],
  },
  venueSection: {
    title: {
      fr: 'Les lieux',
      en: 'The venues',
    },
    subtitle: {
      fr: 'De Neuilly-sur-Seine à Châteaufort',
      en: 'From Neuilly-sur-Seine to Châteaufort',
    },
    townHall: {
      title: {
        fr: 'La mairie de Neuilly-sur-Seine',
        en: 'Neuilly-sur-Seine Town Hall',
      },
      subtitle: {
        fr: 'Neuilly-sur-Seine',
        en: 'Neuilly-sur-Seine',
      },
      body: {
        fr: 'La journée débutera dans le cadre élégant et raffiné de la mairie de Neuilly-sur-Seine, où nous aurons la joie de célébrer notre mariage civil entourés de nos proches.\n\nLa cérémonie commencera à 14h, nous comptons donc sur votre ponctualité afin de partager pleinement ce moment si important à nos côtés.',
        en: 'The day will begin in the elegant setting of Neuilly-sur-Seine town hall, where we will have the joy of celebrating our civil wedding surrounded by our loved ones.\n\nThe ceremony will begin at 2:00 PM, so we are counting on your punctuality to share this important moment fully by our side.',
      },
      address: {
        fr: '96 Av. Achille Peretti, 92200 Neuilly-sur-Seine, France',
        en: '96 Av. Achille Peretti, 92200 Neuilly-sur-Seine, France',
      },
      start: {
        fr: '14h00',
        en: '2:00 PM',
      },
      mapCta: {
        fr: 'Voir la mairie sur Google Maps',
        en: 'View the town hall on Google Maps',
      },
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Mairie%20de%20Neuilly-sur-Seine',
      image: 'pics/neuilly.jpg',
      imageAlt: {
        fr: 'La mairie de Neuilly-sur-Seine',
        en: 'Neuilly-sur-Seine town hall',
      },
    },
    domain: {
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
          'À seulement trente minutes de Paris en voiture, le Domaine de la Geneste nous accueille dans un cadre privé, calme et élégant. Un lieu à part, entouré de verdure, pour célébrer ce mariage avec simplicité et caractère.',
        en:
          'Just thirty minutes from Paris by car, Domaine de la Geneste welcomes us into a private, calm, and elegant setting. A place apart, surrounded by greenery, to celebrate this wedding with simplicity and character.',
      },
      address: {
        fr: 'Chemin de la Geneste, 78117 Châteaufort, France',
        en: 'Chemin de la Geneste, 78117 Châteaufort, France',
      },
      start: {
        fr: '17h00',
        en: '5:00 PM',
      },
      mapCta: {
        fr: 'Voir le domaine sur Google Maps',
        en: 'View the estate on Google Maps',
      },
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=Chemin%20de%20la%20Geneste%2C%2078117%20Ch%C3%A2teaufort%2C%20France',
      image: 'pics/domaine.jpg',
      imageAlt: {
        fr: 'Le Domaine de la Geneste',
        en: 'Domaine de la Geneste',
      },
    },
  },
  dressCode: {
    title: {
      fr: 'Dress code',
      en: 'Dress code',
    },
    body: {
      fr:
        'Venez chic, élégant et fidèle à vous-même!',
      en:
        'Come chic, elegant, and true to yourself!',
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
      fr: 'Merci de remplir ce formulaire en quelques secondes. Un email de confirmation vous sera envoyé après validation.',
      en: 'Please fill out this form in just a few seconds. A confirmation email will be sent after submission.',
    },
    primaryCta: {
      fr: "Répondre à l'invitation",
      en: 'RSVP',
    },
    calendarCta: {
      fr: 'Ajouter au calendrier',
      en: 'Add to calendar',
    },
    googleCalendarCta: {
      fr: 'Ou ouvrir dans Google Calendar',
      en: 'Or open in Google Calendar',
    },
    form: {
      lastName: {
        fr: 'Nom',
        en: 'Last name',
      },
      firstName: {
        fr: 'Prénom',
        en: 'First name',
      },
      email: {
        fr: 'Email',
        en: 'Email',
      },
      attendance: {
        fr: 'Serez-vous présent ?',
        en: 'Will you be attending?',
      },
      attendanceOptions: {
        both: {
          fr: 'Oui, à la mairie et au domaine',
          en: 'Yes, at the town hall and the estate',
        },
        townHallOnly: {
          fr: 'Oui, à la mairie uniquement',
          en: 'Yes, at the town hall only',
        },
        domainOnly: {
          fr: 'Oui, au domaine uniquement',
          en: 'Yes, at the estate only',
        },
        none: {
          fr: 'Non, je ne pourrai malheureusement pas être présent(e)',
          en: 'No, unfortunately I will not be able to attend',
        },
      },
      placeholder: {
        fr: 'Sélectionnez une réponse',
        en: 'Select an answer',
      },
      submit: {
        fr: 'Envoyer ma réponse',
        en: 'Submit RSVP',
      },
      submitting: {
        fr: 'Envoi en cours...',
        en: 'Submitting...',
      },
      success: {
        fr: 'Merci, votre réponse a bien été enregistrée.',
        en: 'Thank you, your RSVP has been successfully recorded.',
      },
      summaryTitle: {
        fr: 'Votre réponse a bien été reçue',
        en: 'Your RSVP has been received',
      },
      summaryBadge: {
        fr: 'Réponse enregistrée',
        en: 'Response recorded',
      },
      summaryBody: {
        fr: 'Un email de confirmation vient de vous être envoyé.',
        en: 'A confirmation email has just been sent to you.',
      },
      editPrompt: {
        fr: 'Besoin de modifier votre réponse ? Vous pouvez soumettre à nouveau ce formulaire à tout moment.',
        en: 'Need to update your answer? You can submit this form again at any time.',
      },
      editCta: {
        fr: 'Modifier ma reponse',
        en: 'Update my RSVP',
      },
      error: {
        fr: "Une erreur s'est produite. Merci de réessayer dans quelques instants.",
        en: 'Something went wrong. Please try again in a moment.',
      },
      configError: {
        fr: "Le formulaire RSVP n'est pas encore configuré.",
        en: 'The RSVP form is not configured yet.',
      },
      required: {
        fr: 'Ce champ est requis.',
        en: 'This field is required.',
      },
      invalidEmail: {
        fr: 'Merci de saisir une adresse email valide.',
        en: 'Please enter a valid email address.',
      },
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
          en: 'Domaine de la Geneste is located in Châteaufort, around 30 minutes from Paris by car.',
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
          fr: 'Le mariage civil aura lieu à 14h00 à la mairie de Neuilly-sur-Seine, puis nous vous retrouverons à 17h00 au Domaine de la Geneste.',
          en: 'The civil ceremony will take place at 2:00 PM at Neuilly-sur-Seine town hall, and we will then meet again at 5:00 PM at Domaine de la Geneste.',
        },
      },
      {
        question: {
          fr: 'Y aura-t-il un dîner assis ?',
          en: 'Will there be a seated dinner?',
        },
        answer: {
          fr: 'La soirée se déroulera autour d’un cocktail dînatoire.',
          en: 'The evening will unfold around a cocktail-style dinner.',
        },
      },
      {
        question: {
          fr: 'Y a-t-il un dress code ?',
          en: 'Is there a dress code?',
        },
        answer: {
          fr: 'Une tenue chic et élégante sera parfaite.',
          en: 'Chic and elegant will be perfect.',
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
      en: 'Wedding celebration at Domaine de la Geneste. Welcome drinks, cocktail-style dinner, music and dancing.',
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
