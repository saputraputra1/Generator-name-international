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
    const copyNotification = document.getElementById('copy-notification');

    // --- EVENT LISTENERS ---

    // Gender selection logic
    genderSelector.addEventListener('click', (e) => {
        const selectedOption = e.target.closest('.gender-option');
        if (!selectedOption) return;

        genderOptions.forEach(opt => opt.classList.remove('active'));
        selectedOption.classList.add('active');
        selectedOption.querySelector('input').checked = true;
    });

    // Country selection logic
    countrySelector.addEventListener('click', (e) => {
        const selectedOption = e.target.closest('.country-option');
        if (!selectedOption) return;

        countryOptions.forEach(opt => opt.classList.remove('active'));
        selectedOption.classList.add('active');
        selectedOption.querySelector('input').checked = true;
    });

    // Generate button click
    generateBtn.addEventListener('click', () => {
        const userName = nameInput.value.trim();
        const countryInput = document.querySelector('input[name="country"]:checked');

        // Basic validation
        if (!userName) {
            nameInput.classList.add('error');
            return;
        }

        const gender = document.querySelector('input[name="gender"]:checked').value;
        const country = countryInput.value;
        const countryName = countryInput.parentElement.querySelector('span').textContent.trim().split(' ')[1];

        const { latinName, nativeName } = generateInternationalName(gender, country);

        displayResult(userName, countryName, latinName, nativeName);
    });

    // Remove error state on input
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            nameInput.classList.remove('error');
        }
    });

    // Copy button click
    copyBtn.addEventListener('click', () => {
        const fullText = `${resultTitleEl.textContent}\n${latinNameEl.textContent}\n${nativeScriptEl.textContent}`;
        navigator.clipboard.writeText(fullText).then(() => {
            showCopyNotification();
        });
    });

    // --- FUNCTIONS ---

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function generateInternationalName(gender, country) {
        const latinFirst = getRandomItem(nameDatabase[country][gender].first);
        const latinLast = getRandomItem(nameDatabase[country][gender].last);
        const nativeFirst = getRandomItem(nativeScriptDatabase[country][gender].first);
        const nativeLast = getRandomItem(nativeScriptDatabase[country][gender].last);

        let latinName, nativeName;

        if (country === 'china' || country === 'japan' || country === 'korea') {
            latinName = `${latinLast} ${latinFirst}`;
            nativeName = `${nativeLast}${nativeFirst}`; // No space for these languages
        } else { // Russia
            latinName = `${latinFirst} ${latinLast}`;
            nativeName = `${nativeFirst} ${nativeLast}`;
        }

        return { latinName, nativeName };
    }

    function displayResult(userName, countryName, latinName, nativeName) {
        // Hide previous result to reset animation
        resultCard.classList.remove('visible');
        resultCard.classList.add('hidden');
        copyBtn.classList.remove('visible');
        copyBtn.classList.add('hidden');

        // Use a tiny timeout to allow the DOM to update
        setTimeout(() => {
            resultTitleEl.textContent = `${userName}, your ${countryName} name is:`;
            latinNameEl.textContent = latinName;
            nativeScriptEl.textContent = nativeName;

            resultCard.classList.remove('hidden');
            resultCard.classList.add('visible');
            copyBtn.classList.remove('hidden');
            copyBtn.classList.add('visible');
        }, 100);
    }

    function showCopyNotification() {
        copyNotification.classList.add('visible');
        setTimeout(() => {
            copyNotification.classList.remove('visible');
        }, 1500);
    }

    // --- INITIAL STATE ---
    // Set default active states on load
    document.querySelector('.gender-option input[checked]').parentElement.classList.add('active');
    document.querySelector('.country-option input[checked]').parentElement.classList.add('active');
});
