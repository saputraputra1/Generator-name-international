const nameDatabase = {
    russia: {
        male: {
            first: [
                { name: "Ivan", native: "Иван", meaning: "Tuhan Maha Pemurah", history: "Bentuk Slavia dari nama Yunani 'Ioannes', setara dengan 'John'. Sangat populer di Rusia selama berabad-abad." },
                { name: "Dmitri", native: "Дмитрий", meaning: "Pengikut Demeter", history: "Berasal dari nama Yunani 'Demetrios'. Demeter adalah dewi pertanian Yunani. Populer di kalangan bangsawan Rusia." },
                { name: "Sergei", native: "Сергей", meaning: "Pelayan, Pelindung", history: "Berasal dari nama keluarga Romawi 'Sergius'. Nama ini umum di Rusia dan Eropa Timur." },
                { name: "Alexei", native: "Алексей", meaning: "Pembela", history: "Berasal dari nama Yunani 'Alexios'. Nama ini sering dikaitkan dengan putra terakhir Tsar Nicholas II." },
                { name: "Mikhail", native: "Михаил", meaning: "Siapakah yang seperti Tuhan?", history: "Bentuk Rusia dari 'Michael'. Nama ini memiliki akar Ibrani dan merupakan nama malaikat agung." },
                { name: "Vladimir", native: "Владимир", meaning: "Penguasa Agung", history: "Nama Slavia yang berarti 'penguasa damai' atau 'penguasa dunia'. Populer di kalangan pangeran dan tsar." },
                { name: "Andrei", native: "Андрей", meaning: "Jantan, Berani", history: "Bentuk Rusia dari 'Andrew'. Nama ini memiliki akar Yunani dan populer dalam tradisi Kristen." },
                { name: "Anton", native: "Антон", meaning: "Tak Ternilai", history: "Berasal dari nama keluarga Romawi 'Antonius'. Populer di seluruh Eropa." },
                { name: "Boris", native: "Борис", meaning: "Pejuang", history: "Nama Slavia yang mungkin berasal dari kata Turkik 'bogoris' (serigala) atau 'pendek'." },
                { name: "Igor", native: "Игорь", meaning: "Pahlawan Petani", history: "Berasal dari nama Norse Kuno 'Ingvar'. Dipopulerkan oleh Pangeran Igor dari Kiev." }
            ],
            last: [
                { name: "Ivanov", native: "Иванов", meaning: "Anak Ivan", history: "Salah satu nama keluarga paling umum di Rusia. Berarti 'milik Ivan' atau 'keturunan Ivan'." },
                { name: "Smirnov", native: "Смирнов", meaning: "Yang Tenang, Yang Damai", history: "Berasal dari kata sifat 'smirnyy'. Ini adalah nama keluarga paling umum kedua di Rusia." },
                { name: "Kuznetsov", native: "Кузнецов", meaning: "Anak Pandai Besi", history: "Berasal dari kata 'kuznets' (pandai besi). Setara dengan 'Smith' dalam bahasa Inggris." },
                { name: "Popov", native: "Попов", meaning: "Anak Pendeta", history: "Berasal dari kata 'pop' (pendeta Ortodoks). Menunjukkan keturunan dari seorang pendeta." },
                { name: "Vasiliev", native: "Васильев", meaning: "Anak Vasily", history: "Berasal dari nama 'Vasily', yang berarti 'raja' atau 'kerajaan' dari bahasa Yunani 'Basileus'." }
            ]
        },
        female: {
            first: [
                { name: "Anna", native: "Анна", meaning: "Rahmat, Keagungan", history: "Berasal dari nama Ibrani 'Hannah'. Nama klasik yang populer di seluruh dunia, termasuk Rusia." },
                { name: "Maria", native: "Мария", meaning: "Yang Tercinta, Pahit", history: "Bentuk Latin dari nama Ibrani 'Miryam'. Nama yang sangat umum dalam tradisi Kristen." },
                { name: "Elena", native: "Елена", meaning: "Cahaya Terang, Obor", history: "Bentuk Slavia dari 'Helen', yang berasal dari mitologi Yunani, Helen dari Troya." },
                { name: "Olga", native: "Ольга", meaning: "Suci, Terberkati", history: "Berasal dari nama Norse Kuno 'Helga'. Dipopulerkan oleh Santa Olga dari Kiev pada abad ke-10." },
                { name: "Svetlana", native: "Светлана", meaning: "Cahaya, Bintang", history: "Nama Slavia yang berasal dari kata 'svet' (cahaya). Menjadi populer pada abad ke-19." },
                { name: "Anastasia", native: "Анастасия", meaning: "Kebangkitan", history: "Berasal dari bahasa Yunani. Dikaitkan dengan putri bungsu Tsar Nicholas II." },
                { name: "Ekaterina", native: "Екатерина", meaning: "Murni", history: "Bentuk Rusia dari 'Katherine'. Nama ini dipopulerkan oleh Catherine yang Agung." },
                { name: "Natalia", native: "Наталья", meaning: "Hari Natal", history: "Berasal dari bahasa Latin 'natalis dies' (hari kelahiran), merujuk pada Natal." },
                { name: "Tatiana", native: "Татьяна", meaning: "Putri Peri", history: "Berasal dari nama Romawi 'Tatius'. Populer di Rusia dan Eropa Timur." },
                { name: "Yulia", native: "Юлия", meaning: "Muda", history: "Bentuk Rusia dari 'Julia'. Berasal dari nama keluarga Romawi 'Julius'." }
            ],
            last: [
                { name: "Ivanova", native: "Иванова", meaning: "Anak Ivan (feminin)", history: "Bentuk feminin dari 'Ivanov', digunakan untuk wanita dalam keluarga." },
                { name: "Smirnova", native: "Смирнова", meaning: "Yang Tenang (feminin)", history: "Bentuk feminin dari 'Smirnov'." },
                { name: "Kuznetsova", native: "Кузнецова", meaning: "Anak Pandai Besi (feminin)", history: "Bentuk feminin dari 'Kuznetsov'." },
                { name: "Popova", native: "Попова", meaning: "Anak Pendeta (feminin)", history: "Bentuk feminin dari 'Popov'." },
                { name: "Vasilieva", native: "Васильева", meaning: "Anak Vasily (feminin)", history: "Bentuk feminin dari 'Vasiliev'." }
            ]
        }
    },
    china: {
        male: {
            first: [
                { name: "Wei", native: "伟", meaning: "Agung, Luar Biasa", history: "Nama ini sering digunakan untuk mengekspresikan harapan agar anak laki-laki tumbuh menjadi orang yang kuat dan berpengaruh." },
                { name: "Ming", native: "明", meaning: "Cerah, Bijaksana", history: "Karakter ini melambangkan pencerahan dan kecerdasan, sering dikaitkan dengan Dinasti Ming yang terkenal." },
                { name: "Jie", native: "杰", meaning: "Pahlawan, Unggul", history: "Nama yang melambangkan kepahlawanan dan keunggulan. Sering diberikan dengan harapan kesuksesan." },
                { name: "Hao", native: "浩", meaning: "Luas, Besar", history: "Karakter ini menggambarkan keluasan seperti lautan atau langit, melambangkan pikiran yang terbuka dan kebesaran jiwa." },
                { name: "Feng", native: "峰", meaning: "Puncak Gunung", history: "Melambangkan kekuatan, stabilitas, dan pencapaian tingkat tertinggi dalam hidup." },
                { name: "Li", native: "力", meaning: "Kekuatan", history: "Karakter sederhana yang melambangkan kekuatan fisik dan energi." },
                { name: "Bo", native: "波", meaning: "Gelombang", history: "Nama puitis yang menggambarkan gelombang laut, melambangkan semangat yang dinamis." },
                { name: "Long", native: "龙", meaning: "Naga", history: "Naga adalah simbol kekuatan, keberuntungan, dan kekuasaan dalam budaya Tiongkok." },
                { name: "Tao", native: "涛", meaning: "Gelombang Besar", history: "Mirip dengan 'Bo', tetapi menyiratkan gelombang yang lebih besar dan lebih kuat." },
                { name: "Yi", native: "毅", meaning: "Tegas, Gigih", history: "Melambangkan ketekunan dan kemauan yang kuat dalam menghadapi tantangan." }
            ],
            last: [
                { name: "Wang", native: "王", meaning: "Raja", history: "Salah satu marga paling umum di Tiongkok. Berasal dari gelar bangsawan dan keluarga kerajaan kuno." },
                { name: "Li", native: "李", meaning: "Pohon Plum", history: "Marga paling umum kedua. Menurut legenda, berasal dari kaisar kuno Gao Yao yang diberi marga ini." },
                { name: "Zhang", native: "张", meaning: "Memanah, Membentang", history: "Marga umum yang secara legendaris diciptakan oleh cucu Kaisar Kuning, yang ahli membuat busur dan panah." },
                { name: "Liu", native: "刘", meaning: "Kampak, Membunuh", history: "Marga dari Dinasti Han yang perkasa, salah satu dinasti paling berpengaruh dalam sejarah Tiongkok." },
                { name: "Chen", native: "陈", meaning: "Menampilkan, Kuno", history: "Marga yang berasal dari Negara Chen pada masa Dinasti Zhou. Sangat umum di Tiongkok selatan." }
            ]
        },
        female: {
            first: [
                { name: "Mei", native: "梅", meaning: "Bunga Plum", history: "Bunga plum melambangkan ketahanan dan keindahan di musim dingin. Nama yang sangat puitis dan populer." },
                { name: "Ling", native: "玲", meaning: "Suara Giok yang Indah", history: "Nama ini menggambarkan keanggunan dan kemurnian, seperti suara dentingan perhiasan giok." },
                { name: "Xia", native: "霞", meaning: "Awan Merah di Senja", history: "Melambangkan keindahan alam yang megah dan sering digunakan dalam puisi dan sastra Tiongkok." },
                { name: "Ying", native: "英", meaning: "Bunga, Pahlawan (wanita)", history: "Karakter ini bisa berarti 'bunga' atau 'pahlawan', memberikan konotasi keindahan sekaligus kekuatan." },
                { name: "Fang", native: "芳", meaning: "Harum, Wangi", history: "Nama yang berhubungan dengan aroma bunga yang harum, melambangkan sifat yang menyenangkan dan feminin." },
                { name: "Jing", native: "静", meaning: "Tenang, Damai", history: "Melambangkan ketenangan dan kedamaian batin, sebuah sifat yang sangat dihargai." },
                { name: "Li", native: "丽", meaning: "Indah", history: "Karakter umum untuk nama perempuan, berarti 'cantik' atau 'indah'." },
                { name: "Na", native: "娜", meaning: "Anggun, Elegan", history: "Sering digunakan untuk menggambarkan keanggunan dan kelembutan seorang wanita." },
                { name: "Ting", native: "婷", meaning: "Ramping, Anggun", history: "Menggambarkan postur yang anggun dan penampilan yang menawan." },
                { name: "Yan", native: "嫣", meaning: "Cantik, Menawan", history: "Karakter yang melambangkan senyum yang indah dan pesona yang menawan." }
            ],
            last: [
                { name: "Wang", native: "王", meaning: "Raja", history: "Salah satu marga paling umum di Tiongkok. Berasal dari gelar bangsawan dan keluarga kerajaan kuno." },
                { name: "Li", native: "李", meaning: "Pohon Plum", history: "Marga paling umum kedua. Menurut legenda, berasal dari kaisar kuno Gao Yao yang diberi marga ini." },
                { name: "Zhang", native: "张", meaning: "Memanah, Membentang", history: "Marga umum yang secara legendaris diciptakan oleh cucu Kaisar Kuning, yang ahli membuat busur dan panah." },
                { name: "Liu", native: "刘", meaning: "Kampak, Membunuh", history: "Marga dari Dinasti Han yang perkasa, salah satu dinasti paling berpengaruh dalam sejarah Tiongkok." },
                { name: "Chen", native: "陈", meaning: "Menampilkan, Kuno", history: "Marga yang berasal dari Negara Chen pada masa Dinasti Zhou. Sangat umum di Tiongkok selatan." }
            ]
        }
    },
    japan: {
        male: {
            first: [
                { name: "Haruto", native: "陽翔", meaning: "Terbang Menuju Matahari", history: "Nama modern yang populer, menggabungkan kanji untuk 'matahari' dan 'terbang', melambangkan masa depan yang cerah." },
                { name: "Riku", native: "陸", meaning: "Darat, Benua", history: "Nama sederhana namun kuat yang berarti 'tanah' atau 'daratan'. Memberikan kesan stabilitas dan kekuatan." },
                { name: "Yuto", native: "悠斗", meaning: "Pertarungan Lembut", history: "Kombinasi dari 'yu' (jauh, santai) dan 'to' (sendok besar, rasi bintang), bisa diartikan sebagai 'orang yang murah hati'." },
                { name: "Sota", native: "颯太", meaning: "Angin Kencang yang Megah", history: "Nama yang energik, menggabungkan 'sota' (suara angin) dan 'ta' (besar, tebal)." },
                { name: "Ren", native: "蓮", meaning: "Bunga Teratai", history: "Teratai adalah simbol kemurnian dan pencerahan dalam Buddhisme. Nama ini populer untuk anak laki-laki dan perempuan." },
                { name: "Kenji", native: "健司", meaning: "Kuat dan Sehat", history: "Nama tradisional yang menggabungkan 'ken' (sehat, kuat) dan 'ji' (kedua) atau 'shi' (mengatur)." },
                { name: "Kaito", native: "海斗", meaning: "Lautan dan Rasi Bintang", history: "Nama puitis yang menggabungkan 'kai' (laut) dan 'to' (rasi bintang Biduk)." },
                { name: "Naoki", native: "直樹", meaning: "Pohon yang Lurus", history: "Melambangkan kejujuran dan integritas, dari 'nao' (lurus) dan 'ki' (pohon)." },
                { name: "Shinji", native: "真司", meaning: "Pengatur Sejati", history: "Kombinasi dari 'shin' (benar, sejati) dan 'ji' (mengatur), menyiratkan kepemimpinan yang adil." },
                { name: "Takumi", native: "匠", meaning: "Pengrajin Ahli", history: "Nama yang berarti 'pengrajin' atau 'ahli', melambangkan keterampilan dan dedikasi." }
            ],
            last: [
                { name: "Sato", native: "佐藤", meaning: "Penolong Wisteria", history: "Nama keluarga paling umum di Jepang. 'Sa' berarti 'penolong' dan 'to' adalah singkatan dari klan Fujiwara (ladang wisteria)." },
                { name: "Suzuki", native: "鈴木", meaning: "Pohon Lonceng", history: "Nama keluarga umum kedua. 'Suzu' berarti 'lonceng' dan 'ki' berarti 'pohon' atau 'kayu'." },
                { name: "Takahashi", native: "高橋", meaning: "Jembatan Tinggi", history: "Nama yang berasal dari lokasi geografis. 'Taka' berarti 'tinggi' dan 'hashi' berarti 'jembatan'." },
                { name: "Tanaka", native: "田中", meaning: "Di Tengah Sawah", history: "Nama yang sangat umum, menunjukkan asal-usul keluarga dari daerah pertanian. 'Ta' berarti sawah, 'naka' berarti tengah." },
                { name: "Watanabe", native: "渡辺", meaning: "Menyeberang Perbatasan", history: "Berasal dari titik penyeberangan di dekat Osaka. Klan Watanabe adalah samurai keturunan dari Kaisar Saga." }
            ]
        },
        female: {
            first: [
                { name: "Himari", native: "陽葵", meaning: "Bunga Matahari", history: "Nama yang ceria, gabungan dari 'hi' (matahari) dan 'mari' (bunga hollyhock), sering diartikan sebagai bunga matahari." },
                { name: "Mei", native: "芽依", meaning: "Tunas yang Dapat Diandalkan", history: "Kombinasi 'mei' (tunas) dan 'i' (mengandalkan). Melambangkan awal yang baru dan pertumbuhan." },
                { name: "Yui", native: "結衣", meaning: "Pakaian yang Mengikat", history: "Nama populer yang menggabungkan 'yui' (mengikat, menghubungkan) dan 'i' (pakaian), melambangkan ikatan yang kuat." },
                { name: "Sakura", native: "桜", meaning: "Bunga Ceri", history: "Nama ikonik Jepang. Bunga sakura melambangkan keindahan yang fana dan merupakan simbol penting dalam budaya Jepang." },
                { name: "Aoi", native: "葵", meaning: "Bunga Hollyhock", history: "Nama bunga yang melambangkan pengabdian dan kesuburan. Secara historis dikaitkan dengan klan Tokugawa." },
                { name: "Akari", native: "明里", meaning: "Cahaya Desa", history: "Gabungan dari 'aka' (terang) dan 'ri' (desa), melambangkan cahaya dan kehangatan komunitas." },
                { name: "Hina", native: "陽菜", meaning: "Sayuran Matahari", history: "Nama yang cerah dan alami, dari 'hi' (matahari, sinar) dan 'na' (sayuran, hijau)." },
                { name: "Mika", native: "美香", meaning: "Aroma yang Indah", history: "Kombinasi dari 'mi' (indah) dan 'ka' (aroma), melambangkan keharuman yang menyenangkan." },
                { name: "Rina", native: "莉奈", meaning: "Melati dari Nara", history: "Nama populer yang menggabungkan kanji untuk melati dan nama kota kuno Nara." },
                { name: "Yuna", native: "結菜", meaning: "Sayuran yang Mengikat", history: "Gabungan dari 'yu' (mengikat) dan 'na' (sayuran), melambangkan hubungan yang erat dengan alam." }
            ],
            last: [
                { name: "Sato", native: "佐藤", meaning: "Penolong Wisteria", history: "Nama keluarga paling umum di Jepang. 'Sa' berarti 'penolong' dan 'to' adalah singkatan dari klan Fujiwara (ladang wisteria)." },
                { name: "Suzuki", native: "鈴木", meaning: "Pohon Lonceng", history: "Nama keluarga umum kedua. 'Suzu' berarti 'lonceng' dan 'ki' berarti 'pohon' atau 'kayu'." },
                { name: "Takahashi", native: "高橋", meaning: "Jembatan Tinggi", history: "Nama yang berasal dari lokasi geografis. 'Taka' berarti 'tinggi' dan 'hashi' berarti 'jembatan'." },
                { name: "Tanaka", native: "田中", meaning: "Di Tengah Sawah", history: "Nama yang sangat umum, menunjukkan asal-usul keluarga dari daerah pertanian. 'Ta' berarti sawah, 'naka' berarti tengah." },
                { name: "Watanabe", native: "渡辺", meaning: "Menyeberang Perbatasan", history: "Berasal dari titik penyeberangan di dekat Osaka. Klan Watanabe adalah samurai keturunan dari Kaisar Saga." }
            ]
        }
    },
    korea: {
        male: {
            first: [
                { name: "Min-jun", native: "민준", meaning: "Cerdas dan Berbakat", history: "Kombinasi 'Min' (cepat, cerdas) dan 'Jun' (berbakat, tampan). Nama yang sangat populer di Korea Selatan." },
                { name: "Seo-jun", native: "서준", meaning: "Pertanda Baik dan Berbakat", history: "Gabungan 'Seo' (pertanda baik) dan 'Jun' (berbakat). Nama modern yang melambangkan keberuntungan." },
                { name: "Ji-ho", native: "지호", meaning: "Kebijaksanaan dan Kebaikan", history: "Kombinasi 'Ji' (kebijaksanaan) dan 'Ho' (kebaikan, danau). Nama yang memberikan kesan tenang dan cerdas." },
                { name: "Do-yun", native: "도윤", meaning: "Jalan yang Benar", history: "'Do' berarti 'jalan' atau 'jalur' dan 'Yun' berarti 'mengizinkan'. Melambangkan kehidupan yang lurus." },
                { name: "Eun-woo", native: "은우", meaning: "Rahmat dan Perlindungan Ilahi", history: "'Eun' berarti 'rahmat' atau 'perak' dan 'Woo' berarti 'rumah' atau 'perlindungan Tuhan'." },
                { name: "Hyun-woo", native: "현우", meaning: "Bijaksana dan Dilindungi", history: "Kombinasi 'Hyun' (bijaksana, cerdas) dan 'Woo' (perlindungan ilahi)." },
                { name: "Jae-beom", native: "재범", meaning: "Aturan dan Teladan", history: "Gabungan 'Jae' (aturan) dan 'Beom' (teladan), sering dikenal sebagai nama panggung Jay B dari GOT7." },
                { name: "Ji-hoon", native: "지훈", meaning: "Kebijaksanaan dan Jasa", history: "Kombinasi 'Ji' (kebijaksanaan) dan 'Hoon' (jasa, prestasi)." },
                { name: "Sung-ho", native: "성호", meaning: "Danau Bintang", history: "Gabungan 'Sung' (bintang) dan 'Ho' (danau), menciptakan citra yang indah." },
                { name: "Young-chul", native: "영철", meaning: "Kebijaksanaan Abadi", history: "Kombinasi 'Young' (abadi) dan 'Chul' (kebijaksanaan)." }
            ],
            last: [
                { name: "Kim", native: "김", meaning: "Emas", history: "Nama keluarga paling umum di Korea (sekitar 20% populasi). Berasal dari beberapa klan, yang paling terkenal adalah klan Kim dari Gyeongju." },
                { name: "Lee", native: "이", meaning: "Pohon Plum", history: "Nama keluarga umum kedua. Juga dieja sebagai 'Yi'. Klan Jeonju Lee adalah klan bangsawan yang mendirikan Dinasti Joseon." },
                { name: "Park", native: "박", meaning: "Labu Botol", history: "Secara tradisional dikatakan berasal dari raja pertama Silla, Park Hyeokgeose, yang lahir dari telur berbentuk labu." },
                { name: "Choi", native: "최", meaning: "Tinggi, Puncak", history: "Salah satu nama keluarga tertua dan paling dihormati di Korea, berasal dari kepala suku kuno Sobŏldori." },
                { name: "Jung", native: "정", meaning: "Paku, Negara Bagian Zheng", history: "Juga dieja 'Jeong'. Berasal dari beberapa leluhur yang berbeda, termasuk dari negara kuno Zheng di Tiongkok." }
            ]
        },
        female: {
            first: [
                { name: "Ji-ah", native: "지아", meaning: "Kebijaksanaan dan Keindahan", history: "Kombinasi 'Ji' (kebijaksanaan) dan 'Ah' (indah, elegan). Nama yang populer karena kesederhanaan dan artinya yang bagus." },
                { name: "Seo-yeon", native: "서연", meaning: "Pertanda Baik dan Anggun", history: "'Seo' berarti 'pertanda baik' dan 'Yeon' berarti 'anggun' atau 'teratai'." },
                { name: "Ha-eun", native: "하은", meaning: "Rahmat Musim Panas", history: "'Ha' berarti 'musim panas' dan 'Eun' berarti 'rahmat'. Nama yang cerah dan positif." },
                { name: "Ji-woo", native: "지우", meaning: "Kehendak Semesta", history: "'Ji' berarti 'tujuan' atau 'kehendak', dan 'Woo' berarti 'alam semesta' atau 'rumah'." },
                { name: "Soo-ah", native: "수아", meaning: "Air yang Anggun", history: "'Soo' berarti 'air' atau 'keunggulan' dan 'Ah' berarti 'indah'. Melambangkan kelembutan dan keanggunan." },
                { name: "Eun-ji", native: "은지", meaning: "Rahmat dan Kebijaksanaan", history: "Kombinasi 'Eun' (rahmat) dan 'Ji' (kebijaksanaan)." },
                { name: "Ji-hye", native: "지혜", meaning: "Kebijaksanaan", history: "Nama yang secara langsung berarti 'kebijaksanaan' atau 'kecerdasan'." },
                { name: "Min-seo", native: "민서", meaning: "Cerdas dan Tenang", history: "Gabungan 'Min' (cerdas) dan 'Seo' (tenang, pertanda baik)." },
                { name: "Soo-jin", native: "수진", meaning: "Permata yang Indah", history: "Kombinasi 'Soo' (indah) dan 'Jin' (permata, kebenaran)." },
                { name: "Yoo-jin", native: "유진", meaning: "Berharga dan Benar", history: "Gabungan 'Yoo' (berharga) dan 'Jin' (benar, sejati)." }
            ],
            last: [
                { name: "Kim", native: "김", meaning: "Emas", history: "Nama keluarga paling umum di Korea (sekitar 20% populasi). Berasal dari beberapa klan, yang paling terkenal adalah klan Kim dari Gyeongju." },
                { name: "Lee", native: "이", meaning: "Pohon Plum", history: "Nama keluarga umum kedua. Juga dieja sebagai 'Yi'. Klan Jeonju Lee adalah klan bangsawan yang mendirikan Dinasti Joseon." },
                { name: "Park", native: "박", meaning: "Labu Botol", history: "Secara tradisional dikatakan berasal dari raja pertama Silla, Park Hyeokgeose, yang lahir dari telur berbentuk labu." },
                { name: "Choi", native: "최", meaning: "Tinggi, Puncak", history: "Salah satu nama keluarga tertua dan paling dihormati di Korea, berasal dari kepala suku kuno Sobŏldori." },
                { name: "Jung", native: "정", meaning: "Paku, Negara Bagian Zheng", history: "Juga dieja 'Jeong'. Berasal dari beberapa leluhur yang berbeda, termasuk dari negara kuno Zheng di Tiongkok." }
            ]
        }
    },
    spain: {
        male: {
            first: [
                { name: "Alejandro", native: "Alejandro", meaning: "Pembela Umat Manusia", history: "Bentuk Spanyol dari 'Alexander'. Dipopulerkan oleh Alexander Agung. Nama yang kuat dan klasik." },
                { name: "Javier", native: "Javier", meaning: "Rumah Baru", history: "Berasal dari nama tempat Basque 'Etxaberri'. Dipopulerkan oleh Santo Fransiskus Xaverius (San Francisco Javier)." },
                { name: "Sergio", native: "Sergio", meaning: "Pelayan", history: "Bentuk Spanyol dan Italia dari nama Romawi 'Sergius'. Nama yang umum di negara-negara berbahasa Roman." },
                { name: "David", native: "David", meaning: "Yang Tercinta", history: "Berasal dari nama Ibrani, nama Raja Daud dalam Alkitab. Populer secara internasional." },
                { name: "Pablo", native: "Pablo", meaning: "Kecil, Rendah Hati", history: "Bentuk Spanyol dari 'Paul'. Berasal dari nama keluarga Romawi 'Paulus'." },
                { name: "Carlos", native: "Carlos", meaning: "Pria Bebas", history: "Bentuk Spanyol dari 'Charles'. Nama kerajaan yang sangat populer di Spanyol dan Portugal." },
                { name: "Daniel", native: "Daniel", meaning: "Tuhan adalah Hakimku", history: "Nama Ibrani yang populer di seluruh dunia karena tokoh Alkitab Daniel." },
                { name: "Manuel", native: "Manuel", meaning: "Tuhan Bersama Kita", history: "Bentuk singkat dari 'Emmanuel'. Nama Ibrani yang umum di Spanyol dan Portugal." },
                { name: "Miguel", native: "Miguel", meaning: "Siapakah yang Seperti Tuhan?", history: "Bentuk Spanyol dari 'Michael'. Nama malaikat agung yang sangat dihormati." },
                { name: "Rafael", native: "Rafael", meaning: "Tuhan Telah Menyembuhkan", history: "Nama malaikat agung lainnya, populer di banyak negara Katolik." }
            ],
            last: [
                { name: "García", native: "García", meaning: "Beruang", history: "Nama keluarga paling umum di Spanyol. Diyakini berasal dari Basque, mungkin berarti 'beruang'." },
                { name: "Rodríguez", native: "Rodríguez", meaning: "Anak Rodrigo", history: "Nama patronimik yang berarti 'putra Rodrigo'. Rodrigo adalah bentuk Spanyol dari 'Roderick' (penguasa terkenal)." },
                { name: "González", native: "González", meaning: "Anak Gonzalo", history: "Berasal dari nama Jermanik 'Gundisalvus', yang berarti 'pertempuran'." },
                { name: "Fernández", native: "Fernández", meaning: "Anak Fernando", history: "Fernando adalah bentuk Spanyol dari 'Ferdinand' (perjalanan berani). Sangat umum di Spanyol." },
                { name: "López", native: "López", meaning: "Anak Lope", history: "Lope berasal dari bahasa Latin 'lupus', yang berarti 'serigala'." }
            ]
        },
        female: {
            first: [
                { name: "Lucía", native: "Lucía", meaning: "Cahaya", history: "Berasal dari nama Romawi 'Lucius'. Dipopulerkan oleh Santa Lusia, pelindung orang buta." },
                { name: "Sofía", native: "Sofía", meaning: "Kebijaksanaan", history: "Berasal dari bahasa Yunani. Nama kerajaan yang populer di seluruh Eropa, termasuk Spanyol." },
                { name: "Martina", native: "Martina", meaning: "Dari Mars", history: "Bentuk feminin dari 'Martinus', yang berasal dari Mars, dewa perang Romawi." },
                { name: "María", native: "María", meaning: "Yang Tercinta", history: "Bentuk Spanyol dari 'Maria'. Sangat umum dan sering digunakan dalam nama gabungan seperti 'María del Carmen'." },
                { name: "Paula", native: "Paula", meaning: "Kecil, Rendah Hati", history: "Bentuk feminin dari 'Paulus'. Nama klasik yang populer di banyak negara." },
                { name: "Carmen", native: "Carmen", meaning: "Taman", history: "Berasal dari bahasa Ibrani 'Karmel' (taman Tuhan). Sangat populer karena Bunda Maria dari Gunung Karmel." },
                { name: "Isabel", native: "Isabel", meaning: "Sumpahku adalah Tuhan", history: "Bentuk Spanyol dari 'Elizabeth'. Nama banyak ratu Spanyol yang berpengaruh." },
                { name: "Laura", native: "Laura", meaning: "Pohon Salam", history: "Berasal dari bahasa Latin, simbol kemenangan dan kehormatan." },
                { name: "Monica", native: "Mónica", meaning: "Penasihat", history: "Nama asal Afrika Utara, dipopulerkan oleh Santa Monica, ibu dari Santo Agustinus." },
                { name: "Sara", native: "Sara", meaning: "Putri", history: "Nama Ibrani dari istri Abraham dalam Alkitab. Populer secara internasional." }
            ],
            last: [
                { name: "García", native: "García", meaning: "Beruang", history: "Nama keluarga paling umum di Spanyol. Diyakini berasal dari Basque, mungkin berarti 'beruang'." },
                { name: "Rodríguez", native: "Rodríguez", meaning: "Anak Rodrigo", history: "Nama patronimik yang berarti 'putra Rodrigo'. Rodrigo adalah bentuk Spanyol dari 'Roderick' (penguasa terkenal)." },
                { name: "González", native: "González", meaning: "Anak Gonzalo", history: "Berasal dari nama Jermanik 'Gundisalvus', yang berarti 'pertempuran'." },
                { name: "Fernández", native: "Fernández", meaning: "Anak Fernando", history: "Fernando adalah bentuk Spanyol dari 'Ferdinand' (perjalanan berani). Sangat umum di Spanyol." },
                { name: "López", native: "López", meaning: "Anak Lope", history: "Lope berasal dari bahasa Latin 'lupus', yang berarti 'serigala'." }
            ]
        }
    },
    brazil: {
        male: {
            first: [
                { name: "Miguel", native: "Miguel", meaning: "Siapakah yang seperti Tuhan?", history: "Bentuk Portugis dan Spanyol dari 'Michael'. Nama yang sangat populer di negara-negara berbahasa Portugis." },
                { name: "Arthur", native: "Arthur", meaning: "Beruang, Bangsawan", history: "Berasal dari legenda Raja Arthur. Populer di banyak bahasa, termasuk Portugis Brasil." },
                { name: "Heitor", native: "Heitor", meaning: "Memegang Erat", history: "Bentuk Portugis dari 'Hector', pahlawan Troya dalam mitologi Yunani." },
                { name: "Davi", native: "Davi", meaning: "Yang Tercinta", history: "Bentuk Portugis dari 'David'. Nama Alkitab yang populer secara global." },
                { name: "Gabriel", native: "Gabriel", meaning: "Tuhan adalah kekuatanku", history: "Nama malaikat agung dalam tradisi Abrahamik. Sangat populer di Brazil." },
                { name: "Bruno", native: "Bruno", meaning: "Cokelat", history: "Nama Jermanik yang berarti 'cokelat' atau 'beruang'. Populer di Italia, Spanyol, dan Brazil." },
                { name: "Felipe", native: "Felipe", meaning: "Pencinta Kuda", history: "Bentuk Portugis dari 'Philip'. Nama kerajaan yang umum di Eropa." },
                { name: "Gustavo", native: "Gustavo", meaning: "Staf para Dewa", history: "Nama asal Swedia yang dipopulerkan oleh raja-raja Swedia." },
                { name: "Lucas", native: "Lucas", meaning: "Dari Lucania", history: "Berasal dari nama Latin, berarti orang dari Lucania, sebuah wilayah kuno di Italia." },
                { name: "Pedro", native: "Pedro", meaning: "Batu", history: "Bentuk Portugis dan Spanyol dari 'Peter'. Nama yang sangat penting dalam Kekristenan." }
            ],
            last: [
                { name: "Silva", native: "Silva", meaning: "Hutan, Rimba", history: "Nama keluarga paling umum di Brazil dan Portugal. Berasal dari bahasa Latin, menunjukkan seseorang yang tinggal di dekat hutan." },
                { name: "Santos", native: "Santos", meaning: "Orang Suci", history: "Seringkali merupakan kependekan dari 'dos Santos' (dari para orang suci), nama yang sangat umum." },
                { name: "Oliveira", native: "Oliveira", meaning: "Pohon Zaitun", history: "Nama topografi untuk seseorang yang tinggal di dekat kebun zaitun. Umum di Portugal dan Brazil." },
                { name: "Souza", native: "Souza", meaning: "Dari Sungai Sousa", history: "Juga dieja 'Sousa'. Berasal dari nama tempat di Portugal, dari bahasa Latin 'Saxa' (batu)." },
                { name: "Lima", native: "Lima", meaning: "Sungai Kuno", history: "Nama keluarga Portugis yang berasal dari nama sungai Lima di perbatasan Spanyol-Portugal." }
            ]
        },
        female: {
            first: [
                { name: "Alice", native: "Alice", meaning: "Dari Keturunan Bangsawan", history: "Berasal dari nama Jermanik Kuno 'Adalheidis'. Menjadi populer di seluruh dunia setelah 'Alice in Wonderland'." },
                { name: "Sophia", native: "Sophia", meaning: "Kebijaksanaan", history: "Sama seperti 'Sofía' dalam bahasa Spanyol, nama ini sangat populer di Brazil karena kesan klasik dan elegannya." },
                { name: "Helena", native: "Helena", meaning: "Cahaya Terang", history: "Bentuk Latin dari 'Helen'. Populer di Brazil, sering dikaitkan dengan keindahan dan keanggunan." },
                { name: "Valentina", native: "Valentina", meaning: "Kuat, Sehat", history: "Bentuk feminin dari 'Valentinus'. Nama yang kuat namun feminin yang telah mendapatkan popularitas global." },
                { name: "Laura", native: "Laura", meaning: "Pohon Salam", history: "Berasal dari bahasa Latin. Pohon salam adalah simbol kehormatan dan kemenangan di Roma kuno." },
                { name: "Beatriz", native: "Beatriz", meaning: "Dia yang Membawa Kebahagiaan", history: "Bentuk Portugis dari 'Beatrice'. Dipopulerkan oleh tokoh dalam 'Divine Comedy' karya Dante." },
                { name: "Camila", native: "Camila", meaning: "Pelayan Altar", history: "Berasal dari nama Latin 'Camillus', seorang pelayan muda dalam upacara keagamaan Romawi." },
                { name: "Gabriela", native: "Gabriela", meaning: "Tuhan adalah Kekuatanku", history: "Bentuk feminin dari 'Gabriel'. Populer di banyak negara." },
                { name: "Isabella", native: "Isabella", meaning: "Sumpahku adalah Tuhan", history: "Bentuk Latin dari 'Isabel'. Nama kerajaan yang sangat populer." },
                { name: "Juliana", native: "Juliana", meaning: "Muda", history: "Bentuk feminin dari 'Julianus', yang berasal dari nama keluarga Romawi 'Julius'." }
            ],
            last: [
                { name: "Silva", native: "Silva", meaning: "Hutan, Rimba", history: "Nama keluarga paling umum di Brazil dan Portugal. Berasal dari bahasa Latin, menunjukkan seseorang yang tinggal di dekat hutan." },
                { name: "Santos", native: "Santos", meaning: "Orang Suci", history: "Seringkali merupakan kependekan dari 'dos Santos' (dari para orang suci), nama yang sangat umum." },
                { name: "Oliveira", native: "Oliveira", meaning: "Pohon Zaitun", history: "Nama topografi untuk seseorang yang tinggal di dekat kebun zaitun. Umum di Portugal dan Brazil." },
                { name: "Souza", native: "Souza", meaning: "Dari Sungai Sousa", history: "Juga dieja 'Sousa'. Berasal dari nama tempat di Portugal, dari bahasa Latin 'Saxa' (batu)." },
                { name: "Lima", native: "Lima", meaning: "Sungai Kuno", history: "Nama keluarga Portugis yang berasal dari nama sungai Lima di perbatasan Spanyol-Portugal." }
            ]
        }
    },
    netherlands: {
        male: {
            first: [
                { name: "Noah", native: "Noah", meaning: "Ketenangan", history: "Nama Ibrani yang populer secara global." },
                { name: "Lucas", native: "Lucas", meaning: "Cahaya", history: "Berasal dari nama Latin 'Lucius'." },
                { name: "Sem", native: "Sem", meaning: "Nama", history: "Nama Ibrani, anak dari Nuh." },
                { name: "Daan", native: "Daan", meaning: "Tuhan adalah hakimku", history: "Bentuk singkat dari Daniel." },
                { name: "Finn", native: "Finn", meaning: "Putih, adil", history: "Nama asal Irlandia." },
                { name: "Levi", native: "Levi", meaning: "Bergabung", history: "Nama Ibrani dari Alkitab." },
                { name: "Liam", native: "Liam", meaning: "Pelindung yang teguh", history: "Bentuk singkat dari William." },
                { name: "James", native: "James", meaning: "Pengganti", history: "Berasal dari nama Ibrani 'Yakub'." },
                { name: "Milan", native: "Milan", meaning: "Baik hati", history: "Nama Slavia yang berarti 'baik hati, penuh kasih'." },
                { name: "Luuk", native: "Luuk", meaning: "Cahaya", history: "Bentuk Belanda dari Lukas." }
            ],
            last: [
                { name: "de Jong", native: "de Jong", meaning: "Muda", history: "Nama keluarga paling umum di Belanda." },
                { name: "Jansen", native: "Jansen", meaning: "Anak Jan", history: "Nama patronimik." },
                { name: "de Vries", native: "de Vries", meaning: "Orang Frisia", history: "Menunjukkan asal dari Friesland." },
                { name: "van de Berg", native: "van de Berg", meaning: "Dari gunung", history: "Nama toponimik." },
                { name: "van Dijk", native: "van Dijk", meaning: "Dari tanggul", history: "Nama toponimik." }
            ]
        },
        female: {
            first: [
                { name: "Emma", native: "Emma", meaning: "Universal", history: "Nama Jermanik yang populer di seluruh Eropa." },
                { name: "Julia", native: "Julia", meaning: "Muda", history: "Bentuk feminin dari nama Romawi 'Julius'." },
                { name: "Sophie", native: "Sophie", meaning: "Kebijaksanaan", history: "Bentuk Prancis dari Sophia." },
                { name: "Lotte", native: "Lotte", meaning: "Manusia bebas", history: "Bentuk singkat dari Charlotte." },
                { name: "Lisa", native: "Lisa", meaning: "Sumpahku adalah Tuhan", history: "Bentuk singkat dari Elisabeth." },
                { name: "Saar", native: "Saar", meaning: "Putri", history: "Bentuk singkat dari Sara." },
                { name: "Tess", native: "Tess", meaning: "Memanen", history: "Bentuk singkat dari Theresa." },
                { name: "Nora", native: "Nora", meaning: "Kehormatan", history: "Bentuk singkat dari Honora atau Eleonora." },
                { name: "Mila", native: "Mila", meaning: "Baik hati", history: "Nama Slavia." },
                { name: "Olivia", native: "Olivia", meaning: "Pohon zaitun", history: "Dipopulerkan oleh Shakespeare." }
            ],
            last: [
                { name: "de Jong", native: "de Jong", meaning: "Muda", history: "Nama keluarga paling umum di Belanda." },
                { name: "Jansen", native: "Jansen", meaning: "Anak Jan", history: "Nama patronimik." },
                { name: "de Vries", native: "de Vries", meaning: "Orang Frisia", history: "Menunjukkan asal dari Friesland." },
                { name: "van de Berg", native: "van de Berg", meaning: "Dari gunung", history: "Nama toponimik." },
                { name: "van Dijk", native: "van Dijk", meaning: "Dari tanggul", history: "Nama toponimik." }
            ]
        }
    },
    vietnam: {
        male: {
            first: [
                { name: "An", native: "An", meaning: "Damai", history: "Nama umum yang melambangkan kedamaian." },
                { name: "Anh", native: "Anh", meaning: "Cerdas", history: "Nama yang melambangkan kecerdasan dan pahlawan." },
                { name: "Bảo", native: "Bảo", meaning: "Harta", history: "Nama yang berarti perlindungan atau harta berharga." },
                { name: "Bình", native: "Bình", meaning: "Damai", history: "Melambangkan ketenangan dan kedamaian." },
                { name: "Cường", native: "Cường", meaning: "Kuat", history: "Menunjukkan kekuatan dan kemakmuran." },
                { name: "Dũng", native: "Dũng", meaning: "Berani", history: "Melambangkan keberanian dan kepahlawanan." },
                { name: "Đức", native: "Đức", meaning: "Kebajikan", history: "Melambangkan moralitas dan kebajikan." },
                { name: "Hải", native: "Hải", meaning: "Lautan", history: "Nama yang terinspirasi dari lautan luas." },
                { name: "Hoàng", native: "Hoàng", meaning: "Kaisar", history: "Nama yang berkonotasi kerajaan dan keagungan." },
                { name: "Hùng", native: "Hùng", meaning: "Pahlawan", history: "Melambangkan kepahlawanan dan kekuatan." }
            ],
            last: [
                { name: "Nguyễn", native: "Nguyễn", meaning: "Alat musik petik", history: "Nama keluarga paling umum di Vietnam." },
                { name: "Trần", native: "Trần", meaning: "Menampilkan", history: "Nama keluarga dari Dinasti Trần." },
                { name: "Lê", native: "Lê", meaning: "Pir", history: "Nama keluarga dari Dinasti Lê." },
                { name: "Phạm", native: "Phạm", meaning: "Contoh", history: "Nama keluarga yang umum." },
                { name: "Hoàng", native: "Hoàng", meaning: "Kuning, kaisar", history: "Nama keluarga yang berkonotasi kerajaan." }
            ]
        },
        female: {
            first: [
                { name: "An", native: "An", meaning: "Damai", history: "Nama yang melambangkan kedamaian dan ketenangan." },
                { name: "Anh", native: "Anh", meaning: "Bunga", history: "Bisa berarti bunga atau pahlawan, nama uniseks." },
                { name: "Châu", native: "Châu", meaning: "Mutiara", history: "Nama yang berarti mutiara atau permata." },
                { name: "Hà", native: "Hà", meaning: "Sungai", history: "Melambangkan aliran dan kelembutan." },
                { name: "Hoa", native: "Hoa", meaning: "Bunga", history: "Nama umum yang berarti bunga." },
                { name: "Hương", native: "Hương", meaning: "Aroma", history: "Melambangkan aroma harum bunga." },
                { name: "Lan", native: "Lan", meaning: "Anggrek", history: "Nama bunga yang melambangkan keanggunan." },
                { name: "Linh", native: "Linh", meaning: "Jiwa", history: "Nama yang berarti jiwa atau roh suci." },
                { name: "Mai", native: "Mai", meaning: "Bunga aprikot", history: "Bunga yang mekar saat Tahun Baru Imlek." },
                { name: "Phương", native: "Phương", meaning: "Arah", history: "Bisa juga berarti wangi." }
            ],
            last: [
                { name: "Nguyễn", native: "Nguyễn", meaning: "Alat musik petik", history: "Nama keluarga paling umum di Vietnam." },
                { name: "Trần", native: "Trần", meaning: "Menampilkan", history: "Nama keluarga dari Dinasti Trần." },
                { name: "Lê", native: "Lê", meaning: "Pir", history: "Nama keluarga dari Dinasti Lê." },
                { name: "Phạm", native: "Phạm", meaning: "Contoh", history: "Nama keluarga yang umum." },
                { name: "Hoàng", native: "Hoàng", meaning: "Kuning, kaisar", history: "Nama keluarga yang berkonotasi kerajaan." }
            ]
        }
    },
    italy: {
        male: {
            first: [
                { name: "Leonardo", native: "Leonardo", meaning: "Kuat seperti Singa", history: "Nama Jermanik yang dipopulerkan oleh Leonardo da Vinci. Sangat populer di Italia." },
                { name: "Francesco", native: "Francesco", meaning: "Orang Prancis", history: "Dipopulerkan oleh Santo Fransiskus dari Assisi, salah satu santo pelindung Italia." },
                { name: "Alessandro", native: "Alessandro", meaning: "Pembela Umat Manusia", history: "Bentuk Italia dari 'Alexander'. Nama klasik yang kuat dan abadi." },
                { name: "Lorenzo", native: "Lorenzo", meaning: "Dari Laurentum", history: "Berasal dari nama kota Romawi kuno. Dipopulerkan oleh Lorenzo de' Medici." },
                { name: "Matteo", native: "Matteo", meaning: "Pemberian Tuhan", history: "Bentuk Italia dari 'Matthew'. Nama salah satu rasul dalam Alkitab." },
                { name: "Andrea", native: "Andrea", meaning: "Jantan, Berani", history: "Bentuk Italia dari 'Andrew'. Meskipun feminin di negara lain, ini adalah nama laki-laki di Italia." },
                { name: "Giovanni", native: "Giovanni", meaning: "Tuhan Maha Pemurah", history: "Bentuk Italia dari 'John'. Nama yang sangat umum dan klasik." },
                { name: "Giuseppe", native: "Giuseppe", meaning: "Tuhan akan Menambahkan", history: "Bentuk Italia dari 'Joseph'. Nama yang sangat populer di seluruh Italia." },
                { name: "Antonio", native: "Antonio", meaning: "Tak Ternilai", history: "Berasal dari nama keluarga Romawi 'Antonius'. Populer secara global." },
                { name: "Marco", native: "Marco", meaning: "Dari Mars", history: "Bentuk Italia dari 'Marcus', merujuk pada dewa perang Romawi, Mars." }
            ],
            last: [
                { name: "Rossi", native: "Rossi", meaning: "Merah", history: "Nama keluarga paling umum di Italia, mungkin awalnya merujuk pada orang berambut merah." },
                { name: "Russo", native: "Russo", meaning: "Merah", history: "Varian selatan dari 'Rossi', juga sangat umum." },
                { name: "Ferrari", native: "Ferrari", meaning: "Pandai Besi", history: "Berasal dari kata Latin 'ferrum' (besi), setara dengan 'Smith'." },
                { name: "Esposito", native: "Esposito", meaning: "Terpapar", history: "Secara historis diberikan kepada anak-anak yatim piatu yang ditinggalkan di panti asuhan." },
                { name: "Bianchi", native: "Bianchi", meaning: "Putih", history: "Merujuk pada orang berambut putih atau berkulit pucat." }
            ]
        },
        female: {
            first: [
                { name: "Sofia", native: "Sofia", meaning: "Kebijaksanaan", history: "Nama asal Yunani yang sangat populer di Italia karena keanggunan dan arti klasiknya." },
                { name: "Giulia", native: "Giulia", meaning: "Muda", history: "Bentuk Italia dari 'Julia'. Berasal dari nama keluarga Romawi 'Julius' yang terkenal." },
                { name: "Aurora", native: "Aurora", meaning: "Fajar", history: "Nama dewi fajar Romawi. Nama puitis yang melambangkan awal yang baru." },
                { name: "Ginevra", native: "Ginevra", meaning: "Gelombang Putih", history: "Bentuk Italia dari 'Guinevere', tokoh dalam legenda Arthurian." },
                { name: "Alice", native: "Alice", meaning: "Bangsawan", history: "Nama Jermanik yang populer di seluruh Eropa, termasuk Italia." },
                { name: "Valentina", native: "Valentina", meaning: "Kuat, Sehat", history: "Bentuk feminin dari 'Valentinus'. Populer karena konotasi cinta dari Hari Valentine." },
                { name: "Chiara", native: "Chiara", meaning: "Terang, Jelas", history: "Bentuk Italia dari 'Clara'. Dipopulerkan oleh Santa Chiara dari Assisi." },
                { name: "Francesca", native: "Francesca", meaning: "Orang Prancis", history: "Bentuk feminin dari 'Francesco'. Populer karena Santo Fransiskus dari Assisi." },
                { name: "Isabella", native: "Isabella", meaning: "Sumpahku adalah Tuhan", history: "Bentuk Italia dari 'Elizabeth'. Nama yang anggun dan populer di kalangan bangsawan." },
                { name: "Martina", native: "Martina", meaning: "Dari Mars", history: "Bentuk feminin dari 'Martinus', merujuk pada dewa perang Romawi." }
            ],
            last: [
                { name: "Rossi", native: "Rossi", meaning: "Merah", history: "Nama keluarga paling umum di Italia, mungkin awalnya merujuk pada orang berambut merah." },
                { name: "Russo", native: "Russo", meaning: "Merah", history: "Varian selatan dari 'Rossi', juga sangat umum." },
                { name: "Ferrari", native: "Ferrari", meaning: "Pandai Besi", history: "Berasal dari kata Latin 'ferrum' (besi), setara dengan 'Smith'." },
                { name: "Esposito", native: "Esposito", meaning: "Terpapar", history: "Secara historis diberikan kepada anak-anak yatim piatu yang ditinggalkan di panti asuhan." },
                { name: "Bianchi", native: "Bianchi", meaning: "Putih", history: "Merujuk pada orang berambut putih atau berkulit pucat." }
            ]
        }
    },
    india: {
        male: {
            first: [
                { name: "Aarav", native: "आरव", meaning: "Damai, Bijaksana", history: "Nama Sansekerta modern yang populer, melambangkan ketenangan dan kebijaksanaan." },
                { name: "Vihaan", native: "विहान", meaning: "Fajar, Pagi", history: "Berasal dari bahasa Sansekerta, melambangkan awal yang baru dan cahaya pertama hari." },
                { name: "Aditya", native: "आदित्य", meaning: "Matahari", history: "Nama dewa matahari Hindu, Surya. Nama klasik yang melambangkan cahaya dan energi." },
                { name: "Arjun", native: "अर्जुन", meaning: "Putih, Cerah", history: "Nama pahlawan dalam epos Mahabharata, dikenal karena keterampilan memanahnya." },
                { name: "Rohan", native: "रोहन", meaning: "Meningkat, Mendaki", history: "Berasal dari bahasa Sansekerta, melambangkan kemajuan dan pertumbuhan dalam hidup." },
                { name: "Ishaan", native: "ईशान", meaning: "Matahari, Penguasa", history: "Nama lain untuk Dewa Siwa, melambangkan cahaya dan kekuasaan." },
                { name: "Krish", native: "कृष", meaning: "Daya Tarik Ilahi", history: "Bentuk singkat dari Krishna, salah satu dewa paling dihormati dalam Hinduisme." },
                { name: "Reyansh", native: "रेयांश", meaning: "Sinar Cahaya", history: "Nama modern yang berarti 'bagian dari sinar' atau 'sinar pertama matahari'." },
                { name: "Siddharth", native: "सिद्धार्थ", meaning: "Tujuan Tercapai", history: "Nama asli Sang Buddha sebelum pencerahan. Berarti 'dia yang telah mencapai tujuannya'." },
                { name: "Dev", native: "देव", meaning: "Dewa", history: "Nama Sansekerta sederhana yang berarti 'dewa' atau 'ilahi'." }
            ],
            last: [
                { name: "Singh", native: "सिंह", meaning: "Singa", history: "Nama keluarga umum di kalangan Sikh dan Rajput, melambangkan keberanian." },
                { name: "Kumar", native: "कुमार", meaning: "Pangeran, Anak Laki-laki", history: "Nama umum yang sering digunakan sebagai nama tengah atau belakang di seluruh India." },
                { name: "Patel", native: "पटेल", meaning: "Kepala Desa", history: "Nama keluarga yang berasal dari komunitas petani di Gujarat." },
                { name: "Shah", native: "शाह", meaning: "Raja", history: "Berasal dari gelar Persia untuk 'raja', umum di kalangan komunitas perdagangan." },
                { name: "Gupta", native: "गुप्ता", meaning: "Pelindung, Penguasa", history: "Nama keluarga yang terkait dengan Dinasti Gupta kuno." }
            ]
        },
        female: {
            first: [
                { name: "Saanvi", native: "सानवी", meaning: "Dewi Lakshmi", history: "Nama modern yang merupakan sinonim dari Dewi Lakshmi, dewi kekayaan dan kemakmuran." },
                { name: "Aanya", native: "आन्या", meaning: "Tak Terhingga, Rahmat", history: "Nama Sansekerta yang berarti 'tak habis-habisnya' atau 'penuh rahmat'." },
                { name: "Myra", native: "मायरा", meaning: "Manis, Luar Biasa", history: "Berasal dari bahasa Latin, tetapi populer di India. Berarti 'mur' (resin wangi)." },
                { name: "Diya", native: "दिया", meaning: "Lampu, Cahaya", history: "Nama yang melambangkan cahaya, harapan, dan kemurnian, sering dikaitkan dengan festival Diwali." },
                { name: "Riya", native: "रिया", meaning: "Penyanyi", history: "Berasal dari bahasa Sansekerta, melambangkan musik dan melodi." },
                { name: "Aditi", native: "अदिति", meaning: "Tanpa Batas, Kebebasan", history: "Nama dewi langit Hindu kuno, ibu para dewa (Aditya)." },
                { name: "Kavya", native: "काव्या", meaning: "Puisi", history: "Nama Sansekerta yang berarti 'puisi' atau 'karya sastra', melambangkan kreativitas." },
                { name: "Tara", native: "तारा", meaning: "Bintang", history: "Nama dewi Buddha dan Hindu, melambangkan cahaya penuntun dan perlindungan." },
                { name: "Gauri", native: "गौरी", meaning: "Putih, Cerah", history: "Nama lain untuk Dewi Parvati, istri Dewa Siwa. Melambangkan kemurnian." },
                { name: "Fatima", native: "फ़ातिमा", meaning: "Menyapih, Menahan Diri", history: "Nama Arab yang sangat dihormati dalam Islam, nama putri Nabi Muhammad." }
            ],
            last: [
                { name: "Sharma", native: "शर्मा", meaning: "Kebahagiaan, Perlindungan", history: "Nama keluarga Brahmana yang umum di India utara." },
                { name: "Devi", native: "देवी", meaning: "Dewi", history: "Sering digunakan sebagai nama belakang oleh wanita di berbagai bagian India, melambangkan kewanitaan ilahi." },
                { name: "Kumari", native: "कुमारी", meaning: "Putri, Gadis", history: "Nama umum yang digunakan sebagai nama tengah atau belakang, terutama di India utara." },
                { name: "Patil", native: "पाटिल", meaning: "Kepala Desa", history: "Varian dari 'Patel', umum di negara bagian Maharashtra." },
                { name: "Reddy", native: "रेड्डी", meaning: "Kepala", history: "Nama keluarga dari komunitas agraris yang dominan di Andhra Pradesh dan Telangana." }
            ]
        }
    }
};
