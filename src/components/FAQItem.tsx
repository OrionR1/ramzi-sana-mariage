type FAQItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export function FAQItem({ id, question, answer, open, onToggle }: FAQItemProps) {
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{question}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" id={id} hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
