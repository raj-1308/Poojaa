type Props = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, align = 'left' }: Props) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      <div className="ornament" aria-hidden="true" />
    </div>
  );
}
