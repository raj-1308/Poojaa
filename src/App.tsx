import { useEffect, useMemo, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactLinks from './components/ContactLinks';
import SectionHeading from './components/SectionHeading';
import { LanguageProvider, localize, useLanguage, type Language } from './LanguageContext';
import type { ImageKey } from './data/imageAssets';
import {
  contact,
  faqHighlights,
  galleryImages,
  imageDimensions,
  imageSrcSets,
  images,
  materials,
  materialsEn,
  name,
  processSteps,
  services,
} from './data/siteData';

const parseHashPath = () => {
  const raw = window.location.hash.replace(/^#/, '').split('?')[0] || '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
};

function useCurrentPath() {
  const [path, setPath] = useState<string>(() => parseHashPath());

  useEffect(() => {
    const onHashChange = () => setPath(parseHashPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return path;
}

function AcharyaPhotoSlideshow({ language }: { language: Language }) {
  const label = localize(
    language,
    'आचार्य जी के हारमोनियम के साथ भजन गाते हुए ',
    'photos of Acharya Ji singing Bhajans with a harmonium',
  );

  return (
    <div className="acharya-photo-carousel" role="img" aria-label={label}>
      <img
        className="acharya-photo-slide acharya-photo-red"
        src={images.acharyaHeroStage}
        width={imageDimensions.acharyaHeroStage.width}
        height={imageDimensions.acharyaHeroStage.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        className="acharya-photo-slide acharya-photo-white"
        src={images.acharyaPortrait}
        width={imageDimensions.acharyaPortrait.width}
        height={imageDimensions.acharyaPortrait.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

const heroSlides: Array<{
  image: 'acharyaHeroPuja' | 'acharyaHeroStage' | 'acharyaHeroCrowd' | 'acharyaHeroPoster';
  altHi: string;
  altEn: string;
}> = [
  {
    image: 'acharyaHeroPuja',
    altHi: 'पूजन स्थल पर बैठे आचार्य पंडित श्री जयनारायण पांडेय',
    altEn: 'Acharya Pandit Shri Jaynarayan Pandey seated at a puja',
  },
  {
    image: 'acharyaHeroStage',
    altHi: 'भजन गाते हुए आचार्य पंडित श्री जयनारायण पांडेय',
    altEn: 'Acharya Pandit Shri Jaynarayan Pandey singing a Bhajan',
  },
  {
    image: 'acharyaHeroCrowd',
    altHi: 'श्रोताओं के बीच भजन प्रस्तुत करते आचार्य पंडित श्री जयनारायण पांडेय',
    altEn: 'Acharya Pandit Shri Jaynarayan Pandey performing for an audience',
  },
  {
    image: 'acharyaHeroPoster',
    altHi: 'हारमोनियम के साथ आचार्य पंडित श्री जयनारायण पांडेय का चित्र',
    altEn: 'Portrait of Acharya Pandit Shri Jaynarayan Pandey with his harmonium',
  },
];

function HeroSlideshow() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % heroSlides.length;
    const preload = new Image();
    preload.src = images[heroSlides[nextIndex].image];

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <div
      className="portrait-box hero-image hero-carousel"
      role="region"
      aria-roledescription={text('छवि स्लाइड शो', 'carousel')}
      aria-label={text('आचार्य जी की तस्वीरें', 'Photos of Acharya Ji')}
      style={{ backgroundImage: `url("${images[activeSlide.image]}")` }}
    >
      <img
        key={activeSlide.image}
        className={`hero-portrait hero-slide-image hero-slide-${activeSlide.image}`}
        src={images[activeSlide.image]}
        width={imageDimensions[activeSlide.image].width}
        height={imageDimensions[activeSlide.image].height}
        alt={text(activeSlide.altHi, activeSlide.altEn)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

const eventSlides: Array<{ image: ImageKey; altHi: string; altEn: string }> = [
  {
    image: 'auspiciousPujaAltar',
    altHi: 'तांबे के कलश और पुष्पों से सजी पूजा वेदी',
    altEn: 'A puja altar adorned with a copper kalash and flowers',
  },
  {
    image: 'bhajanStage',
    altHi: 'भजन प्रस्तुति के लिए सजा संगीत मंच',
    altEn: 'A devotional music stage arranged for a Bhajan',
  },
  {
    image: 'templePhoto',
    altHi: 'आकाश की पृष्ठभूमि में मंदिर का भव्य शिखर',
    altEn: 'A temple tower rising against the open sky',
  },
  {
    image: 'pujaRitualPhoto',
    altHi: 'हवन और पूजन सामग्री से सजा धार्मिक अनुष्ठान',
    altEn: 'A sacred ritual arranged with havan and puja offerings',
  },
  {
    image: 'varanasiGhats',
    altHi: 'वाराणसी के घाटों और गंगा का मनोरम दृश्य',
    altEn: 'A serene view of the Ganga and Varanasi ghats',
  },
];

function EventSlideshow() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = eventSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % eventSlides.length;
        const preload = new Image();
        preload.src = images[eventSlides[nextIndex].image];
        return nextIndex;
      });
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="event-visual-card event-carousel"
      role="region"
      aria-roledescription={text('छवि स्लाइड शो', 'carousel')}
      aria-label={text('आयोजन की झलकियाँ', 'Event highlights')}
    >
      <img
        key={activeSlide.image}
        src={images[activeSlide.image]}
        alt={text(activeSlide.altHi, activeSlide.altEn)}
        width={imageDimensions[activeSlide.image].width}
        height={imageDimensions[activeSlide.image].height}
        className="event-request-image"
        loading="eager"
        decoding="async"
      />
      <div className="event-visual-caption">
        <span>{text('श्रद्धा से सजा हर शुभ आरंभ', 'A beautiful beginning, rooted in devotion')}</span>
      </div>
    </div>
  );
}

function HomePage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

  const featuredAreas: Array<{
    titleHi: string;
    titleEn: string;
    descriptionHi: string;
    descriptionEn: string;
    image: ImageKey;
    imageAltHi: string;
    imageAltEn: string;
  }> = [
    {
      titleHi: 'वैदिक कर्मकांड',
      titleEn: 'Vedic Rituals',
      descriptionHi: 'संस्कार, अनुष्ठान और वैदिक विधि-विधान के साथ शुद्ध एवं सरल आयोजन।',
      descriptionEn: 'Thoughtful ceremonies and Vedic rituals, performed with care and tradition.',
      image: 'acharyaPuja',
      imageAltHi: 'आचार्य जी की उपस्थिति में सजे पूजा स्थल का दृश्य',
      imageAltEn: 'A home puja ceremony guided by Acharya Ji',
    },
    {
      titleHi: 'कथा वाचन',
      titleEn: 'Katha',
      descriptionHi: 'श्रीमद्भागवत, रामकथा सहित विभिन्न पवित्र ग्रंथों का रसपूर्ण वाचन।',
      descriptionEn: 'Engaging readings from sacred texts, including the Shrimad Bhagwat and Ram Katha.',
      image: 'bhagwatGita',
      imageAltHi: 'दीपक और पुष्पों के बीच रखी श्रीमद्भगवद्गीता',
      imageAltEn: 'The Bhagavad Gita placed among flowers and a lit diya',
    },
    {
      titleHi: 'भजन गायन',
      titleEn: 'Bhajan',
      descriptionHi: 'भक्ति संगीत के माध्यम से ईश्वर स्मरण और आंतरिक आनंद की अनुभूति।',
      descriptionEn: 'Devotional music that brings a sense of remembrance, connection, and inner joy.',
      image: 'acharyaPortrait',
      imageAltHi: 'हारमोनियम के साथ भजन गाते आचार्य पंडित श्री जयनारायण पांडेय',
      imageAltEn: 'Acharya Pandit Shri Jaynarayan Pandey singing a Bhajan with a harmonium',
    },
  ];

  return (
    <main>
      <section className="hero-shell">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{text('अपने मंगल आयोजन की शुरुआत करें', 'Begin planning your auspicious occasion')}</div>
            <h1 className="hero-title">
              <span>{text('आचार्य पंडित श्री', 'Acharya Pandit Shri')}</span>
              <span>{text('जयनारायण पांडेय', 'Jaynarayan Pandey')}</span>
            </h1>
            <p className="lead">
              {text(
                'सनातन परंपरा के ज्ञान, भक्ति और सेवा को जीवन का आधार मानते हुए, वैदिक कर्मकांड, कथा वाचन और भजन गायन के माध्यम से समाज में धर्म, संस्कार और सद्भाव का प्रसार करना ही उद्देश्य है।',
                'Grounded in the wisdom, devotion, and service of the Sanatan tradition, Acharya Ji shares dharma, values, and harmony through Vedic rituals, Katha, and Bhajan.',
              )}
            </p>
            <h2 className="tagline">{text('“विद्या, साधना और सेवा।”', '“Knowledge, devotion, and service.”')}</h2>
            <div className="button-row">
              <a className="button" href="#/ayojan">
                {text('आयोजन अनुरोध', 'Plan an event')}
              </a>
              <a className="button secondary" href="#/pujan">
                {text('पूजा देखें', 'Explore Pujas')}
              </a>
            </div>
          </div>

          <HeroSlideshow />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div data-reveal>
            <SectionHeading
              eyebrow={text('सेवा के प्रमुख क्षेत्र', 'Areas of service')}
              title={text('आस्था, परंपरा और मंगल भाव', 'Faith, tradition, and auspicious beginnings')}
              align="center"
            />
          </div>
          <div className="card-grid three-up">
            {featuredAreas.map((item) => (
              <article className="feature-card" key={item.titleHi} data-reveal>
                <div className="feature-image-wrap">
                  <img
                    src={images[item.image]}
                    srcSet={imageSrcSets[item.image]}
                    sizes="(max-width: 640px) 88vw, (max-width: 900px) 45vw, 30vw"
                    className={item.image === 'acharyaPortrait' ? 'portrait-crop' : undefined}
                    alt={text(item.imageAltHi, item.imageAltEn)}
                    width={imageDimensions[item.image].width}
                    height={imageDimensions[item.image].height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="card-body">
                  <h3>{text(item.titleHi, item.titleEn)}</h3>
                  <p>{text(item.descriptionHi, item.descriptionEn)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div data-reveal>
            <SectionHeading
              eyebrow={text('प्रक्रिया', 'How it works')}
              title={text('आयोजन की सरल और शुद्ध प्रक्रिया', 'A simple, thoughtful process')}
            />
          </div>
          <ol className="steps-list">
            {processSteps.map((step, index) => (
              <li key={step.hi} data-reveal>
                <span>{index + 1}</span>
                <p>{text(step.hi, step.en)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section dark-panel">
        <img
          className="section-backdrop"
          src={images.scriptureBackground}
          width={imageDimensions.scriptureBackground.width}
          height={imageDimensions.scriptureBackground.height}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="wrap split-layout" data-reveal>
          <div className="emblem-wrap">
            <img
              src={images.emblem}
              alt={text('Sur Sadhna Ensemble का प्रतीक चिह्न', 'Sur Sadhna Ensemble emblem')}
              width={imageDimensions.emblem.width}
              height={imageDimensions.emblem.height}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="eyebrow light">Sur Sadhna Ensemble</div>
            <h2>{text('भक्ति, संगीत और संस्कार का संगम', 'Where devotion, music, and tradition meet')}</h2>
            <p>
              {text(
                'यह समूह वैदिक मंत्र, शास्त्रीय भजन और संत ध्वनि के साथ भाव-विभोर वातावरण तैयार करता है। सामाजिक एवं पारिवारिक आयोजनों में शांति, आनंद और पवित्रता का संचार इसका मुख्य उद्देश्य है।',
                'The ensemble creates a devotional atmosphere through Vedic mantras, classical Bhajan, and sacred music—bringing peace, joy, and reverence to family and community gatherings.',
              )}
            </p>
            <ul className="bullet-list">
              {faqHighlights.map((item) => (
                <li key={item.hi}>{text(item.hi, item.en)}</li>
              ))}
            </ul>
            <a className="button gold" href="#/bhajan">
              {text('और जानकारी देखें', 'Discover the ensemble')}
            </a>
          </div>
        </div>
      </section>

     
<section className="section alt">
  <div className="wrap">
    <div data-reveal>
      <SectionHeading
        eyebrow={text('झलकियाँ', 'Gallery')}
        title={text('पूजा के कुछ पावन क्षण', 'Sacred moments from our Pujas')}
        align="center"
      />
    </div>

    <div
      className="gallery-marquee"
      role="region"
      aria-label={text('पूजा की तस्वीरें', 'Puja photo gallery')}
    >
      <div className="gallery-marquee-track">
        {[false, true].map((duplicate) => (
          <div
            className="gallery-marquee-set"
            key={duplicate ? 'duplicate' : 'original'}
            aria-hidden={duplicate || undefined}
          >
            {galleryImages.map((image) => (
              <div
                className="preview-image-wrap"
                key={`${duplicate ? 'duplicate-' : ''}${image.image}`}
              >
                <img
                  src={images[image.image]}
                  srcSet={imageSrcSets[image.image]}
                  sizes="(max-width: 640px) 78vw, (max-width: 1000px) 34vw, 300px"
                  style={
                    image.focus
                      ? { objectPosition: image.focus }
                      : undefined
                  }
                  alt={
                    duplicate
                      ? ''
                      : language === 'hi'
                        ? image.alt
                        : image.altEn
                  }
                  width={imageDimensions[image.image].width}
                  height={imageDimensions[image.image].height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

function ParichayPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>{text('परिचय', 'About')}</span>
      </div>
      <section className="page-intro">
        <div>
          <div className="eyebrow">{text('परिचय', 'About Acharya Ji')}</div>
          <h1>{text(name, 'Acharya Pandit Shri Jaynarayan Pandey')}</h1>
          <p>
            {text(
              'आचार्य पंडित श्री जयनारायण पांडेय अपने जीवन को वैदिक ज्ञान, मंत्रोच्चार, भक्ति विधि और सेवा के शुद्ध स्वरूप के साथ जोड़कर चलते हैं। वे पूजा, कथा, अनुष्ठान और भजन के माध्यम से मनुष्य के भीतर श्रद्धा, शांति और संस्कार का प्रसार करते हैं।',
              'Acharya Pandit Shri Jaynarayan Pandey is dedicated to Vedic wisdom, sacred chanting, devotional practice, and service. Through Puja, Katha, Anusthaan, and Bhajan, he shares faith, peace, and timeless values.',
            )}
          </p>
          <p>
            {text(
              'उनके मार्गदर्शन में व्यक्ति, परिवार और समाज सभी को धार्मिक आस्था के साथ जीवन में सरलता, अनुशासन और सौहार्द का अनुभव मिलता है।',
              'His guidance helps individuals, families, and communities bring simplicity, discipline, and harmony into everyday life.',
            )}
          </p>
        </div>
        <div className="portrait-box narrow photo-frame">
          <AcharyaPhotoSlideshow language={language} />
        </div>
      </section>

      <section className="details-block">
        <h2>{text('सेवा के क्षेत्र', 'His work')}</h2>
        <ul className="bullet-list compact">
          <li>{text('वैदिक कर्मकांड और मंगल संस्कार', 'Vedic rituals and auspicious ceremonies')}</li>
          <li>{text('रामकथा, भागवत कथा, सत्यनारायण कथा और धार्मिक प्रवचन', 'Ram Katha, Bhagwat Katha, Satyanarayan Katha, and spiritual talks')}</li>
          <li>{text('भजन संध्या, आरती, मंत्रोच्चार और शांति अनुष्ठान', 'Bhajan evenings, Aarti, sacred chanting, and peace rituals')}</li>
          <li>{text('परिवार, मंदिर और शुभ आयोजन के लिए मार्गदर्शन', 'Guidance for families, temples, and special occasions')}</li>
        </ul>
      </section>
    </main>
  );
}

function PujanPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const categories = [...new Set(services.map((service) => service.category))];

  const filteredServices = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory = category === 'all' || service.category === category;
      const searchable = `${service.name} ${service.nameEn} ${service.summary} ${service.summaryEn} ${service.category} ${service.categoryEn}`.toLowerCase();
      const matchesQuery = !normalized || searchable.includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>{text('पूजन', 'Puja')}</span>
      </div>
      <section className="page-intro stacked">
        <div>
          <div className="eyebrow">{text('पूजा एवं अनुष्ठान', 'Puja & Vedic rituals')}</div>
          <h1>{text('आस्था, परंपरा और विधि-विधान', 'Puja with faith and tradition')}</h1>
          <p>{text('आस्था, परंपरा और विधि-विधान के साथ आपके परिवार के लिए मंगलमय आयोजन।', 'A thoughtful, auspicious ceremony for your family, guided by faith and tradition.')}</p>
        </div>
      </section>

      <label className="field-label" htmlFor="service-search">
        {text('पूजा खोजें', 'Search Pujas')}
      </label>
      <input
        id="service-search"
        type="search"
        className="text-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={text('जैसे — गृह प्रवेश, रुद्राभिषेक, अनुष्ठान', 'Try Griha Pravesh, Rudrabhishek, or Anusthaan')}
      />

      <div className="chip-row" role="group" aria-label={text('श्रेणी', 'Categories')}>
        <button
          type="button"
          className={category === 'all' ? 'chip active' : 'chip'}
          onClick={() => setCategory('all')}
          aria-pressed={category === 'all'}
        >
          {text('सभी', 'All')}
        </button>
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            className={category === item ? 'chip active' : 'chip'}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {language === 'hi'
              ? item
              : services.find((service) => service.category === item)?.categoryEn ?? item}
          </button>
        ))}
      </div>

      <p className="result-status" aria-live="polite">
        {text(`${filteredServices.length} सेवाएँ मिलीं`, `${filteredServices.length} services found`)}
      </p>

      {filteredServices.length ? (
        <div className="card-grid three-up service-grid">
          {filteredServices.map((service) => (
            <article className="service-card" key={service.slug}>
              <div className={`service-image-wrap service-image-${service.slug}`}>
                <img
                  src={images[service.image]}
                  srcSet={imageSrcSets[service.image]}
                  sizes="(max-width: 640px) 88vw, (max-width: 900px) 45vw, 30vw"
                  alt={language === 'hi' ? service.imageAlt : service.imageAltEn}
                  width={imageDimensions[service.image].width}
                  height={imageDimensions[service.image].height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-body">
                <span className="tag">{language === 'hi' ? service.category : service.categoryEn}</span>
                <h3>{language === 'hi' ? service.name : service.nameEn}</h3>
                <p>{language === 'hi' ? service.summary : service.summaryEn}</p>
                <div className="card-actions">
                  <a className="text-link" href={`#/pujan/${service.slug}`}>
                    {text('विवरण देखें', 'View details')}
                  </a>
                  <a className="button small" href={`#/ayojan?service=${service.slug}`}>
                    {text('अनुरोध करें', 'Enquire')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="note-box">
          {text('कोई परिणाम नहीं मिला। दूसरा शब्द आज़माएँ, या', 'No results found. Try another search, or')}{' '}
          <button type="button" className="chip" onClick={() => { setQuery(''); setCategory('all'); }}>
            {text('फ़िल्टर हटाएँ', 'Clear filters')}
          </button>
          {text('।', '.')}
        </div>
      )}

      <div className="note-box full-note">
        {text(
          'सेवाओं की अंतिम रूपरेखा, समय और व्यवस्था आचार्य जी से चर्चा के बाद तय होगी।',
          'Service details, timing, and arrangements are confirmed after a discussion with Acharya Ji.',
        )}
      </div>
    </main>
  );
}

function ServiceDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="page-shell wrap">
        <h1>{text('सेवा नहीं मिली', 'Service not found')}</h1>
        <a className="button" href="#/pujan">
          {text('सभी सेवाएँ देखें', 'View all services')}
        </a>
      </main>
    );
  }

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/pujan">{text('पूजन', 'Puja')}</a>
        <span>•</span>
        <span>{service.name}</span>
      </div>
      <section className="detail-layout">
        <div>
          <div className="eyebrow">{language === 'hi' ? service.category : service.categoryEn}</div>
          <h1>{language === 'hi' ? service.name : service.nameEn}</h1>
          <p className="lead">{language === 'hi' ? service.summary : service.summaryEn}</p>
          <h3>{text('प्रमुख अवसर', 'Occasions')}</h3>
          <ul className="bullet-list compact">
            {(language === 'hi' ? service.occasions : service.occasionsEn).map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
          <h3>{text('तैयारी हेतु मार्गदर्शन', 'Preparation guidance')}</h3>
          <p>{language === 'hi' ? service.preparation : service.preparationEn}</p>
          <div className="button-row">
            <a className="button" href={`#/ayojan?service=${service.slug}`}>
              {text('इस पूजा हेतु अनुरोध करें', 'Enquire about this Puja')}
            </a>
            <a className="button secondary" href={`#/samagri?service=${service.slug}`}>
              {text('पूजा सामग्री सूची', 'Materials list')}
            </a>
          </div>
        </div>
        <img
          src={images[service.image]}
          srcSet={imageSrcSets[service.image]}
          sizes="(max-width: 900px) 88vw, 44vw"
          alt={language === 'hi' ? service.imageAlt : service.imageAltEn}
          width={imageDimensions[service.image].width}
          height={imageDimensions[service.image].height}
          className={`detail-image detail-image-${service.slug}`}
          loading="lazy"
          decoding="async"
        />
      </section>
    </main>
  );
}

function SamagriPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [selectedService, setSelectedService] = useState(services[0].slug);
  const [query, setQuery] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const filteredMaterials = materials
    .map((item, index) => ({ item, label: language === 'hi' ? item : materialsEn[index] }))
    .filter(({ label }) => label.toLowerCase().includes(query.trim().toLowerCase()));
  const service = services.find((entry) => entry.slug === selectedService) ?? services[0];

  const shareText =
    language === 'hi'
      ? `${service.name} — यजमान द्वारा उपलब्ध कराई जाने वाली सामग्री\n${materials
          .map((item) => `• ${item}`)
          .join('\n')}\nअंतिम सामग्री और मात्रा आयोजन के अनुसार आचार्य जी बताएँगे।`
      : `${service.nameEn} — Materials for the host to arrange\n${materials
          .map((_, index) => `• ${materialsEn[index]}`)
          .join('\n')}\nAcharya Ji will confirm the final items and quantities for the event.`;

  const copyList = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setStatusMessage(text('सामग्री सूची कॉपी हो गई।', 'Materials list copied.'));
    } catch {
      setStatusMessage(text(
        'कॉपी नहीं हो सकी; कृपया ऊपर दी गई सामग्री सूची चुनकर मैन्युअल कॉपी करें।',
        'Could not copy the list. Please select and copy the materials shown above.',
      ));
    }
  };

  const shareList = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: service.name, text: shareText });
      } catch {
        // share cancelled
      }
      return;
    }
    await copyList();
  };

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/pujan">{text('पूजन', 'Puja')}</a>
        <span>•</span>
        <span>{text('पूजा सामग्री', 'Materials list')}</span>
      </div>
      <div className="eyebrow">{text('पूजन सामग्री', 'Puja materials')}</div>
      <h1>{text('तैयारी सरल, पूजन निश्चिंत।', 'Prepare with ease. Worship with peace.')}</h1>

      <label className="field-label" htmlFor="service-select">
        {text('अनुष्ठान / पूजा चयन करें', 'Choose a ritual or Puja')}
      </label>
      <select
        id="service-select"
        className="text-input"
        value={selectedService}
        onChange={(event) => setSelectedService(event.target.value)}
      >
        {services.map((entry) => (
          <option key={entry.slug} value={entry.slug}>
            {language === 'hi' ? entry.name : entry.nameEn}
          </option>
        ))}
      </select>

      <label className="field-label" htmlFor="material-search">
        {text('सामग्री खोजें', 'Search materials')}
      </label>
      <input
        id="material-search"
        className="text-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={text('जैसे — दूध', 'For example — milk')}
      />

      <div className="note-box full-note">
        {text(
          `यजमान द्वारा उपलब्ध कराई जाने वाली सामान्य सामग्री • ${service.name} की अंतिम सामग्री और मात्रा आचार्य जी से चर्चा के बाद तय होगी।`,
          `General items for the host to arrange • Acharya Ji will confirm the final items and quantities for ${service.nameEn}.`,
        )}
      </div>
      <h2 className="materials-heading">
        {text('यजमान द्वारा उपलब्ध कराई जाने वाली सामग्री', 'Items for the host to arrange')}
      </h2>

      <ul className="material-list">
        {filteredMaterials.map(({ item, label }) => (
          <li key={item} className="material-list-item">{label}</li>
        ))}
      </ul>

      {!filteredMaterials.length && (
        <div className="note-box">{text('इस नाम की सामग्री सूची में नहीं है।', 'No materials match this search.')}</div>
      )}

      <div className="button-row wrap-buttons">
        <button type="button" className="button secondary" onClick={() => window.print()}>
          {text('प्रिंट करें', 'Print')}
        </button>
        <button type="button" className="button secondary" onClick={copyList}>
          {text('सूची कॉपी करें', 'Copy list')}
        </button>
        <button type="button" className="button secondary" onClick={shareList}>
          {text('साझा करें', 'Share')}
        </button>
        <a className="button" href={`#/ayojan?service=${service.slug}`}>
          {text('आचार्य जी से पूछें', 'Ask Acharya Ji')}
        </a>
      </div>
      <p className="status-message" role="status">
        {statusMessage}
      </p>
    </main>
  );
}

function GalleryPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((activeIndex + 1) % galleryImages.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>{text('झलकियाँ', 'Gallery')}</span>
      </div>
      <div className="centered-copy">
        <div className="eyebrow">{text('झलकियाँ', 'Gallery')}</div>
        <h1>{text('पूजा के कुछ पावन क्षण', 'Sacred moments from our Pujas')}</h1>
        <p>{text('आस्था, परंपरा और भक्ति से जुड़े वातावरण की झलकियाँ।', 'A glimpse of the faith, tradition, and devotion shared at our gatherings.')}</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={image.image}
            className={`gallery-tile${image.focus ? ' gallery-tile-focused' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={language === 'hi' ? image.alt : image.altEn}
          >
            <img
              src={images[image.image]}
              srcSet={imageSrcSets[image.image]}
              sizes="(max-width: 640px) 88vw, (max-width: 900px) 44vw, 30vw"
              className={image.image === 'acharyaPortrait' ? 'portrait-crop' : undefined}
              style={image.focus ? { objectPosition: image.focus } : undefined}
              alt={language === 'hi' ? image.alt : image.altEn}
              width={imageDimensions[image.image].width}
              height={imageDimensions[image.image].height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="close-button"
              onClick={() => setActiveIndex(null)}
              aria-label={text('बंद करें', 'Close')}
            >
              ×
            </button>
            <img
              src={images[galleryImages[activeIndex].image]}
              alt={language === 'hi' ? galleryImages[activeIndex].alt : galleryImages[activeIndex].altEn}
              width={imageDimensions[galleryImages[activeIndex].image].width}
              height={imageDimensions[galleryImages[activeIndex].image].height}
              decoding="async"
            />
            <p>{language === 'hi' ? galleryImages[activeIndex].alt : galleryImages[activeIndex].altEn}</p>
          </div>
        </div>
      )}
    </main>
  );
}

function AyojanPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'puja' as 'puja' | 'bhajan' | 'both',
    service: services[0].slug,
    eventDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
    const selectedService = params.get('service');
    const eventType = params.get('type');
    if (selectedService && services.some((service) => service.slug === selectedService)) {
      setFormData((current) => ({ ...current, service: selectedService }));
    }
    if (eventType === 'puja' || eventType === 'bhajan' || eventType === 'both') {
      setFormData((current) => ({ ...current, eventType }));
    }
  }, []);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = text('नाम आवश्यक है।', 'Please enter your name.');
    if (!formData.phone.trim()) nextErrors.phone = text('फोन नंबर आवश्यक है।', 'Please enter your phone number.');
    if (!formData.message.trim()) nextErrors.message = text('आयोजन विवरण लिखें।', 'Please describe your event.');
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const selectedService = formData.eventType !== 'bhajan'
      ? services.find((entry) => entry.slug === formData.service)
      : undefined;
    const serviceName = selectedService
      ? language === 'hi' ? selectedService.name : selectedService.nameEn
      : '';
    const eventTypeName = {
      puja: text('पूजा', 'Puja'),
      bhajan: text('भजन संध्या', 'Bhajan evening'),
      both: text('पूजा एवं भजन संध्या', 'Puja and Bhajan evening'),
    }[formData.eventType];
    const whatsappText =
      language === 'hi'
        ? `नमस्कार, मैं ${formData.name} हूँ।\nमैं ${eventTypeName} के लिए आयोजन अनुरोध करना चाहता/चाहती हूँ।${serviceName ? `\nपूजा का प्रकार: ${serviceName}` : ''}\nतारीख: ${formData.eventDate || 'तारीख तय नहीं'}\nफोन: ${formData.phone}\nविवरण: ${formData.message}`
        : `Namaste, my name is ${formData.name}.\nI would like to enquire about arranging ${eventTypeName}.${serviceName ? `\nPuja type: ${serviceName}` : ''}\nDate: ${formData.eventDate || 'Not decided'}\nPhone: ${formData.phone}\nDetails: ${formData.message}`;

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSent(true);
  };

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>{text('आयोजन अनुरोध', 'Event enquiry')}</span>
      </div>
      <div className="page-intro">
        <div>
          <div className="eyebrow">{text('आयोजन अनुरोध', 'Event enquiry')}</div>
          <h1>{text('अपने मंगल आयोजन की शुरुआत करें।', 'Begin planning your auspicious occasion.')}</h1>
          <p>
            {text(
              'पूजा, संस्कार और भजन संध्या के लिए आचार्य पंडित श्री जयनारायण पांडेय से आयोजन का अनुरोध करें।',
              'Enquire with Acharya Pandit Shri Jaynarayan Pandey about a Puja, ceremony, or Bhajan evening.',
            )}
          </p>
        </div>
        <EventSlideshow />
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
        <fieldset className="event-type-fieldset">
          <legend className="field-label">{text('आप किस आयोजन के लिए अनुरोध करना चाहते हैं?', 'What would you like to arrange?')}</legend>
          <div className="event-type-options" role="radiogroup" aria-label={text('आयोजन का प्रकार', 'Event type')}>
            {([
              {
                value: 'puja',
                mark: 'पू',
                titleHi: 'पूजा',
                titleEn: 'Puja',
                detailHi: 'पूजा या अनुष्ठान चुनें',
                detailEn: 'Choose a Puja or ritual',
              },
              {
                value: 'bhajan',
                mark: 'भ',
                titleHi: 'भजन संध्या',
                titleEn: 'Bhajan',
                detailHi: 'भक्ति संगीत का आयोजन',
                detailEn: 'Arrange a devotional music evening',
              },
              {
                value: 'both',
                mark: '+',
                titleHi: 'दोनों',
                titleEn: 'Both',
                detailHi: 'पूजा और भजन साथ में',
                detailEn: 'Puja and Bhajan together',
              },
            ] as const).map((option) => (
              <label
                className={`event-type-choice${formData.eventType === option.value ? ' selected' : ''}`}
                key={option.value}
              >
                <input
                  type="radio"
                  name="eventType"
                  value={option.value}
                  checked={formData.eventType === option.value}
                  onChange={() => setFormData((current) => ({ ...current, eventType: option.value }))}
                />
                <span className="event-choice-content">
                  <span className="event-choice-icon" aria-hidden="true">{option.mark}</span>
                  <span className="event-choice-copy">
                    <strong>{text(option.titleHi, option.titleEn)}</strong>
                    <span>{text(option.detailHi, option.detailEn)}</span>
                  </span>
                  <span className="event-choice-indicator" aria-hidden="true" />
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field-group">
          <label htmlFor="name">{text('नाम', 'Your name')}</label>
          <input
            id="name"
            className="text-input"
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            placeholder={text('आपका नाम', 'Enter your name')}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="phone">{text('फोन नंबर', 'Phone number')}</label>
          <input
            id="phone"
            className="text-input"
            value={formData.phone}
            onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={text('मोबाइल नंबर', 'Your mobile number')}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        {formData.eventType !== 'bhajan' && (
          <div className="field-group">
            <label htmlFor="service">{text('पूजा / अनुष्ठान चुनें', 'Select a Puja or ritual')}</label>
            <select
              id="service"
              className="text-input"
              value={formData.service}
              onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))}
            >
              {services.map((entry) => (
                <option key={entry.slug} value={entry.slug}>
                  {language === 'hi' ? entry.name : entry.nameEn}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="field-group">
          <label htmlFor="date">{text('तारीख', 'Preferred date')}</label>
          <input
            id="date"
            className="text-input"
            type="date"
            value={formData.eventDate}
            onChange={(event) => setFormData((current) => ({ ...current, eventDate: event.target.value }))}
          />
        </div>

        <div className="field-group">
          <label htmlFor="message">{text('आयोजन का विवरण', 'Event details')}</label>
          <textarea
            id="message"
            className="text-input"
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            placeholder={text(
              'आयोजन की आवश्यकता, स्थान, समय, और विशेष विवरण लिखें',
              'Share what you need, the venue, timing, and any other details.',
            )}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <div className="button-row">
          <button type="submit" className="button">
            {text('WhatsApp पर भेजें', 'Continue on WhatsApp')}
          </button>
        </div>

        {sent && (
          <div className="success-box">
            {text(
              'आपका संदेश तैयार है। WhatsApp में भेजने के लिए आगे बढ़ें।',
              'Your enquiry is ready. Continue in WhatsApp to send it.',
            )}
          </div>
        )}
      </form>
    </main>
  );
}

function SamparkPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>{text('संपर्क', 'Contact')}</span>
      </div>
      <section className="page-intro">
        <div>
          <div className="eyebrow">{text('संपर्क एवं मार्गदर्शन', 'Contact & guidance')}</div>
          <h1>{text('सीधे संवाद, सहज मार्गदर्शन।', 'A direct conversation, thoughtful guidance.')}</h1>
          <p>
            {text(
              'आपके पूजन, अनुष्ठान, भजन संध्या या किसी भी धार्मिक आयोजन के लिए संपर्क करें।',
              'Get in touch about a Puja, Anusthaan, Bhajan evening, or other religious gathering.',
            )}
          </p>
        </div>
        <img
          src={images.ganesha}
          alt={text('फूलों से सजे गणपति जी के दर्शन', 'Lord Ganesh at a flower-adorned puja')}
          width={imageDimensions.ganesha.width}
          height={imageDimensions.ganesha.height}
          className="request-image contact-image"
          loading="lazy"
          decoding="async"
        />
      </section>

      <div className="contact-panel">
        <div>
          <h3>{text('संपर्क जानकारी', 'Contact information')}</h3>
          <p className="contact-location">
            {text('स्थान', 'Location')}: {text(contact.location, 'India')}
          </p>
          <ContactLinks group="contact" />
        </div>
        <div>
          <h3>{text('सोशल मीडिया पर जुड़ें', 'Follow on social media')}</h3>
          <ContactLinks group="social" />
        </div>
      </div>
    </main>
  );
}

function BhajanPage() {
  const { language } = useLanguage();
  const text = (hindi: string, english: string) => localize(language, hindi, english);

  return (
    <main className="page-shell wrap">
      <div className="crumbs">
        <a href="#/">{text('मुख पृष्ठ', 'Home')}</a>
        <span>•</span>
        <span>Bhajan</span>
      </div>
      <section className="ensemble-layout">
        <div className="emblem-wrap">
          <div className="ensemble-image-frame">
            <AcharyaPhotoSlideshow language={language} />
          </div>
        </div>
        <div>
          <div className="eyebrow">Sur Sadhna Ensemble</div>
          <h1>{text('भक्ति, संगीत और सेवा', 'Devotion, music, and service')}</h1>
          <p>
            {text(
              'Sur Sadhna Ensemble संगीतमय भक्ति, आरती और सांस्कृतिक प्रस्तुतियों के माध्यम से आस्था और भावानुभूति को जागृत करता है।',
              'Sur Sadhna Ensemble nurtures devotion and connection through Bhajan, Aarti, and cultural performances.',
            )}
          </p>
          <p>
            {text(
              'यह समूह मंदिर, शादियों, उत्सव और सामाजिक आयोजनों में शांति, ऊर्जा और सौहार्द का भाव लेकर आता है।',
              'The ensemble brings a sense of peace, energy, and harmony to temple, family, festival, and community gatherings.',
            )}
          </p>
          <a className="button gold" href="#/ayojan">
            {text('आयोजन की व्यवस्था करें', 'Arrange an event')}
          </a>
        </div>
      </section>
    </main>
  );
}

function AppContent() {
  const currentPath = useCurrentPath();
  const { language } = useLanguage();

  useEffect(() => {
    const pageTitles: Record<string, { hi: string; en: string }> = {
      '/': { hi: 'मुख पृष्ठ', en: 'Home' },
      '/parichay': { hi: 'परिचय', en: 'About' },
      '/pujan': { hi: 'पूजन', en: 'Puja' },
      '/samagri': { hi: 'पूजा सामग्री', en: 'Materials list' },
      '/bhajan': { hi: 'भजन', en: 'Bhajan' },
      '/gallery': { hi: 'झलकियाँ', en: 'Gallery' },
      '/ayojan': { hi: 'आयोजन अनुरोध', en: 'Event enquiry' },
      '/sampark': { hi: 'संपर्क', en: 'Contact' },
    };
    const service = currentPath.startsWith('/pujan/')
      ? services.find((item) => `/pujan/${item.slug}` === currentPath)
      : undefined;
    const pageTitle = service
      ? { hi: service.name, en: service.nameEn }
      : pageTitles[currentPath] ?? { hi: 'पृष्ठ नहीं मिला', en: 'Page not found' };
    document.title = `${pageTitle[language]} | ${localize(
      language,
      name,
      'Acharya Pandit Shri Jaynarayan Pandey',
    )}`;
  }, [currentPath, language]);

  let page: JSX.Element;

  if (currentPath === '/' || currentPath === '') {
    page = <HomePage />;
  } else if (currentPath === '/parichay') {
    page = <ParichayPage />;
  } else if (currentPath === '/pujan') {
    page = <PujanPage />;
  } else if (currentPath.startsWith('/pujan/')) {
    const slug = currentPath.replace('/pujan/', '');
    page = <ServiceDetailPage slug={slug} />;
  } else if (currentPath === '/samagri') {
    page = <SamagriPage />;
  } else if (currentPath === '/bhajan') {
    page = <BhajanPage />;
  } else if (currentPath === '/gallery') {
    page = <GalleryPage />;
  } else if (currentPath === '/ayojan') {
    page = <AyojanPage />;
  } else if (currentPath === '/sampark') {
    page = <SamparkPage />;
  } else {
    page = (
      <main className="page-shell wrap">
        <h1>{localize(language, 'पृष्ठ नहीं मिला', 'Page not found')}</h1>
        <a className="button" href="#/">
          {localize(language, 'मुखपृष्ठ पर जाएँ', 'Return home')}
        </a>
      </main>
    );
  }

  return (
    <>
      <Header currentPath={currentPath} />
      {page}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
