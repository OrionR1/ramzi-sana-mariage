import { useEffect, useState } from 'react';
import type { Language } from '../data/weddingContent';

type CountdownProps = {
  targetDate: string;
  language: Language;
  labels: {
    days: Record<Language, string>;
    hours: Record<Language, string>;
    minutes: Record<Language, string>;
    seconds: Record<Language, string>;
  };
  completed: Record<Language, string>;
};

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({
  targetDate,
  language,
  labels,
  completed,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <p className="countdown-complete">{completed[language]}</p>;
  }

  const units = [
    { value: timeLeft.days, label: labels.days[language] },
    { value: timeLeft.hours, label: labels.hours[language] },
    { value: timeLeft.minutes, label: labels.minutes[language] },
    { value: timeLeft.seconds, label: labels.seconds[language] },
  ];

  return (
    <div className="countdown-grid" role="timer" aria-live="polite">
      {units.map((unit) => (
        <div className="countdown-card" key={unit.label}>
          <span>{String(unit.value).padStart(2, '0')}</span>
          <small>{unit.label}</small>
        </div>
      ))}
    </div>
  );
}
