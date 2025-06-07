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
        'about-title': 'About JK Consultancy',
        'about-desc1': 'JK Consultancy has been helping people with their document needs since 2023. We specialize in all government document services with 100% genuine process.',
        'about-desc2': 'We will guide you through the entire process and ensure you get your documents without any hassle.',
        'feature1': 'Fast Processing',
        'feature2': 'Genuine Service',
        'feature3': 'Expert Guidance',
        
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
        'copyright': '© 2023 JK Consultancy. All Rights Reserved.'
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
        'about-title': 'JK કન્સલ્ટન્સી વિશે',
        'about-desc1': 'JK કન્સલ્ટન્સી 2023 થી લોકોને તેમના ડોક્યુમેન્ટ જરૂરિયાતોમાં મદદ કરી રહી છે. અમે 100% જેન્યુઇન પ્રક્રિયા સાથે તમામ સરકારી ડોક્યુમેન્ટ સેવાઓમાં વિશેષતા ધરાવીએ છીએ.',
        'about-desc2': 'અમારી નિષ્ણાત ટીમ તમને સંપૂર્ણ પ્રક્રિયા દરમિયાન માર્ગદર્શન આપશે અને તમને કોઈ પણ મુશ્કેલી વિના તમારા ડોક્યુમેન્ટ્સ મળે તેની ખાતરી કરશે.',
        'feature1': 'ઝડપી પ્રક્રિયા',
        'feature2': 'જેન્યુઇન સેવા',
        'feature3': 'નિષ્ણાત માર્ગદર્શન',
        
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
        'copyright': '© 2023 JK કન્સલ્ટન્સી. બધા હક્કો અનામત.'
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