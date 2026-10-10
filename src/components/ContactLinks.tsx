import { useLanguage } from '../LanguageContext';
import { contact } from '../data/siteData';

type ContactLinkGroup = 'contact' | 'social';
type ContactLink = {
  name: string;
  nameHi: string;
  detail: string;
  detailHi: string;
  href: string;
  icon: 'phone' | 'whatsapp' | 'email' | 'google' | 'youtube' | 'instagram' | 'facebook';
  group: ContactLinkGroup;
};

const links: ContactLink[] = [
  {
    name: 'Call Acharya Ji',
    nameHi: 'आचार्य जी को कॉल करें',
    detail: contact.phone,
    detailHi: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    icon: 'phone',
    group: 'contact',
  },
  {
    name: 'WhatsApp',
    nameHi: 'WhatsApp',
    detail: 'Message Acharya Ji',
    detailHi: 'आचार्य जी को संदेश भेजें',
    href: `https://wa.me/${contact.whatsapp}`,
    icon: 'whatsapp',
    group: 'contact',
  },
  {
    name: 'Email',
    nameHi: 'ईमेल',
    detail: contact.email,
    detailHi: contact.email,
    href: `mailto:${contact.email}`,
    icon: 'email',
    group: 'contact',
  },
  {
    name: 'Google',
    nameHi: 'Google',
    detail: 'View Google profile',
    detailHi: 'Google प्रोफ़ाइल देखें',
    href: contact.mapUrl,
    icon: 'google',
    group: 'contact',
  },
  {
    name: 'YouTube',
    nameHi: 'YouTube',
    detail: 'Watch videos',
    detailHi: 'वीडियो देखें',
    href: contact.social.youtube,
    icon: 'youtube',
    group: 'social',
  },
  {
    name: 'Instagram',
    nameHi: 'Instagram',
    detail: '@jai_pandey_80',
    detailHi: '@jai_pandey_80',
    href: contact.social.instagram,
    icon: 'instagram',
    group: 'social',
  },
  {
    name: 'Facebook',
    nameHi: 'Facebook',
    detail: 'View Facebook profile',
    detailHi: 'Facebook प्रोफ़ाइल देखें',
    href: contact.social.facebook,
    icon: 'facebook',
    group: 'social',
  },
];

function PlatformIcon({ name }: { name: ContactLink['icon'] }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="icon-fill" cx="17.5" cy="6.8" r="1" />
      </svg>
    );
  }
  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path className="icon-fill" d="m10 8.5 6 3.5-6 3.5z" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="icon-fill"
          d="M13.5 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z"
        />
      </svg>
    );
  }
  if (name === 'google') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    );
  }
  if (name === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" />
        <path d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .5.4l.7 1.6c.1.3 0 .5-.2.7l-.5.6c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.3.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.2.4.3.4.6 0 .3-.2 1-.7 1.4-.5.4-1.1.6-1.7.5-1-.1-2.4-.8-3.7-1.9-1.1-1-2-2.3-2.2-3.3-.2-1 .2-1.9.6-2.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h3l2 5-2 1.5a14 14 0 0 0 4.5 4.5L16 12l5 2v3c0 1.1-.9 2-2 2A16 16 0 0 1 5 5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export default function ContactLinks({
  group,
  compact = false,
}: {
  group: ContactLinkGroup;
  compact?: boolean;
}) {
  const { language } = useLanguage();
  const groupLinks = links.filter((link) => link.group === group);

  return (
    <ul className={`contact-link-list${compact ? ' contact-link-list-compact' : ''}`}>
      {groupLinks.map((link) => {
        const external = link.href.startsWith('https://');
        return (
          <li key={link.name}>
            <a
              className={`contact-link contact-link-${link.icon}`}
              href={link.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <span className="platform-icon">
                <PlatformIcon name={link.icon} />
              </span>
              <span className="contact-link-copy">
                <strong>{language === 'hi' ? link.nameHi : link.name}</strong>
                <span>{language === 'hi' ? link.detailHi : link.detail}</span>
              </span>
              {external && <span className="external-link-mark" aria-hidden="true">↗</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
