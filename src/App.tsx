import { useEffect, useMemo, useState } from 'react';
import { Countdown } from './components/Countdown';
import { FAQItem } from './components/FAQItem';
import { InfoCard } from './components/InfoCard';
import { LanguageSwitch } from './components/LanguageSwitch';
import { SectionTitle } from './components/SectionTitle';
import { Timeline } from './components/Timeline';
import { sectionIds, weddingContent, type DaySummaryItem, type Language } from './data/weddingContent';

type AttendanceValue = 'both' | 'townHallOnly' | 'domainOnly' | 'none';
type RsvpStatus = 'idle' | 'submitting' | 'success' | 'error';
type RsvpSummary = {
  lastName: string;
  firstName: string;
  email: string;
  attendance: AttendanceValue;
};

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
PRODID:-//Sana and Ramzi//Wedding Invitation//EN
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [rsvpForm, setRsvpForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    attendance: '',
    website: '',
  });
  const [rsvpStatus, setRsvpStatus] = useState<RsvpStatus>('idle');
  const [rsvpFeedback, setRsvpFeedback] = useState('');
  const [rsvpSummary, setRsvpSummary] = useState<RsvpSummary | null>(null);
  const [isRsvpFormVisible, setIsRsvpFormVisible] = useState(true);

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
  const introBody = t(weddingContent.intro.body);
  const heroLocation = t(weddingContent.hero.location);
  const heroAccess = t(weddingContent.hero.access);
  const heroTitle = t(weddingContent.hero.title);
  const heroSignature = t(weddingContent.hero.signature);
  const invitationLead = t(weddingContent.invitation.lead);
  const rsvpBody = t(weddingContent.rsvp.body)
    .replace('[date limite]', rsvpDeadline)
    .replace('[deadline]', rsvpDeadline);
  const rsvpEndpointConfigured =
    weddingContent.rsvpEndpoint.trim() !== '' && !weddingContent.rsvpEndpoint.includes('[REMPLACER_PAR_URL_APPS_SCRIPT]');
  const attendanceOptions: AttendanceValue[] = ['both', 'townHallOnly', 'domainOnly', 'none'];

  const scrollToProgramme = () => {
    document.getElementById(sectionIds.programme)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRsvp = () => {
    document.getElementById(sectionIds.rsvp)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRsvpFieldChange = (field: 'lastName' | 'firstName' | 'email' | 'attendance' | 'website', value: string) => {
    setRsvpForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleRsvpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!rsvpEndpointConfigured) {
      setRsvpStatus('error');
      setRsvpFeedback(t(weddingContent.rsvp.form.configError));
      return;
    }

    if (rsvpForm.website.trim() !== '') {
      setRsvpStatus('success');
      setRsvpFeedback(t(weddingContent.rsvp.form.success));
      return;
    }

    if (!rsvpForm.lastName.trim() || !rsvpForm.firstName.trim() || !rsvpForm.email.trim() || !rsvpForm.attendance) {
      setRsvpStatus('error');
      setRsvpFeedback(t(weddingContent.rsvp.form.required));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(rsvpForm.email.trim())) {
      setRsvpStatus('error');
      setRsvpFeedback(t(weddingContent.rsvp.form.invalidEmail));
      return;
    }

    setRsvpStatus('submitting');
    setRsvpFeedback('');

    const attendanceValue = rsvpForm.attendance as AttendanceValue;
    const payload = new URLSearchParams({
      language,
      lastName: rsvpForm.lastName.trim(),
      firstName: rsvpForm.firstName.trim(),
      email: rsvpForm.email.trim(),
      attendance: attendanceValue,
      attendanceLabel: t(weddingContent.rsvp.form.attendanceOptions[attendanceValue]),
      source: 'website',
    });

    try {
      await fetch(weddingContent.rsvpEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      setRsvpStatus('success');
      setRsvpFeedback(t(weddingContent.rsvp.form.success));
      setRsvpSummary({
        lastName: rsvpForm.lastName.trim(),
        firstName: rsvpForm.firstName.trim(),
        email: rsvpForm.email.trim(),
        attendance: attendanceValue,
      });
      setIsRsvpFormVisible(false);
      setRsvpForm({
        lastName: '',
        firstName: '',
        email: '',
        attendance: '',
        website: '',
      });
    } catch (error) {
      console.error(error);
      setRsvpStatus('error');
      setRsvpFeedback(t(weddingContent.rsvp.form.error));
    }
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
        <div className="gate-panel-edge gate-panel-edge-left" aria-hidden="true" />
        <div className="gate-panel-edge gate-panel-edge-right" aria-hidden="true" />
        <div className="gate-glow" />
        <div className="gate-stage">
          <div className="gate-orbit gate-orbit-one" aria-hidden="true" />
          <div className="gate-orbit gate-orbit-two" aria-hidden="true" />
          <div className="gate-marquee" aria-hidden="true" />
          <div className="gate-card">
            <div className="gate-polaroid-stack" aria-label={weddingContent.couple}>
              <div className="gate-polaroid gate-polaroid-back gate-polaroid-back-left" aria-hidden="true" />
              <div className="gate-polaroid gate-polaroid-back gate-polaroid-back-right" aria-hidden="true" />
              <figure className="gate-polaroid gate-polaroid-front">
                <div className="gate-photo-frame">
                  <img src={assetUrl(weddingContent.images.intro)} alt={weddingContent.couple} />
                </div>
                <figcaption className="gate-polaroid-caption">
                  <span className="gate-signature">{weddingContent.couple}</span>
                  <span className="gate-date-script">{t(weddingContent.intro.title)}</span>
                </figcaption>
              </figure>
            </div>
            {introBody ? (
              <div className="gate-copy">
                <p className="gate-body">{introBody}</p>
              </div>
            ) : null}
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
                <div className="hero-layout">
                  <div className="hero-copy-column">
                    <p className="hero-eyebrow reveal">{t(weddingContent.hero.eyebrow)}</p>
                    <h1 className="reveal hero-couple" aria-label={weddingContent.couple}>
                      <span>{weddingContent.names.first}</span>
                      <span className="hero-ampersand">&amp;</span>
                      <span>{weddingContent.names.second}</span>
                    </h1>
                    {heroLocation || heroAccess ? (
                      <p className="hero-meta reveal">
                        {heroLocation ? <span>{heroLocation}</span> : null}
                        {heroAccess ? <span>{heroAccess}</span> : null}
                      </p>
                    ) : null}
                    {heroTitle ? <p className="hero-title reveal">{heroTitle}</p> : null}
                    {heroSignature ? <p className="hero-signature reveal">{heroSignature}</p> : null}
                    <div className="hero-actions reveal">
                      <button type="button" className="button button-primary" onClick={scrollToRsvp}>
                        {t(weddingContent.hero.primaryCta)}
                      </button>
                      <button type="button" className="button button-secondary" onClick={scrollToProgramme}>
                        {t(weddingContent.hero.secondaryCta)}
                      </button>
                    </div>
                  </div>
                  <div className="hero-visual-column">
                    <div className="hero-visual reveal">
                      <img
                        src={assetUrl(weddingContent.images.hero)}
                        alt={language === 'fr' ? 'Sana et Ramzi' : 'Sana and Ramzi'}
                      />
                    </div>
                  </div>
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
                {invitationLead ? <p className="lead-text">{invitationLead}</p> : null}
                <p className="invitation-body">{t(weddingContent.invitation.body)}</p>
              </div>
              <div className="day-glance-grid">
                {weddingContent.dayAtGlance.items.map((item: DaySummaryItem) => (
                  <article className="day-glance-card reveal" key={item.title.en}>
                    <p className="day-glance-time">{item.time[language]}</p>
                    <h3>{item.title[language]}</h3>
                    <p>{item.body[language]}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" id={sectionIds.programme}>
              <SectionTitle title={t(weddingContent.programme.title)} />
              <p className="section-note reveal">{t(weddingContent.programme.intro)}</p>
              <Timeline items={weddingContent.programme.timeline} language={language} />
              <p className="section-note reveal">{t(weddingContent.programme.note)}</p>
            </section>

            <section className="section venue-section" id={sectionIds.venue}>
              <SectionTitle
                eyebrow={t(weddingContent.ui.venueEyebrow)}
                title={t(weddingContent.venueSection.title)}
                subtitle={t(weddingContent.venueSection.subtitle)}
              />
              <div className="venue-grid venue-grid-spaced">
                <div className="prose-panel reveal">
                  <p className="detail-label">{t(weddingContent.venueSection.townHall.subtitle)}</p>
                  <h3 className="venue-block-title">{t(weddingContent.venueSection.townHall.title)}</h3>
                  <p>{t(weddingContent.venueSection.townHall.body)}</p>
                  <div className="detail-stack">
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.addressLabel)}</span>
                      <p>{t(weddingContent.venueSection.townHall.address)}</p>
                    </div>
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.startLabel)}</span>
                      <p>{t(weddingContent.venueSection.townHall.start)}</p>
                    </div>
                  </div>
                  <a className="button button-primary" href={weddingContent.venueSection.townHall.mapsLink} target="_blank" rel="noreferrer">
                    {t(weddingContent.venueSection.townHall.mapCta)}
                  </a>
                </div>
                <figure className="image-placeholder reveal" aria-label={t(weddingContent.venueSection.townHall.imageAlt)}>
                  <div className="image-frame image-frame-photo">
                    <img
                      src={assetUrl(weddingContent.venueSection.townHall.image)}
                      alt={t(weddingContent.venueSection.townHall.imageAlt)}
                    />
                  </div>
                </figure>
              </div>
              <div className="venue-grid">
                <div className="prose-panel reveal">
                  <p className="detail-label">{t(weddingContent.venueSection.domain.subtitle)}</p>
                  <h3 className="venue-block-title">{t(weddingContent.venueSection.domain.title)}</h3>
                  <p>{t(weddingContent.venueSection.domain.body)}</p>
                  <div className="detail-stack">
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.addressLabel)}</span>
                      <p>{t(weddingContent.venueSection.domain.address)}</p>
                    </div>
                    <div>
                      <span className="detail-label">{t(weddingContent.ui.startLabel)}</span>
                      <p>{t(weddingContent.venueSection.domain.start)}</p>
                    </div>
                  </div>
                  <a className="button button-primary" href={weddingContent.venueSection.domain.mapsLink} target="_blank" rel="noreferrer">
                    {t(weddingContent.venueSection.domain.mapCta)}
                  </a>
                </div>
                <figure className="image-placeholder reveal" aria-label={t(weddingContent.venueSection.domain.imageAlt)}>
                  <div className="image-frame image-frame-photo">
                    <img
                      src={assetUrl(weddingContent.venueSection.domain.image)}
                      alt={t(weddingContent.venueSection.domain.imageAlt)}
                    />
                  </div>
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
                <p>{rsvpBody}</p>
                {rsvpStatus === 'success' && rsvpSummary ? (
                  <div className="rsvp-success-card is-confirmed">
                    <div className="rsvp-success-header">
                      <p className="detail-label">{t(weddingContent.rsvp.form.summaryTitle)}</p>
                      <span className="rsvp-status-pill">{t(weddingContent.rsvp.form.summaryBadge)}</span>
                    </div>
                    <h3>
                      {rsvpSummary.firstName} {rsvpSummary.lastName}
                    </h3>
                    <p>{t(weddingContent.rsvp.form.summaryBody)}</p>
                    <div className="rsvp-success-meta">
                      <div>
                        <span className="detail-label">{t(weddingContent.rsvp.form.email)}</span>
                        <p>{rsvpSummary.email}</p>
                      </div>
                      <div>
                        <span className="detail-label">{t(weddingContent.rsvp.form.attendance)}</span>
                        <p>{t(weddingContent.rsvp.form.attendanceOptions[rsvpSummary.attendance])}</p>
                      </div>
                    </div>
                    <p className="rsvp-help">{t(weddingContent.rsvp.form.editPrompt)}</p>
                    <div className="hero-actions">
                      <button className="button button-secondary" type="button" onClick={() => setIsRsvpFormVisible(true)}>
                        {t(weddingContent.rsvp.form.editCta)}
                      </button>
                      <a
                        className="button button-secondary"
                        href={calendarLinks.icsHref}
                        download="ramzi-sana-wedding.ics"
                      >
                        {t(weddingContent.rsvp.calendarCta)}
                      </a>
                    </div>
                  </div>
                ) : null}
                {isRsvpFormVisible ? (
                  <>
                    <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
                      <div className="rsvp-form-grid">
                        <label className="rsvp-field">
                          <span>{t(weddingContent.rsvp.form.lastName)}</span>
                          <input
                            type="text"
                            name="lastName"
                            autoComplete="family-name"
                            value={rsvpForm.lastName}
                            onChange={(event) => handleRsvpFieldChange('lastName', event.target.value)}
                            required
                          />
                        </label>
                        <label className="rsvp-field">
                          <span>{t(weddingContent.rsvp.form.firstName)}</span>
                          <input
                            type="text"
                            name="firstName"
                            autoComplete="given-name"
                            value={rsvpForm.firstName}
                            onChange={(event) => handleRsvpFieldChange('firstName', event.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <label className="rsvp-field">
                        <span>{t(weddingContent.rsvp.form.email)}</span>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={rsvpForm.email}
                          onChange={(event) => handleRsvpFieldChange('email', event.target.value)}
                          required
                        />
                      </label>
                      <label className="rsvp-field">
                        <span>{t(weddingContent.rsvp.form.attendance)}</span>
                        <select
                          name="attendance"
                          value={rsvpForm.attendance}
                          onChange={(event) => handleRsvpFieldChange('attendance', event.target.value)}
                          required
                        >
                          <option value="">{t(weddingContent.rsvp.form.placeholder)}</option>
                          {attendanceOptions.map((option) => (
                            <option key={option} value={option}>
                              {t(weddingContent.rsvp.form.attendanceOptions[option])}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="rsvp-honeypot" aria-hidden="true" tabIndex={-1}>
                        <span>Website</span>
                        <input
                          type="text"
                          name="website"
                          autoComplete="off"
                          value={rsvpForm.website}
                          onChange={(event) => handleRsvpFieldChange('website', event.target.value)}
                          tabIndex={-1}
                        />
                      </label>
                      <div className="hero-actions">
                        <button className="button button-primary" type="submit" disabled={rsvpStatus === 'submitting'}>
                          {rsvpStatus === 'submitting' ? t(weddingContent.rsvp.form.submitting) : t(weddingContent.rsvp.form.submit)}
                        </button>
                        <a
                          className="button button-secondary"
                          href={calendarLinks.icsHref}
                          download="ramzi-sana-wedding.ics"
                        >
                          {t(weddingContent.rsvp.calendarCta)}
                        </a>
                      </div>
                    </form>
                    <p className="rsvp-help">{t(weddingContent.rsvp.help)}</p>
                  </>
                ) : null}
                {rsvpFeedback && rsvpStatus === 'error' ? (
                  <p className="rsvp-feedback is-error">{rsvpFeedback}</p>
                ) : null}
                {weddingContent.rsvpEmail !== '[REMPLACER_PAR_EMAIL]' ? (
                  <p className="rsvp-help">
                    <a href={`mailto:${weddingContent.rsvpEmail}`}>{weddingContent.rsvpEmail}</a>
                  </p>
                ) : null}
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
              <div className="faq-list reveal">
                {weddingContent.faq.items.map((item, index) => (
                  <FAQItem
                    key={item.question.en}
                    id={`faq-item-${index}`}
                    question={item.question[language]}
                    answer={item.answer[language]}
                    open={openFaqIndex === index}
                    onToggle={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                  />
                ))}
              </div>
            </section>

          </main>

          <button type="button" className="floating-rsvp" onClick={scrollToRsvp}>
            {t(weddingContent.ui.floatingRsvp)}
          </button>

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
