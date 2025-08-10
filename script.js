document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE ---
    const nameDatabase = {
        russia: {
            male: {
                first: ["Ivan", "Dmitri", "Sergei", "Alexei", "Mikhail", "Nikolai", "Andrei", "Vladimir", "Yuri", "Pavel"],
                last: ["Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov"]
            },
            female: {
                first: ["Anna", "Maria", "Elena", "Olga", "Tatiana", "Natalia", "Irina", "Svetlana", "Yulia", "Ekaterina"],
                last: ["Ivanova", "Smirnova", "Kuznetsova", "Popova", "Vasilieva", "Petrova", "Sokolova", "Mikhailova", "Fedorova", "Morozova"]
            }
        },
        china: {
            male: {
                first: ["Wei", "Ming", "Jie", "Lei", "Tao", "Feng", "Jian", "Bin", "Hao", "Yang"],
                last: ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Zhao", "Huang", "Zhou", "Wu"]
            },
            female: {
                first: ["Mei", "Ling", "Xia", "Yan", "Li", "Hui", "Fang", "Ying", "Juan", "Na"],
                last: ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Zhao", "Huang", "Zhou", "Wu"]
            }
        },
        japan: {
            male: {
                first: ["Haruto", "Riku", "Yuto", "Sota", "Ren", "Kaito", "Daiki", "Ryota", "Yuki", "Shota"],
                last: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Yoshida"]
            },
            female: {
                first: ["Himari", "Mei", "Yui", "Rin", "Sakura", "Aoi", "Koharu", "Hina", "Mio", "Ichika"],
                last: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Yoshida"]
            }
        },
        korea: {
            male: {
                first: ["Min-jun", "Seo-jun", "Ji-ho", "Do-yun", "Eun-woo", "Si-woo", "Ji-hoon", "Hyun-woo", "Jun-seo", "Ye-jun"],
                last: ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Cho", "Yoon", "Jang", "Lim"]
            },
            female: {
                first: ["Ji-ah", "Seo-yeon", "Ji-yoo", "Ha-eun", "Seo-yun", "Ji-woo", "Eun-ji", "Ye-eun", "Ji-min", "Soo-ah"],
                last: ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Cho", "Yoon", "Jang", "Lim"]
            }
        }
    };

    const nativeScriptDatabase = {
        russia: {
            male: {
                first: ["Иван", "Дмитрий", "Сергей", "Алексей", "Михаил", "Николай", "Андрей", "Владимир", "Юрий", "Павел"],
                last: ["Иванов", "Смирнов", "Кузнецов", "Попов", "Васильев", "Петров", "Соколов", "Михайлов", "Фёдоров", "Морозов"]
            },
            female: {
                first: ["Анна", "Мария", "Елена", "Ольга", "Татьяна", "Наталья", "Ирина", "Светлана", "Юлия", "Екатерина"],
                last: ["Иванова", "Смирнова", "Кузнецова", "Попова", "Васильева", "Петрова", "Соколова", "Михайлова", "Фёдорова", "Морозова"]
            }
        },
        china: {
            male: {
                first: ["伟", "明", "杰", "磊", "涛", "峰", "建", "斌", "浩", "洋"],
                last: ["王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴"]
            },
            female: {
                first: ["梅", "玲", "霞", "艳", "丽", "慧", "芳", "英", "娟", "娜"],
                last: ["王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴"]
            }
        },
        japan: {
            male: {
                first: ["蓮", "湊", "陽翔", "蒼", "樹", "律", "暖", "颯", "陽向", "碧"],
                last: ["佐藤", "鈴木", "高橋", "田中", "渡辺", "伊藤", "山本", "中村", "小林", "吉田"]
            },
            female: {
                first: ["陽葵", "凛", "結菜", "芽依", "咲良", "葵", "莉子", "紬", "澪", "結愛"],
                last: ["佐藤", "鈴木", "高橋", "田中", "渡辺", "伊藤", "山本", "中村", "小林", "吉田"]
            }
        },
        korea: {
            male: {
                first: ["민준", "서준", "도윤", "은우", "시우", "지호", "이안", "하준", "유준", "선우"],
                last: ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"]
            },
            female: {
                first: ["지안", "서아", "하윤", "서윤", "아윤", "지유", "아린", "이서", "지아", "나은"],
                last: ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"]
            }
        }
    };

    // --- DOM ELEMENTS ---
    const genderSelector = document.querySelector('.gender-selector');
    const genderOptions = document.querySelectorAll('.gender-option');
    const countrySelector = document.querySelector('.country-selector');
    const countryOptions = document.querySelectorAll('.country-option');
    const generateBtn = document.getElementById('generate-btn');
    const resultCard = document.getElementById('result-card');
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
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const country = document.querySelector('input[name="country"]:checked').value;

        const { latinName, nativeName } = generateInternationalName(gender, country);

        displayResult(latinName, nativeName);
    });

    // Copy button click
    copyBtn.addEventListener('click', () => {
        const fullText = `${latinNameEl.textContent}\n${nativeScriptEl.textContent}`;
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

    function displayResult(latinName, nativeName) {
        // Hide previous result to reset animation
        resultCard.classList.remove('visible');
        resultCard.classList.add('hidden');
        copyBtn.classList.remove('visible');
        copyBtn.classList.add('hidden'); // Ensure copy button is hidden before animation

        // Use a tiny timeout to allow the DOM to update
        setTimeout(() => {
            latinNameEl.textContent = latinName;
            nativeScriptEl.textContent = nativeName;

            resultCard.classList.remove('hidden');
            resultCard.classList.add('visible');

            copyBtn.classList.remove('hidden'); // THE FIX IS HERE
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
