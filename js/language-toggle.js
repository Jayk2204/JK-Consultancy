document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const enBtn = document.getElementById('en-btn');
    const guBtn = document.getElementById('gu-btn');
    
    // English content
    const englishContent = {
        'home': 'Home',
        'services': 'Services',
        'about': 'About Us',
        'contact': 'Contact',
        'hero-title': 'Your Complete Document Solution Provider',
        'hero-sub': 'Get all your documents - Aadhar, PAN, Ration Card and more - quickly and reliably',
        'explore-btn': 'Explore Services',
        'services-title': 'Our Services',
        'services-sub': 'Click on any service to see requirements and process',
        
        // PAN Card
        'pan-new-title': 'PAN Card (New)',
        'pan-new-desc': 'New Application',
        'pan-new-req': 'Requirements:',
        'pan-new-list': ['Aadhaar Card Photo', 'Signature Photo', 'Passport Size Photo', 'Mobile Number', 'Father\'s Full Name'],
        'pan-correction-title': 'PAN Card (Correction)',
        'pan-correction-desc': 'Update/Correct Details',
        'pan-correction-req': 'Requirements:',
        'pan-correction-list': ['Aadhaar Card Photo', 'Existing PAN Card Photo', 'Signature Photo', 'Passport Size Photo', 'Mobile Number', 'Father\'s Full Name'],
        
        // Election Card
        'election-title': 'Election Card (New/Correction)',
        'election-desc': 'Voter ID Services',
        'election-req': 'Requirements:',
        'election-list': ['Aadhaar Card Photo', 'Passport Size Photo', 'Electricity Bill', 'Mobile Number'],
        
        // Ayushman Card
        'ayushman-title': 'Ayushman Card',
        'ayushman-desc': 'Health Insurance Scheme',
        'ayushman-req': 'Requirements:',
        'ayushman-list': ['Income Proof Photo', 'Ration Card Photo', 'Each family member\'s Aadhaar Card', 'Mobile Number'],
        
        // E-Shram Card
        'eshram-title': 'E-Shram Card',
        'eshram-desc': 'For Unorganized Workers',
        'eshram-req': 'Requirements:',
        'eshram-list': ['Aadhaar Card Photo', 'Bank Passbook Photo', 'Nominee\'s Aadhaar Card', 'Mobile Number'],
        
        // ABHA Card
        'abha-title': 'ABHA Card',
        'abha-desc': 'Health ID Card',
        'abha-req': 'Requirements:',
        'abha-list': ['Aadhaar Card Photo', 'Blood Group', 'Mobile Number'],
        
        // Aadhaar Corrections
        'aadhaar-correction-title': 'Aadhaar Correction (Name/Address)',
        'aadhaar-correction-desc': 'Update Details',
        'aadhaar-correction-req': 'Requirements:',
        'aadhaar-correction-list': ['Election Card Photo OR', 'Driving License Photo OR', 'Passport Photo'],
        
        'aadhaar-dob-title': 'Aadhaar Correction (DOB)',
        'aadhaar-dob-desc': 'Date of Birth Update',
        'aadhaar-dob-req': 'Requirements:',
        'aadhaar-dob-list': ['Passport Photo OR', 'Birth Certificate Photo'],
        
        'aadhaar-mobile-title': 'Aadhaar Mobile Linking',
        'aadhaar-mobile-desc': 'Link Mobile Number',
        'aadhaar-mobile-req': 'Requirements:',
        'aadhaar-mobile-list': ['Aadhaar Card', 'Mobile Number'],
        
        // Contact Button
        'contact-btn': 'Contact on WhatsApp',
        
        // About Section
       'about-title': 'JK Consultancy - Your Document Solutions',
  'timeline-1-title': 'Founded in 2022',
  'timeline-1-desc': 'Started with a vision to simplify document processes in Ahmedabad',
  'timeline-2-title': '1000+ Clients Served',
  'timeline-2-desc': 'Trusted by families & businesses across Gujarat',
  'usp-1-title': 'Gujarati & English Support',
  'usp-1-desc': 'We speak your language for clear communication',
  'usp-2-title': 'Zero Rejections',
  'usp-2-desc': '100% approval rate for applications we process',
  'founder-quote': `"Our mission is to turn your document struggles into 1-day solutions.<br>
                   Leave the paperwork worries to us!"`,
        
        // Contact Section
        'contact-title': 'Contact Us',
        'call': 'Call Us',
        'whatsapp': 'WhatsApp',
        'click-here': 'Click here to chat',
        'address': 'Address',
        'office-address': 'A/36, Gayatri Society, Geratpur, Ahmedabad-382435',
        'name-placeholder': 'Your Name',
        'email-placeholder': 'Your Email',
        'phone-placeholder': 'Phone Number',
        'service-placeholder': 'Select Service',
        'option-pan-new': 'PAN Card (New)',
        'option-pan-correction': 'PAN Card (Correction)',
        'option-election': 'Election Card',
        'option-ayushman': 'Ayushman Card',
        'option-eshram': 'E-Shram Card',
        'option-abha': 'ABHA Card',
        'option-aadhaar-correction': 'Aadhaar Correction',
        'option-aadhaar-mobile': 'Aadhaar Mobile Linking',
        'message-placeholder': 'Your Message',
        'submit-btn': 'Submit',
        
        // Footer
        'quick-links': 'Quick Links',
        'services-footer': 'Services',
        'pan-footer': 'PAN Card',
        'election-footer': 'Election Card',
        'ayushman-footer': 'Ayushman Card',
        'eshram-footer': 'E-Shram Card',
        'abha-footer': 'ABHA Card',
        'aadhaar-footer': 'Aadhaar Services',
        'contact-footer': 'Contact',
        'copyright': '© 2025 JK Consultancy. All Rights Reserved.'
    };
    
    // Gujarati content
    const gujaratiContent = {
        'home': 'હોમ',
        'services': 'સેવાઓ',
        'about': 'અમારા વિશે',
        'contact': 'સંપર્ક કરો',
        'hero-title': 'તમારી સંપૂર્ણ ડોક્યુમેન્ટ સોલ્યુશન પ્રોવાઇડર',
        'hero-sub': 'તમારા બધા ડોક્યુમેન્ટ્સ - આધાર, PAN, રેશન કાર્ડ અને વધુ - ઝડપથી અને વિશ્વસનીય રીતે મેળવો',
        'explore-btn': 'સેવાઓ એક્સપ્લોર કરો',
        'services-title': 'અમારી સેવાઓ',
        'services-sub': 'જરૂરીયાતો અને પ્રક્રિયા જોવા માટે કોઈપણ સેવા પર ક્લિક કરો',
        
        // PAN Card
        'pan-new-title': 'પાન કાર્ડ (નવું)',
        'pan-new-desc': 'નવી અરજી',
        'pan-new-req': 'જરૂરીયાતો:',
        'pan-new-list': ['આધાર કાર્ડ નો ફોટો', 'સહી નો ફોટો', 'પાસપોર્ટ સાઇઝ ફોટો', 'મોબાઇલ નંબર', 'પિતા નું પૂરું નામ'],
        'pan-correction-title': 'પાન કાર્ડ (સુધારા)',
        'pan-correction-desc': 'વિગતો સુધારો',
        'pan-correction-req': 'જરૂરીયાતો:',
        'pan-correction-list': ['આધાર કાર્ડ નો ફોટો', 'પાન કાર્ડ નો ફોટો', 'સહી નો ફોટો', 'પાસપોર્ટ સાઇઝ ફોટો', 'મોબાઇલ નંબર', 'પિતા નું પૂરું નામ'],
        
        // Election Card
        'election-title': 'ચૂંટણી કાર્ડ (નવું/સુધારા)',
        'election-desc': 'વોટર આઈડી સેવાઓ',
        'election-req': 'જરૂરીયાતો:',
        'election-list': ['આધાર કાર્ડ નો ફોટો', 'પાસપોર્ટ સાઇઝ નો ફોટો', 'લાઈટ બીલ', 'મોબાઇલ નંબર'],
        
        // Ayushman Card
        'ayushman-title': 'આયુષ્યમાન કાર્ડ',
        'ayushman-desc': 'સ્વાસ્થ્ય વીમા યોજના',
        'ayushman-req': 'જરૂરીયાતો:',
        'ayushman-list': ['આવક નો દાખલો નો ફોટો', 'રેશન કાર્ડ નો ફોટો', 'દરેક વ્યકિત નાં આધાર કાર્ડ', 'મોબાઇલ નંબર'],
        
        // E-Shram Card
        'eshram-title': 'ઈ શ્રમ કાર્ડ',
        'eshram-desc': 'અસંગઠિત કામદારો માટે',
        'eshram-req': 'જરૂરીયાતો:',
        'eshram-list': ['આધારકાર્ડ નો ફોટો', 'બેંક પાસબુક નો ફોટો', 'નોમીની નું આધાર કાર્ડ', 'મોબાઇલ નંબર'],
        
        // ABHA Card
        'abha-title': 'આભા કાર્ડ',
        'abha-desc': 'સ્વાસ્થ્ય આઈડી કાર્ડ',
        'abha-req': 'જરૂરીયાતો:',
        'abha-list': ['આધાર કાર્ડ નો ફોટો', 'બ્લડ ગ્રુપ', 'મોબાઇલ નંબર'],
        
        // Aadhaar Corrections
        'aadhaar-correction-title': 'આધારકાર્ડ સુધારો (નામ/સરનામું)',
        'aadhaar-correction-desc': 'વિગતો સુધારો',
        'aadhaar-correction-req': 'જરૂરીયાતો:',
        'aadhaar-correction-list': ['ચૂંટણી કાર્ડ નો ફોટો અથવા', 'ડ્રાઇવિંગ લાઇસન્સ નો ફોટો અથવા', 'પાસપોર્ટ નો ફોટો'],
        
        'aadhaar-dob-title': 'આધારકાર્ડ સુધારો (જન્મ તારીખ)',
        'aadhaar-dob-desc': 'જન્મ તારીખ સુધારો',
        'aadhaar-dob-req': 'જરૂરીયાતો:',
        'aadhaar-dob-list': ['પાસપોર્ટ નો ફોટો અથવા', 'જન્મ નાં દાખલા નો ફોટો'],
        
        'aadhaar-mobile-title': 'આધારકાર્ડ મોબાઇલ લિંકિંગ',
        'aadhaar-mobile-desc': 'મોબાઇલ નંબર લિંક કરો',
        'aadhaar-mobile-req': 'જરૂરીયાતો:',
        'aadhaar-mobile-list': ['આધાર કાર્ડ', 'મોબાઇલ નંબર'],
        
        // Contact Button
        'contact-btn': 'WhatsApp પર સંપર્ક કરો',
        
        // About Section
        'about-title': 'જે.કે. કન્સલ્ટન્સી - તમારી ડોક્યુમેન્ટ સોલ્યુશન્સ',
  'timeline-1-title': '૨૦૨૨માં સ્થાપના',
  'timeline-1-desc': 'અમદાવાદમાં ડોક્યુમેન્ટ પ્રક્રિયાઓ સરળ બનાવવાની દ્રષ્ટિથી શરૂઆત',
  'timeline-2-title': '૧૦૦૦+ ક્લાયન્ટ્સ',
  'timeline-2-desc': 'ગુજરાતભરના પરિવારો અને વ્યવસાયોનો વિશ્વાસ',
  'usp-1-title': 'ગુજરાતી અને અંગ્રેજી સપોર્ટ',
  'usp-1-desc': 'અમે તમારી ભાષામાં સ્પષ્ટ સંચાર કરીએ છીએ',
  'usp-2-title': 'શૂન્ય નામંજૂરી',
  'usp-2-desc': 'અમે પ્રોસેસ કરેલી અરજીઓનો ૧૦૦% અપ્રૂવલ રેટ',
  'founder-quote': `"અમારું ધ્યેય તમારી ડોક્યુમેન્ટ સમસ્યાઓને 1-દિવસની સોલ્યુશન્સમાં ફેરવવાનું છે.<br>
                   પત્રકોની ચિંતા છોડો, અમે સંભાળીશું!"`,
        
        // Contact Section
        'contact-title': 'અમારો સંપર્ક કરો',
        'call': 'અમને કૉલ કરો',
        'whatsapp': 'WhatsApp',
        'click-here': 'ચેટ કરવા માટે અહીં ક્લિક કરો',
        'address': 'સરનામું',
        'office-address': 'એ/૩૬, ગાયત્રી સોસાયટી, ગેરતપુર, અમદાવાદ-૩૮૨૪૩૫',
        'name-placeholder': 'તમારું નામ',
        'email-placeholder': 'તમારું ઇમેઇલ',
        'phone-placeholder': 'ફોન નંબર',
        'service-placeholder': 'સેવા પસંદ કરો',
        'option-pan-new': 'પાન કાર્ડ (નવું)',
        'option-pan-correction': 'પાન કાર્ડ (સુધારા)',
        'option-election': 'ચૂંટણી કાર્ડ',
        'option-ayushman': 'આયુષ્યમાન કાર્ડ',
        'option-eshram': 'ઈ શ્રમ કાર્ડ',
        'option-abha': 'આભા કાર્ડ',
        'option-aadhaar-correction': 'આધારકાર્ડ સુધારો',
        'option-aadhaar-mobile': 'આધારકાર્ડ મોબાઇલ લિંકિંગ',
        'message-placeholder': 'તમારો સંદેશ',
        'submit-btn': 'સબમિટ કરો',
        
        // Footer
        'quick-links': 'ઝડપી લિંક્સ',
        'services-footer': 'સેવાઓ',
        'pan-footer': 'પાન કાર્ડ',
        'election-footer': 'ચૂંટણી કાર્ડ',
        'ayushman-footer': 'આયુષ્યમાન કાર્ડ',
        'eshram-footer': 'ઈ શ્રમ કાર્ડ',
        'abha-footer': 'આભા કાર્ડ',
        'aadhaar-footer': 'આધારકાર્ડ સેવાઓ',
        'contact-footer': 'સંપર્ક',
        'copyright': '© 2025 JK કન્સલ્ટન્સી. બધા હક્કો અનામત.'
    };
    
    // Function to set language
    function setLanguage(lang) {
        const content = lang === 'en' ? englishContent : gujaratiContent;
        
        // Update all elements with language classes
        Object.keys(content).forEach(key => {
            const elements = document.querySelectorAll(`.lang-${key}`);
            if (elements.length > 0) {
                elements.forEach(el => {
                    if (Array.isArray(content[key])) {
                        // Handle lists
                        if (el.classList.contains('lang-pan-new-list') || 
                            el.classList.contains('lang-pan-correction-list') ||
                            el.classList.contains('lang-election-list') ||
                            el.classList.contains('lang-ayushman-list') ||
                            el.classList.contains('lang-eshram-list') ||
                            el.classList.contains('lang-abha-list') ||
                            el.classList.contains('lang-aadhaar-correction-list') ||
                            el.classList.contains('lang-aadhaar-dob-list') ||
                            el.classList.contains('lang-aadhaar-mobile-list')) {
                            let html = '';
                            content[key].forEach(item => {
                                html += `<li>${item}</li>`;
                            });
                            el.innerHTML = html;
                        }
                    } else {
                        // Handle regular text
                        el.textContent = content[key];
                    }
                });
            }
        });
        
        // Update active button
        if (lang === 'en') {
            enBtn.classList.add('active');
            guBtn.classList.remove('active');
        } else {
            guBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
        
        // Store language preference
        localStorage.setItem('jk-consultancy-lang', lang);
    }
    
    // Event listeners for language buttons
    enBtn.addEventListener('click', () => setLanguage('en'));
    guBtn.addEventListener('click', () => setLanguage('gu'));
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('jk-consultancy-lang') || 'en';
    setLanguage(savedLang);
});