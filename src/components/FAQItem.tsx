import { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item reveal ${open ? 'is-open' : ''}`}>
      <button type="button" className="faq-question" onClick={() => setOpen((value) => !value)}>
        <span>{question}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
