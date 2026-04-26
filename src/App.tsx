import { useEffect, useMemo, useState } from 'react';
import { Countdown } from './components/Countdown';
import { FAQItem } from './components/FAQItem';
import { InfoCard } from './components/InfoCard';
import { LanguageSwitch } from './components/LanguageSwitch';
import { SectionTitle } from './components/SectionTitle';
import { Timeline } from './components/Timeline';
import { sectionIds, weddingContent, type Language } from './data/weddingContent';

function formatGoogleCalendarDate(isoDate: string) {
  return new Date(isoDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function buildCalendarLinks() {
  const start = weddingContent.date.iso;
  const end = weddingContent.calendar.endIso;
  const title = weddingContent.calendar.title;
  const details = weddingContent.calendar.details.en;
  const location = weddingContent.address;
  const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatGoogleCalendarDate(
    start,
  )}/${formatGoogleCalendarDate(end)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ramzi and Sana//Wedding Invitation//EN
BEGIN:VEVENT
UID:ramzi-sana-wedding-20260912@example.com
DTSTAMP:${formatGoogleCalendarDate(new Date().toISOString())}
DTSTART:${formatGoogleCalendarDate(start)}
DTEND:${formatGoogleCalendarDate(end)}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  return {
    googleLink,
    icsHref: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`,
  };
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('wedding-language');
    return saved === 'en' ? 'en' : 'fr';
  });
  const [introPhase, setIntroPhase] = useState<'closed' | 'opening' | 'open'>('closed');

  const calendarLinks = useMemo(() => buildCalendarLinks(), []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('wedding-language', language);
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = introPhase === 'open' ? '' : 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [introPhase]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 },
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [introPhase]);

  const t = (value: Record<Language, string>) => value[language];
  const rsvpDeadline = weddingContent.rsvpDeadline[language];

  const scrollToProgramme = () => {
    document.getElementById(sectionIds.programme)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openInvitation = () => {
    if (introPhase !== 'closed') {
      return;
    }

    setIntroPhase('opening');
    window.setTimeout(() => {
      setIntroPhase('open');
    }, 1600);
  };

  const isInvitationOpen = introPhase === 'open';
  const isIntroOpening = introPhase === 'opening';
  const isSiteVisible = introPhase === 'open';

  return (
    <div className={`app-shell ${isInvitationOpen ? 'invitation-open' : ''}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div
        className={`invitation-gate ${isIntroOpening ? 'is-opening' : ''} ${isInvitationOpen ? 'is-open' : ''}`}
        aria-hidden={isInvitationOpen}
      >
        <div className="gate-panel gate-panel-left" aria-hidden="true" />
        <div className="gate-panel gate-panel-right" aria-hidden="true" />
        <div className="gate-glow" />
        <div className="envelope-shell">
          <div className="envelope-top" />
          <div className="envelope-card">
            <p className="gate-overline">{t(weddingContent.intro.overline)}</p>
            <h2 className="gate-couple" aria-label={weddingContent.couple}>
              <span>{weddingContent.names.first}</span>
              <span className="gate-ampersand">&amp;</span>
              <span>{weddingContent.names.second}</span>
            </h2>
            <p className="gate-title">{t(weddingContent.intro.title)}</p>
            <p className="gate-body">{t(weddingContent.intro.body)}</p>
            <div className="gate-language">
              <LanguageSwitch
                language={language}
                onChange={setLanguage}
                label={t(weddingContent.ui.languageLabel)}
              />
            </div>
            <button type="button" className="gate-seal-button" onClick={openInvitation}>
              <span className="gate-seal-core">
                <strong>{t(weddingContent.intro.cta)}</strong>
                <small>{weddingContent.date.display[language]}</small>
              </span>
            </button>
            <p className="gate-hint">{t(weddingContent.intro.hint)}</p>
          </div>
        </div>
      </div>

      <div className={`site-shell ${isSiteVisible ? 'is-visible' : ''}`}>
        {isSiteVisible ? (
          <>
          <header className="topbar">
            <a className="brand" href="#home">
              {weddingContent.couple}
            </a>
            <nav className="topnav" aria-label="Section navigation">
              <a href={`#${sectionIds.programme}`}>{t(weddingContent.navigation.details)}</a>
              <a href={`#${sectionIds.venue}`}>{t(weddingContent.navigation.venue)}</a>
              <a href={`#${sectionIds.practical}`}>{t(weddingContent.navigation.practical)}</a>
              <a href={`#${sectionIds.faq}`}>{t(weddingContent.navigation.faq)}</a>
              <a href={`#${sectionIds.rsvp}`}>{t(weddingContent.navigation.rsvp)}</a>
            </nav>
            <LanguageSwitch
              language={language}
              onChange={setLanguage}
              label={t(weddingContent.ui.languageLabel)}
            />
          </header>

          <main id="home">
            <section className="hero section">
              <div className="hero-card">
                <div className="hero-visual reveal">
                  <img
                    src={assetUrl(weddingContent.images.hero)}
                    alt={language === 'fr' ? 'Ramzi et Sana' : 'Ramzi and Sana'}
                  />
                </div>
                <p className="hero-eyebrow reveal">{t(weddingContent.hero.eyebrow)}</p>
                <h1 className="reveal hero-couple" aria-label={weddingContent.couple}>
                  <span>{weddingContent.names.first}</span>
                  <span className="hero-ampersand">&amp;</span>
                  <span>{weddingContent.names.second}</span>
                </h1>
                <p className="hero-meta reveal">
                  <span>{weddingContent.date.display[language]}</span>
                  <span>{weddingContent.hero.location[language]}</span>
                  <span>{weddingContent.hero.access[language]}</span>
                </p>
                <p className="hero-title reveal">{t(weddingContent.hero.title)}</p>
                <p className="hero-signature reveal">{t(weddingContent.hero.signature)}</p>
                <div className="hero-actions reveal">
                  <a className="button button-primary" href={weddingContent.rsvpLink} target="_blank" rel="noreferrer">
                    {t(weddingContent.hero.primaryCta)}
                  </a>
                  <button type="button" className="button button-secondary" onClick={scrollToProgramme}>
                    {t(weddingContent.hero.secondaryCta)}
                  </button>
                </div>
              </div>
            </section>

            <section className="section countdown-section">
              <SectionTitle title={t(weddingContent.countdown.title)} />
              <Countdown
                targetDate={weddingContent.date.iso}
                language={language}
                labels={weddingContent.countdown.labels}
                completed={weddingContent.countdown.completed}
              />
            </section>

            <section className="section invitation-section">
              <SectionTitle title={t(weddingContent.invitation.title)} />
              <div className="prose-panel reveal">
                <p className="lead-text">{t(weddingContent.invitation.lead)}</p>
                <p>{t(weddingContent.invitation.body)}</p>
              </div>
            </section>

            <section className="section" id={sectionIds.programme}>
              <SectionTitle title={t(weddingContent.programme.title)} />
              <Timeline items={weddingContent.programme.timeline} language={language} />
              <p className="section-note reveal">{t(weddingContent.programme.note)}</p>
            </section>

            <section className="section venue-section" id={sectionIds.venue}>
              <SectionTitle
                eyebrow={t(weddingContent.ui.venueEyebrow)}
                title={t(weddingContent.venueSection.title)}
                subtitle={t(weddingContent.venueSection.subtitle)}
              />
              <div className="venue-grid">
                <div className="prose-panel reveal">
                  <p>{t(weddingContent.venueSection.body)}</p>
                  <div className="detail-stack">
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.addressLabel)}</span>
                      <p>{weddingContent.address}</p>
                    </div>
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.startLabel)}</span>
                      <p>{weddingContent.scheduleStartTime[language]}</p>
                    </div>
                  </div>
                  <a className="button button-primary" href={weddingContent.mapsLink} target="_blank" rel="noreferrer">
                    {t(weddingContent.venueSection.mapCta)}
                  </a>
                </div>
                <figure className="image-placeholder reveal" aria-label={t(weddingContent.venueSection.imageCaption)}>
                  <div className="image-frame image-frame-photo">
                    <img
                      src={assetUrl(weddingContent.images.venue)}
                      alt={language === 'fr' ? 'Le Domaine de la Geneste' : 'Domaine de la Geneste'}
                    />
                  </div>
                  <figcaption>{t(weddingContent.venueSection.imageCaption)}</figcaption>
                </figure>
              </div>
            </section>

            <section className="section dress-code-section">
              <SectionTitle title={t(weddingContent.dressCode.title)} />
              <div className="prose-panel reveal">
                <p>{t(weddingContent.dressCode.body)}</p>
              </div>
            </section>

            <section className="section rsvp-section" id={sectionIds.rsvp}>
              <SectionTitle title={t(weddingContent.rsvp.title)} />
              <div className="rsvp-panel reveal">
                <p>
                  {language === 'fr'
                    ? `Merci de nous répondre avant le ${rsvpDeadline}.`
                    : `Please reply before ${rsvpDeadline}.`}
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href={weddingContent.rsvpLink} target="_blank" rel="noreferrer">
                    {t(weddingContent.rsvp.primaryCta)}
                  </a>
                  <a
                    className="button button-secondary"
                    href={calendarLinks.icsHref}
                    download="ramzi-sana-wedding.ics"
                  >
                    {t(weddingContent.rsvp.calendarCta)}
                  </a>
                </div>
                <p className="rsvp-help">
                  {t(weddingContent.rsvp.help)}{' '}
                  <a href={`mailto:${weddingContent.rsvpEmail}`}>{weddingContent.rsvpEmail}</a>
                </p>
                <a className="text-link" href={calendarLinks.googleLink} target="_blank" rel="noreferrer">
                  {t(weddingContent.rsvp.googleCalendarCta)}
                </a>
              </div>
            </section>

            <section className="section practical-section" id={sectionIds.practical}>
              <SectionTitle title={t(weddingContent.practicalInfo.title)} />
              <div className="info-grid">
                {weddingContent.practicalInfo.cards.map((card) => (
                  <InfoCard key={card.title.en} title={card.title[language]} body={card.body[language]} />
                ))}
              </div>
            </section>

            <section className="section faq-section" id={sectionIds.faq}>
              <SectionTitle title={t(weddingContent.faq.title)} />
              <div className="faq-list">
                {weddingContent.faq.items.map((item) => (
                  <FAQItem key={item.question.en} question={item.question[language]} answer={item.answer[language]} />
                ))}
              </div>
            </section>

            <section className="section gallery-section">
              <SectionTitle title={t(weddingContent.gallery.title)} subtitle={t(weddingContent.gallery.intro)} />
              <div className="gallery-grid">
                {weddingContent.gallery.items.map((item, index) => (
                  <figure className="gallery-card reveal" key={item.title.en}>
                    <div className="gallery-placeholder gallery-photo">
                      <img src={assetUrl(item.image)} alt={item.alt[language]} />
                    </div>
                    <figcaption>
                      <strong>{item.title[language]}</strong>
                      <p>{item.caption[language]}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </main>

          <a className="floating-rsvp" href={weddingContent.rsvpLink} target="_blank" rel="noreferrer">
            {t(weddingContent.ui.floatingRsvp)}
          </a>

          <footer className="footer">
            <p>{weddingContent.footer.signature}</p>
            <p>{t(weddingContent.footer.line)}</p>
          </footer>
          </>
        ) : null}
      </div>
    </div>
  );
}
