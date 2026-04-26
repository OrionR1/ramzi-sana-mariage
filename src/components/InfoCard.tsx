type InfoCardProps = {
  title: string;
  body: string;
};

export function InfoCard({ title, body }: InfoCardProps) {
  return (
    <article className="info-card reveal">
      <p className="info-card-title">{title}</p>
      <p>{body}</p>
    </article>
  );
}
