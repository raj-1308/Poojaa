import { localize, useLanguage } from '../LanguageContext';
import { contact, imageDimensions, images, navItems } from '../data/siteData';
import ContactLinks from './ContactLinks';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand footer-brand">
            <img
              src={images.emblem}
              alt={localize(language, 'Sur Sadhna Ensemble का प्रतीक चिह्न', 'Sur Sadhna Ensemble emblem')}
              width={imageDimensions.emblem.width}
              height={imageDimensions.emblem.height}
              loading="lazy"
              decoding="async"
            />
            <span>Sur Sadhna Ensemble</span>
          </div>
          <p>
            {localize(
              language,
              'वैदिक कर्मकांड, कथा वाचन एवं भजन गायन के माध्यम से आस्था, सौहार्द और मंगल भाव का प्रसार।',
              'Sharing faith, harmony, and auspiciousness through Vedic rituals, Katha, and Bhajan.',
            )}
          </p>
        </div>

        <div>
          <h3>{localize(language, 'क्विक लिंक', 'Quick links')}</h3>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={`#${item.href}`}>{localize(language, item.label, item.labelEn)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{localize(language, 'संपर्क', 'Contact')}</h3>
          <p>{localize(language, contact.location, 'India')}</p>
          <ContactLinks group="contact" compact />
        </div>

        <div>
          <h3>{localize(language, 'सोशल मीडिया', 'Follow')}</h3>
          <ContactLinks group="social" compact />
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Sur Sadhna Ensemble</span>
        <span>{localize(language, 'आस्था • परंपरा • सेवा', 'Faith • Tradition • Service')}</span>
      </div>
    </footer>
  );
}
