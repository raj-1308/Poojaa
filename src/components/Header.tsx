import { useEffect, useRef, useState } from 'react';
import { localize, useLanguage } from '../LanguageContext';
import { imageDimensions, images, navItems } from '../data/siteData';

type HeaderProps = {
  currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!mobileOpen) return;

    menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#/" aria-label="मुख पृष्ठ">
          <img
            src={images.emblem}
            alt="Sur Sadhna Ensemble का प्रतीक चिह्न"
            width={imageDimensions.emblem.width}
            height={imageDimensions.emblem.height}
          />
          <span>{localize(language, 'आचार्य पंडित श्री जयनारायण पांडेय', 'Acharya Pandit Shri Jaynarayan Pandey')}</span>
        </a>

        <nav className="desktop-nav" aria-label={localize(language, 'मुख्य नेविगेशन', 'Main navigation')}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={currentPath === item.href ? 'active' : ''}
            >
              {localize(language, item.label, item.labelEn)}
            </a>
          ))}
        </nav>

        <a className="button header-cta" href="#/ayojan">
          {localize(language, 'आयोजन अनुरोध', 'Request an event')}
        </a>

        <button
          type="button"
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={localize(language, 'Switch to English', 'हिंदी में बदलें')}
          title={localize(language, 'Switch to English', 'हिंदी में बदलें')}
        >
          {language === 'hi' ? 'EN' : 'हि'}
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className="burger"
          aria-label={
            mobileOpen
              ? localize(language, 'मेनू बंद करें', 'Close menu')
              : localize(language, 'मेनू खोलें', 'Open menu')
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((state) => !state)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        aria-label="मोबाइल मेनू"
        aria-hidden={!mobileOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={`#${item.href}`} className={currentPath === item.href ? 'active' : ''}>
            {localize(language, item.label, item.labelEn)}
          </a>
        ))}
        <a className="button full" href="#/ayojan">
          {localize(language, 'आयोजन अनुरोध', 'Request an event')}
        </a>
      </nav>
    </header>
  );
}
