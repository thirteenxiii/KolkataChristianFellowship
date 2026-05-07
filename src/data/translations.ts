export type Language = 'en' | 'bn' | 'hi';

export interface TranslationMap {
  [key: string]: {
    en: string;
    bn: string;
    hi: string;
  };
}

/**
 * Navbar UI translations
 * Keys are semantic identifiers, values are { en, bn, hi } tuples.
 */
export const navTranslations: TranslationMap = {
  'nav.home': {
    en: 'Home',
    bn: 'হোম',
    hi: 'होम',
  },
  'nav.about': {
    en: 'About',
    bn: 'পরিচিতি',
    hi: 'परिचय',
  },
  'nav.church_corner': {
    en: 'Church Corner',
    bn: 'চার্চ কর্নার',
    hi: 'चर्च कॉर्नर',
  },
  'nav.our_impact': {
    en: 'Our Impact',
    bn: 'আমাদের প্রভাব',
    hi: 'हमारा प्रभाव',
  },
  'nav.dna_study': {
    en: 'DNA Study',
    bn: 'ডিএনএ অধ্যয়ন',
    hi: 'डीएनए अध्ययन',
  },
  'nav.resources': {
    en: 'Resources',
    bn: 'সম্পদ',
    hi: 'संसाधन',
  },
  'nav.our_story': {
    en: 'Our Story',
    bn: 'আমাদের গল্প',
    hi: 'हमारी कहानी',
  },
  'nav.history': {
    en: 'History',
    bn: 'ইতিহাস',
    hi: 'इतिहास',
  },
  'nav.history_desc': {
    en: 'The journey of KCF from 2005',
    bn: '২০০৫ থেকে কেসিএফ-এর যাত্রা',
    hi: '2005 से KCF की यात्रा',
  },
  'nav.vision_mission': {
    en: 'Vision & Mission',
    bn: 'দর্শন ও লক্ষ্য',
    hi: 'दृष्टि और मिशन',
  },
  'nav.vision_mission_desc': {
    en: 'Our purpose and calling',
    bn: 'আমাদের উদ্দেশ্য ও আহ্বান',
    hi: 'हमारा उद्देश्य और बुलावा',
  },
  'nav.foundational_principles': {
    en: 'Foundational Principles',
    bn: 'ভিত্তিগত নীতি',
    hi: 'मूलभूत सिद्धांत',
  },
  'nav.foundational_principles_desc': {
    en: 'The B-U-I-L-D values',
    bn: 'বি-ইউ-আই-এল-ডি মূল্যবোধ',
    hi: 'B-U-I-L-D मूल्य',
  },
  'nav.beliefs_updates': {
    en: 'Beliefs & Updates',
    bn: 'বিশ্বাস ও আপডেট',
    hi: 'विश्वास और अपडेट',
  },
  'nav.statement_of_faith': {
    en: 'Statement of Faith',
    bn: 'বিশ্বাসের বিবৃতি',
    hi: 'विश्वास का वक्तव्य',
  },
  'nav.statement_of_faith_desc': {
    en: 'What we believe',
    bn: 'আমরা কী বিশ্বাস করি',
    hi: 'हम क्या मानते हैं',
  },
  'nav.updates_wall': {
    en: 'Updates Wall',
    bn: 'আপডেট ওয়াল',
    hi: 'अपडेट वॉल',
  },
  'nav.updates_wall_desc': {
    en: 'Latest news & announcements',
    bn: 'সর্বশেষ খবর ও ঘোষণা',
    hi: 'नवीनतम समाचार और घोषणाएं',
  },
  'nav.worship_services': {
    en: 'Worship Services',
    bn: 'উপাসনা সেবা',
    hi: 'आराधना सेवाएं',
  },
  'nav.kcf_main_service': {
    en: 'KCF Main Service',
    bn: 'কেসিএফ প্রধান সেবা',
    hi: 'KCF मुख्य सेवा',
  },
  'nav.kcf_main_service_desc': {
    en: 'Sunday worship at Mukundapur',
    bn: 'মুকুন্দপুরে রবিবারের উপাসনা',
    hi: 'मुकुंदपुर में रविवार आराधना',
  },
  'nav.hour_of_power': {
    en: 'Hour of Power',
    bn: 'শক্তির ঘন্টা',
    hi: 'शक्ति का घंटा',
  },
  'nav.hour_of_power_desc': {
    en: 'Sunday morning prayer',
    bn: 'রবিবার সকালের প্রার্থনা',
    hi: 'रविवार सुबह की प्रार्थना',
  },
  'nav.rajarhat_fellowship': {
    en: 'Rajarhat Fellowship',
    bn: 'রাজারহাট ফেলোশিপ',
    hi: 'राजारहाट फेलोशिप',
  },
  'nav.rajarhat_fellowship_desc': {
    en: 'New Town community',
    bn: 'নিউ টাউন সম্প্রদায়',
    hi: 'न्यू टाउन समुदाय',
  },
  'nav.ministries': {
    en: 'Ministries',
    bn: 'পরিষেবা',
    hi: 'सेवकाई',
  },
  'nav.kids_church': {
    en: 'Kids Church',
    bn: 'কিডস চার্চ',
    hi: 'किड्स चर्च',
  },
  'nav.kids_church_desc': {
    en: 'Ages 0–12 Sunday program',
    bn: '০-১২ বছর বয়সীদের রবিবার প্রোগ্রাম',
    hi: '0-12 वर्ष के बच्चों के लिए रविवार कार्यक्रम',
  },
  'nav.teens_on_track': {
    en: 'Teens on Track',
    bn: 'টিনস অন ট্র্যাক',
    hi: 'टीन्स ऑन ट्रैक',
  },
  'nav.teens_on_track_desc': {
    en: 'Youth ministry for teens',
    bn: 'কিশোরদের জন্য যুব পরিষেবা',
    hi: 'किशोरों के लिए युवा सेवकाई',
  },
  'nav.college_career': {
    en: 'College & Career',
    bn: 'কলেজ ও ক্যারিয়ার',
    hi: 'कॉलेज और करियर',
  },
  'nav.college_career_desc': {
    en: 'Young adults fellowship',
    bn: 'তরুণ প্রাপ্তবয়স্কদের ফেলোশিপ',
    hi: 'युवा वयस्क फेलोशिप',
  },
  'nav.freedom_church': {
    en: 'Freedom Church',
    bn: 'ফ্রিডম চার্চ',
    hi: 'फ्रीडम चर्च',
  },
  'nav.freedom_church_desc': {
    en: 'Hope & healing ministry',
    bn: 'আশা ও নিরাময় পরিষেবা',
    hi: 'आशा और उपचार सेवकाई',
  },
  'nav.bengali_mentorship': {
    en: 'Bengali Mentorship',
    bn: 'বাংলা মেন্টরশিপ',
    hi: 'बंगाली मेंटरशिप',
  },
  'nav.bengali_mentorship_desc': {
    en: 'Empowering Bengali leaders',
    bn: 'বাংলা নেতাদের ক্ষমতায়ন',
    hi: 'बंगाली नेताओं को सशक्त बनाना',
  },
  'nav.community_centers': {
    en: 'Community Centers',
    bn: 'কমিউনিটি সেন্টার',
    hi: 'सामुदायिक केंद्र',
  },
  'nav.sonarpur': {
    en: 'Sonarpur',
    bn: 'সোনারপুর',
    hi: 'सोनारपुर',
  },
  'nav.sonarpur_desc': {
    en: 'Community outreach & church',
    bn: 'কমিউনিটি আউটরিচ ও চার্চ',
    hi: 'सामुदायिक आउटरीच और चर्च',
  },
  'nav.madhyamgram': {
    en: 'Madhyamgram',
    bn: 'মধ্যমগ্রাম',
    hi: 'मध्यमग्राम',
  },
  'nav.madhyamgram_desc': {
    en: 'Rural development center',
    bn: 'গ্রামীণ উন্নয়ন কেন্দ্র',
    hi: 'ग्रामीण विकास केंद्र',
  },
  'nav.sulkuni': {
    en: 'Sulkuni',
    bn: 'শুলকুনি',
    hi: 'शुलकुनी',
  },
  'nav.sulkuni_desc': {
    en: 'Village ministry & medical camp',
    bn: 'গ্রাম পরিষেবা ও মেডিকেল ক্যাম্প',
    hi: 'गाँव सेवकाई और चिकित्सा शिविर',
  },
  'nav.initiatives': {
    en: 'Initiatives',
    bn: 'উদ্যোগ',
    hi: 'पहल',
  },
  'nav.nirmaan': {
    en: 'Nirmaan',
    bn: 'নির্মাণ',
    hi: 'निर्माण',
  },
  'nav.nirmaan_desc': {
    en: 'Child development program',
    bn: 'শিশু উন্নয়ন প্রোগ্রাম',
    hi: 'बाल विकास कार्यक्रम',
  },
  'nav.school_of_excellence': {
    en: 'School of Excellence',
    bn: 'স্কুল অফ এক্সেলেন্স',
    hi: 'स्कूल ऑफ एक्सीलेंस',
  },
  'nav.school_of_excellence_desc': {
    en: 'Education for survivors',
    bn: 'বেঁচে যাওয়াদের জন্য শিক্ষা',
    hi: 'उत्तरजीवियों के लिए शिक्षा',
  },
  'nav.micro_credit': {
    en: 'Micro Credit',
    bn: 'মাইক্রো ক্রেডিট',
    hi: 'माइक्रो क्रेडिट',
  },
  'nav.micro_credit_desc': {
    en: 'Women empowerment & loans',
    bn: 'মহিলা ক্ষমতায়ন ও ঋণ',
    hi: 'महिला सशक्तिकरण और ऋण',
  },
  'nav.early_church_series': {
    en: 'Early Church Series',
    bn: 'প্রাথমিক চার্চ সিরিজ',
    hi: 'प्रारंभिक चर्च श्रृंखला',
  },
  'nav.jerusalem': {
    en: 'Jerusalem',
    bn: 'জেরুজালেম',
    hi: 'यरूशलेम',
  },
  'nav.jerusalem_desc': {
    en: 'A Church that set STANDARDS',
    bn: 'একটি চার্চ যা মানদণ্ড স্থাপন করেছিল',
    hi: 'एक चर्च जिसने मानक स्थापित किए',
  },
  'nav.antioch': {
    en: 'Antioch',
    bn: 'আন্তিয়োকিয়া',
    hi: 'अन्ताकिया',
  },
  'nav.antioch_desc': {
    en: 'A SENDING Church',
    bn: 'একটি প্রেরণকারী চার্চ',
    hi: 'एक भेजने वाला चर्च',
  },
  'nav.macedonia': {
    en: 'Macedonia',
    bn: 'ম্যাসিডোনিয়া',
    hi: 'मकिदुनिया',
  },
  'nav.macedonia_desc': {
    en: 'A SHARING Church',
    bn: 'একটি ভাগ করে নেওয়া চার্চ',
    hi: 'एक साझा करने वाला चर्च',
  },
  'nav.philippi': {
    en: 'Philippi',
    bn: 'ফিলিপি',
    hi: 'फिलिप्पी',
  },
  'nav.philippi_desc': {
    en: 'A SUPPORTING Church',
    bn: 'একটি সমর্থনকারী চার্চ',
    hi: 'एक समर्थन करने वाला चर्च',
  },
  'nav.berea': {
    en: 'Berea',
    bn: 'বেরিয়া',
    hi: 'बेरिया',
  },
  'nav.berea_desc': {
    en: 'A STUDYING Church',
    bn: 'একটি অধ্যয়নরত চার্চ',
    hi: 'एक अध्ययन करने वाला चर्च',
  },
  'nav.thessalonica': {
    en: 'Thessalonica',
    bn: 'থেসালোনিকা',
    hi: 'थिस्सलुनीका',
  },
  'nav.thessalonica_desc': {
    en: 'The SECOND-COMING Church',
    bn: 'একটি দ্বিতীয়-আগমন চার্চ',
    hi: 'दूसरे आगमन का चर्च',
  },
  'nav.media': {
    en: 'Media',
    bn: 'মিডিয়া',
    hi: 'मीडिया',
  },
  'nav.sermons_notes': {
    en: 'Sermons & Notes',
    bn: 'উপদেশ ও নোট',
    hi: 'उपदेश और नोट्स',
  },
  'nav.sermons_notes_desc': {
    en: 'PDF sermon notes',
    bn: 'পিডিএফ উপদেশ নোট',
    hi: 'PDF उपदेश नोट्स',
  },
  'nav.videos': {
    en: 'Videos',
    bn: 'ভিডিও',
    hi: 'वीडियो',
  },
  'nav.videos_desc': {
    en: 'Sermon video library',
    bn: 'উপদেশ ভিডিও লাইব্রেরি',
    hi: 'उपदेश वीडियो लाइब्रेरी',
  },
  'nav.photos': {
    en: 'Photos',
    bn: 'ছবি',
    hi: 'तस्वीरें',
  },
  'nav.photos_desc': {
    en: 'Church photo gallery',
    bn: 'চার্চ ফটো গ্যালারি',
    hi: 'चर्च फोटो गैलरी',
  },
  'nav.connect': {
    en: 'Connect',
    bn: 'সংযোগ',
    hi: 'जुड़ें',
  },
  'nav.prayer_wall': {
    en: 'Prayer Wall',
    bn: 'প্রার্থনা ওয়াল',
    hi: 'प्रार्थना दीवार',
  },
  'nav.prayer_wall_desc': {
    en: 'Submit prayer requests',
    bn: 'প্রার্থনার অনুরোধ জমা দিন',
    hi: 'प्रार्थना अनुरोध सबमिट करें',
  },
  'nav.our_partners': {
    en: 'Our Partners',
    bn: 'আমাদের অংশীদার',
    hi: 'हमारे साझेदार',
  },
  'nav.our_partners_desc': {
    en: 'Mission partners',
    bn: 'মিশন অংশীদার',
    hi: 'मिशन साझेदार',
  },
  'nav.contact_us': {
    en: 'Contact Us',
    bn: 'যোগাযোগ করুন',
    hi: 'संपर्क करें',
  },
  'nav.contact_us_desc': {
    en: 'Get in touch',
    bn: 'যোগাযোগ করুন',
    hi: 'संपर्क करें',
  },
  'nav.resource_corner': {
    en: 'Resource Corner',
    bn: 'রিসোর্স কর্নার',
    hi: 'संसाधन कॉर्नर',
  },
  'nav.resource_corner_desc': {
    en: 'Audio, PDF & more',
    bn: 'অডিও, পিডিএফ ও আরও',
    hi: 'ऑडियो, PDF और अधिक',
  },
  'nav.close_menu': {
    en: 'Close menu',
    bn: 'মেনু বন্ধ করুন',
    hi: 'मेनू बंद करें',
  },
  'nav.open_menu': {
    en: 'Open menu',
    bn: 'মেনু খুলুন',
    hi: 'मेनू खोलें',
  },
  'nav.sunday_service': {
    en: 'Sunday: 9:45 AM & 11:00 AM',
    bn: 'রবিবার: সকাল ৯:৪৫ ও ১১:০০',
    hi: 'रविवार: सुबह 9:45 और 11:00 बजे',
  },
  'nav.location': {
    en: 'Mukundapur, Kolkata',
    bn: 'মুকুন্দপুর, কলকাতা',
    hi: 'मुकुंदपुर, कोलकाता',
  },
  'nav.email': {
    en: 'kcf@kolkatachristianfellowship.net',
    bn: 'kcf@kolkatachristianfellowship.net',
    hi: 'kcf@kolkatachristianfellowship.net',
  },
  'nav.tagline': {
    en: 'Encountering · Equipping · Encouraging',
    bn: 'মিলন · প্রস্তুতি · উৎসাহ',
    hi: 'मिलन · तैयारी · प्रोत्साहन',
  },
};

/** Helper: get a translated string for a given key and language */
export function t(key: string, lang: Language): string {
  return navTranslations[key]?.[lang] ?? key;
}
