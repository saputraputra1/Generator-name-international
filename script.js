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
    const ktpBtn = document.getElementById('ktp-btn');
    const copyNotification = document.getElementById('copy-notification');
    const flagBackdrop = document.getElementById('flag-backdrop');

    // KTP Modal Elements
    const ktpModal = document.getElementById('ktp-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');

    // New result detail elements
    const nameDetailsContainer = document.getElementById('name-details');
    const firstNameText = document.getElementById('first-name-text');
    const firstNameMeaning = document.getElementById('first-name-meaning');
    const firstNameHistory = document.getElementById('first-name-history');
    const lastNameText = document.getElementById('last-name-text');
    const lastNameMeaning = document.getElementById('last-name-meaning');
    const lastNameHistory = document.getElementById('last-name-history');


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

    ktpBtn.addEventListener('click', () => {
        const country = document.querySelector('input[name="country"]:checked').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const fullName = latinNameEl.textContent;

        const ktpData = generateKtpData(fullName, gender, country);
        displayKtp(ktpData);
    });

    modalCloseBtn.addEventListener('click', () => {
        ktpModal.classList.add('hidden');
    });

    ktpModal.addEventListener('click', (e) => {
        if (e.target === ktpModal) {
            ktpModal.classList.add('hidden');
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
        ktpBtn.classList.add('hidden');
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
            ktpBtn.classList.remove('hidden');
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
        if (langMap[country]) {
            utterance.lang = langMap[country];
        }
        speechSynthesis.speak(utterance);
    }

    function showCopyNotification() {
        copyNotification.classList.add('visible');
        setTimeout(() => {
            copyNotification.classList.remove('visible');
        }, 1500);
    }

    function generateKtpData(fullName, gender, country) {
        const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const pad = (num) => num.toString().padStart(2, '0');

        // Generate Random DOB
        const day = randomInt(1, 28);
        const month = randomInt(1, 12);
        const year = randomInt(1970, 2004);
        const dob = `${pad(day)}-${pad(month)}-${year}`;

        // Generate NIK from DOB and random numbers
        const nikDay = gender === 'female' ? day + 40 : day;
        const nik = `${randomInt(31,36)}${randomInt(1,70)}${pad(nikDay)}${pad(month)}${year.toString().slice(2)}${randomInt(1000,9999)}`;

        const countryCapitals = {
            russia: "MOSCOW",
            china: "BEIJING",
            japan: "TOKYO",
            korea: "SEOUL",
            spain: "MADRID",
            brazil: "BRASILIA",
            netherlands: "AMSTERDAM",
            vietnam: "HANOI"
        };

        return {
            nik: `: ${nik}`,
            nama: `: ${fullName.toUpperCase()}`,
            ttl: `: ${countryCapitals[country] || 'IBU KOTA'}, ${dob}`,
            gender: `: ${gender === 'male' ? 'LAKI-LAKI' : 'PEREMPUAN'}`,
            kewarganegaraan: ': WNA',
            kota: countryCapitals[country] || 'IBU KOTA',
            tanggal_terbit: `${pad(day)}/${pad(month)}/${year + 20}`
        };
    }

    function displayKtp(data) {
        document.getElementById('ktp-nik').textContent = data.nik;
        document.getElementById('ktp-nama').textContent = data.nama;
        document.getElementById('ktp-ttl').textContent = data.ttl;
        document.getElementById('ktp-gender').textContent = data.gender;
        document.getElementById('ktp-kewarganegaraan').textContent = data.kewarganegaraan;
        document.getElementById('ktp-kota').textContent = data.kota;
        document.getElementById('ktp-kota-ttd').textContent = `${data.kota}, ${data.tanggal_terbit}`;
        document.getElementById('ktp-nama-ttd').textContent = `(${data.nama.replace(': ', '')})`;

        ktpModal.classList.remove('hidden');
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
