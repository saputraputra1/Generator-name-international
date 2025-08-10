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
