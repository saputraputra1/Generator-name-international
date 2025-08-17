document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const nameInput = document.getElementById('name-input');
    const genderSelector = document.querySelector('.gender-selector');
    const genderOptions = document.querySelectorAll('.gender-option');
    const countrySelector = document.querySelector('.country-selector');
    const countryOptions = document.querySelectorAll('.country-option');
    const generateBtn = document.getElementById('generate-btn');
    const resultCard = document.getElementById('result-card');
    const resultTitleEl = document.getElementById('result-title');
    const latinNameEl = document.getElementById('latin-name');
    const nativeScriptEl = document.getElementById('native-script');
    const copyBtn = document.getElementById('copy-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const copyNotification = document.getElementById('copy-notification');
    const flagBackdrop = document.getElementById('flag-backdrop');

    // New result detail elements
    const nameDetailsContainer = document.getElementById('name-details');
    const firstNameText = document.getElementById('first-name-text');
    const firstNameMeaning = document.getElementById('first-name-meaning');
    const firstNameHistory = document.getElementById('first-name-history');
    const lastNameText = document.getElementById('last-name-text');
    const lastNameMeaning = document.getElementById('last-name-meaning');
    const lastNameHistory = document.getElementById('last-name-history');


    // --- VOICE SYNTHESIS SETUP ---
    let speechVoices = [];

    function loadVoices() {
        speechVoices = speechSynthesis.getVoices();
    }

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }


    // --- EVENT LISTENERS ---

    genderSelector.addEventListener('click', (e) => {
        const selectedOption = e.target.closest('.gender-option');
        if (!selectedOption) return;
        genderOptions.forEach(opt => opt.classList.remove('active'));
        selectedOption.classList.add('active');
        selectedOption.querySelector('input').checked = true;
    });

    countrySelector.addEventListener('click', (e) => {
        const selectedOption = e.target.closest('.country-option');
        if (!selectedOption) return;
        const countryValue = selectedOption.querySelector('input').value;
        updateFlagBackdrop(countryValue);
        countryOptions.forEach(opt => opt.classList.remove('active'));
        selectedOption.classList.add('active');
        selectedOption.querySelector('input').checked = true;
    });

    generateBtn.addEventListener('click', () => {
        const userName = nameInput.value.trim();
        const countryInput = document.querySelector('input[name="country"]:checked');

        if (!userName) {
            nameInput.classList.add('error');
            return;
        }

        const gender = document.querySelector('input[name="gender"]:checked').value;
        const country = countryInput.value;
        const countryName = countryInput.parentElement.querySelector('span').textContent.trim().replace(/^[^\s]+ /, '');


        const { firstNameObj, lastNameObj } = generateInternationalName(gender, country);

        displayResult(userName, countryName, firstNameObj, lastNameObj, country);
    });

    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            nameInput.classList.remove('error');
        }
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = `
Nama Internasional untuk: ${resultTitleEl.textContent.split(',')[0]}
Negara: ${resultTitleEl.textContent.split('your ')[1].split(' name')[0]}

Nama Lengkap: ${latinNameEl.textContent} (${nativeScriptEl.textContent})

--- Detail ---
Nama Depan: ${firstNameText.textContent}
Arti: ${firstNameMeaning.textContent}
Sejarah: ${firstNameHistory.textContent}

Nama Belakang/Marga: ${lastNameText.textContent}
Arti: ${lastNameMeaning.textContent}
Sejarah: ${lastNameHistory.textContent}
        `.trim();

        navigator.clipboard.writeText(textToCopy).then(() => {
            showCopyNotification();
        });
    });

    voiceBtn.addEventListener('click', () => {
        const textToSpeak = latinNameEl.textContent;
        if (textToSpeak) {
            const country = document.querySelector('input[name="country"]:checked').value;
            speakName(textToSpeak, country);
        }
    });

    // --- FUNCTIONS ---

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function generateInternationalName(gender, country) {
        const firstNameObj = getRandomItem(nameDatabase[country][gender].first);
        const lastNameObj = getRandomItem(nameDatabase[country][gender].last);
        return { firstNameObj, lastNameObj };
    }

    function displayResult(userName, countryName, firstNameObj, lastNameObj, country) {
        resultCard.classList.remove('visible');
        resultCard.classList.add('hidden');
        copyBtn.classList.add('hidden');
        voiceBtn.classList.add('hidden');
        nameDetailsContainer.classList.add('hidden');

        let latinName, nativeName;
        if (country === 'china' || country === 'japan' || country === 'korea') {
            latinName = `${lastNameObj.name} ${firstNameObj.name}`;
            nativeName = `${lastNameObj.native}${firstNameObj.native}`;
        } else {
            latinName = `${firstNameObj.name} ${lastNameObj.name}`;
            nativeName = `${firstNameObj.native} ${lastNameObj.native}`;
        }

        setTimeout(() => {
            resultTitleEl.textContent = `${userName}, your ${countryName} name is:`;
            latinNameEl.textContent = latinName;
            nativeScriptEl.textContent = nativeName;

            // Populate details
            firstNameText.textContent = firstNameObj.name;
            firstNameMeaning.textContent = firstNameObj.meaning;
            firstNameHistory.textContent = firstNameObj.history;

            lastNameText.textContent = lastNameObj.name;
            lastNameMeaning.textContent = lastNameObj.meaning;
            lastNameHistory.textContent = lastNameObj.history;

            resultCard.classList.remove('hidden');
            resultCard.classList.add('visible');
            copyBtn.classList.remove('hidden');
            voiceBtn.classList.remove('hidden');
            nameDetailsContainer.classList.remove('hidden');
        }, 100);
    }

    function speakName(text, country) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            russia: 'ru-RU',
            china: 'zh-CN',
            japan: 'ja-JP',
            korea: 'ko-KR',
            spain: 'es-ES',
            brazil: 'pt-BR',
            netherlands: 'nl-NL',
            vietnam: 'vi-VN'
        };

        const targetLang = langMap[country];
        if (targetLang) {
            utterance.lang = targetLang;
            const voice = speechVoices.find(v => v.lang === targetLang);
            if (voice) {
                utterance.voice = voice;
            }
        }
        speechSynthesis.speak(utterance);
    }

    function showCopyNotification() {
        copyNotification.classList.add('visible');
        setTimeout(() => {
            copyNotification.classList.remove('visible');
        }, 1500);
    }

    function updateFlagBackdrop(country) {
        const flags = ['russia', 'china', 'japan', 'korea', 'spain', 'brazil', 'netherlands', 'vietnam'];
        flags.forEach(flag => flagBackdrop.classList.remove(`${flag}-flag`));

        flagBackdrop.classList.add(`${country}-flag`);
        if (!flagBackdrop.classList.contains('visible')) {
            flagBackdrop.classList.add('visible');
        }
    }

    // --- INITIAL STATE ---
    document.querySelector('.gender-option input[checked]').parentElement.classList.add('active');
    const initialCountryOption = document.querySelector('.country-option input[checked]');
    initialCountryOption.parentElement.classList.add('active');
    updateFlagBackdrop(initialCountryOption.value);
});
