import type { Language } from '../data/weddingContent';

type LanguageSwitchProps = {
  language: Language;
  onChange: (language: Language) => void;
  label?: string;
};

export function LanguageSwitch({ language, onChange, label = 'Language' }: LanguageSwitchProps) {
  return (
    <div className="language-switch" aria-label="Language switch">
      <span className="language-label">{label}</span>
      <button
        type="button"
        className={language === 'fr' ? 'is-active' : ''}
        onClick={() => onChange('fr')}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
      <button
        type="button"
        className={language === 'en' ? 'is-active' : ''}
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
