import { images, type ImageKey } from './imageAssets';

export { imageDimensions, images, imageSrcSets } from './imageAssets';

export const name = 'आचार्य पंडित श्री जयनारायण पांडेय';

export type NavItem = {
  label: string;
  labelEn: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'परिचय', labelEn: 'About', href: '/parichay' },
  { label: 'पूजन', labelEn: 'Puja', href: '/pujan' },
  { label: 'भजन', labelEn: 'Bhajan', href: '/bhajan' },
  { label: 'झलकियाँ', labelEn: 'Gallery', href: '/gallery' },
  { label: 'संपर्क', labelEn: 'Contact', href: '/sampark' },
];

export type Service = {
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  image: ImageKey;
  imageAlt: string;
  imageAltEn: string;
  summary: string;
  summaryEn: string;
  occasions: string[];
  occasionsEn: string[];
  preparation: string;
  preparationEn: string;
};

export const services: Service[] = [
  {
    slug: 'griha-pravesh',
    name: 'गृह प्रवेश',
    nameEn: 'Griha Pravesh (Housewarming Puja)',
    category: 'गृह एवं परिवार',
    categoryEn: 'Home & Family',
    image: 'acharyaPuja',
    imageAlt: 'आचार्य जी की उपस्थिति में सजे पूजा स्थल का दृश्य',
    imageAltEn: 'A home puja ceremony guided by Acharya Ji',
    summary: 'नवीन गृह में सुख, समृद्धि और मंगल के लिए वैदिक विधि से पूजन।',
    summaryEn: 'A Vedic housewarming puja for peace, prosperity, and auspicious beginnings.',
    occasions: ['नए घर में प्रवेश', 'कार्यालय या प्रतिष्ठान का शुभारंभ'],
    occasionsEn: ['Entering a new home', 'Opening an office or business'],
    preparation: 'घर की स्वच्छता, पूजा स्थल का चयन और परिवार के सदस्यों की उपस्थिति पहले से सुनिश्चित करें।',
    preparationEn: 'Please arrange a clean home, choose the puja space, and ensure family members are present.',
  },
  {
    slug: 'ganpati-sthapana',
    name: 'गणपति स्थापना',
    nameEn: 'Ganpati Sthapana',
    category: 'देव पूजन',
    categoryEn: 'Devotional Puja',
    image: 'ganpatiStaphana',
    imageAlt: 'दीपों और पुष्पों के बीच विराजमान गणपति की प्रतिमा',
    imageAltEn: 'Ganpati idol surrounded by flowers and lamps',
    summary: 'विघ्नों की निवृत्ति और शुभ कार्यों की सफलता हेतु गणेश पूजन और स्थापना।',
    summaryEn: 'Ganesh puja and sthapana for auspicious beginnings and the removal of obstacles.',
    occasions: ['गणेशोत्सव', 'किसी नए कार्य का आरंभ'],
    occasionsEn: ['Ganesh festival', 'Beginning a new venture'],
    preparation: 'स्थापना का स्थान स्वच्छ रखें और मूर्ति तथा आसन की व्यवस्था पहले से कर लें।',
    preparationEn: 'Prepare a clean place for the sthapana and arrange the idol and its seat in advance.',
  },
  {
    slug: 'satyanarayan-katha',
    name: 'सत्यनारायण कथा',
    nameEn: 'Satyanarayan Katha',
    category: 'गृह एवं परिवार',
    categoryEn: 'Home & Family',
    image: 'satyanarayanKatha',
    imageAlt: 'परिवार के साथ घर में आयोजित सत्यनारायण कथा और हवन',
    imageAltEn: 'Satyanarayan Katha and havan being performed with a family',
    summary: 'परिवार की सुख-शांति, समृद्धि और कल्याण के लिए श्री सत्यनारायण भगवान की कथा।',
    summaryEn: 'A sacred Katha for family well-being, peace, and prosperity.',
    occasions: ['पारिवारिक मांगलिक अवसर', 'पूर्णिमा या विशेष तिथि'],
    occasionsEn: ['Family celebrations', 'Purnima or another auspicious date'],
    preparation: 'कथा के लिए शांत स्थान, बैठने की व्यवस्था और परिवार की उपस्थिति रखें।',
    preparationEn: 'Arrange a quiet space and seating, and invite family members to attend.',
  },
  {
    slug: 'rudrabhishek',
    name: 'रुद्राभिषेक',
    nameEn: 'Rudrabhishek',
    category: 'देव पूजन',
    categoryEn: 'Devotional Puja',
    image: 'rudrabhishek',
    imageAlt: 'पुष्पों से सजे अभिषेक मंडप में विराजमान शिवलिंग',
    imageAltEn: 'A Shiva lingam at a flower-adorned abhishek altar',
    summary: 'भगवान शिव की कृपा और सर्वांगीण कल्याण के लिए वैदिक रुद्राभिषेक अनुष्ठान।',
    summaryEn: 'A Vedic Rudrabhishek ritual seeking Lord Shiva’s blessings and well-being.',
    occasions: ['श्रावण मास', 'महाशिवरात्रि', 'विशेष संकल्प के अवसर'],
    occasionsEn: ['Shravan month', 'Maha Shivratri', 'A special spiritual sankalp'],
    preparation: 'अभिषेक के लिए आवश्यक सामग्री की सूची आचार्य जी से पहले मिलाकर तैयार रखें।',
    preparationEn: 'Confirm the required abhishek items with Acharya Ji and prepare them in advance.',
  },
  {
    slug: 'navgraha-shanti',
    name: 'नवग्रह शांति',
    nameEn: 'Navgraha Shanti',
    category: 'शांति अनुष्ठान',
    categoryEn: 'Peace Rituals',
    image: 'altar',
    imageAlt: 'पूजा के लिए सजे वेदी और देव चित्र',
    imageAltEn: 'A prepared altar with devotional images',
    summary: 'ग्रहों की अनुकूलता, शांति और जीवन में संतुलन हेतु वैदिक नवग्रह पूजन।',
    summaryEn: 'A Vedic Navgraha puja for planetary harmony, peace, and balance in life.',
    occasions: ['जन्मकुंडली के अनुसार परामर्श', 'शुभ कार्य से पूर्व'],
    occasionsEn: ['Guidance based on a birth chart', 'Before an auspicious undertaking'],
    preparation: 'जन्म विवरण साथ रखें और ग्रह स्थिति के अनुसार सही दिन और समय निश्चित करें।',
    preparationEn: 'Keep birth details ready and consult on a suitable date and time.',
  },
  {
    slug: 'shat-op',
    name: 'षट्-पूजन',
    nameEn: 'Shat-Pujan',
    category: 'देव पूजन',
    categoryEn: 'Devotional Puja',
    image: 'shatPujan',
    imageAlt: 'लाल कालीन पर पुष्पों से बनाए गए ॐ के साथ सजा पूजा मंडप',
    imageAltEn: 'A decorated puja mandap with a floral Om design',
    summary: 'विधि-विधान के साथ शत्-परिवार के लिए मंगलकारी मंत्रोच्चार और पूजा।',
    summaryEn: 'A traditional puja with auspicious chanting and rituals for the family.',
    occasions: ['मंगलमय त्योहार', 'पारिवारिक संस्कार'],
    occasionsEn: ['Auspicious festivals', 'Family ceremonies'],
    preparation: 'पूजा के लिए वस्त्र, पुष्प, धूप, दीप और स्नान सामग्री पहले से संगृहीत करें।',
    preparationEn: 'Arrange the required clothing, flowers, incense, lamps, and ritual items in advance.',
  },
  {
    slug: 'anusthan',
    name: 'अनुष्ठान / Anusthaan',
    nameEn: 'Anusthaan (Vedic Ritual)',
    category: 'विशेष अनुष्ठान',
    categoryEn: 'Special Rituals',
    image: 'anusthan',
    imageAlt: 'पुष्पों और वेदी से सजा पारंपरिक वैदिक अनुष्ठान स्थल',
    imageAltEn: 'A traditional Vedic ritual space decorated with flowers',
    summary: 'परिवार के संकल्प और आचार्य जी के मार्गदर्शन के अनुसार 7 या 9 दिनों का वैदिक अनुष्ठान।',
    summaryEn: 'A 7- or 9-day Vedic ritual planned around the family’s sankalp with Acharya Ji’s guidance.',
    occasions: ['7 दिवसीय अनुष्ठान', '9 दिवसीय अनुष्ठान'],
    occasionsEn: ['7-day ritual', '9-day ritual'],
    preparation: 'तिथि, संकल्प, अनुष्ठान की अवधि और आवश्यक सामग्री आचार्य जी से चर्चा करके तय करें।',
    preparationEn: 'Discuss the date, sankalp, duration, and required materials with Acharya Ji.',
  },
];

export const materials = [
  'दूध',
  'दही',
  'मधु',
  'पीला वस्त्र',
  'लाल वस्त्र',
  'देव वस्त्र',
  'चौकी',
  'नारियल',
  'कलश',
  'आम के पत्ते',
  'रोली और अक्षत',
  'पुष्प',
  'धूप और दीप',
];

export const materialsEn = [
  'Milk',
  'Yogurt',
  'Honey',
  'Yellow cloth',
  'Red cloth',
  'Clothes for the deity',
  'Puja chowki (low wooden platform)',
  'Coconut',
  'Kalash (ritual pot)',
  'Mango leaves',
  'Roli and akshat (rice)',
  'Flowers',
  'Incense and diya',
];

export const galleryImages: Array<{ image: ImageKey; alt: string; altEn: string; focus?: string }> = [
  { image: 'ganpatiAyojan', alt: 'रंगीन रोशनी और पुष्पों से सजा गणपति स्थापना स्थल', altEn: 'A Ganpati shrine decorated with colorful lights and flowers', focus: 'center 48%' },
  { image: 'pujaMandap', alt: 'पूजन के लिए पुष्प और रंगोली से सजा मंडप', altEn: 'A puja mandap decorated with flowers and rangoli', focus: 'center 48%' },
  { image: 'pujaAyojanWide', alt: 'पूजा सामग्री और देव चित्रों से सजा सुंदर वेदी स्थल', altEn: 'A home altar arranged with puja offerings and devotional images', focus: 'center 48%' },
  { image: 'radhaKrishna', alt: 'फूलों और मोरपंख की सजावट के बीच राधा-कृष्ण की सुंदर झाँकी', altEn: 'Radha and Krishna idols adorned with flowers and peacock-feather decorations', focus: 'center 48%' },
  { image: 'altar', alt: 'फल, पुष्प और पूजा सामग्री से सुसज्जित पूजन स्थल', altEn: 'A devotional altar arranged with fruit, flowers, and puja offerings', focus: 'center 48%' },
  { image: 'galleryGaneshPortrait', alt: 'पुष्पमालाओं से सुसज्जित भगवान गणेश की प्रतिमा', altEn: 'A Lord Ganesha idol adorned with flower garlands', focus: 'center 42%' },
  { image: 'bhagwatGita', alt: 'दीपक और पुष्पों के बीच रखी श्रीमद्भगवद्गीता', altEn: 'The Bhagavad Gita placed among flowers and a lit diya' },
  { image: 'galleryPujaCeremony', alt: 'परिवार के साथ अग्नि और पूजा सामग्री से संपन्न होता हवन', altEn: 'A family havan ceremony with sacred fire and puja offerings', focus: 'center 52%' },
  { image: 'pujaRitualPhoto', alt: 'गणपति प्रतिमा के समक्ष विधि-विधान से होता हवन', altEn: 'A havan ceremony performed before a Ganpati shrine', focus: 'center 48%' },
  { image: 'rudrabhishek', alt: 'पुष्पों से सजा भव्य शिव पूजन स्थल', altEn: 'A grand Shiva puja shrine decorated with flowers', focus: 'center 48%' },
  { image: 'anusthan', alt: 'पुष्पों से बना पवित्र ॐ और सजा अनुष्ठान मंडप', altEn: 'A sacred Om design and a decorated Anusthaan mandap', focus: 'center 54%' },
  { image: 'shatPujan', alt: 'रंगीन पुष्पों से सजी पारंपरिक पूजा रंगोली', altEn: 'A traditional puja rangoli arranged with colorful flowers', focus: 'center 48%' },
  { image: 'galleryFloralMandap', alt: 'कलश और पुष्प सज्जा से सुसज्जित मांगलिक पूजा वेदी', altEn: 'An auspicious puja altar decorated with kalash and flowers', focus: 'center 48%' },
];

export const contact = {
  phone: '+91 98203 08983',
  whatsapp: '919820308983',
  email: 'jainarayanpandey1980@gmail.com',
  location: 'भारत',
  mapUrl: 'https://share.google/a3rSouNMJ0S7fOi8q',
  social: {
    youtube: 'https://www.youtube.com/channel/UCAL_jf8zLfpZZ841ckdfaag',
    instagram: 'https://instagram.com/jai_pandey_80?psln=a25kdGFveW01dGpy',
    facebook: 'https://www.facebook.com/sukku.pandey.31',
  },
};

export const processSteps = [
  { hi: 'आवश्यकता, तिथि और पूजा का उद्देश्य बताएँ।', en: 'Share your needs, preferred date, and the purpose of the puja.' },
  { hi: 'आचार्य जी से शुभ समय और विधि पर चर्चा करें।', en: 'Discuss the auspicious time and the ritual with Acharya Ji.' },
  { hi: 'सामग्री, स्थान और व्यवस्था का समन्वय करें।', en: 'Coordinate the materials, venue, and arrangements.' },
  { hi: 'प्रसाद, ध्यान और भजन के साथ मंगलतम आयोजन संपन्न करें।', en: 'Complete the ceremony with prasad, reflection, and Bhajan.' },
];

export const faqHighlights = [
  { hi: 'वैदिक अनुष्ठान और मंगल संस्कार', en: 'Vedic rituals and auspicious ceremonies' },
  { hi: 'कथा, भजन और प्रेरक प्रवचन', en: 'Katha, Bhajan, and inspiring spiritual talks' },
  { hi: 'पारिवारिक, मंदिर एवं सार्वजनिक आयोजन', en: 'Family, temple, and community gatherings' },
  { hi: 'आचार्य जी द्वारा सरल मार्गदर्शन', en: 'Clear, personal guidance from Acharya Ji' },
];
