import type { Language, TimelineItem } from '../data/weddingContent';

type TimelineProps = {
  items: TimelineItem[];
  language: Language;
};

export function Timeline({ items, language }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item reveal" key={`${item.time}-${index}`}>
          <div className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <p className="timeline-time">
              {typeof item.time === 'string' ? item.time : item.time[language]}
            </p>
            <h3>{item.label[language]}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
