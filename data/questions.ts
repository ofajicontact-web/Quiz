import { Question } from '../types';

export const MOROCCAN_QUESTIONS: Question[] = [
    {
        id: "mq_caftan_origin",
        level: 5,
        question: { fr: "Quelle est l'origine du caftan ?", en: "What is the origin of the caftan?", es: "¿Cuál es el origen del caftán?", dr: "شنو هي أصول القفطان؟" },
        options: { fr: ["Marocaine", "Ottomane", "Persane", "Andalouse"], en: ["Moroccan", "Ottoman", "Persian", "Andalusian"], es: ["Marroquí", "Otomana", "Persa", "Andaluza"], dr: ["مغربية", "عثمانية", "فارسية", "أندلسية"] },
        correctAnswer: { fr: "Marocaine", en: "Moroccan", es: "Marroquí", dr: "مغربية" },
        explanation: { fr: "Le caftan est d’origine marocaine, porté déjà par le sultan almohade Al-Murtaḍā (XIIIᵉ s.) et aujourd’hui inscrit à l’OMPI comme savoir-faire marocain.", en: "The caftan is of Moroccan origin, already worn by the Almohad sultan Al-Murtaḍā (13th century) and now registered with WIPO as Moroccan know-how.", es: "El caftán es de origen marroquí, ya usado por el sultán almohade Al-Murtaḍā (siglo XIII) y actualmente está inscrito en la OMPI como un saber hacer marroquí.", dr: "القفطان أصلو مغربي، كان كيلبسو السلطان الموحدي المرتضى (القرن 13) ودابا مسجل ف المنظمة العالمية للملكية الفكرية كخبرة مغربية." }
    },
    {
        id: "mq_maroquinerie_origin",
        level: 3,
        question: { fr: "Quelle est l’origine de la maroquinerie (travail du cuir) ?", en: "What is the origin of 'maroquinerie' (leatherwork)?", es: "¿Cuál es el origen de la marroquinería (trabajo en cuero)?", dr: "شنو هو أصل الماروكينري (خدمة الجلد)؟" },
        options: { fr: ["Maroc", "Italie", "Espagne", "France"], en: ["Morocco", "Italy", "Spain", "France"], es: ["Marruecos", "Italia", "España", "Francia"], dr: ["المغرب", "إيطاليا", "إسبانيا", "فرنسا"] },
        correctAnswer: { fr: "Maroc", en: "Morocco", es: "Marruecos", dr: "المغرب" },
        explanation: { fr: "La maroquinerie tire son nom du Maroc. Le 'maroquin' était un cuir de chèvre de haute qualité.", en: "The term 'maroquinerie' (leather goods) derives its name from Morocco. 'Maroquin' was a high-quality goat leather.", es: "La marroquinería toma su nombre de Marruecos. El 'marroquí' era un cuero de cabra de alta calidad.", dr: "الماروكينري جات سميتها من المغرب. 'الماروكان' كان جلد د المعيز من نوعية ممتازة." }
    },
    {
        id: "mq_zellige_art",
        level: 2,
        question: { fr: "Quel art marocain consiste à assembler des carreaux de faïence pour créer des motifs ?", en: "What Moroccan art involves assembling glazed tiles to create patterns?", es: "¿Qué arte marroquí consiste en ensamblar azulejos esmaltados para crear patrones?", dr: "أشمن فن مغربي كيجمعو فيه قطع صغيرة ملونة وفي أشكال هندسية، كتزين لقصور، ديور ورياضات المغربية؟" },
        options: { fr: ["Tadelakt", "Moucharabieh", "Gebs", "Zellige"], en: ["Tadelakt", "Mashrabiya", "Gebs", "Zellige"], es: ["Tadelakt", "Mucharabieh", "Gebs", "Zellige"], dr: ["التدلاكت", "المشربية", "الكبص", "الزليج"] },
        correctAnswer: { fr: "Zellige", en: "Zellige", es: "Zellige", dr: "الزليج" },
        explanation: { fr: "Le Zellige est un savoir-faire artisanal marocain, protégé par l'OMPI.", en: "Zellige is a Moroccan artisanal craft, protected by WIPO.", es: "El Zellige es un saber hacer artesanal marroquí, protegido por la OMPI.", dr: "الزليج هو حرفة يدوية مغربية، محمية من طرف المنظمة العالمية للملكية الفكرية." }
    },
    {
        id: "mq_toubkal_peak",
        level: 1,
        question: { fr: "Quel est le plus haut sommet d'Afrique du Nord, situé au Maroc ?", en: "What is the highest peak in North Africa, located in Morocco?", es: "¿Cuál es el pico más alto del norte de África, situado en Marruecos?", dr: "شنو هي أعلى قمة ف شمال إفريقيا، كاينة ف المغرب؟" },
        options: { fr: ["Mont Kilimandjaro", "Mont Kenya", "Jbel Toubkal", "Ras Dashen"], en: ["Mount Kilimanjaro", "Mount Kenya", "Jbel Toubkal", "Ras Dashen"], es: ["Monte Kilimanjaro", "Monte Kenia", "Yebel Toubkal", "Ras Dashan"], dr: ["جبل كيليمانجارو", "جبل كينيا", "جبل توبقال", "راس داشن"] },
        correctAnswer: { fr: "Jbel Toubkal", en: "Jbel Toubkal", es: "Yebel Toubkal", dr: "جبل توبقال" },
        explanation: { fr: "Le Jbel Toubkal, culminant à 4 167 mètres, est le plus haut sommet du massif de l'Atlas, du Maroc et de toute l'Afrique du Nord.", en: "Jbel Toubkal, at 4,167 meters, is the highest peak in the Atlas Mountains, Morocco, and all of North Africa.", es: "El Yebel Toubkal, con 4.167 metros, es el pico más alto de la cordillera del Atlas, de Marruecos y de todo el norte de África.", dr: "جبل توبقال، بارتفاع 4167 متر، هو أعلى قمة ف سلسلة جبال الأطلس، ف المغرب وشمال إفريقيا كاملة." }
    },
    {
        id: "mq_borcegui_origin",
        level: 8,
        question: { fr: "Quelle est l’origine du mot “Borcegui”, une botte militaire ?", en: "What is the origin of the word 'Borcegui', a military boot?", es: "¿Cuál es el origen de la palabra 'Borcegui', una bota militar?", dr: "شنو هو أصل كلمة 'بورصيكي'، لي هي بوط عسكري؟" },
        options: { fr: ["Flamande", "Marocaine", "Espagnole", "Italienne"], en: ["Flemish", "Moroccan", "Spanish", "Italian"], es: ["Flamenca", "Marroquí", "Española", "Italiana"], dr: ["فلامانية", "مغربية", "إسبانية", "إيطالية"] },
        correctAnswer: { fr: "Marocaine", en: "Moroccan", es: "Marroquí", dr: "مغربية" },
        explanation: { fr: "Le terme Borcegui dérive du mot amazigh marocain iborksen.", en: "The term Borcegui derives from the Moroccan Amazigh word iborksen.", es: "El término Borcegui deriva de la palabra amazigh marroquí iborksen.", dr: "كلمة بورصيكي جات من الكلمة الأمازيغية المغربية 'إيبوركسن'." }
    },
    {
        id: "mq_desert_gate_city",
        level: 2,
        question: { fr: "Quelle ville marocaine est surnommée la “porte du désert” ?", en: "Which Moroccan city is nicknamed the 'gateway to the desert'?", es: "¿Qué ciudad marroquí es apodada la 'puerta del desierto'?", dr: " شكون هي المدينة المغربية اللي ملقبة بباب الصحراء'؟" },
        options: { fr: ["Ouarzazate", "Erfoud", "Zagora", "Guelmim"], en: ["Ouarzazate", "Erfoud", "Zagora", "Guelmim"], es: ["Ouarzazate", "Erfoud", "Zagora", "Guelmim"], dr: ["ورزازات", "أرفود", "زاكورة", "كلميم"] },
        correctAnswer: { fr: "Ouarzazate", en: "Ouarzazate", es: "Ouarzazate", dr: "ورزازات" },
        explanation: { fr: "Ouarzazate est appelée ainsi car elle est le point de départ vers le désert du Sahara.", en: "Ouarzazate is called so because it is the starting point to the Sahara Desert.", es: "Ouarzazate es llamada así porque es el punto de partida hacia el desierto del Sahara.", dr: "ورزازات تسمات هكاك حيت هي نقطة الانطلاق للصحراء الكبرى." }
    },
    {
        id: "mq_atlas_mountains",
        level: 1,
        question: { fr: "Quelle chaîne de montagnes traverse le Maroc du sud-ouest au nord-est ?", en: "Which mountain range crosses Morocco from southwest to northeast?", es: "¿Qué cadena montañosa atraviesa Marruecos de suroeste a noreste?", dr: "شكون هي سلسلة الجبال اللي كتقطع المغرب من الجنوب الغربي للشمال الشرقي؟" },
        options: { fr: ["Atlas", "Rif", "Himalaya", "Andes"], en: ["Atlas", "Rif", "Himalayas", "Andes"], es: ["Atlas", "Rif", "Himalaya", "Andes"], dr: ["الأطلس", "الريف", "الهيمالايا", "الأنديز"] },
        correctAnswer: { fr: "Atlas", en: "Atlas", es: "Atlas", dr: "الأطلس" },
        explanation: { fr: "La chaîne de l’Atlas s’étend sur 2 500 km, dont une grande partie au Maroc.", en: "The Atlas mountain range extends over 2,500 km, a large part of which is in Morocco.", es: "La cordillera del Atlas se extiende a lo largo de 2.500 km, gran parte de la cual se encuentra en Marruecos.", dr: "سلسلة جبال الأطلس كتمتد على 2500 كيلومتر، وجزء كبير منها كاين فالمغرب." }
    },
    {
        id: "mq_green_march",
        level: 3,
        question: { fr: "Quel événement historique a eu lieu en 1975 et a marqué l’unité nationale marocaine ?", en: "What historical event took place in 1975 and marked Moroccan national unity?", es: "¿Qué acontecimiento histórico tuvo lugar en 1975 y marcó la unidad nacional marroquí?", dr: "أشنو هو الحدث التاريخي اللي وقع ف 1975 و بين الوحدة الوطنية المغربية؟" },
        options: { fr: ["La Marche Verte", "La Guerre du Rif", "L’Indépendance", "Les accords d’Agadir"], en: ["The Green March", "The Rif War", "Independence", "The Agadir Accords"], es: ["La Marcha Verde", "La Guerra del Rif", "La Independencia", "Los acuerdos de Agadir"], dr: ["المسيرة الخضراء", "حرب الريف", "الاستقلال", "اتفاقيات أكادير"] },
        correctAnswer: { fr: "La Marche Verte", en: "The Green March", es: "La Marcha Verde", dr: "المسيرة الخضراء" },
        explanation: { fr: "La Marche Verte, organisée en novembre 1975 sous le roi Hassan II, a mobilisé des centaines de milliers de Marocains pour récupérer pacifiquement les provinces du Sud et affirmer l’unité nationale.", en: "The Green March, organized in November 1975 under King Hassan II, mobilized hundreds of thousands of Moroccans to peacefully recover the Southern Provinces and affirm national unity.", es: "La Marcha Verde, organizada en noviembre de 1975 bajo el rey Hassan II, movilizó a cientos de miles de marroquíes para recuperar pacíficamente las provincias del Sur y afirmar la unidad nacional.", dr: "المسيرة الخضراء، اللي تنظمات ف نونبر 1975 ف عهد الملك الحسن الثاني، حشدات مئات الآلاف ديال المغاربة باش يسترجعو بشكل سلمي الأقاليم الجنوبية ويأكدو الوحدة الوطنية." }
    },
    {
        id: "mq_tanger_med_port",
        level: 3,
        question: { fr: "Quel est le plus grand port du Maroc et d’Afrique ?", en: "What is the largest port in Morocco and Africa?", es: "¿Cuál es el puerto más grande de Marruecos y de África?", dr: "أشنو هو أكبر ميناء فالمغرب وفأفريقيا؟" },
        options: { fr: ["Casablanca", "Tanger Med", "Agadir", "Safi"], en: ["Casablanca", "Tanger Med", "Agadir", "Safi"], es: ["Casablanca", "Tánger Med", "Agadir", "Safi"], dr: ["الدار البيضاء", "طنجة المتوسط", "أكادير", "آسفي"] },
        correctAnswer: { fr: "Tanger Med", en: "Tanger Med", es: "Tánger Med", dr: "طنجة المتوسط" },
        explanation: { fr: "Le port de Tanger Med est le plus grand port à conteneurs d’Afrique et le premier en Méditerranée. En 2024, il a traité plus de 10 millions de conteneurs et est connecté à 180 ports dans 70 pays.", en: "The port of Tanger Med is the largest container port in Africa and the first in the Mediterranean. In 2024, it handled over 10 million containers and is connected to 180 ports in 70 countries.", es: "El puerto de Tánger Med es el mayor puerto de contenedores de África y el primero del Mediterráneo. En 2024, manejó más de 10 millones de contenedores y está conectado a 180 puertos en 70 países.", dr: "ميناء طنجة المتوسط هو أكبر ميناء للحاويات فأفريقيا والأول فالبحر الأبيض المتوسط. ف 2024، عالج كتر من 10 مليون حاوية ومربوط ب 180 ميناء ف 70 بلاد." }
    },
    {
        id: "mq_safi_pottery",
        level: 3,
        question: { fr: "Quelle ville est réputée pour ses poteries bleues et blanches ?", en: "Which city is famous for its blue and white pottery?", es: "¿Qué ciudad es famosa por su cerámica azul y blanca?", dr: "أشنو هي المدينة اللي مشهورة بالخزف ديالها الزرق والبيض؟" },
        options: { fr: ["Fès", "Safi", "Salé", "Meknès"], en: ["Fes", "Safi", "Salé", "Meknes"], es: ["Fez", "Safi", "Salé", "Mequinez"], dr: ["فاس", "آسفي", "سلا", "مكناس"] },
        correctAnswer: { fr: "Safi", en: "Safi", es: "Safi", dr: "آسفي" },
        explanation: { fr: "Safi est la capitale marocaine de la poterie, renommée pour sa faïence bleue brillante. La ville produit des pièces uniques en céramique peinte à la main, notamment assiettes, vases et tajines aux motifs géométriques.", en: "Safi is the Moroccan capital of pottery, renowned for its brilliant blue faience. The city produces unique hand-painted ceramic pieces, including plates, vases, and tagines with geometric patterns.", es: "Safi es la capital marroquí de la alfarería, famosa por su loza azul brillante. La ciudad produce piezas únicas de cerámica pintada a mano, como platos, jarrones y tajines con motivos geométricos.", dr: "آسفي هي عاصمة الخزف المغربي، مشهورة بالخزف ديالها الزرق اللامع. المدينة كتنتج قطع فريدة من السيراميك المرسوم باليد، بحال الطباصل، الفازات والطواجن بزخارف هندسية." }
    },
    {
        id: "mq_zaynab_nafzawiyyah",
        level: 5,
        question: { fr: "Qui était Zaynab an-Nafzawiyyah ?", en: "Who was Zaynab an-Nafzawiyyah?", es: "¿Quién fue Zaynab an-Nafzawiyyah?", dr: "شكون كانت زينب النفزاوية؟" },
        options: { fr: ["Poétesse", "Reine", "Exploratrice", "Militante"], en: ["Poet", "Queen", "Explorer", "Activist"], es: ["Poeta", "Reina", "Exploradora", "Activista"], dr: ["شاعرة", "ملكة", "مستكشفة", "ناشطة"] },
        correctAnswer: { fr: "Reine", en: "Queen", es: "Reina", dr: "ملكة" },
        explanation: { fr: "Zaynab an-Nafzawiyyah (décédée vers 1072) était une figure influente du début de l’empire almoravide. Elle fut l'épouse de Yusuf ibn Tashfin et joua un rôle actif dans la gouvernance de l’État.", en: "Zaynab an-Nafzawiyyah (died c. 1072) was an influential figure in the early Almoravid empire. She was the wife of Yusuf ibn Tashfin and played an active role in the governance of the state.", es: "Zaynab an-Nafzawiyyah (fallecida c. 1072) fue una figura influyente en el inicio del imperio almorávide. Fue la esposa de Yusuf ibn Tashfin y desempeñó un papel activo en el gobierno del estado.", dr: "زينب النفزاوية (توفات حوالي 1072) كانت شخصية مؤثرة فبداية الدولة المرابطية. كانت زوجة يوسف بن تاشفين ولعبات دور فعال فحكم الدولة." }
    },
    {
        id: "mq_touria_chaoui",
        level: 2,
        question: { fr: "Quelle est la première aviatrice marocaine ?", en: "Who was the first Moroccan female pilot?", es: "¿Quién fue la primera aviadora marroquí?", dr: "شكون هي أول طيارة مغربية؟" },
        options: { fr: ["Malika El Fassi", "Zaynab Nafzaouia", "Touria Chaoui", "Naima Mcharki"], en: ["Malika El Fassi", "Zaynab Nafzaouia", "Touria Chaoui", "Naima Mcharki"], es: ["Malika El Fassi", "Zaynab Nafzaouia", "Touria Chaoui", "Naima Mcharki"], dr: ["مليكة الفاسي", "ليلى العلوي", "ثريا الشاوي", "نعيمة المشرقي"] },
        correctAnswer: { fr: "Touria Chaoui", en: "Touria Chaoui", es: "Touria Chaoui", dr: "ثريا الشاوي" },
        explanation: { fr: "Née en 1936 à Fès, elle obtient son brevet de pilote en 1951 à l’âge de 15 ans.", en: "Born in 1936 in Fes, she obtained her pilot's license in 1951 at the age of 15.", es: "Nacida en 1936 en Fez, obtuvo su licencia de piloto en 1951 a la edad de 15 años.", dr: "تزادت ف 1936 ففاس، وخدات شهادة الطيران ديالها ف 1951 وهي عندها 15 عام." }
    },
    {
        id: "mq_abdellah_ben_aicha",
        level: 6,
        question: { fr: "Quel rôle a joué Abdellah Ben Aïcha au XVIIe siècle ?", en: "What role did Abdellah Ben Aïcha play in the 17th century?", es: "¿Qué papel desempeñó Abdellah Ben Aïcha en el siglo XVII?", dr: "شنو هو الدور اللي لعبو عبد الله بن عائشة فالقرن 17؟" },
        options: { fr: ["Poète", "Diplomate", "Artiste", "Sultan"], en: ["Poet", "Diplomat", "Artist", "Sultan"], es: ["Poeta", "Diplomático", "Artista", "Sultán"], dr: ["شاعر", "دبلوماسي", "فنان", "سلطان"] },
        correctAnswer: { fr: "Diplomate", en: "Diplomat", es: "Diplomático", dr: "دبلوماسي" },
        explanation: { fr: "Né en 1646, il fut corsaire et ambassadeur marocain en France et en Angleterre.", en: "Born in 1646, he was a corsair and Moroccan ambassador to France and England.", es: "Nacido en 1646, fue corsario y embajador marroquí en Francia e Inglaterra.", dr: "تزاد ف 1646، كان قرصان وسفير مغربي ففرنسا وإنجلترا." }
    },
    {
        id: "mq_abdelkader_perez",
        level: 6,
        question: { fr: "Qui était Abdelkader Pérez ?", en: "Who was Abdelkader Pérez?", es: "¿Quién fue Abdelkader Pérez?", dr: "شكون كان عبد القادر بيريز؟" },
        options: { fr: ["Poète", "Ambassadeur du Maroc", "Explorateur", "Artiste"], en: ["Poet", "Ambassador of Morocco", "Explorer", "Artist"], es: ["Poeta", "Embajador de Marruecos", "Explorador", "Artista"], dr: ["شاعر", "سفير المغرب", "مستكشف", "فنان"] },
        correctAnswer: { fr: "Ambassadeur du Maroc", en: "Ambassador of Morocco", es: "Embajador de Marruecos", dr: "سفير المغرب" },
        explanation: { fr: "Il fut ambassadeur du Maroc en Angleterre en 1723 et 1737.", en: "He was the Moroccan ambassador to England in 1723 and 1737.", es: "Fue embajador de Marruecos en Inglaterra en 1723 y 1737.", dr: "كان سفير المغرب فإنجلترا ف 1723 و 1737." }
    },
    {
        id: "mq_carpet_material",
        level: 2,
        question: { fr: "Quel est le matériau principal utilisé dans les tapis traditionnels ?", en: "What is the main material used in traditional carpets?", es: "¿Cuál es el material principal utilizado en las alfombras tradicionales?", dr: "شنو هي المادة الرئيسية اللي كتستعمل فالزرابي التقليدية؟" },
        options: { fr: ["Laine", "Coton", "Soie", "Lin"], en: ["Wool", "Cotton", "Silk", "Linen"], es: ["Lana", "Algodón", "Seda", "Lino"], dr: ["الصوف", "القطن", "الحرير", "الكتان"] },
        correctAnswer: { fr: "Laine", en: "Wool", es: "Lana", dr: "الصوف" },
        explanation: { fr: "La laine est utilisée pour sa durabilité et sa capacité à conserver la chaleur dans les tapis marocains.", en: "Wool is used for its durability and ability to retain heat in Moroccan carpets.", es: "La lana se utiliza por su durabilidad y su capacidad para conservar el calor en las alfombras marroquíes.", dr: "الصوف كتستعمل فالزرابي المغربية حيت صحيحة وكتشد السخونية." }
    },
    {
        id: "mq_zaynab_birthplace",
        level: 5,
        question: { fr: "Où est née Zaynab an-Nafzawiyyah ?", en: "Where was Zaynab an-Nafzawiyyah born?", es: "¿Dónde nació Zaynab an-Nafzawiyyah?", dr: "فين تزادت زينب النفزاوية؟" },
        options: { fr: ["Marrakech", "Aghmat", "Fès", "Casablanca"], en: ["Marrakech", "Aghmat", "Fes", "Casablanca"], es: ["Marrakech", "Aghmat", "Fez", "Casablanca"], dr: ["مراكش", "أغمات", "فاس", "الدار البيضاء"] },
        correctAnswer: { fr: "Aghmat", en: "Aghmat", es: "Aghmat", dr: "أغمات" },
        explanation: { fr: "Aghmat est une ville historique du Haut Atlas marocain.", en: "Aghmat is a historic city in the Moroccan High Atlas.", es: "Aghmat es una ciudad histórica en el Alto Atlas marroquí.", dr: "أغمات مدينة تاريخية فالأطلس الكبير المغربي." }
    },
    {
        id: "mq_touria_chaoui_age",
        level: 2,
        question: { fr: "Quel âge avait Touria Chaoui lorsqu'elle a obtenu son brevet de pilote ?", en: "How old was Touria Chaoui when she got her pilot's license?", es: "¿Qué edad tenía Touria Chaoui cuando obtuvo su licencia de piloto?", dr: "شحال كان ف عمر ثريا الشاوي منين خدات شهادة الطيران ديالها؟" },
        options: { fr: ["15 ans", "17 ans", "19 ans", "21 ans"], en: ["15 years", "17 years", "19 years", "21 years"], es: ["15 años", "17 años", "19 años", "21 años"], dr: ["15 عام", "17 عام", "19 عام", "21 عام"] },
        correctAnswer: { fr: "15 ans", en: "15 years", es: "15 años", dr: "15 عام" },
        explanation: { fr: "Elle devient la première aviatrice marocaine à 15 ans en 1951.", en: "She became the first Moroccan female pilot at the age of 15 in 1951.", es: "Se convirtió en la primera aviadora marroquí a los 15 años en 1951.", dr: "ولات أول طيارة مغربية ف 1951 وهي عندها 15 عام." }
    },
    {
        id: "mq_ben_aicha_louis_xiv",
        level: 6,
        question: { fr: "En quelle année Abdellah Ben Aïcha a-t-il rencontré Louis XIV ?", en: "In what year did Abdellah Ben Aïcha meet Louis XIV?", es: "¿En qué año se encontró Abdellah Ben Aïcha con Luis XIV?", dr: "أشنو العام اللي تلاقى فيه عبد الله بن عائشة مع لويس الرابع عشر؟" },
        options: { fr: ["1689", "1695", "1699", "1705"], en: ["1689", "1695", "1699", "1705"], es: ["1689", "1695", "1699", "1705"], dr: ["1689", "1695", "1699", "1705"] },
        correctAnswer: { fr: "1699", en: "1699", es: "1699", dr: "1699" },
        explanation: { fr: "Il rencontre le roi de France le 16 février 1699 lors de sa mission diplomatique.", en: "He met the King of France on February 16, 1699, during his diplomatic mission.", es: "Se encontró con el rey de Francia el 16 de febrero de 1699 durante su misión diplomática.", dr: "تلاقى مع ملك فرنسا ف 16 فبراير 1699 فالمهمة الدبلوماسية ديالو." }
    },
    {
        id: "mq_perez_other_role",
        level: 6,
        question: { fr: "Quel autre rôle occupait Abdelkader Pérez en plus d'ambassadeur ?", en: "What other role did Abdelkader Pérez hold besides ambassador?", es: "¿Qué otro cargo ocupó Abdelkader Pérez además de embajador?", dr: "شنو هو الدور الآخر اللي كان عند عبد القادر بيريز من غير سفير؟" },
        options: { fr: ["Grand Amiral", "Sultan", "Poète", "Artiste"], en: ["Grand Admiral", "Sultan", "Poet", "Artist"], es: ["Gran Almirante", "Sultán", "Poeta", "Artista"], dr: ["أميرال كبير", "سلطان", "شاعر", "فنان"] },
        correctAnswer: { fr: "Grand Amiral", en: "Grand Admiral", es: "Gran Almirante", dr: "أميرال كبير" },
        explanation: { fr: "Il était également Grand Amiral de Salé, un poste clé pour la marine marocaine.", en: "He was also Grand Admiral of Salé, a key position for the Moroccan navy.", es: "También fue Gran Almirante de Salé, un puesto clave para la marina marroquí.", dr: "كان أيضا أميرال كبير ديال سلا، واحد المنصب مهم فالبحرية المغربية." }
    },
    {
        id: "mq_brel_song_tanger",
        level: 3,
        question: { fr: "Où Jacques Brel a-t-il écrit « La Valse à Mille Temps » ?", en: "Where did Jacques Brel write 'La Valse à Mille Temps'?", es: "¿Dónde escribió Jacques Brel 'La Valse à Mille Temps'?", dr: "فين كتب جاك بريل أغنية 'لا فالص أ ميل طون'؟" },
        options: { fr: ["Dans un taxi à Tanger", "Dans un café à Paris", "Dans un studio à Bruxelles", "Sur un bateau"], en: ["In a taxi in Tangier", "In a cafe in Paris", "In a studio in Brussels", "On a boat"], es: ["En un taxi en Tánger", "En un café en París", "En un estudio en Bruselas", "En un barco"], dr: ["فطاكسي فطنجة", "فقهوة فباريس", "فستوديو فبروكسيل", "فباخرة"] },
        correctAnswer: { fr: "Dans un taxi à Tanger", en: "In a taxi in Tangier", es: "En un taxi en Tánger", dr: "فطاكسي فطنجة" },
        explanation: { fr: "Jacques Brel a écrit cette chanson en 1959 dans un grand taxi sur la route entre Tanger et Casablanca.", en: "Jacques Brel wrote this song in 1959 in a grand taxi on the road between Tangier and Casablanca.", es: "Jacques Brel escribió esta canción en 1959 en un gran taxi en la carretera entre Tánger y Casablanca.", dr: "جاك بريل كتب هاد الأغنية ف 1959 ف طاكسي كبير فالطريق بين طنجة وكازا." }
    },
    {
        id: "mq_marcel_cerdan_nickname",
        level: 4,
        question: { fr: "Qui était surnommé « le Bombardier marocain » ?", en: "Who was nicknamed 'the Moroccan Bomber'?", es: "¿Quién fue apodado 'el Bombardero Marroquí'?", dr: "شكون كان ملقب ب 'البومباردي المغربي'؟" },
        options: { fr: ["Marcel Cerdan", "Tony Zale", "Jake LaMotta", "Georges Carpentier"], en: ["Marcel Cerdan", "Tony Zale", "Jake LaMotta", "Georges Carpentier"], es: ["Marcel Cerdan", "Tony Zale", "Jake LaMotta", "Georges Carpentier"], dr: ["مارسيل سيردان", "طوني زال", "جيك لاموتا", "جورج كاربونتيي"] },
        correctAnswer: { fr: "Marcel Cerdan", en: "Marcel Cerdan", es: "Marcel Cerdan", dr: "مارسيل سيردان" },
        explanation: { fr: "Après avoir remporté le titre de champion du monde des poids moyens en 1948, il est surnommé le « Bombardier marocain ». Il résidait avec sa famille à Casablanca.", en: "After winning the world middleweight title in 1948, he was nicknamed the 'Moroccan Bomber'. He lived with his family in Casablanca.", es: "Después de ganar el título mundial de peso mediano en 1948, fue apodado el 'Bombardero Marroquí'. Residía con su familia en Casablanca.", dr: "من بعد ما ربح لقب بطل العالم فالوزن المتوسط ف 1948، تّلقب ب 'البومباردي المغربي'. كان ساكن مع عائلتو فالدار البيضاء." }
    },
    {
        id: "mq_cerdan_piaf",
        level: 3,
        question: { fr: "Avec quelle chanteuse célèbre Marcel Cerdan a-t-il eu une relation ?", en: "With which famous singer did Marcel Cerdan have a relationship?", es: "¿Con qué famosa cantante tuvo una relación Marcel Cerdan?", dr: "شكون هي لمغنية المشهورة اللي كانت عند مارسيل سيردان علاقة معاها؟" },
        options: { fr: ["Édith Piaf", "Juliette Gréco", "Mireille Mathieu", "Barbara"], en: ["Édith Piaf", "Juliette Gréco", "Mireille Mathieu", "Barbara"], es: ["Édith Piaf", "Juliette Gréco", "Mireille Mathieu", "Barbara"], dr: ["إديث بياف", "جولييت غريكو", "ميغاي ماتيو", "باربارا"] },
        correctAnswer: { fr: "Édith Piaf", en: "Édith Piaf", es: "Édith Piaf", dr: "إديث بياف" },
        explanation: { fr: "Marcel Cerdan a eu une relation intense avec Édith Piaf, interrompue par sa mort dans un accident d’avion en 1949.", en: "Marcel Cerdan had an intense relationship with Édith Piaf, which was cut short by his death in a plane crash in 1949.", es: "Marcel Cerdan tuvo una intensa relación con Édith Piaf, interrumpida por su muerte en un accidente de avión en 1949.", dr: "مارسيل سيردان كانت عندو علاقة قوية مع إديث بياف، تقطعات بالموت ديالو فحادثة طيارة ف 1949." }
    },
    {
        id: "mq_clothing_import_algeria",
        level: 5,
        question: { fr: "En 2018, quel pays a importé plus de 97 % des vêtements traditionnels marocains ?", en: "In 2018, which country imported over 97% of traditional Moroccan clothing?", es: "En 2018, ¿qué país importó más del 97% de la ropa tradicional marroquí?", dr: "ف 2018, شكون هو البلد اللي استورد كتر من 97% من اللباس التقليدي المغربي؟" },
        options: { fr: ["Algérie", "Tunisie", "France", "Libye"], en: ["Algeria", "Tunisia", "France", "Libya"], es: ["Argelia", "Túnez", "Francia", "Libia"], dr: ["الجزائر", "تونس", "فرنسا", "ليبيا"] },
        correctAnswer: { fr: "Algérie", en: "Algeria", es: "Argelia", dr: "الجزائر" },
        explanation: { fr: "En 2018, l’Algérie a importé massivement des vêtements marocains traditionnels comme le caftan, la takchita et la jellaba.", en: "In 2018, Algeria massively imported traditional Moroccan clothing such as the caftan, takchita, and jellaba.", es: "En 2018, Argelia importó masivamente ropa tradicional marroquí como el caftán, la takchita y la jellaba.", dr: "ف 2018، الجزائر استوردات 97% من اللباس التقليدي المغربي بحال القفطان، التكشيطة والجلابة، هادشي مذكور عندهم في الجرائد." }
    },
    {
        id: "mq_baghrir_crepe",
        level: 1,
        question: { fr: "Quelle crêpe marocaine est connue pour ses mille petits trous ?", en: "Which Moroccan crepe is known for its thousand little holes?", es: "¿Qué crepe marroquí es conocido por sus mil pequeños agujeros?", dr: "أشنو هي الفطيرة المغربية اللي  مليئة  بالثقوب الصغيرة؟" },
        options: { fr: ["Baghrir", "Msemen", "Meloui", "Rghaif"], en: ["Baghrir", "Msemen", "Meloui", "Rghaif"], es: ["Baghrir", "Msemen", "Meloui", "Rghaif"], dr: ["البغرير", "المسمن", "الملوي", "الرغايف"] },
        correctAnswer: { fr: "Baghrir", en: "Baghrir", es: "Baghrir", dr: "البغرير" },
        explanation: { fr: "Le baghrir est une crêpe légère et spongieuse, cuite sur une seule face, servie chaude avec du miel ou du beurre.", en: "Baghrir is a light and spongy crepe, cooked on one side, served hot with honey or butter.", es: "El baghrir es un crepe ligero y esponjoso, cocido por un solo lado, que se sirve caliente con miel o mantequilla.", dr: "البغرير هي فطيرة مغربية ذو شكل دائري، إسفنجية، كتصاوب بالطحين أو سميدة والماء، وملي كطيب كتكون مليئة بالثقوب الصغيرة" }
    },
    {
        id: "mq_el_badi_palace",
        level: 3,
        question: { fr: "Quel palais de Marrakech a été construit par le sultan Ahmed al-Mansur au XVIe siècle ?", en: "Which palace in Marrakech was built by Sultan Ahmed al-Mansur in the 16th century?", es: "¿Qué palacio de Marrakech fue construido por el sultán Ahmed al-Mansur en el siglo XVI?", dr: "إينا قصر في فمراكش بناه السلطان أحمد المنصور فالقرن 16؟" },
        options: { fr: ["Palais El Badi", "Palais Bahia", "Palais Royal", "Palais Dar Si Said"], en: ["El Badi Palace", "Bahia Palace", "Royal Palace", "Dar Si Said Palace"], es: ["Palacio El Badi", "Palacio de la Bahía", "Palacio Real", "Palacio Dar Si Said"], dr: ["قصر البديع", "قصر الباهية", "القصر الملكي", "قصر دار السي سعيد"] },
        correctAnswer: { fr: "Palais El Badi", en: "El Badi Palace", es: "Palacio El Badi", dr: "قصر البديع" },
        explanation: { fr: "Le Palais El Badi est un exemple de l’architecture et de la richesse du XVIe siècle, célèbre pour ses ruines spectaculaires et ses décorations en marbre et mosaïque.", en: "The El Badi Palace is an example of 16th-century architecture and wealth, famous for its spectacular ruins and marble and mosaic decorations.", es: "El Palacio El Badi es un ejemplo de la arquitectura y riqueza del siglo XVI, famoso por sus espectaculares ruinas y sus decoraciones en mármol y mosaico.", dr: "قصر البديع هو مثال على الهندسة المعمارية المغربية والغنى ديال القرن 16، مشهور بالأطلال ديالو المذهلة والزخارف ديال الرخام والزليج." }
    },
    {
        id: "mq_caftan_ntaa_motif",
        level: 5,
        question: { fr: "Quel motif caractéristique distingue le caftan marocain “Ntaa” ?", en: "What characteristic pattern distinguishes the Moroccan caftan 'Ntaa'?", es: "¿Qué motivo característico distingue al caftán marroquí 'Ntaa'?", dr: "أشنو هو الرسم اللي كيميز قفطان نطع المغربي ؟" },
        options: { fr: ["Khanjar", "Deux paons", "Dragons", "Lions"], en: ["Khanjar", "Two peacocks", "Dragons", "Lions"], es: ["Khanjar", "Dos pavos reales", "Dragones", "Leones"], dr: ["خنجر", "جوج طواوس", "تنانين", "أسود"] },
        correctAnswer: { fr: "Deux paons", en: "Two peacocks", es: "Dos pavos reales", dr: "جوج طواوس" },
        explanation: { fr: "Le caftan “Ntaa” se distingue par sa broderie représentant deux paons face à face, un symbole de beauté et d’élégance dans l’artisanat marocain.", en: "The 'Ntaa' caftan is distinguished by its embroidery depicting two peacocks facing each other, a symbol of beauty and elegance in Moroccan craftsmanship.", es: "El caftán 'Ntaa' se distingue por su bordado que representa dos pavos reales uno frente al otro, un símbolo de belleza y elegancia en la artesanía marroquí.", dr: "قفطان نطع كيتميز بالطرزة ديالو اللي فيها جوج طواوس لتحت متقابلين، رمز للجمال والأناقة فالصناعة التقليدية المغربية." }
    },
    {
        id: "mq_chefchaouen_color",
        level: 1,
        question: { fr: "Pour quelle couleur distinctive la ville de Chefchaouen est-elle célèbre ?", en: "For what distinctive color is the city of Chefchaouen famous?", es: "¿Por qué color distintivo es famosa la ciudad de Chefchaouen?", dr: "باشمن لون مميز مشهورة مدينة شفشاون؟" },
        options: { fr: ["Blanc", "Bleu", "Rouge", "Jaune"], en: ["White", "Blue", "Red", "Yellow"], es: ["Blanco", "Azul", "Rojo", "Amarillo"], dr: ["البيض", "الزرق", "الحمر", "الصّفر"] },
        correctAnswer: { fr: "Bleu", en: "Blue", es: "Azul", dr: "الزرق" },
        explanation: { fr: "Chefchaouen, située dans les montagnes du Rif, est surnommée la 'Perle Bleue' du Maroc en raison de ses bâtiments et ruelles peints dans toutes les nuances de bleu.", en: "Chefchaouen, located in the Rif mountains, is nicknamed the 'Blue Pearl' of Morocco because of its buildings and alleys painted in all shades of blue.", es: "Chefchaouen, situada en las montañas del Rif, es apodada la 'Perla Azul' de Marruecos por sus edificios y callejones pintados en todos los tonos de azul.", dr: "شفشاون، اللي كاينة فجبال الريف، ملقبة ب'اللؤلؤة الزرقاء' ديال المغرب حيت الديور والدروبا ديالها مصبوغين بجميع درجات اللون الزرق." }
    },
    {
        id: "mq_amlou_ingredients",
        level: 2,
        question: { fr: "De quels ingrédients principaux est composé l'Amlou, une pâte à tartiner marocaine ?", en: "What are the main ingredients of Amlou, a Moroccan spread?", es: "¿Cuáles son los ingredientes principales del Amlou, una crema de untar marroquí?", dr: "شنو هي المكونات الرئيسية ديال أملو؟" },
        options: { fr: ["Dattes, noix et miel", "Amandes, miel et huile d'argan", "Figues, sésame et huile d'olive", "Cacahuètes, sucre et beurre"], en: ["Dates, walnuts and honey", "Almonds, honey and argan oil", "Figs, sesame and olive oil", "Peanuts, sugar and butter"], es: ["Dátiles, nueces y miel", "Almendras, miel y aceite de argán", "Higos, sésamo y aceite de oliva", "Cacahuetes, azúcar y mantequilla"], dr: ["التمر، الكركاع والعسل", "اللوز، العسل وزيت أركان", "الكرموص، الزنجلان وزيت الزيتون", "كاوكاو، السكر والزبدة"] },
        correctAnswer: { fr: "Amandes, miel et huile d'argan", en: "Almonds, honey and argan oil", es: "Almendras, miel y aceite de argán", dr: "اللوز، العسل وزيت أركان" },
        explanation: { fr: "L'Amlou est une délicieuse et énergique pâte à tartiner traditionnelle de la région du Souss au Maroc, préparée à base d'amandes grillées, de miel et d'huile d'argan.", en: "Amlou is a delicious and energetic traditional spread from the Souss region of Morocco, made from roasted almonds, honey, and argan oil.", es: "El Amlou es una deliciosa y energética crema de untar tradicional de la región de Souss en Marruecos, preparada a base de almendras tostadas, miel y aceite de argán.", dr: "أملو هو خليط بنين وكيعطي الطاقة، معروف فمنطقة سوس، كيتصاوب من اللوز محمر، العسل وزيت أركان." }
    },
    {
        id: "mq_mrouzia_mention",
        level: 8,
        question: { fr: "Quel écrivain a mentionné le plat Mrouzia comme idiome et plat du Maroc au XVIIᵉ siècle ?", en: "Which writer mentioned the Mrouzia dish as an idiom and dish of Morocco in the 17th century?", es: "¿Qué escritor mencionó el plato Mrouzia como un modismo y plato de Marruecos en el siglo XVII?", dr: "شكون هو الكاتب لي ذكر المروزية كطبق وكمصطلح مغربي فالقرن 17؟" },
        options: { fr: ["Molière", "Paul Scarron", "François Mesgnien (Meninski)", "Fénelon"], en: ["Molière", "Paul Scarron", "François Mesgnien (Meninski)", "Fénelon"], es: ["Molière", "Paul Scarron", "François Mesgnien (Meninski)", "Fénelon"], dr: ["موليير", "بول سكارون", "فرانسوا مينينسكي", "فينيلون"] },
        correctAnswer: { fr: "François Mesgnien (Meninski)", en: "François Mesgnien (Meninski)", es: "François Mesgnien (Meninski)", dr: "فرانسوا مينينسكي" },
        explanation: { fr: "Meninski cite la Mrouzia au XVIIᵉ siècle, déjà décrite par Ibn Razin Atujibi au XIIIᵉ siècle comme spécialité marocaine.", en: "Meninski mentioned Mrouzia in the 17th century, already described by Ibn Razin Atujibi in the 13th century as a Moroccan specialty.", es: "Meninski menciona la Mrouzia en el siglo XVII, ya descrita por Ibn Razin Atujibi en el siglo XIII como una especialidad marroquí.", dr: "مينينسكي ذكر المروزية فالقرن 17، و كانت ديجا توصفات من طرف ابن رزين التجيبي فالقرن 13 كأكلة مغربية." }
    },
    {
        id: "mq_le_royaume_de_maroc",
        level: 7,
        question: { fr: "Quel compositeur a créé l'œuvre 'Le Royaume de Maroc' en 1793 ?", en: "Which composer created the work 'The Kingdom of Morocco' in 1793?", es: "¿Qué compositor creó la obra 'El Reino de Marruecos' en 1793?", dr: "شكون هو المؤلف الموسيقي لي دار عمل 'مملكة المغرب' ف 1793؟" },
        options: { fr: ["Paul Wranitzky", "Mozart", "Beethoven", "Haydn"], en: ["Paul Wranitzky", "Mozart", "Beethoven", "Haydn"], es: ["Paul Wranitzky", "Mozart", "Beethoven", "Haydn"], dr: ["بول ورانيتسكي", "موزارت", "بيتهوفن", "هايدن"] },
        correctAnswer: { fr: "Paul Wranitzky", en: "Paul Wranitzky", es: "Paul Wranitzky", dr: "بول ورانيتسكي" },
        explanation: { fr: "Paul Wranitzky était un compositeur et violoniste tchèque, figure musicale importante de Vienne. Son œuvre a été créée 10 ans après la signature du traité de paix et de commerce entre l'Autriche et le Maroc (1783).", en: "Paul Wranitzky was a Czech composer and violinist, an important musical figure in Vienna. His work was created 10 years after the signing of the treaty of peace and trade between Austria and Morocco (1783).", es: "Paul Wranitzky fue un compositor y violinista checo, una figura musical importante en Viena. Su obra fue creada 10 años después de la firma del tratado de paz y comercio entre Austria y Marruecos (1783).", dr: "بول ورانيتسكي كان مؤلف موسيقي و عازف كمان تشيكي، شخصية موسيقية مهمة ففيينا. العمل ديالو تدار 10 سنين من بعد توقيع معاهدة السلام والتجارة بين النمسا والمغرب (1783)." }
    },
    {
        id: "mq_lalla_messaouda",
        level: 5,
        question: { fr: "De quel célèbre sultan Lalla Messâöuda était-elle la mère ?", en: "Of which famous sultan was Lalla Messâöuda the mother?", es: "¿De qué famoso sultán era madre Lalla Messâöuda?", dr: "للا مسعودة كانت الأم ديال أي سلطان مشهور؟" },
        options: { fr: ["Ahmad al-Mansur", "Youssef ibn Tachafin", "Mohammed al-Cheikh", "Yaccoub Almanssour"], en: ["Ahmad al-Mansur", "Youssef ibn Tachafin", "Mohammed al-Cheikh", "Yaccoub Almanssour"], es: ["Ahmad al-Mansur", "Youssef ibn Tachafin", "Mohammed al-Cheikh", "Yaccoub Almanssour"], dr: ["أحمد المنصور", "يوسف بن تاشفين", "محمد الشيخ", "يعقوب المنصور"] },
        correctAnswer: { fr: "Ahmad al-Mansur", en: "Ahmad al-Mansur", es: "Ahmad al-Mansur", dr: "أحمد المنصور" },
        explanation: { fr: "Surnommée 'Oum El Moulouks' (Mère des Rois), Lalla Messâöuda était une figure influente de la dynastie saadienne et mère du sultan Ahmad al-Mansur (règne : 1578-1603).", en: "Nicknamed 'Oum El Moulouks' (Mother of Kings), Lalla Messâöuda was an influential figure of the Saadian dynasty and mother of Sultan Ahmad al-Mansur (reign: 1578-1603).", es: "Apodada 'Oum El Moulouks' (Madre de Reyes), Lalla Messâöuda fue una figura influyente de la dinastía Saadí y madre del sultán Ahmad al-Mansur (reinado: 1578-1603).", dr: "ملقبة ب'أم الملوك'، للا مسعودة كانت شخصية مؤثرة فالدولة السعدية و أم السلطان أحمد المنصور (الحكم: 1578-1603)." }
    },
    {
        id: "mq_world_cup_2022",
        level: 2,
        question: { fr: "Quelle place a atteint l'équipe du Maroc à la Coupe du Monde 2022 ?", en: "What place did the Moroccan team reach in the 2022 World Cup?", es: "¿Qué puesto alcanzó la selección de Marruecos en el Mundial de 2022?", dr: "أشنو هو المركز لي وصل ليه المنتخب المغربي فكأس العالم 2022؟" },
        options: { fr: ["Quatrième place", "Cinquième place", "Sixième place", "Huitième place"], en: ["Fourth place", "Fifth place", "Sixth place", "Eighth place"], es: ["Cuarto lugar", "Quinto lugar", "Sexto lugar", "Octavo lugar"], dr: ["المركز الرابع", "المركز الخامس", "المركز السادس", "المركز الثامن"] },
        correctAnswer: { fr: "Quatrième place", en: "Fourth place", es: "Cuarto lugar", dr: "المركز الرابع" },
        explanation: { fr: "En 2022 au Qatar, l'équipe du Maroc a réalisé un parcours historique et sans précédent en se qualifiant pour les demi-finales d'une Coupe du Monde, terminant à la quatrième place.", en: "In 2022 in Qatar, the Moroccan team achieved a historic and unprecedented run by qualifying for the semi-finals of a World Cup, finishing in fourth place.", es: "En 2022 en Qatar, la selección de Marruecos realizó una trayectoria histórica y sin precedentes al clasificarse para las semifinales de un Mundial, terminando en cuarto lugar.", dr: "ف 2022 فقطر، المنتخب المغربي دار مسار تاريخي و غير مسبوق بتأهله لنصف نهائي كأس العالم، و سالا فالمركز الرابع." }
    },
    {
        id: "mq_earthquake_1755",
        level: 4,
        question: { fr: "Quel événement naturel majeur a frappé le Maroc en 1755 ?", en: "What major natural event struck Morocco in 1755?", es: "¿Qué importante evento natural azotó Marruecos en 1755?", dr: "أشنو هو الحدث الطبيعي الكبير لي ضرب المغرب ف 1755؟" },
        options: { fr: ["Un séisme et un tsunami", "Une éruption volcanique", "Une grande inondation", "Une sécheresse historique"], en: ["An earthquake and a tsunami", "A volcanic eruption", "A great flood", "A historic drought"], es: ["Un terremoto y un tsunami", "Una erupción volcánica", "Una gran inundación", "Una sequía histórica"], dr: ["زلزال و تسونامي", "ثوران بركاني", "فيضان كبير", "جفاف تاريخي"] },
        correctAnswer: { fr: "Un séisme et un tsunami", en: "An earthquake and a tsunami", es: "Un terremoto y un tsunami", dr: "زلزال و تسونامي" },
        explanation: { fr: "Le 1er novembre 1755, un puissant séisme connu comme le 'tremblement de terre de Lisbonne' a généré un tsunami qui a dévasté les côtes du Portugal, de l'Espagne et du Maroc.", en: "On November 1, 1755, a powerful earthquake known as the 'Lisbon earthquake' generated a tsunami that devastated the coasts of Portugal, Spain, and Morocco.", es: "El 1 de noviembre de 1755, un potente terremoto conocido como el 'terremoto de Lisboa' generó un tsunami que devastó las costas de Portugal, España y Marruecos.", dr: "ف 1 نونبر 1755، واحد الزلزال قوي معروف ب'زلزال لشبونة' ولد تسونامي دمر سواحل البرتغال، إسبانيا والمغرب." }
    },
    {
        id: "mq_kass_el_bellar",
        level: 8,
        question: { fr: "Quelle verrerie française a fabriqué le Kass El Bellar, verre à thé prisé par les sultans marocains ?", en: "Which French glass factory made the Kass El Bellar, a tea glass prized by Moroccan sultans?", es: "¿Qué fábrica de vidrio francesa fabricó el Kass El Bellar, un vaso de té apreciado por los sultanes marroquíes?", dr: "أشنو هي مصنع الزاج الفرنسي لي صاوب كاس البلار، لي كان عزيز على سلاطين المغرب؟" },
        options: { fr: ["Verrerie de Baccarat", "Verrerie de Sèvres", "Verrerie de Müntzthal", "Verrerie de Limoges"], en: ["Baccarat Glassworks", "Sèvres Glassworks", "Müntzthal Glassworks", "Limoges Glassworks"], es: ["Cristalería de Baccarat", "Cristalería de Sèvres", "Cristalería de Müntzthal", "Cristalería de Limoges"], dr: ["مصنع زاج بكارة", "مصنع زاج سيفر", "مصنع زاج مونتزتال", "مصنع زاج ليموج"] },
        correctAnswer: { fr: "Verrerie de Müntzthal", en: "Müntzthal Glassworks", es: "Cristalería de Müntzthal", dr: "مصنع زاج مونتزتال" },
        explanation: { fr: "Fondée en 1586, la verrerie de Müntzthal est rebaptisée Verrerie Royale de Saint-Louis en 1767 par lettres patentes de Louis XV. Elle devient célèbre auprès de la bourgeoisie française et attire les cours royales, dont les sultans de l’empire chérifien, qui commandent le Kass El Bellar, verre à thé raffiné devenu emblématique.", en: "Founded in 1586, the Müntzthal glassworks was renamed Verrerie Royale de Saint-Louis in 1767 by letters patent from Louis XV. It became famous among the French bourgeoisie and attracted royal courts, including the sultans of the Cherifian empire, who ordered the Kass El Bellar, a refined tea glass that became emblematic.", es: "Fundada en 1586, la cristalería de Müntzthal fue rebautizada como Verrerie Royale de Saint-Louis en 1767 por patente real de Luis XV. Se hizo famosa entre la burguesía francesa y atrajo a las cortes reales, incluidos los sultanes del imperio jerifiano, que encargaban el Kass El Bellar, un refinado vaso de té que se convirtió en un emblema.", dr: "تأسس مصنع زاج مونتزتال ف 1586 و تبدلات سميتو ل'Verrerie Royale de Saint-Louis' ف 1767. تشهر عند البورجوازية الفرنسية و جذب البلاطات الملكية، منهم سلاطين الإمبراطورية الشريفة، لي كانو كيطلبوه يصاوب ليهم كاس البلار، كاس أتاي راقي ولا رمز." }
    },
    {
        id: "mq_aissawa_origin",
        level: 4,
        question: { fr: "De quelle ville la confrérie Aïssawa est-elle originaire ?", en: "From which city does the Aïssawa brotherhood originate?", es: "¿De qué ciudad es originaria la hermandad Aïssawa?", dr: "من أي مدينة أصل الطريقة العيساوية؟" },
        options: { fr: ["Meknès", "Fès", "Marrakech", "Salé"], en: ["Meknes", "Fes", "Marrakech", "Salé"], es: ["Mequinez", "Fez", "Marrakech", "Salé"], dr: ["مكناس", "فاس", "مراكش", "سلا"] },
        correctAnswer: { fr: "Meknès", en: "Meknes", es: "Mequinez", dr: "مكناس" },
        explanation: { fr: "La confrérie Aïssawa, fondée à Meknès par Sidi Mhammed ben Aïssâ (1465-1526), est célèbre pour ses rituels rythmés par des chants et des percussions.", en: "The Aïssawa brotherhood, founded in Meknes by Sidi Mhammed ben Aïssâ (1465-1526), is famous for its rituals punctuated by songs and percussion.", es: "La hermandad Aïssawa, fundada en Mequinez por Sidi Mhammed ben Aïssâ (1465-1526), es famosa por sus rituales marcados por cantos y percusión.", dr: "الطريقة العيساوية، لي أسسها سيدي محمد بن عيسى (1465-1526) فمكناس، مشهورة بالطقوس ديالها لي فيها الحضرة و الأذكار." }
    },
    {
        id: "mq_bacha_coffee",
        level: 3,
        question: { fr: "En quelle année la célèbre maison de café Bacha Coffee a-t-elle été fondée à Marrakech ?", en: "In what year was the famous Bacha Coffee house founded in Marrakech?", es: "¿En qué año se fundó la famosa casa de café Bacha Coffee en Marrakech?", dr: "أشمن عام تأسست قهوة الباشا المشهورة فمراكش؟" },
        options: { fr: ["1910", "1925", "1900", "1945"], en: ["1910", "1925", "1900", "1945"], es: ["1910", "1925", "1900", "1945"], dr: ["1910", "1925", "1900", "1945"] },
        correctAnswer: { fr: "1910", en: "1910", es: "1910", dr: "1910" },
        explanation: { fr: "Fondée en 1910 dans le somptueux palais de Dar el Bacha, la maison Bacha Coffee était un lieu de rencontre pour des figures comme Winston Churchill durant le XXe siècle.", en: "Founded in 1910 in the sumptuous Dar el Bacha palace, Bacha Coffee was a meeting place for figures like Winston Churchill during the 20th century.", es: "Fundada en 1910 en el suntuoso palacio de Dar el Bacha, la casa Bacha Coffee fue un lugar de encuentro para figuras como Winston Churchill durante el siglo XX.", dr: "تأسست قهوة الباشا ف 1910 فقصر دار الباشا الفخم، و كانت ملتقى لشخصيات بحال ونستون تشرشل فالقرن العشرين." }
    },
    {
        id: "mq_three_sisters_towers",
        level: 2,
        question: { fr: "La Koutoubia, la Giralda et la Tour Hassan sont nommées les 'sœurs'. Par qui ont-elles été construites ?", en: "The Koutoubia, the Giralda and the Hassan Tower are called the 'sisters'. Who were they built by?", es: "La Koutoubia, la Giralda y la Torre Hassan son llamadas las 'hermanas'. ¿Quién las construyó?", dr: "الكتبية، الخيرالدا و صومعة حسان كيتسماو 'الخواتات'. شكون بناهم؟" },
        options: { fr: ["La dynastie almohade", "La dynastie mérinide", "La dynastie saadienne", "La dynastie almoravide"], en: ["The Almohad dynasty", "The Marinid dynasty", "The Saadian dynasty", "The Almoravid dynasty"], es: ["La dinastía almohade", "La dinastía meriní", "La dinastía saadí", "La dinastía almorávide"], dr: ["الدولة الموحدية", "الدولة المرينية", "الدولة السعدية", "الدولة المرابطية"] },
        correctAnswer: { fr: "La dynastie almohade", en: "The Almohad dynasty", es: "La dinastía almohade", dr: "الدولة الموحدية" },
        explanation: { fr: "Ces trois tours emblématiques ont été érigées à la fin du XIIe siècle sous le règne de la dynastie almohade, partageant un style architectural commun et distinctif.", en: "These three emblematic towers were erected at the end of the 12th century during the reign of the Almohad dynasty, sharing a common and distinctive architectural style.", es: "Estas tres torres emblemáticas fueron erigidas a finales del siglo XII bajo el reinado de la dinastía almohade, compartiendo un estilo arquitectónico común y distintivo.", dr: "هاد الصومعات الرمزية الثلاثة تبناو فآخر القرن 12 فعهد الدولة الموحدية، و عندهم نفس الطراز المعماري المميز." }
    },
    {
        id: "mq_mhanncha_origin",
        level: 5,
        question: { fr: "Dans quel palais de Meknès la pâtisserie 'Mhanncha' serait-elle née ?", en: "In which palace in Meknes is the 'Mhanncha' pastry said to have been born?", es: "¿En qué palacio de Mequinez se dice que nació el pastel 'Mhanncha'?", dr: "فأينا قصر فمكناس يقال أنها تصاوبات حلوة المحنشة؟" },
        options: { fr: ["Le palais royal de Meknès", "Le palais Bahia", "Le palais El Badi", "Le palais Bacha"], en: ["The royal palace of Meknes", "The Bahia Palace", "The El Badi Palace", "The Bacha Palace"], es: ["El palacio real de Mequinez", "El palacio de la Bahía", "El palacio El Badi", "El Palacio Bacha"], dr: ["القصر الملكي د مكناس", "قصر الباشا", "قصر البديع", "قصر الباهية"] },
        correctAnswer: { fr: "Le palais royal de Meknès", en: "The royal palace of Meknes", es: "El palacio real de Mequinez", dr: "القصر الملكي د مكناس" },
        explanation: { fr: "L'historien du XIXe siècle Ibn Zidane Sijlmassi rapporte dans ses écrits que cette pâtisserie en forme de serpentin a été créée dans les cuisines du grand palais royal de Meknès.", en: "The 19th-century historian Ibn Zidane Sijlmassi reports in his writings that this serpentine-shaped pastry was created in the kitchens of the great royal palace of Meknes.", es: "El historiador del siglo XIX Ibn Zidane Sijlmassi relata en sus escritos que este pastel en forma de serpentina fue creado en las cocinas del gran palacio real de Mequinez.", dr: "المؤرخ ديال القرن 19 ابن زيدان السجلماسي كيقول فالكتابات ديالو أن هاد الحلوة لي على شكل حنش تصاوبات فالكوزينات ديال القصر الملكي الكبير فمكناس." }
    },
    {
        id: "mq_first_moroccan_actress",
        level: 3,
        question: { fr: "Qui est considérée comme la première actrice du cinéma marocain ?", en: "Who is considered the first actress of Moroccan cinema?", es: "¿Quién es considerada la primera actriz del cine marroquí?", dr: "شكون هي أول ممثلة فالسينما المغربية؟" },
        options: { fr: ["Saida Beni Saïd", "Souad Saber", "Amina Rachid", "Habiba El Madkouri"], en: ["Saida Beni Saïd", "Souad Saber", "Amina Rachid", "Habiba El Madkouri"], es: ["Saida Beni Saïd", "Souad Saber", "Amina Rachid", "Habiba El Madkouri"], dr: ["سعيدة بني سعيد", "سعاد صابر", "أمينة رشيد", "حبيبة المذكوري"] },
        correctAnswer: { fr: "Saida Beni Saïd", en: "Saida Beni Saïd", es: "Saida Beni Saïd", dr: "سعيدة بني سعيد" },
        explanation: { fr: "Saida Beni Saïd est reconnue comme une pionnière du septième art national pour son rôle dans le film 'Mektoub', l'un des premiers films du pays.", en: "Saida Beni Saïd is recognized as a pioneer of the national seventh art for her role in the film 'Mektoub', one of the country's first films.", es: "Saida Beni Saïd es reconocida como pionera del séptimo arte nacional por su papel en la película 'Mektoub', una de las primeras películas del país.", dr: "سعيدة بني سعيد معروفة كرائدة فالفن السابع المغربي بالدور ديالها ففيلم 'مكتوب'، واحد من أول الأفلام فالبلاد." }
    },
    {
        id: "mq_ahmed_quadran_nasir",
        level: 7,
        question: { fr: "Qui était Ahmed Iben Ahmed Quadran-Nasir ?", en: "Who was Ahmed Iben Ahmed Quadran-Nasir?", es: "¿Quién fue Ahmed Iben Ahmed Quadran-Nasir?", dr: "شكون كان أحمد بن أحمد قادرا ناصر؟" },
        options: { fr: ["Ambassadeur du Maroc à la cour de la reine Anne d’Angleterre", "Sultan de la dynastie saadienne", "Explorateur du Sahara", "Poète de la cour de Fès"], en: ["Ambassador of Morocco to the court of Queen Anne of England", "Sultan of the Saadian dynasty", "Explorer of the Sahara", "Poet of the court of Fes"], es: ["Embajador de Marruecos en la corte de la reina Ana de Inglaterra", "Sultán de la dinastía Saadí", "Explorador del Sahara", "Poeta de la corte de Fez"], dr: ["سفير المغرب فبلاط الملكة آن دإنجلترا", "سلطان الدولة السعدية", "مستكشف الصحراء", "شاعر فبلاط فاس"] },
        correctAnswer: { fr: "Ambassadeur du Maroc à la cour de la reine Anne d’Angleterre", en: "Ambassador of Morocco to the court of Queen Anne of England", es: "Embajador de Marruecos en la corte de la reina Ana de Inglaterra", dr: "سفير المغرب فبلاط الملكة آن دإنجلترا" },
        explanation: { fr: "En 1706, il devint une figure importante à Londres, attirant l’attention par son rôle diplomatique et son influence culturelle.", en: "In 1706, he became an important figure in London, attracting attention for his diplomatic role and cultural influence.", es: "En 1706, se convirtió en una figura importante en Londres, atrayendo la atención por su papel diplomático e influencia cultural.", dr: "ف 1706، ولا شخصية مهمة فلندن، و جذب الانتباه بالدور الدبلوماسي ديالو و التأثير الثقافي." }
    },
    {
        id: "mq_first_moroccan_royal_society",
        level: 7,
        question: { fr: "Qui est devenu le premier Marocain membre honorifique de la Royal Society britannique ?", en: "Who became the first Moroccan honorary member of the British Royal Society?", es: "¿Quién se convirtió en el primer miembro honorario marroquí de la Royal Society británica?", dr: "شكون هو أول مغربي ولا عضو فخري فالجمعية الملكية البريطانية؟" },
        options: { fr: ["Ahmed Iben Ahmed Quadran-Nasir", "Mohammed Ben Haddou", "Abdelouahed ben Messaoud", "Ben Aicha"], en: ["Ahmed Iben Ahmed Quadran-Nasir", "Mohammed Ben Haddou", "Abdelouahed ben Messaoud", "Ben Aicha"], es: ["Ahmed Iben Ahmed Quadran-Nasir", "Mohammed Ben Haddou", "Abdelouahed ben Messaoud", "Ben Aicha"], dr: ["أحمد بن أحمد قادرا ناصر", "محمد بن حدو", "عبد الواحد بن مسعود", "بن عائشة"] },
        correctAnswer: { fr: "Mohammed Ben Haddou", en: "Mohammed Ben Haddou", es: "Mohammed Ben Haddou", dr: "محمد بن حدو" },
        explanation: { fr: "Mohammed Ben Haddou, ambassadeur du Maroc à la cour de Charles II (1682), a été reconnu par la Royal Society pour sa contribution diplomatique et culturelle entre le Maroc et l’Angleterre.", en: "Mohammed Ben Haddou, ambassador of Morocco to the court of Charles II (1682), was recognized by the Royal Society for his diplomatic and cultural contribution between Morocco and England.", es: "Mohammed Ben Haddou, embajador de Marruecos en la corte de Carlos II (1682), fue reconocido por la Royal Society por su contribución diplomática y cultural entre Marruecos e Inglaterra.", dr: "محمد بن حدو، سفير المغرب فبلاط تشارلز الثاني (1682)، تعترف به الجمعية الملكية لمساهمته الدبلوماسية والثقافية بين المغرب و إنجلترا." }
    },
    {
        id: "mq_caftan_dynasty",
        level: 4,
        question: { fr: "De quelle grande dynastie marocaine le Caftan est-il originaire ?", en: "From which great Moroccan dynasty does the Caftan originate?", es: "¿De qué gran dinastía marroquí procede el Caftán?", dr: "من أي سلالة مغربية كبيرة جا القفطان؟" },
        options: { fr: ["Les Idrissides", "Les Almoravides", "Les Almohades", "Les Saadiens"], en: ["The Idrissids", "The Almoravids", "The Almohads", "The Saadians"], es: ["Los Idrísidas", "Los Almorávides", "Los Almohades", "Los Saadíes"], dr: ["الأدارسة", "المرابطون", "الموحدون", "السعديون"] },
        correctAnswer: { fr: "Les Almohades", en: "The Almohads", es: "Los Almohades", dr: "الموحدون" },
        explanation: { fr: "Une miniature des Cantigas de Santa María, vaste recueil poétique commandé par Alphonse X de Castille (règne : 1252–1284), représente le sultan marocain almohade Al-Murtaḍā (1248–1266), alors établi à Marrakech, vêtu d’un caftan aux manches larges et au col brodé.", en: "A miniature from the Cantigas de Santa María, a vast poetic collection commissioned by Alfonso X of Castile (reign: 1252–1284), depicts the Moroccan Almohad sultan Al-Murtaḍā (1248–1266), then based in Marrakech, wearing a caftan with wide sleeves and an embroidered collar.", es: "Una miniatura de las Cantigas de Santa María, una vasta colección poética encargada por Alfonso X de Castilla (reinado: 1252-1284), representa al sultán almohade marroquí Al-Murtaḍā (1248-1266), entonces establecido en Marrakech, vestido con un caftán de mangas anchas y cuello bordado.", dr: "واحد المنمنمة من 'كنتييعاس دي سانتا ماريا'، مجموعة شعرية كبيرة طلبها ألفونسو العاشر ملك قشتالة (الحكم: 1252–1284)، كتبين السلطان المغربي الموحدي المرتضى (1248–1266)، لي كان فمراكش ديك الساعة، لابس قفطان بكمام واسعين و مطروز." }
    },
    {
        id: "mq_jellaba_origin_graham",
        level: 6,
        question: { fr: "Qui a affirmé en 1898 que la jellaba est d'origine marocaine amazighe et inconnue dans les pays arabes ?", en: "Who claimed in 1898 that the jellaba is of Moroccan Amazigh origin and unknown in Arab countries?", es: "¿Quién afirmó en 1898 que la jellaba es de origen marroquí amazigh y desconocida en los países árabes?", dr: "شكون لي أكد ف 1898 أن الجلابة من أصل مغربي أمازيغي و ما معروفاش فالبلدان العربية؟" },
        options: { fr: ["Robert Bontine Graham", "Eugène Delacroix", "Léon l'Africain", "Ibn Battuta"], en: ["Robert Bontine Graham", "Eugène Delacroix", "Leo Africanus", "Ibn Battuta"], es: ["Robert Bontine Graham", "Eugène Delacroix", "León el Africano", "Ibn Battuta"], dr: ["روبرت بونتين غراهام", "أوجين ديلاكروا", "ليون الإفريقي", "ابن بطوطة"] },
        correctAnswer: { fr: "Robert Bontine Graham", en: "Robert Bontine Graham", es: "Robert Bontine Graham", dr: "روبرت بونتين غراهام" },
        explanation: { fr: "L'écrivain et voyageur écossais Robert B. Cunninghame Graham a décrit la jellaba comme un vêtement typiquement marocain et amazigh dans son livre 'Mogreb-el-Acksa' (1898).", en: "The Scottish writer and traveler Robert B. Cunninghame Graham described the jellaba as a typically Moroccan and Amazigh garment in his book 'Mogreb-el-Acksa' (1898).", es: "El escritor y viajero escocés Robert B. Cunninghame Graham describió la jellaba como una prenda típicamente marroquí y amazigh en su libro 'Mogreb-el-Acksa' (1898).", dr: "الكاتب و الرحالة السكوتلاندي روبرت ب. كانينغهام غراهام وصف الجلابة كلباس مغربي و أمازيغي نموذجي فكتابو 'مغرب الأقصى' (1898)." }
    },
    {
        id: "mq_ntaa_embroidery_origin",
        level: 8,
        question: { fr: "Qui, au XIᵉ siècle, a décrit la broderie au fil d’or (Ntaa/mejboud) du Maroc ?", en: "Who, in the 11th century, described the gold thread embroidery (Ntaa/mejboud) of Morocco?", es: "¿Quién, en el siglo XI, describió el bordado con hilo de oro (Ntaa/mejboud) de Marruecos?", dr: "شكون لي وصف الطرز بخيوط الذهب (النطع/المجبود) ديال المغرب فالقرن 11؟" },
        options: { fr: ["Abu Qassim Al Baghdadi", "Al-Idrissi", "Ibn Khaldoun", "Averroès"], en: ["Abu Qassim Al Baghdadi", "Al-Idrissi", "Ibn Khaldoun", "Averroes"], es: ["Abu Qassim Al Baghdadi", "Al-Idrissi", "Ibn Jaldún", "Averroes"], dr: ["أبو القاسم البغدادي", "الإدريسي", "ابن خلدون", "ابن رشد"] },
        correctAnswer: { fr: "Abu Qassim Al Baghdadi", en: "Abu Qassim Al Baghdadi", es: "Abu Qassim Al Baghdadi", dr: "أبو القاسم البغدادي" },
        explanation: { fr: "Abu Qassim Al Baghdadi a documenté la broderie marocaine connue sous le nom d’« Anta Muddahaba Maghribia », utilisée pour embellir les caftans, les tentures murales (hayti) et divers objets artisanaux. Ses écrits ont été repris et traduits en anglais par l’Université du Michigan en 1955.", en: "Abu Qassim Al Baghdadi documented the Moroccan embroidery known as 'Anta Muddahaba Maghribia', used to embellish caftans, wall hangings (hayti), and various crafts. His writings were taken up and translated into English by the University of Michigan in 1955.", es: "Abu Qassim Al Baghdadi documentó el bordado marroquí conocido como 'Anta Muddahaba Maghribia', utilizado para embellecer caftanes, tapices (hayti) y diversas artesanías. Sus escritos fueron retomados y traducidos al inglés por la Universidad de Michigan en 1955.", dr: "أبو القاسم البغدادي وثق الطرز المغربي المعروف ب'النطع المذهب المغربي'، لي كان كيتستعمل فتزيين القفاطن، الحيطي و مصنوعات تقليدية أخرى. كتاباتو ترجماتهم جامعة ميشيغان للإنجليزية ف 1955." }
    },
    {
        id: "mq_sfouf_sellou_al_idrissi",
        level: 5,
        question: { fr: "Quel géographe du XIIᵉ siècle a évoqué le sfouf (ou sellou), une préparation culinaire traditionnelle marociane ?", en: "Which 12th-century geographer mentioned sfouf (or sellou), a traditional Moroccan culinary preparation?", es: "¿Qué geógrafo del siglo XII mencionó el sfouf (o sellou), una preparación culinaria tradicional marroquí?", dr: "شكون هو الجغرافي ديال القرن 12 لي هضر على سلو، أكلة مغربية تقليدية؟" },
        options: { fr: ["Mohammed Al-Idrissi", "Ibn Battuta", "Ibn Rushd", "Léon l'Africain"], en: ["Mohammed Al-Idrissi", "Ibn Battuta", "Averroes", "Leo Africanus"], es: ["Mohammed Al-Idrissi", "Ibn Battuta", "Averroes", "León el Africano"], dr: ["محمد الإدريسي", "ابن بطوطة", "ابن رشد", "ليون الإفريقي"] },
        correctAnswer: { fr: "Mohammed Al-Idrissi", en: "Mohammed Al-Idrissi", es: "Mohammed Al-Idrissi", dr: "محمد الإدريسي" },
        explanation: { fr: "Le géographe marocain Al-Idrissi (1099–1166) mentionne l’Asallou, une pâte nourrissante à base de blé grillé, beurre et miel, conservée comme provision. Elle est aujourd’hui reconnue comme l’ancêtre du sfouf (ou sellou), douceur traditionnelle toujours prisée.", en: "The Moroccan geographer Al-Idrissi (1099–1166) mentions Asallou, a nourishing paste made from roasted wheat, butter, and honey, kept as a provision. It is now recognized as the ancestor of sfouf (or sellou), a traditional sweet still popular today.", es: "El geógrafo marroquí Al-Idrissi (1099-1166) menciona el Asallou, una pasta nutritiva a base de trigo tostado, mantequilla y miel, que se conservaba como provisión. Hoy se reconoce como el antecesor del sfouf (o sellou), un dulce tradicional todavía muy apreciado.", dr: "الجغرافي المغربي الإدريسي (1099-1166) ذكر 'أسلو'، تركيبة مغذية من القمح محمر، الزبدة و العسل، كانت كتخزن كمؤونة. دابا معروفة كأصل سلوأو سفوف." }
    },
    {
        id: "mq_al_qarawiyyin_university",
        level: 2,
        question: { fr: "Quelle est la plus ancienne université au monde, fondée à Fès en 859 ?", en: "What is the oldest university in the world, founded in Fes in 859?", es: "¿Cuál es la universidad más antigua del mundo, fundada en Fez en 859?", dr: "شنو هي أقدم جامعة فالعالم، تأسست ففاس عام 859؟" },
        options: { fr: ["Université de Bologne", "Université Al-Azhar", "Université d'Oxford", "Université Al-Qarawiyyin"], en: ["University of Bologna", "Al-Azhar University", "University of Oxford", "University of Al-Qarawiyyin"], es: ["Universidad de Bolonia", "Universidad de Al-Azhar", "Universidad de Oxford", "Universidad de Al-Qarawiyyin"], dr: ["جامعة بولونيا", "جامعة الأزهر", "جامعة أكسفورد", "جامعة القرويين"] },
        correctAnswer: { fr: "Université Al-Qarawiyyin", en: "University of Al-Qarawiyyin", es: "Universidad de Al-Qarawiyyin", dr: "جامعة القرويين" },
        explanation: { fr: "Fondée par Daoud Ibn Idriss, et non par Fatima El-Fihriya comme beaucoup le croient, l'Université Al-Qarawiyyin à Fès est reconnue par l'UNESCO comme la plus ancienne université au monde encore en activité.", en: "Founded by Daoud Ibn Idriss, and not by Fatima El-Fihriya as many believe, the University of Al-Qarawiyyin in Fes is recognized by UNESCO as the oldest continuously operating university in the world.", es: "Fundada por Daoud Ibn Idriss, y no por Fatima El-Fihriya como muchos creen, la Universidad de Al-Qarawiyyin en Fez es reconocida por la UNESCO como la universidad más antigua del mundo que sigue en funcionamiento.", dr: "أسسها داود بن إدريس، ماشي فاطمة الفهرية كيف كيسحاب لبزاف، جامعة القرويين ففاس معترف بيها من اليونيسكو كأقدم جامعة فالعالم باقا خدامة." }
    },
    {
        id: "mq_granada_fes_imitation",
        level: 6,
        question: { fr: "Qui a dit : « Les rois de Grenade imitent ceux de Fès » ?", en: "Who said: 'The kings of Granada imitate those of Fes'?", es: "¿Quién dijo: 'Los reyes de Granada imitan a los de Fez'?", dr: "شكون قال: 'ملوك غرناطة كيقلدو ملوك فاس'؟" },
        options: { fr: ["Louis del Marmol Carvajal", "Ibn Khaldoun", "Léon l’Africain", "Al-Bakri"], en: ["Luis del Mármol Carvajal", "Ibn Khaldun", "Leo Africanus", "Al-Bakri"], es: ["Luis del Mármol Carvajal", "Ibn Jaldún", "León el Africano", "Al-Bakri"], dr: ["لويس ديل مارمول كارفاخال", "ابن خلدون", "ليون الإفريقي", "البكري"] },
        correctAnswer: { fr: "Louis del Marmol Carvajal", en: "Luis del Mármol Carvajal", es: "Luis del Mármol Carvajal", dr: "لويس ديل مارمول كارفاخال" },
        explanation: { fr: "Historien espagnol du XVIᵉ siècle, il observe que l’architecture et le style de vie de Grenade étaient fortement influencés par Fès.", en: "A 16th-century Spanish historian, he observed that the architecture and lifestyle of Granada were heavily influenced by Fes.", es: "Historiador español del siglo XVI, observó que la arquitectura y el estilo de vida de Granada estaban muy influenciados por Fez.", dr: "مؤرخ إسباني ديال القرن 16، لاحظ أن الهندسة المعمارية و نمط العيش فغرناطة كانو متأثرين بزاف بفاس." }
    },
    {
        id: "mq_tariq_ibn_ziyad",
        level: 3,
        question: { fr: "Quel gouverneur marocain a mené la conquête d’al-andalus en 711 ?", en: "Which Moroccan governor led the conquest of Al-Andalus in 711?", es: "¿Quién fue el gobernador marroquí que inició la conquista de Al-Ándalus en 711??", dr: "شكون هو الوالي المغربي لي قاد فتح الأندلس ف 711؟" },
        options: { fr: ["Tarik Ibn Ziyad", "Moussa Ibn Noussair", "Youssef Ibn Tachfin", "Idriss Ier"], en: ["Tariq ibn Ziyad", "Musa ibn Nusayr", "Yusuf ibn Tashfin", "Idris I"], es: ["Tariq ibn Ziyad", "Musa ibn Nusayr", "Yusuf ibn Tashfin", "Idris I"], dr: ["طارق بن زياد", "موسى بن نصير", "يوسف بن تاشفين", "إدريس الأول"] },
        correctAnswer: { fr: "Tarik Ibn Ziyad", en: "Tariq ibn Ziyad", es: "Tariq ibn Ziyad", dr: "طارق بن زياد" },
        explanation: { fr: "Tariq ibn Ziyad, alors gouverneur de Tanger, franchit en 711 le détroit qui portera son nom,  'Jabal Tariq', devenu 'Gibraltar' et initie la conquête de la péninsule Ibérique.", en: "Tariq ibn Ziyad, then governor of Tangier, crossed the strait that would bear his name, 'Jabal Tariq', which became 'Gibraltar', in 711 and initiated the conquest of the Iberian Peninsula.", es: "Tariq ibn Ziyad, entonces gobernador de Tánger, cruzó en el 711 el estrecho que llevaría su nombre, 'Jabal Tariq', que se convirtió en 'Gibraltar', e inició la conquista de la península ibérica.", dr: "طارق بن زياد، لي كان والي طنجة ديك الساعة، عبر ف 711 المضيق لي غايهز سميتو، 'جبل طارق'، و بدا فتح شبه الجزيرة الإيبيرية." }
    },
    {
        id: "mq_tbourida_unesco",
        level: 2,
        question: { fr: "Quelle tradition équestre marocaine est inscrite au patrimoine de l’UNESCO ?", en: "Which Moroccan equestrian tradition is a UNESCO heritage?", es: "¿Qué tradición ecuestre marroquí es patrimonio de la UNESCO?", dr: "أشنو هو التقليد المغربي ديال الخيل لي مسجل فالتراث ديال اليونيسكو؟" },
        options: { fr: ["Tbourida", "Fantasia Rifaine", "Moussem de Tan-Tan", "Guedra"], en: ["Tbourida", "Rifian Fantasia", "Moussem of Tan-Tan", "Guedra"], es: ["Tbourida", "Fantasía Rifeña", "Moussem de Tan-Tan", "Guedra"], dr: ["التبوريدة", "فانتازيا ريفية", "موسم طانطان", "الكدرة"] },
        correctAnswer: { fr: "Tbourida", en: "Tbourida", es: "Tbourida", dr: "التبوريدة" },
        explanation: { fr: "La Tbourida est un spectacle équestre marocain où les cavaliers, en tenue traditionnelle, chargent et tirent en parfaite synchronisation.", en: "Tbourida is a Moroccan equestrian performance where riders in traditional attire charge and shoot in perfect synchronization.", es: "La Tbourida es un espectáculo ecuestre marroquí en el que los jinetes, con atuendo tradicional, cargan y disparan en perfecta sincronización.", dr: "التبوريدة هي فن استعراضي مغربي ديال الخيل، الفرسان كيلبسو اللباس التقليدي و كيطلقو البارود فخطرة وحدة." }
    },
    {
        id: "mq_sefrou_cherry_festival",
        level: 3,
        question: { fr: "Quel festival marocain symbolisant un fruit est inscrit à l’UNESCO ?", en: "Which Moroccan festival symbolizing a fruit is a UNESCO heritage?", es: "¿Qué festival marroquí que simboliza una fruta es patrimonio de la UNESCO?", dr: "أشنو هو المهرجان المغربي لي كيرمز لفاكهة و مسجل فاليونيسكو؟" },
        options: { fr: ["Festival des cerises de Sefrou", "Moussem de Moulay Idriss", "Festival des dattes d’Erfoud", "Festival des oranges de Berkane"], en: ["Sefrou Cherry Festival", "Moussem of Moulay Idriss", "Erfoud Date Festival", "Berkane Orange Festival"], es: ["Festival de la Cereza de Sefrou", "Moussem de Moulay Idriss", "Festival de Dátiles de Erfoud", "Festival de la Naranja de Berkane"], dr: ["مهرجان حب الملوك د صفرو", "موسم مولاي إدريس", "مهرجان التمر فأرفود", "مهرجان البرتقال فبركان"] },
        correctAnswer: { fr: "Festival des cerises de Sefrou", en: "Sefrou Cherry Festival", es: "Festival de la Cereza de Sefrou", dr: "مهرجان حب الملوك د صفرو" },
        explanation: { fr: "Fête annuelle dédiée à la récolte des cerises, mêlant musique, artisanat et traditions locales. Depuis 1920, une Miss Cerisette est élue, parée d’un caftan, d’une tekchita ou d’une mansouria.", en: "Annual festival dedicated to the cherry harvest, blending music, crafts, and local traditions. Since 1920, a Cherry Queen has been elected, adorned with a caftan, a takchita, or a mansouria.", es: "Festival anual dedicado a la cosecha de cerezas, que mezcla música, artesanía y tradiciones locales. Desde 1920, se elige una Miss Cereza, ataviada con un caftán, una takchita o una mansouria.", dr: "حفلة سنوية مخصصة لجني حب الملوك، كتجمع بين الموسيقى، والصناعة التقليديةالمحلية. من 1920، كيتنتخبوا ملكة جمال حب الملوك، كتلبس قفطان، تكشيطة أو منصورية." }
    },
    {
        id: "mq_harira_ramadan",
        level: 1,
        question: { fr: "Quelle soupe marocaine est emblématique du Ramadan ?", en: "Which Moroccan soup is emblematic of Ramadan?", es: "¿Qué sopa marroquí es emblemática del Ramadán?", dr: "أشنو هي صوبا المغربية لي معروفة فرمضان؟" },
        options: { fr: ["Harira", "Ässida", "Chorba", "Bissara"], en: ["Harira", "Assida", "Chorba", "Bissara"], es: ["Harira", "Ässida", "Chorba", "Bissara"], dr: ["الحريرة", "العصيدة", "الشربة", "البصارة"] },
        correctAnswer: { fr: "Harira", en: "Harira", es: "Harira", dr: "الحريرة" },
        explanation: { fr: "Soupe à base de tomates, lentilles et pois chiches, consommée pour rompre le jeûne.", en: "A soup made with tomatoes, lentils, and chickpeas, eaten to break the fast.", es: "Sopa a base de tomates, lentejas y garbanzos, que se consume para romper el ayuno.", dr: "حريرة بمطيشة، العدس و الحمص، كتشرب فالفطور." }
    },
    {
        id: "mq_rfissa_ingredients",
        level: 2,
        question: { fr: "Quelle recette marocaine est à base de poulet, lentilles et msemen ?", en: "Which Moroccan recipe is based on chicken, lentils, and msemen?", es: "¿Qué receta marroquí se basa en pollo, lentejas y msemen?", dr: "أشنو هي الأكلة المغربية لي كنديرو فيها الدجاج، العدس و المسمن؟" },
        options: { fr: ["Rfissa", "Pastilla", "Tajine", "Seffa"], en: ["Rfissa", "Pastilla", "Tagine", "Seffa"], es: ["Rfissa", "Pastilla", "Tajine", "Seffa"], dr: ["الرفيسة", "البسطيلة", "الطاجين", "السفة"] },
        correctAnswer: { fr: "Rfissa", en: "Rfissa", es: "Rfissa", dr: "الرفيسة" },
        explanation: { fr: "Rfissa est un plat traditionnel marocain à base de msemen émiettés, de poulet, de lentilles et de fenugrec. Nourrissant et réconfortant, il est servi après un accouchement mais aussi lors de repas familiaux ou quotidiens.", en: "Rfissa is a traditional Moroccan dish made from shredded msemen, chicken, lentils, and fenugreek. Nourishing and comforting, it is served after childbirth but also during family or daily meals.", es: "La Rfissa es un plato tradicional marroquí a base de msemen desmenuzado, pollo, lentejas y fenogreco. Nutritivo y reconfortante, se sirve después del parto, pero también en comidas familiares o diarias.", dr: "الرفيسة طبق مغربي تقليدي بالمسمن مقطع، الدجاج، العدس و الحلبة. مغذي و كيشبع، كيتقدم للنافسة و حتى فالوجبات العائلية و اليومية." }
    },
    {
        id: "mq_pastilla_ingredients",
        level: 2,
        question: { fr: "Quel plat marocain feuilleté est garni de pigeon ou de poulet aux amandes ?", en: "Which flaky Moroccan dish is filled with pigeon or chicken with almonds?", es: "¿Qué plato marroquí de hojaldre se rellena con pichón o pollo con almendras?", dr: "أشنو هو الطبق المغربي الدائري, المورق, لي معمر بالحمام أو الدجاج, وباللوز؟" },
        options: { fr: ["Pastilla (Bestayla)", "Seffa", "Mhancha", "Rfissa"], en: ["Pastilla (Bestayla)", "Seffa", "Mhancha", "Rfissa"], es: ["Pastilla (Bestayla)", "Seffa", "Mhancha", "Rfissa"], dr: ["البسطيلة", "السفة", "المحنشة", "الرفيسة"] },
        correctAnswer: { fr: "Pastilla (Bestayla)", en: "Pastilla (Bestayla)", es: "Pastilla (Bestayla)", dr: "البسطيلة" },
        explanation: { fr: "La pastilla (ou bestayla) est un plat emblématique marocain aux saveurs sucrées-salées, composé de warka, d’amandes et d’une farce à base de poulet, de pigeon ou de poisson. Mentionnée dès le XIIIᵉ siècle dans plusieurs ouvrages historiques, elle incarne le raffinement de la gastronomie marocaine.", en: "Pastilla (or bestayla) is an emblematic Moroccan dish with sweet and savory flavors, made of warka, almonds, and a filling of chicken, pigeon, or fish. Mentioned as early as the 13th century in several historical works, it embodies the refinement of Moroccan gastronomy.", es: "La pastilla (o bestayla) es un plato emblemático marroquí con sabores dulces y salados, compuesto de warka, almendras y un relleno a base de pollo, pichón o pescado. Mencionada ya en el siglo XIII en varias obras históricas, encarna el refinamiento de la gastronomía marroquí.", dr: "البسطيلة طبق مغربي رمزي بمذاق حلو ومالح، فيه ورقة البسطيلة، اللوز و حشوة بالدجاج، الحمام أو الحوت. مذكورة من القرن 13 فعدة كتب تاريخية، و كتبين الرقي ديال الطبخ المغربي." }
    },
    {
        id: "mq_seffa_ingredients",
        level: 2,
        question: { fr: "Quel plat marocain sucré est préparé avec des cheveux d’ange et sucre glace ?", en: "Which sweet Moroccan dish is prepared with vermicelli and powdered sugar?", es: "¿Qué plato dulce marroquí se prepara con fideos y azúcar glas?", dr: "أشنو هو الطبق المغربي الحلو لي كيتصاوب بالشعرية و السكر كلاصي؟" },
        options: { fr: ["Seffa", "Baghrir", "Chebbakia", "Mhancha"], en: ["Seffa", "Baghrir", "Chebakia", "Mhancha"], es: ["Seffa", "Baghrir", "Chebakia", "Mhancha"], dr: ["السفة", "البغرير", "الشباكية", "المحنشة"] },
        correctAnswer: { fr: "Seffa", en: "Seffa", es: "Seffa", dr: "السفة" },
        explanation: { fr: "La seffa est un plat sucré chaud, servi lors des fêtes ou en fin de repas. Sa préparation varie selon les traditions familiales.", en: "Seffa is a sweet, warm dish served at celebrations or at the end of a meal. Its preparation varies according to family traditions.", es: "La seffa es un plato dulce y caliente que se sirve en las celebraciones o al final de una comida. Su preparación varía según las tradiciones familiares.", dr: "السفة طبق حلو سخون، كيتقدم فالمناسبات أو فآخر המאكلة. الطريقة ديالو كتختلف على حساب تقاليد كل عائلة." }
    },
    {
        id: "mq_couscous_tfaya",
        level: 2,
        question: { fr: "Quel couscous marocain est garni d’oignons confits et de raisins secs ?", en: "Which Moroccan couscous is garnished with caramelized onions and raisins?", es: "¿Qué cuscús marroquí se adorna con cebolla confitada y pasas?", dr: "أشنو هو الكسكسو المغربي لي كيتزين بالبصلة معسلة و الزبيب؟" },
        options: { fr: ["Couscous Tfaya", "Couscous aux 7 légumes", "Couscous au poisson", "Couscous Fassi"], en: ["Couscous Tfaya", "7-vegetable Couscous", "Fish Couscous", "Fassi Couscous"], es: ["Cuscús Tfaya", "Cuscús de 7 verduras", "Cuscús de pescado", "Cuscús Fassi"], dr: ["كسكسو بالتفاية", "كسكسو بسبع خضاري", "كسكسو بالحوت", "كسكسو فاسي"] },
        correctAnswer: { fr: "Couscous Tfaya", en: "Couscous Tfaya", es: "Cuscús Tfaya", dr: "كسكسو بالتفاية" },
        explanation: { fr: "Couscous sucré-salé à base de semoule, oignons caramélisés et raisins secs.", en: "A sweet and savory couscous made with semolina, caramelized onions, and raisins.", es: "Cuscús agridulce a base de sémola, cebolla caramelizada y pasas.", dr: "كسكسو حلو و مالح بالسميدة، البصلة معسلة و الزبيب." }
    },
    {
        id: "mq_atay_mint_tea",
        level: 1,
        question: { fr: "Quelle boisson traditionnelle marocaine est préparée avec du thé vert et de la menthe ?", en: "Which traditional Moroccan drink is prepared with green tea and mint?", es: "¿Qué bebida tradicional marroquí se prepara con té verde y menta?", dr: "أشنو هو المشروب التقليدي المغربي لي كيتصاوب بشاي الأخضر والنعناع ؟" },
        options: { fr: ["Atay", "Lben", "Raïbi", "Zaâzaâ"], en: ["Atay", "Lben", "Raïbi", "Zaâzaâ"], es: ["Atay", "Lben", "Raïbi", "Zaâzaâ"], dr: ["أتاي", "اللبن", "رايبي", "زعزع"] },
        correctAnswer: { fr: "Atay", en: "Atay", es: "Atay", dr: "أتاي" },
        explanation: { fr: "Thé à la menthe, symbole d’hospitalité et de convivialité au Maroc.", en: "Mint tea, a symbol of hospitality and conviviality in Morocco.", es: "Té a la menta, símbolo de hospitalidad y convivencia en Marruecos.", dr: "آتاي بالنعناع، رمز الضيافة و الجلسة الزينة فالمغرب." }
    },
    {
        id: "mq_kaab_ghzal",
        level: 1,
        question: { fr: "Quelle pâtisserie marocaine en forme de croissant est fourrée aux amandes ?", en: "Which crescent-shaped Moroccan pastry is filled with almonds?", es: "¿Qué pastel marroquí en forma de media luna está relleno de almendras?", dr: "أشنو هي الحلوة المغربية لي على شكل هلال و معمرة باللوز؟" },
        options: { fr: ["Cornes de gazelle (Kaab Ghzal)", "Chebbakia", "Seffa", "Mhancha"], en: ["Gazelle horns (Kaab Ghzal)", "Chebakia", "Seffa", "Mhancha"], es: ["Cuernos de gacela (Kaab Ghzal)", "Chebakia", "Seffa", "Mhancha"], dr: ["كعب غزال", "الشباكية", "السفة", "المحنشة"] },
        correctAnswer: { fr: "Cornes de gazelle (Kaab Ghzal)", en: "Gazelle horns (Kaab Ghzal)", es: "Cuernos de gacela (Kaab Ghzal)", dr: "كعب غزال" },
        explanation: { fr: "Pâtisserie fine à base d’amandes, mentionnée dès le XIIIᵉ siècle.", en: "A fine pastry made with almonds, mentioned as early as the 13th century.", es: "Pastel fino a base de almendras, mencionado ya en el siglo XIII.", dr: "حلوة راقية باللوز، مذكورة من القرن 13." }
    },
    {
        id: "mq_chebakia_ramadan",
        level: 1,
        question: { fr: "Quelle pâtisserie marocaine aux amandes, miel et sésame est servie pendant le Ramadan ?", en: "Which Moroccan pastry with almonds, honey, and sesame is served during Ramadan?", es: "¿Qué pastel marroquí con almendras, miel y sésamo se sirve durante el Ramadán?", dr: "أشنو هي الحلوة المغربية باللوز، العسل و الزنجلان لي كتقدم فرمضان؟" },
        options: { fr: ["Chebbakia", "Kaab Ghzal", "Mhancha", "Ghriba"], en: ["Chebakia", "Kaab Ghzal", "Mhancha", "Ghriba"], es: ["Chebakia", "Kaab Ghzal", "Mhancha", "Ghriba"], dr: ["الشباكية", "كعب غزال", "المحنشة", "الغريبة"] },
        correctAnswer: { fr: "Chebbakia", en: "Chebakia", es: "Chebakia", dr: "الشباكية" },
        explanation: { fr: "Pâtisserie torsadée frite, trempée dans du miel et saupoudrée de sésame.", en: "A twisted, fried pastry, dipped in honey and sprinkled with sesame seeds.", es: "Pastel retorcido y frito, bañado en miel y espolvoreado con sésamo.", dr: "حلوة مشبكة مقلية، مغطسة فالعسل و مرشوشة بالزنجلان." }
    },
    {
        id: "mq_zellige_origin_2",
        level: 3,
        question: { fr: "Quelle est l’origine du zellige ?", en: "What is the origin of zellige?", es: "¿Cuál es el origen del zellige?", dr: "شنو هو أصل الزليج؟" },
        options: { fr: ["Maroc", "Andalousie", "Égypte", "Empire ottoman"], en: ["Morocco", "Andalusia", "Egypt", "Ottoman Empire"], es: ["Marruecos", "Andalucía", "Egipto", "Imperio Otomano"], dr: ["المغرب", "الأندلس", "مصر", "الإمبراطورية العثمانية"] },
        correctAnswer: { fr: "Maroc", en: "Morocco", es: "Marruecos", dr: "المغرب" },
        explanation: { fr: "Carreaux géométriques colorés utilisés dans l’architecture marocaine depuis des siècles.", en: "Colored geometric tiles used in Moroccan architecture for centuries.", es: "Azulejos geométricos de colores utilizados en la arquitectura marroquí desde hace siglos.", dr: "قطع ملونة بأشكال هندسية كتستعمل فالعمارة المغربية من قرون." }
    },
    {
        id: "mq_tagine_origin",
        level: 2,
        question: { fr: "Quelle est l’origine du tagine ?", en: "What is the origin of the tagine?", es: "¿Cuál es el origen del tajín?", dr: "شنو هو أصل الطاجين؟" },
        options: { fr: ["Maroc", "Algérie", "Tunisie", "Égypte"], en: ["Morocco", "Algeria", "Tunisia", "Egypt"], es: ["Marruecos", "Argelia", "Túnez", "Egipto"], dr: ["المغرب", "الجزائر", "تونس", "مصر"] },
        correctAnswer: { fr: "Maroc", en: "Morocco", es: "Marruecos", dr: "المغرب" },
        explanation: { fr: "Le tagine est un plat marocain dont le nom désigne à la fois la préparation et le récipient en terre cuite ou en métal. Il est mentionné dès le XIIIᵉ siècle dans le Livre d’Ibn Razin Attajubi.", en: "The tagine is a Moroccan dish whose name refers to both the preparation and the earthenware or metal container. It is mentioned as early as the 13th century in the Book of Ibn Razin Attajubi.", es: "El tajín es un plato marroquí cuyo nombre designa tanto la preparación como el recipiente de barro o metal. Se menciona ya en el siglo XIII en el Libro de Ibn Razin Attajubi.", dr: "الطاجين طبق مغربي سميتو كتعني الطريقة و حتى الإناء ديال الطين أو المعدن. مذكور من القرن 13 فكتاب ابن رزين التجيبي." }
    },
    {
        id: "mq_al_idrissi",
        level: 4,
        question: { fr: "Qui est le grand géographe marocain du XIIᵉ siècle, auteur de la « Tabula Rogeriana » ?", en: "Who is the great 12th-century Moroccan geographer, author of the 'Tabula Rogeriana'?", es: "¿Quién es el gran geógrafo marroquí del siglo XII, autor de la 'Tabula Rogeriana'?", dr: "شكون هو الجغرافي المغربي الكبير ديال القرن 12، مول 'لوح الترسيم'؟" },
        options: { fr: ["Al-Idrissi", "Ibn Battuta", "Al-Samawal al-Maghribi", "Ibn Khaldoun"], en: ["Al-Idrissi", "Ibn Battuta", "Al-Samawal al-Maghribi", "Ibn Khaldun"], es: ["Al-Idrissi", "Ibn Battuta", "Al-Samawal al-Maghribi", "Ibn Jaldún"], dr: ["الإدريسي", "ابن بطوطة", "السموأل المغربي", "ابن خلدون"] },
        correctAnswer: { fr: "Al-Idrissi", en: "Al-Idrissi", es: "Al-Idrissi", dr: "الإدريسي" },
        explanation: { fr: "Géographe et cartographe renommé, il réalise une des cartes les plus précises de l’époque médiévale.", en: "A renowned geographer and cartographer, he created one of the most accurate maps of the medieval era.", es: "Geógrafo y cartógrafo de renombre, realizó uno de los mapas más precisos de la época medieval.", dr: "جغرافي و رسام خرائط مشهور، صاوب وحدة من أدق الخرائط ديال العصور الوسطى." }
    },
    {
        id: "mq_al_samawal_al_maghribi",
        level: 6,
        question: { fr: "Quel savant marocain du XIIᵉ siècle est connu pour ses travaux en mathématiques et astronomie ?", en: "Which 12th-century Moroccan scholar is known for his work in mathematics and astronomy?", es: "¿Qué erudito marroquí del siglo XII es conocido por su trabajo en matemáticas y astronomía?", dr: "شكون هو العالم المغربي ديال القرن 12 لي معروف بأعماله فالرياضيات و الفلك؟" },
        options: { fr: ["Al-Samawal al-Maghribi", "Al-Idrissi", "Ibn Battuta", "Ibn Khaldoun"], en: ["Al-Samawal al-Maghribi", "Al-Idrissi", "Ibn Battuta", "Ibn Khaldun"], es: ["Al-Samawal al-Maghribi", "Al-Idrissi", "Ibn Battuta", "Ibn Jaldún"], dr: ["السموأل المغربي", "الإدريسي", "ابن بطوطة", "ابن خلدون"] },
        correctAnswer: { fr: "Al-Samawal al-Maghribi", en: "Al-Samawal al-Maghribi", es: "Al-Samawal al-Maghribi", dr: "السموأل المغربي" },
        explanation: { fr: "Mathématicien et astronome, il illustre la richesse intellectuelle du Maroc médiéval.", en: "A mathematician and astronomer, he illustrates the intellectual richness of medieval Morocco.", es: "Matemático y astrónomo, ilustra la riqueza intelectual del Marruecos medieval.", dr: "عالم رياضيات و فلكي، كيبين الغنى الفكري ديال المغرب فالعصور الوسطى." }
    },
    {
        id: "mq_ibn_battuta",
        level: 2,
        question: { fr: "Quel explorateur marocain a voyagé jusqu’en Chine et en Afrique subsaharienne ?", en: "Which Moroccan explorer traveled to China and sub-Saharan Africa?", es: "¿Qué explorador marroquí viajó a China y al África subsahariana?", dr: "شكون هو الرحالة المغربي لي سافر حتى للصين و إفريقيا جنوب الصحراء؟" },
        options: { fr: ["Ibn Battuta", "Al-Idrissi", "Marco Polo", "Vasco de Gama"], en: ["Ibn Battuta", "Al-Idrissi", "Marco Polo", "Vasco da Gama"], es: ["Ibn Battuta", "Al-Idrissi", "Marco Polo", "Vasco de Gama"], dr: ["ابن بطوطة", "الإدريسي", "ماركو بولو", "فاسكو دي غاما"] },
        correctAnswer: { fr: "Ibn Battuta", en: "Ibn Battuta", es: "Ibn Battuta", dr: "ابن بطوطة" },
        explanation: { fr: "Voyageur célèbre, il décrit ses périples dans le Rihla, apportant une richesse documentaire sur plusieurs régions.", en: "A famous traveler, he described his journeys in the Rihla, providing a wealth of documentary information on several regions.", es: "Viajero famoso, describió sus viajes en la Rihla, aportando una gran riqueza documental sobre varias regiones.", dr: "رحالة مشهور، وصف الرحلات ديالو فال'رحلة'، و عطى معلومات وثائقية غنية على بزاف ديال المناطق." }
    },
    {
        id: "mq_merino_sheep",
        level: 6,
        question: { fr: "Quelle race de moutons était élevée sous les Mérinides au Maroc et adoptée par les espagnols ?", en: "Which breed of sheep was raised under the Marinids in Morocco and adopted by the Spanish?", es: "¿Qué raza de oveja se criaba bajo los meriníes en Marruecos y fue adoptada por los españoles?", dr: "أشنو هي سلالة الخرفان لي كانت كتربى فعهد المرينيين فالمغرب و تبناوها الإسبان؟" },
        options: { fr: ["Mouton mérinos", "Mouton d’Ouessant", "Mouton blanc", "Mouton noir"], en: ["Merino sheep", "Ushant sheep", "White sheep", "Black sheep"], es: ["Oveja merina", "Oveja de Ouessant", "Oveja blanca", "Oveja negra"], dr: ["خروف الميرينوس", "خروف ويصان", "خروف بيض", "خروف كحل"] },
        correctAnswer: { fr: "Mouton mérinos", en: "Merino sheep", es: "Oveja merina", dr: "خروف الميرينوس" },
        explanation: { fr: "Introduit pour sa laine fine, il symbolise l’élevage avancé au Maroc médiéval.", en: "Introduced for its fine wool, it symbolizes advanced animal husbandry in medieval Morocco.", es: "Introducida por su lana fina, simboliza la ganadería avanzada en el Marruecos medieval.", dr: "دخلات على حساب الصوفة ديالها الرقيقة، و كترمز لتربية المواشي المتقدمة فالمغرب فالعصور الوسطى." }
    },
    {
        id: "mq_laayoune_sahara",
        level: 3,
        question: { fr: "Quelle est la plus grande ville du Sahara marocain ?", en: "What is the largest city in the Moroccan Sahara?", es: "¿Cuál es la ciudad más grande del Sáhara marroquí?", dr: "شكون هي أكبر مدينة فالصحراء المغربية؟" },
        options: { fr: ["Laâyoune", "Dakhla", "Smara", "Tan-Tan"], en: ["Laayoune", "Dakhla", "Smara", "Tan-Tan"], es: ["El Aaiún", "Dajla", "Esmara", "Tan-Tan"], dr: ["العيون", "الداخلة", "السمارة", "طانطان"] },
        correctAnswer: { fr: "Laâyoune", en: "Laayoune", es: "El Aaiún", dr: "العيون" },
        explanation: { fr: "Ville principale du Sahara marocain, centre administratif et économique.", en: "The main city of the Moroccan Sahara, an administrative and economic center.", es: "La ciudad principal del Sáhara marroquí, centro administrativo y económico.", dr: "المدينة الرئيسية فالصحراء المغربية، مركز إداري و اقتصادي." }
    },
    {
        id: "mq_dakhla_region",
        level: 3,
        question: { fr: "Dans quelle région du Maroc se situe Dakhla ?", en: "In which region of Morocco is Dakhla located?", es: "¿En qué región de Marruecos se encuentra Dajla?", dr: "فأينا منطقة فالمغرب كاينة الداخلة؟" },
        options: { fr: ["Provinces du Sud", "Rabat-Salé-Kénitra", "Marrakech-Safi", "Fès-Meknès"], en: ["Southern Provinces", "Rabat-Salé-Kénitra", "Marrakech-Safi", "Fès-Meknès"], es: ["Provincias del Sur", "Rabat-Salé-Kénitra", "Marrakech-Safi", "Fez-Mequinez"], dr: ["الأقاليم الجنوبية", "الرباط-سلا-القنيطرة", "مراكش-آسفي", "فاس-مكناس"] },
        correctAnswer: { fr: "Provinces du Sud", en: "Southern Provinces", es: "Provincias del Sur", dr: "الأقاليم الجنوبية" },
        explanation: { fr: "Dakhla, ville côtière du sud marocain, est réputée pour sa pêche abondante, ses dunes dorées aux portes du désert, et ses spots de kitesurf parmi les plus prisés au monde.", en: "Dakhla, a coastal city in southern Morocco, is renowned for its abundant fishing, its golden dunes at the gateway to the desert, and its kitesurfing spots, which are among the most popular in the world.", es: "Dajla, ciudad costera del sur de Marruecos, es famosa por su abundante pesca, sus dunas doradas a las puertas del desierto y sus lugares para practicar kitesurf, que se encuentran entre los más populares del mundo.", dr: "الداخلة، مدينة ساحلية فجنوب المغرب، مشهورة بالصيد الوفير، كثبانها الذهبية على أبواب الصحراء، و أماكن الكايت سورف ديالها لي من أشهر الأماكن فالعالم." }
    },
    {
        id: "mq_hassan_ii_elegant",
        level: 3,
        question: { fr: "Quel roi marocain a été désigné deux fois comme l’homme le plus élégant du monde ?", en: "Which Moroccan king was twice named the most elegant man in the world?", es: "¿Qué rey marroquí fue nombrado dos veces el hombre más elegante del mundo?", dr: "شكون هو الملك المغربي لي تسمّى جوج مرات كأكثر رجل أنيق فالعالم؟" },
        options: { fr: ["Hassan II", "Moulay Ismail", "Moulay Abderrahman", "Moulay Youssef"], en: ["Hassan II", "Moulay Ismail", "Moulay Abderrahman", "Moulay Youssef"], es: ["Hassan II", "Muley Ismaíl", "Muley Abderrahman", "Muley Youssef"], dr: ["الحسن الثاني", "مولاي إسماعيل", "مولاي عبد الرحمن", "مولاي يوسف"] },
        correctAnswer: { fr: "Hassan II", en: "Hassan II", es: "Hassan II", dr: "الحسن الثاني" },
        explanation: { fr: "Roi du Maroc (1961‑1999), célèbre pour son charisme, son style et ses apparitions publiques élégantes.", en: "King of Morocco (1961-1999), famous for his charisma, style, and elegant public appearances.", es: "Rey de Marruecos (1961-1999), famoso por su carisma, estilo y elegantes apariciones públicas.", dr: "ملك المغرب (1961-1999)، مشهور بالكاريزما ديالو، أناقتو و خرجاتو الرسمية الأنيقة." }
    },
    {
        id: "mq_almoravids_marrakech",
        level: 3,
        question: { fr: "Quelle dynastie marocaine fondée au XIᵉ siècle a établi sa capitale à Marrakech ?", en: "Which Moroccan dynasty founded in the 11th century established its capital in Marrakech?", es: "¿Qué dinastía marroquí fundada en el siglo XI estableció su capital en Marrakech?", dr: "شكون هي السلالة المغربية لي تأسست فالقرن 11 و دارت عاصمتها فمراكش؟" },
        options: { fr: ["Almoravides", "Almohades", "Saadiens", "Idrissides"], en: ["Almoravids", "Almohads", "Saadians", "Idrissids"], es: ["Almorávides", "Almohades", "Saadíes", "Idrisíes"], dr: ["المرابطون", "الموحدون", "السعديون", "الأدارسة"] },
        correctAnswer: { fr: "Almoravides", en: "Almoravids", es: "Almorávides", dr: "المرابطون" },
        explanation: { fr: "Dynastie puissante qui a étendu le Maroc jusqu’en Andalousie, faisant de Marrakech un centre politique et culturel majeur.", en: "A powerful dynasty that extended Morocco to Andalusia, making Marrakech a major political and cultural center.", es: "Una poderosa dinastía que extendió Marruecos hasta Andalucía, convirtiendo Marrakech en un importante centro político y cultural.", dr: "سلالة قوية وسعات المغرب حتى للأندلس، و خلات مراكش مركز سياسي و ثقافي كبير." }
    },
    {
        id: "mq_almohads_successors",
        level: 3,
        question: { fr: "Quelle dynastie marocaine du XIIᵉ siècle a succédé aux Almoravides ?", en: "Which 12th-century Moroccan dynasty succeeded the Almoravids?", es: "¿Qué dinastía marroquí del siglo XII sucedió a los almorávides?", dr: "شكون هي السلالة المغربية ديال القرن 12 لي جات من بعد المرابطين؟" },
        options: { fr: ["Almohades", "Almoravides", "Saadiens", "Idrissides"], en: ["Almohads", "Almoravids", "Saadians", "Idrissids"], es: ["Almohades", "Almorávides", "Saadíes", "Idrisíes"], dr: ["الموحدون", "المرابطون", "السعديون", "الأدارسة"] },
        correctAnswer: { fr: "Almohades", en: "Almohads", es: "Almohades", dr: "الموحدون" },
        explanation: { fr: "Dynastie Marocaine réformiste, connue pour son art et son architecture monumentale.", en: "A reformist Moroccan dynasty, known for its art and monumental architecture.", es: "Dinastía marroquí reformista, conocida por su arte y arquitectura monumental.", dr: "سلالة مغربية إصلاحية، معروفة بالفن و العمارة الضخمة ديالها." }
    },
    {
        id: "mq_battle_three_kings",
        level: 4,
        question: { fr: "Qui a remporté la bataille des Trois Rois en 1578, opposant le Maroc au Portugal ?", en: "Who won the Battle of the Three Kings in 1578, pitting Morocco against Portugal?", es: "¿Quién ganó la batalla de los Tres Reyes en 1578, que enfrentó a Marruecos con Portugal?", dr: "شكون ربح معركة واد المخازن ف 1578، لي كانت بين المغرب و البرتغال؟" },
        options: { fr: ["Maroc", "Portugal", "Espagne", "Ottomans"], en: ["Morocco", "Portugal", "Spain", "Ottomans"], es: ["Marruecos", "Portugal", "España", "Otomanos"], dr: ["المغرب", "البرتغال", "إسبانيا", "العثمانيون"] },
        correctAnswer: { fr: "Maroc", en: "Morocco", es: "Marruecos", dr: "المغرب" },
        explanation: { fr: "Bataille décisive pour la souveraineté marocaine, menée par le sultan Abd al-Malik contre le roi portugais Sébastien.", en: "A decisive battle for Moroccan sovereignty, led by Sultan Abd al-Malik against the Portuguese king Sebastian.", es: "Batalla decisiva por la soberanía marroquí, dirigida por el sultán Abd al-Malik contra el rey portugués Sebastián.", dr: "معركة حاسمة للسيادة المغربية، قادها السلطان عبد الملك ضد الملك البرتغالي سيباستيان." }
    },
    {
        id: "mq_jellaba_fashion_encyclopedia",
        level: 4,
        question: { fr: "Selon The Encyclopaedia of Fashion (1986), qu’est-ce qu’une jellaba ?", en: "According to The Encyclopaedia of Fashion (1986), what is a jellaba?", es: "Según The Encyclopaedia of Fashion (1986), ¿qué es una chilaba?", dr: "على حساب موسوعة الموضة (1986)، شنو هي الجلابة؟" },
        options: { fr: ["Tenue traditionnelle marocaine", "Tenue andalouse", "Tenue ottomane", "Tenue égyptienne"], en: ["Traditional Moroccan attire", "Andalusian attire", "Ottoman attire", "Egyptian attire"], es: ["Atuendo tradicional marroquí", "Atuendo andaluz", "Atuendo otomano", "Atuendo egipcio"], dr: ["لبسة تقليدية مغربية", "لبسة أندلسية", "لبسة عثمانية", "لبسة مصرية"] },
        correctAnswer: { fr: "Tenue traditionnelle marocaine", en: "Traditional Moroccan attire", es: "Atuendo tradicional marroquí", dr: "لبسة تقليدية مغربية" },
        explanation: { fr: "Vêtement long à capuche porté par hommes et femmes, emblème du patrimoine vestimentaire marocain.", en: "A long, hooded garment worn by men and women, an emblem of Moroccan clothing heritage.", es: "Prenda larga con capucha que visten hombres y mujeres, emblema del patrimonio vestimentario marroquí.", dr: "لبسة طويلة بالقب كليلبسوها الرجال و العيالات، رمز للتراث اللباسي المغربي." }
    },
    {
        id: "mq_gnaoua_music_essaouira",
        level: 2,
        question: { fr: "La musique Gnaoua, inscrite à l’UNESCO, est principalement associée à quelle ville marocaine ?", en: "Gnaoua music, a UNESCO heritage, is mainly associated with which Moroccan city?", es: "La música Gnaoua, patrimonio de la UNESCO, se asocia principalmente con qué ciudad marroquí?", dr: "موسيقى كناوة، لي مسجلة فاليونيسكو، مرتبطة بأينا مدينة مغربية؟" },
        options: { fr: ["Essaouira", "Marrakech", "Fès", "Rabat"], en: ["Essaouira", "Marrakech", "Fes", "Rabat"], es: ["Essaouira", "Marrakech", "Fez", "Rabat"], dr: ["الصويرة", "مراكش", "فاس", "الرباط"] },
        correctAnswer: { fr: "Essaouira", en: "Essaouira", es: "Essaouira", dr: "الصويرة" },
        explanation: { fr: "Ville portuaire où la musique gnaoua, aux rythmes particulièrement entraînants, est mise à l’honneur.", en: "A port city where Gnaoua music, with its particularly lively rhythms, is celebrated.", es: "Ciudad portuaria donde se rinde homenaje a la música gnaoua, de ritmos especialmente animados.", dr: "مدينة ساحلية فين موسيقى كناوة، لي الإيقاعات ديالها كينشطو بزاف، عندها مكانة خاصة." }
    },
    {
        id: "mq_bou_inania_madrasa",
        level: 4,
        question: { fr: "Quelle dynastie marocaine a fondé la médersa Bou Inania de Fès au XIVᵉ siècle ?", en: "Which Moroccan dynasty founded the Bou Inania Madrasa in Fes in the 14th century?", es: "¿Qué dinastía marroquí fundó la Madraza de Bou Inania en Fez en el siglo XIV?", dr: "أشنو هي السلالة المغربية لي بنات المدرسة البوعنانية ففاس فالقرن 14؟" },
        options: { fr: ["Mérinides", "Almoravides", "Almohades", "Saadiens"], en: ["Marinids", "Almoravids", "Almohads", "Saadians"], es: ["Meriníes", "Almorávides", "Almohades", "Saadíes"], dr: ["المرينيون", "المرابطون", "الموحدون", "السعديون"] },
        correctAnswer: { fr: "Mérinides", en: "Marinids", es: "Meriníes", dr: "المرينيون" },
        explanation: { fr: "Dynastie marocaine réputée pour son mécenat architectural et éducatif.", en: "A Moroccan dynasty renowned for its architectural and educational patronage.", es: "Dinastía marroquí famosa por su mecenazgo arquitectónico y educativo.", dr: "سلالة مغربية مشهورة بالرعاية ديالها للعمارة و التعليم." }
    },
    {
        id: "mq_mansouria_origin",
        level: 4,
        question: { fr: "Quelle tenue traditionnelle marocaine porte le nom du sultan saadien Ahmed Al-Mansour ?", en: "Which traditional Moroccan attire is named after the Saadian sultan Ahmed Al-Mansour?", es: "¿Qué atuendo tradicional marroquí lleva el nombre del sultán saadí Ahmed Al-Mansour?", dr: "أشنو هي اللبسة التقليدية المغربية لي هازة سميت السلطان السعدي أحمد المنصور؟" },
        options: { fr: ["Mansouria", "Jellaba", "Gandoura", "Caftan"], en: ["Mansouria", "Jellaba", "Gandoura", "Caftan"], es: ["Mansouria", "Chilaba", "Gandoura", "Caftán"], dr: ["المنصورية", "الجلابة", "الكندورة", "القفطان"] },
        correctAnswer: { fr: "Mansouria", en: "Mansouria", es: "Mansouria", dr: "المنصورية" },
        explanation: { fr: "Vêtement royal, symbole de prestige et d’élégance de l’époque saadienne.", en: "A royal garment, a symbol of prestige and elegance from the Saadian era.", es: "Prenda real, símbolo de prestigio y elegancia de la época saadí.", dr: "لبسة ملكية، رمز للهيبة و الأناقة ديال العهد السعدي." }
    },
    {
        id: "mq_khrib_brocade_family",
        level: 8,
        question: { fr: "Quelle famille d’artisans marocains est à l’origine du brocart Khrib ?", en: "Which family of Moroccan artisans is behind the Khrib brocade?", es: "¿Qué familia de artesanos marroquíes está detrás del brocado Khrib?", dr: "أشنو هي عائلة الصناع التقليديين المغاربة لي صاوبات بروكار الخريب؟" },
        options: { fr: ["Bencherif", "Al-Idrissi", "Mrini", "Skali"], en: ["Bencherif", "Al-Idrissi", "Mrini", "Skali"], es: ["Bencherif", "Al-Idrissi", "Mrini", "Skali"], dr: ["بنشريف", "الإدريسي", "المريني", "برادة"] },
        correctAnswer: { fr: "Bencherif", en: "Bencherif", es: "Bencherif", dr: "بنشريف" },
        explanation: { fr: "Famille d’artisans célèbre pour ses tissus luxueux, perpétuant un savoir-faire traditionnel.", en: "A family of artisans famous for their luxurious fabrics, perpetuating traditional know-how.", es: "Familia de artesanos famosa por sus lujosos tejidos, que perpetúa un saber hacer tradicional.", dr: "عائلة ديال الصناع التقليديين مشهورة بالثواب الفاخرة ديالها، كتحافظ على حرفة تقليدية." }
    },
    {
        id: "mq_grande_mosquee_paris_builder",
        level: 3,
        question: { fr: "Qui a construit la Grande Mosquée de Paris ?", en: "Who built the Grand Mosque of Paris?", es: "¿Quién construyó la Gran Mezquita de París?", dr: "شكون بنى الجامع الكبير دباريس؟" },
        options: { fr: ["Maroc", "Algérie", "Tunisie", "Égypte"], en: ["Morocco", "Algeria", "Tunisia", "Egypt"], es: ["Marruecos", "Argelia", "Túnez", "Egipto"], dr: ["المغرب", "الجزائر", "تونس", "مصر"] },
        correctAnswer: { fr: "Maroc", en: "Morocco", es: "Marruecos", dr: "المغرب" },
        explanation: { fr: "Monument réalisé par des artisans marocains, dont le savoir-faire en zellige et plâtre est visible dans les archives.", en: "A monument built by Moroccan artisans, whose expertise in zellige and plaster is visible in the archives.", es: "Monumento realizado por artesanos marroquíes, cuya pericia en zellige y yeso es visible en los archivos.", dr: "معلمة تاريخية صاوبوها صناع تقليديين مغاربة، و الحرفية ديالهم فالزليج و الكبص باينة فالأرشيف." }
    },
    {
        id: "mq_grande_mosquee_paris_zellige",
        level: 6,
        question: { fr: "Qui a réalisé le zellige de la Grande Mosquée de Paris ?", en: "Who made the zellige for the Grand Mosque of Paris?", es: "¿Quién hizo el zellige de la Gran Mezquita de París?", dr: "شكون صاوب الزليج ديال الجامع الكبير دباريس؟" },
        options: { fr: ["Bencherif", "Bensouda", "Skali", "Tajamouti"], en: ["Bencherif", "Bensouda", "Skali", "Tajamouti"], es: ["Bencherif", "Bensouda", "Skali", "Tajamouti"], dr: ["بنشريف", "بن سودة", "صقلي", "التجموعتي"] },
        correctAnswer: { fr: "Bencherif", en: "Bencherif", es: "Bencherif", dr: "بنشريف" },
        explanation: { fr: "Artisans marocains spécialisés dans le zellige, aussi connus pour la création de brocarts et tissus de luxe.", en: "Moroccan artisans specializing in zellige, also known for creating brocades and luxury fabrics.", es: "Artesanos marroquíes especializados en zellige, también conocidos por la creación de brocados y tejidos de lujo.", dr: "صناع تقليديين مغاربة مختصين فالزليج، معروفين حتى بصناعة البروكار و الثواب الفاخرة." }
    },
    {
        id: "mq_grande_mosquee_paris_inauguration_year",
        level: 4,
        question: { fr: "En quelle année a été inaugurée la Grande Mosquée de Paris ?", en: "In what year was the Grand Mosque of Paris inaugurated?", es: "¿En qué año se inauguró la Gran Mezquita de París?", dr: "أشمن عام تدشن الجامع الكبير دباريس؟" },
        options: { fr: ["1926", "1912", "1930", "1945"], en: ["1926", "1912", "1930", "1945"], es: ["1926", "1912", "1930", "1945"], dr: ["1926", "1912", "1930", "1945"] },
        correctAnswer: { fr: "1926", en: "1926", es: "1926", dr: "1926" },
        explanation: { fr: "La Grande Mosquée de Paris a été inaugurée en présence du sultan Moulay Youssef et du président français Gaston Doumergue.", en: "The Grand Mosque of Paris was inaugurated in the presence of Sultan Moulay Youssef and French President Gaston Doumergue.", es: "La Gran Mezquita de París fue inaugurada en presencia del sultán Moulay Youssef y del presidente francés Gaston Doumergue.", dr: "الجامع الكبير دباريس تدشن بحضور السلطان مولاي يوسف و الرئيس الفرنسي غاستون دوميرغ." }
    },
    {
        id: "mq_grande_mosquee_paris_inauguration_sultan",
        level: 4,
        question: { fr: "Quel sultan marocain a inauguré la Grande Mosquée de Paris ?", en: "Which Moroccan sultan inaugurated the Grand Mosque of Paris?", es: "¿Qué sultán marroquí inauguró la Gran Mezquita de París?", dr: "شكون هو السلطان المغربي لي دشن الجامع الكبير دباريس؟" },
        options: { fr: ["Moulay Youssef", "Moulay Abdelaziz", "Mohammed V", "Abd al-Malik"], en: ["Moulay Youssef", "Moulay Abdelaziz", "Mohammed V", "Abd al-Malik"], es: ["Muley Youssef", "Moulay Abdelaziz", "Mohammed V", "Abd al-Malik"], dr: ["مولاي يوسف", "مولاي عبد العزيز", "محمد الخامس", "عبد الملك"] },
        correctAnswer: { fr: "Moulay Youssef", en: "Moulay Youssef", es: "Muley Youssef", dr: "مولاي يوسف" },
        explanation: { fr: "La Grande Mosquée de Paris a été inaugurée en présence du sultan Moulay Youssef et du président français Gaston Doumergue.", en: "The Grand Mosque of Paris was inaugurated in the presence of Sultan Moulay Youssef and French President Gaston Doumergue.", es: "La Gran Mezquita de París fue inaugurada en presencia del sultán Moulay Youssef y del presidente francés Gaston Doumergue.", dr: "الجامع الكبير دباريس تدشن بحضور السلطان مولاي يوسف و الرئيس الفرنسي غاستون دوميرغ." }
    },
    {
        id: "mq_giralda_seville_builder",
        level: 4,
        question: { fr: "Sous quel règne a été construite la Giralda de Séville ?", en: "Under which reign was the Giralda of Seville built?", es: "¿Bajo qué reinado se construyó la Giralda de Sevilla?", dr: "فتحث أي حكم تبنات الخيرالدا فإشبيلية؟" },
        options: { fr: ["Almohades", "Almoravides", "Saadiens", "Mérinides"], en: ["Almohads", "Almoravids", "Saadians", "Marinids"], es: ["Almohades", "Almorávides", "Saadíes", "Meriníes"], dr: ["الموحدون", "المرابطون", "السعديون", "المرينيون"] },
        correctAnswer: { fr: "Almohades", en: "Almohads", es: "Almohades", dr: "الموحدون" },
        explanation: { fr: "Minaret devenu clocher emblématique, symbole de l’architecture almohade en Andalousie.", en: "A minaret that became an emblematic bell tower, a symbol of Almohad architecture in Andalusia.", es: "Minarete que se convirtió en un emblemático campanario, símbolo de la arquitectura almohade en Andalucía.", dr: "صومعة ولات برج جراس رمزي، رمز للعمارة الموحدية فالأندلس." }
    },
    {
        id: "mq_argan_unesco",
        level: 3,
        question: { fr: "En quelle année le savoir-faire lié à l'arganier a-t-il été inscrit au patrimoine de l'UNESCO ?", en: "In what year was the know-how related to the argan tree inscribed as a UNESCO heritage?", es: "¿En qué año se inscribió el saber hacer relacionado con el argán como patrimonio de la UNESCO?", dr: "أشمن عام تسجلات الحرفية ديال شجرة أركان فالتراث ديال اليونيسكو؟" },
        options: { fr: ["2014", "2008", "2012", "2018"], en: ["2014", "2008", "2012", "2018"], es: ["2014", "2008", "2012", "2018"], dr: ["2014", "2008", "2012", "2018"] },
        correctAnswer: { fr: "2014", en: "2014", es: "2014", dr: "2014" },
        explanation: { fr: "L'UNESCO a reconnu en 2014 l'ensemble des pratiques et des connaissances liées à l'arganier comme patrimoine culturel immatériel de l'humanité.", en: "In 2014, UNESCO recognized all the practices and knowledge related to the argan tree as an intangible cultural heritage of humanity.", es: "En 2014, la UNESCO reconoció el conjunto de prácticas y conocimientos relacionados con el argán como patrimonio cultural inmaterial de la humanidad.", dr: "ف 2014، اليونيسكو اعترفات بجميع الممارسات و المعارف المتعلقة بشجرة أركان كتراث ثقافي لا مادي للإنسانية." }
    },
    {
        id: "mq_khanjar_embroidery",
        level: 6,
        question: { fr: "Quel type de broderie, dont le nom signifie 'poignard', orne traditionnellement les caftans du nord du Royaume ?", en: "What type of embroidery, whose name means 'dagger', traditionally adorns the caftans of the northern Kingdom?", es: "¿Qué tipo de bordado, cuyo nombre significa 'daga', adorna tradicionalmente los caftanes del norte del Reino?", dr: "أشنو هو نوع الطرز، لي سميتو كتعني 'خنجر'، لي كيزين تقليديا قفاطن شمال المملكة؟" },
        options: { fr: ["Khanjar", "Ntaa", "Taajira", "Zemmouri"], en: ["Khanjar", "Ntaa", "Taajira", "Zemmouri"], es: ["Khanjar", "Ntaa", "Taajira", "Zemmouri"], dr: ["خنجر", "نطع", "تاجرة", "زموري"] },
        correctAnswer: { fr: "Khanjar", en: "Khanjar", es: "Khanjar", dr: "خنجر" },
        explanation: { fr: "Cette technique de broderie spécifique est mentionnée au XVIe siècle par l'historien Louis del Marmol Carvajal comme un ornement précieux des caftans.", en: "This specific embroidery technique was mentioned in the 16th century by the historian Luis del Mármol Carvajal as a precious adornment for caftans.", es: "Esta técnica de bordado específica fue mencionada en el siglo XVI por el historiador Luis del Mármol Carvajal como un adorno precioso para los caftanes.", dr: "هاد التقنية ديال الطرز ذكرها المؤرخ لويس ديل مارمول كارفاخال فالقرن 16 كزواق ثمين للقفاطن." }
    },
    {
        id: "mq_abderrahman_el_mejdoub",
        level: 5,
        question: { fr: "Quel poète marocain du XVIᵉ siècle, né vers 1506 et mort en 1568, est célèbre pour ses quatrains populaires empreints de sagesse ?", en: "Which 16th-century Moroccan poet, born around 1506 and died in 1568, is famous for his popular, wisdom-filled quatrains?", es: "¿Qué poeta marroquí del siglo XVI, nacido alrededor de 1506 y muerto en 1568, es famoso por sus cuartetos populares llenos de sabiduría?", dr: "شكون هو الشاعر المغربي ديال القرن 16، تزاد ف 1506 و مات ف 1568، مشهور بالرباعيات ديالو الشعبية لي عامرة حكمة؟" },
        options: { fr: ["Abderrahman El Mejdoub", "Sidi Mhammed ben Aïssâ", "Ibn Abd al-Malik al-Marrakushi", "Cheikh Lkamél"], en: ["Abderrahman El Mejdoub", "Sidi Mhammed ben Aïssâ", "Ibn Abd al-Malik al-Marrakushi", "Cheikh Lkamél"], es: ["Abderrahman El Mejdoub", "Sidi Mhammed ben Aïssâ", "Ibn Abd al-Malik al-Marrakushi", "Cheikh Lkamél"], dr: ["عبد الرحمن المجدوب", "سيدي محمد بن عيسى", "ابن عبد الملك المراكشي", "الشيخ الكامل"] },
        correctAnswer: { fr: "Abderrahman El Mejdoub", en: "Abderrahman El Mejdoub", es: "Abderrahman El Mejdoub", dr: "عبد الرحمن المجدوب" },
        explanation: { fr: "Souvent surnommé le 'poète errant', ses vers concis et profonds font partie intégrante du patrimoine oral du pays.", en: "Often nicknamed the 'wandering poet', his concise and profound verses are an integral part of the country's oral heritage.", es: "A menudo apodado el 'poeta errante', sus versos concisos y profundos son parte integrante del patrimonio oral del país.", dr: "غالبا ملقب ب'الشاعر الهائم'، الأبيات ديالو الموجزة و العميقة جزء لا يتجزأ من التراث الشفوي للبلاد." }
    },
    {
        id: "mq_ben_haddaou_portrait",
        level: 8,
        question: { fr: "Quelle artiste a réalisé le portrait de l'ambassadeur Mohammed Ben Haddaou en 1682 ?", en: "Which artist painted the portrait of Ambassador Mohammed Ben Haddaou in 1682?", es: "¿Qué artista pintó el retrato del embajador Mohammed Ben Haddaou en 1682?", dr: "أشنو هي الفنانة لي رسمات بورتريه السفير محمد بن حدو ف 1682؟" },
        options: { fr: ["Susan Penelope Rosse", "Artemisia Gentileschi", "Élisabeth Vigée Le Brun", "Angelica Kauffman"], en: ["Susan Penelope Rosse", "Artemisia Gentileschi", "Élisabeth Vigée Le Brun", "Angelica Kauffman"], es: ["Susan Penelope Rosse", "Artemisia Gentileschi", "Élisabeth Vigée Le Brun", "Angelica Kauffman"], dr: ["سوزان بينيلوب روس", "أرتيميسيا جنتيليسكي", "إليزابيت فيجي لو بران", "أنجيليكا كاوفمان"] },
        correctAnswer: { fr: "Susan Penelope Rosse", en: "Susan Penelope Rosse", es: "Susan Penelope Rosse", dr: "سوزان بينيلوب روس" },
        explanation: { fr: "En 1682, la miniaturiste anglaise Susan Penelope Rosse peint le portrait de Mohammed Ben Haddaou, ambassadeur du sultan Moulay Ismaïl à la cour de Charles II. Cette œuvre témoigne des échanges diplomatiques entre le Maroc et l’Angleterre au XVIIᵉ siècle.", en: "In 1682, the English miniaturist Susan Penelope Rosse painted the portrait of Mohammed Ben Haddaou, ambassador of Sultan Moulay Ismaïl to the court of Charles II. This work testifies to the diplomatic exchanges between Morocco and England in the 17th century.", es: "En 1682, la miniaturista inglesa Susan Penelope Rosse pintó el retrato de Mohammed Ben Haddaou, embajador del sultán Moulay Ismaïl en la corte de Carlos II. Esta obra es testimonio de los intercambios diplomáticos entre Marruecos e Inglaterra en el siglo XVII.", dr: "ف 1682، الفنانة الإنجليزية ديال المنمنمات سوزان بينيلوب روس رسمات بورتريه محمد بن حدو، سفير السلطان مولاي إسماعيل فبلاط تشارلز الثاني. هاد العمل كيشهد على المبادلات الدبلوماسية بين المغرب و إنجلترا فالقرن 17." }
    },
    {
        id: "mq_sayeda_alhurra",
        level: 4,
        question: { fr: "Qui était Sayeda Alhurra, figure marquante du XVIᵉ siècle ?", en: "Who was Sayeda Alhurra, a prominent figure of the 16th century?", es: "¿Quién fue Sayeda Alhurra, una figura destacada del siglo XVI?", dr: "شكون كانت السيدة الحرة، شخصية بارزة فالقرن 16؟" },
        options: { fr: ["Reine et corsaire de Tétouan", "Sultane de Fès", "Poétesse de Meknès", "Scientifique de Marrakech"], en: ["Queen and corsair of Tétouan", "Sultana of Fes", "Poetess of Meknes", "Scientist of Marrakech"], es: ["Reina y corsaria de Tetuán", "Sultana de Fez", "Poetisa de Mequinez", "Científica de Marrakech"], dr: ["ملكة و قرصانة تطوان", "سلطانة فاس", "شاعرة مكناس", "عالمة مراكش"] },
        correctAnswer: { fr: "Reine et corsaire de Tétouan", en: "Queen and corsair of Tétouan", es: "Reina y corsaria de Tetuán", dr: "ملكة و قرصانة تطوان" },
        explanation: { fr: "Sayeda Alhurra fut gouverneure de Tétouan et corsaire redoutée en Méditerranée au XVIᵉ siècle. Son image de femme libre et puissante aurait inspiré le personnage de Calafia, reine guerrière du roman Las Sergas de Esplandián (1510), dont le nom fut ensuite donné à la Californie par les conquistadors espagnols.", en: "Sayeda Alhurra was the governor of Tétouan and a feared corsair in the Mediterranean in the 16th century. Her image as a free and powerful woman is said to have inspired the character of Calafia, a warrior queen in the novel Las Sergas de Esplandián (1510), whose name was later given to California by the Spanish conquistadors.", es: "Sayeda Alhurra fue gobernadora de Tetuán y una temida corsaria en el Mediterráneo en el siglo XVI. Se dice que su imagen de mujer libre y poderosa inspiró el personaje de Calafia, una reina guerrera de la novela Las sergas de Esplandián (1510), cuyo nombre fue dado más tarde a California por los conquistadores españoles.", dr: "السيدة الحرة كانت حاكمة تطوان و قرصانة معروفة فالبحر المتوسط فالقرن 16. الصورة ديالها كإمرأة حرة و قوية هي لي ألهمات شخصية كالافيا، ملكة محاربة فرواية 'لاس سيركاس دي إسبلانديان' (1510)، لي سميتها تعطات من بعد لكاليفورنيا من طرف الغزاة الإسبان." }
    },
    {
        id: "mq_souka_la_marocaine",
        level: 7,
        question: { fr: "Qui a écrit la chanson Souka la Marocaine en 1864 ?", en: "Who wrote the song Souka la Marocaine in 1864?", es: "¿Quién escribió la canción Souka la Marocaine en 1864?", dr: "شكون كتب أغنية سوكا المغربية ف 1864؟" },
        options: { fr: ["Turpin de Sansay", "Georges Douay", "Adolphe Huard", "Auguste de Villebichot"], en: ["Turpin de Sansay", "Georges Douay", "Adolphe Huard", "Auguste de Villebichot"], es: ["Turpin de Sansay", "Georges Douay", "Adolphe Huard", "Auguste de Villebichot"], dr: ["توربان دو سانسيه", "جورج دواي", "أدولف هوارد", "أوغست دو فيلبيشو"] },
        correctAnswer: { fr: "Turpin de Sansay", en: "Turpin de Sansay", es: "Turpin de Sansay", dr: "توربان دو سانسيه" },
        explanation: { fr: "Auteur dramatique et chansonnier français du XIXᵉ siècle, Louis-Adolphe Turpin de Sansay est l’auteur de Souka la Marocaine, chanson écrite en 1864, qui met en scène une guerrière marocaine au service du sultan.", en: "A 19th-century French playwright and songwriter, Louis-Adolphe Turpin de Sansay wrote Souka la Marocaine, a song written in 1864, which features a Moroccan warrior in the service of the sultan.", es: "Dramaturgo y compositor francés del siglo XIX, Louis-Adolphe Turpin de Sansay es el autor de Souka la Marocaine, una canción escrita en 1864, que presenta a una guerrera marroquí al servicio del sultán.", dr: "كاتب مسرحي و مغني فرنسي ديال القرن 19، لويس أدولف توربان دو سانسيه هو لي كتب 'سوكا المغربية'، أغنية تكتبات ف 1864، كتهضر على محاربة مغربية فخدمة السلطان." }
    },
    {
        id: "mq_lettres_marocaines",
        level: 6,
        question: { fr: "Quel roman épistolaire du XVIIIᵉ siècle met en scène un visiteur marocain nommé Gazel, dont les lettres offrent une critique de la société espagnole ?", en: "Which 18th-century epistolary novel features a Moroccan visitor named Gazel, whose letters offer a critique of Spanish society?", es: "¿Qué novela epistolar del siglo XVIII presenta a un visitante marroquí llamado Gazel, cuyas cartas ofrecen una crítica de la sociedad española?", dr: "أشنو هي الرواية الرسائلية ديال القرن 18 لي فيها زائر مغربي سميتو غازيل، و لي رسائله كتقدم نقد للمجتمع الإسباني؟" },
        options: { fr: ["Les Lettres marocaines", "Les Lettres persanes", "Les Liaisons dangereuses", "Julie ou la Nouvelle Héloïse"], en: ["The Moroccan Letters", "The Persian Letters", "Dangerous Liaisons", "Julie, or the New Heloise"], es: ["Las Cartas marruecas", "Las Cartas persas", "Las amistades peligrosas", "Julia, o la nueva Eloísa"], dr: ["الرسائل المغربية", "الرسائل الفارسية", "العلاقات الخطرة", "جولي أو إلويز الجديدة"] },
        correctAnswer: { fr: "Les Lettres marocaines", en: "The Moroccan Letters", es: "Las Cartas marruecas", dr: "الرسائل المغربية" },
        explanation: { fr: "Publié en 1789 par José Cadalso, ce roman épistolaire présente les réflexions de Gazel, un Marocain fictif, sur les mœurs et les institutions espagnoles, à travers un échange de lettres avec ses interlocuteurs.", en: "Published in 1789 by José Cadalso, this epistolary novel presents the reflections of Gazel, a fictional Moroccan, on Spanish customs and institutions, through an exchange of letters with his interlocutors.", es: "Publicada en 1789 por José Cadalso, esta novela epistolar presenta las reflexiones de Gazel, un marroquí ficticio, sobre las costumbres e instituciones españolas, a través de un intercambio de cartas con sus interlocutores.", dr: "تنشرات ف 1789 من طرف خوسيه كادالسو، هاد الرواية الرسائلية كتقدم تأملات غزل، واحد المغربي, على عادات و مؤسسات إسبانيا، من خلال تبادل الرسائل مع المحاورين ديالو." }
    }
];

export const GLOBAL_QUESTIONS: Question[] = [
    {
        id: "gq_mona_lisa",
        level: 1,
        question: { fr: "Qui a peint la Joconde ?", en: "Who painted the Mona Lisa?", es: "¿Quién pintó la Mona Lisa?", dr: "شكون رسم الموناليزا؟" },
        options: { fr: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], en: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], es: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], dr: ["فنسنت فان غوخ", "بابلو بيكاسو", "ليوناردو دافنشي", "كلود مونيه"] },
        correctAnswer: { fr: "Leonardo da Vinci", en: "Leonardo da Vinci", es: "Leonardo da Vinci", dr: "ليوناردو دافنشي" },
        explanation: { fr: "La Joconde a été peinte par l'artiste italien de la Renaissance, Leonardo da Vinci.", en: "The Mona Lisa was painted by the Italian Renaissance artist Leonardo da Vinci.", es: "La Mona Lisa fue pintada por el artista renacentista italiano Leonardo da Vinci.", dr: "الموناليزا رسمها الفنان الإيطالي ديال عصر النهضة، ليوناردو دافنشي." }
    },
    {
        id: "gq_capital_japan",
        level: 1,
        question: { fr: "Quelle est la capitale du Japon ?", en: "What is the capital of Japan?", es: "¿Cuál es la capital de Japón?", dr: "شنو هي عاصمة اليابان؟" },
        options: { fr: ["Pékin", "Séoul", "Tokyo", "Bangkok"], en: ["Beijing", "Seoul", "Tokyo", "Bangkok"], es: ["Pekín", "Seúl", "Tokio", "Bangkok"], dr: ["بيكين", "سيول", "طوكيو", "بانكوك"] },
        correctAnswer: { fr: "Tokyo", en: "Tokyo", es: "Tokio", dr: "طوكيو" },
        explanation: { fr: "Tokyo est la capitale et la plus grande ville du Japon.", en: "Tokyo is the capital and largest city of Japan.", es: "Tokio es la capital y la ciudad más grande de Japón.", dr: "طوكيو هي عاصمة وأكبر مدينة فاليابان." }
    },
    {
        id: "gq_h2o",
        level: 1,
        question: { fr: "Que représente la formule chimique H₂O ?", en: "What does the chemical formula H₂O represent?", es: "¿Qué representa la fórmula química H₂O?", dr: " ؟ (H₂O) أشننو كتمثل الصيغة الكيميائية" },
        options: { fr: ["Sel", "Sucre", "Eau", "Oxygène"], en: ["Salt", "Sugar", "Water", "Oxygen"], es: ["Sal", "Azúcar", "Agua", "Oxígeno"], dr: ["الملحة", "السكر", "الما", "الأوكسجين"] },
        correctAnswer: { fr: "Eau", en: "Water", es: "Agua", dr: "الما" },
        explanation: { fr: "H₂O est la formule chimique de l'eau, indiquant qu'une molécule d'eau est composée de deux atomes d'hydrogène (H) et d'un atome d'oxygène (O).", en: "H₂O is the chemical formula for water, indicating that one molecule of water is composed of two hydrogen atoms (H) and one oxygen atom (O).", es: "H₂O es la fórmula química del agua, que indica que una molécula de agua está compuesta por dos átomos de hidrógeno (H) y un átomo de oxígeno (O).", dr: "H₂O هي الصيغة الكيميائية ديال الما، كتعني أن جزيئة وحدة ديال الما فيها جوج ذرات هيدروجين (H) وذرة وحدة أوكسجين (O)." }
    },
    {
        id: "gq_red_planet",
        level: 2,
        question: { fr: "Quelle planète est connue sous le nom de 'Planète Rouge' ?", en: "Which planet is known as the 'Red Planet'?", es: "¿Qué planeta se conoce como el 'Planeta Rojo'?", dr: "أشنو هو الكوكب اللي معروف ب'الكوكب الأحمر'؟" },
        options: { fr: ["Vénus", "Mars", "Jupiter", "Saturne"], en: ["Venus", "Mars", "Jupiter", "Saturn"], es: ["Venus", "Marte", "Júpiter", "Saturno"], dr: ["الزهرة", "المريخ", "المشتري", "زحل"] },
        correctAnswer: { fr: "Mars", en: "Mars", es: "Marte", dr: "المريخ" },
        explanation: { fr: "Mars est souvent appelée la 'Planète Rouge' en raison de la présence d'oxyde de fer sur sa surface, ce qui lui donne une teinte rougeâtre.", en: "Mars is often called the 'Red Planet' because of the iron oxide on its surface, which gives it a reddish hue.", es: "A Marte se le suele llamar el 'Planeta Rojo' debido al óxido de hierro en su superficie, que le da un tono rojizo.", dr: "المريخ كيتسمى 'الكوكب الأحمر' حيت السطح ديالو فيه أوكسيد الحديد، اللي كيعطيه لون حمر." }
    },
    {
        id: "gq_romeo_juliet",
        level: 2,
        question: { fr: "Qui a écrit la pièce de théâtre 'Roméo et Juliette' ?", en: "Who wrote the play 'Romeo and Juliet'?", es: "¿Quién escribió la obra 'Romeo y Julieta'?", dr: "شكون كتب مسرحية 'روميو وجولييت'؟" },
        options: { fr: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], en: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], es: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], dr: ["تشارلز ديكنز", "ويليام شكسبير", "جاين أوستن", "مارك توين"] },
        correctAnswer: { fr: "William Shakespeare", en: "William Shakespeare", es: "William Shakespeare", dr: "ويليام شكسبير" },
        explanation: { fr: "'Roméo et Juliette' est une célèbre tragédie écrite par le dramaturge anglais William Shakespeare.", en: "'Romeo and Juliet' is a famous tragedy written by the English playwright William Shakespeare.", es: "'Romeo y Julieta' es una famosa tragedia escrita por el dramaturgo inglés William Shakespeare.", dr: "'روميو وجولييت' هي مأساة مشهورة كتبها الكاتب المسرحي الإنجليزي ويليام شكسبير." }
    },
    {
        id: "gq_largest_ocean",
        level: 1,
        question: { fr: "Quel est le plus grand océan du monde ?", en: "What is the largest ocean in the world?", es: "¿Cuál es el océano más grande del mundo?", dr: "شنو هو أكبر محيط فالعالم؟" },
        options: { fr: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"], en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], es: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"], dr: ["المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي", "المحيط الهادئ"] },
        correctAnswer: { fr: "Océan Pacifique", en: "Pacific Ocean", es: "Océano Pacífico", dr: "المحيط الهادئ" },
        explanation: { fr: "L'océan Pacifique est le plus grand et le plus profond des océans du monde, couvrant environ un tiers de la surface de la Terre.", en: "The Pacific Ocean is the largest and deepest of the world's oceans, covering about one-third of the Earth's surface.", es: "El Océano Pacífico es el más grande y profundo de los océanos del mundo, cubriendo aproximadamente un tercio de la superficie de la Tierra.", dr: "المحيط الهادئ هو أكبر وأعمق محيط فالعالم، كيغطي تقريبا ثلث مساحة الكرة الأرضية." }
    },
    {
        id: "gq_wwii_end",
        level: 2,
        question: { fr: "En quelle année la Seconde Guerre mondiale s'est-elle terminée ?", en: "In what year did World War II end?", es: "¿En qué año terminó la Segunda Guerra Mundial?", dr: "أشمن عام سالات فيه الحرب العالمية الثانية؟" },
        options: { fr: ["1943", "1945", "1950", "1939"], en: ["1943", "1945", "1950", "1939"], es: ["1943", "1945", "1950", "1939"], dr: ["1943", "1945", "1950", "1939"] },
        correctAnswer: { fr: "1945", en: "1945", es: "1945", dr: "1945" },
        explanation: { fr: "La Seconde Guerre mondiale s'est terminée en 1945 avec la reddition des puissances de l'Axe.", en: "World War II ended in 1945 with the surrender of the Axis powers.", es: "La Segunda Guerra Mundial terminó en 1945 con la rendición de las potencias del Eje.", dr: "الحرب العالمية الثانية سالات ف 1945 باستسلام دول المحور." }
    },
    {
        id: "gq_theory_of_relativity",
        level: 3,
        question: { fr: "Qui a développé la théorie de la relativité ?", en: "Who developed the theory of relativity?", es: "¿Quién desarrolló la teoría de la relatividad?", dr: "شكون طور نظرية النسبية؟" },
        options: { fr: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], en: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], es: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], dr: ["إسحاق نيوتن", "جاليليو جاليلي", "ألبيرت أينشتايين", "ستيفن هوكينغ"] },
        correctAnswer: { fr: "Albert Einstein", en: "Albert Einstein", es: "Albert Einstein", dr: "ألبيرت أينشتايين" },
        explanation: { fr: "Albert Einstein, un physicien théoricien d'origine allemande, a développé la théorie de la relativité, l'un des deux piliers de la physique moderne.", en: "Albert Einstein, a German-born theoretical physicist, developed the theory of relativity, one of the two pillars of modern physics.", es: "Albert Einstein, un físico teórico de origen alemán, desarrolló la teoría de la relatividad, uno de los dos pilares de la física moderna.", dr: "ألبيرت أينشتاين، فيزيائي نظري من أصل ألماني، هو اللي طور نظرية النسبية، اللي هي وحدة من جوج ركائز ديال الفيزياء الحديثة." }
    },
    {
        id: "gq_penicillin",
        level: 2,
        question: { fr: "Qui a découvert la pénicilline ?", en: "Who discovered penicillin?", es: "¿Quién descubrió la penicilina?", dr: "شكون اكتشف البنسلين؟" },
        options: { fr: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Gregor Mendel"], en: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Gregor Mendel"], es: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Gregor Mendel"], dr: ["ماري كوري", "لويس باستور", "ألكسندر فليمنغ", "جريجور مندل"] },
        correctAnswer: { fr: "Alexander Fleming", en: "Alexander Fleming", es: "Alexander Fleming", dr: "ألكسندر فليمنغ" },
        explanation: { fr: "La pénicilline a été découverte en 1928 par le scientifique écossais Alexander Fleming.", en: "Penicillin was discovered in 1928 by the Scottish scientist Alexander Fleming.", es: "La penicilina fue descubierta en 1928 por el científico escocés Alexander Fleming.", dr: "البنسلين اكتشفو ف 1928 العالم السكوتلاندي ألكسندر فليمنغ." }
    },
    {
        id: "gq_atmosphere_composition",
        level: 4,
        question: { fr: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?", en: "What is the most abundant gas in Earth's atmosphere?", es: "¿Cuál es el gas más abundante en la atmósfera de la Tierra?", dr: "شنو هو الغاز اللي كاين بزاف فالغلاف الجوي ديال الأرض؟" },
        options: { fr: ["Oxygène", "Azote", "Dioxyde de carbone", "Argon"], en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], es: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], dr: ["الأوكسجين", "الآزوت", "ثاني أوكسيد الكربون", "الأرغون"] },
        correctAnswer: { fr: "Azote", en: "Nitrogen", es: "Nitrógeno", dr: "الآزوت" },
        explanation: { fr: "L'atmosphère terrestre est composée d'environ 78 % d'azote, ce qui en fait le gaz le plus abondant.", en: "Earth's atmosphere is composed of about 78% nitrogen, making it the most abundant gas.", es: "La atmósfera de la Tierra está compuesta por aproximadamente un 78% de nitrógeno, lo que lo convierte en el gas más abundante.", dr: "الغلاف الجوي ديال الأرض فيه تقريبا 78% ديال الآزوت، داكشي علاش هو الغاز اللي كاين بزاف." }
    },
    {
        id: "gq_schrodinger_cat",
        level: 7,
        question: { fr: "Le paradoxe du chat de Schrödinger est une expérience de pensée dans quel domaine ?", en: "Schrödinger's cat paradox is a thought experiment in which field?", es: "La paradoja del gato de Schrödinger es un experimento mental, ¿en qué campo?", dr: "مفارقة قطة شرودنغر هي تجربة فكرية فأي مجال؟" },
        options: { fr: ["Chimie", "Biologie", "Physique quantique", "Astronomie"], en: ["Chemistry", "Biology", "Quantum Physics", "Astronomy"], es: ["Química", "Biología", "Física cuántica", "Astronomía"], dr: ["الكيمياء", "البيولوجيا", "فيزياء الكم", "علم الفلك"] },
        correctAnswer: { fr: "Physique quantique", en: "Quantum Physics", es: "Física cuántica", dr: "فيزياء الكم" },
        explanation: { fr: "Le paradoxe du chat de Schrödinger est une expérience de pensée, souvent décrite comme un paradoxe, conçue par le physicien autrichien Erwin Schrödinger en 1935 pour illustrer les problèmes de l'interprétation de Copenhague de la mécanique quantique.", en: "Schrödinger's cat is a thought experiment, often described as a paradox, devised by Austrian physicist Erwin Schrödinger in 1935 to illustrate the problems of the Copenhagen interpretation of quantum mechanics.", es: "La paradoja del gato de Schrödinger es un experimento mental, a menudo descrito como una paradoja, ideado por el físico austriaco Erwin Schrödinger en 1935 para ilustrar los problemas de la interpretación de Copenhague de la mecánica cuántica.", dr: "قطة شرودنغر هي تجربة فكرية، غالبا كتوصف كمفارقة، صممها الفيزيائي النمساوي إرفين شرودنغر ف 1935 باش يبين مشاكل تفسير كوبنهاغن لميكانيكا الكم." }
    },
    {
        id: "gq_first_roman_emperor",
        level: 6,
        question: { fr: "Qui est considéré comme le premier empereur romain ?", en: "Who is considered the first Roman emperor?", es: "¿Quién es considerado el primer emperador romano?", dr: "شكون كيتعتبر أول إمبراطور روماني؟" },
        options: { fr: ["Jules César", "Auguste", "Néron", "Caligula"], en: ["Julius Caesar", "Augustus", "Nero", "Caligula"], es: ["Julio César", "Augusto", "Nerón", "Calígula"], dr: ["يوليوس قيصر", "أغسطس", "نيرون", "كاليغولا"] },
        correctAnswer: { fr: "Auguste", en: "Augustus", es: "Augusto", dr: "أغسطس" },
        explanation: { fr: "Auguste (né Octave) est considéré comme le premier empereur romain, régnant de 27 av. J.-C. jusqu'à sa mort en 14 apr. J.-C. Jules César n'a jamais été empereur, mais dictateur.", en: "Augustus (born Octavian) is considered the first Roman emperor, ruling from 27 BC until his death in AD 14. Julius Caesar was never an emperor, but a dictator.", es: "Augusto (nacido Octavio) es considerado el primer emperador romano, gobernando desde el 27 a.C. hasta su muerte en el 14 d.C. Julio César nunca fue emperador, sino dictador.", dr: "أغسطس (اللي تزاد سميتو أوكتافيان) كيتعتبر أول إمبراطور روماني، حكم من 27 قبل الميلاد حتى مات ف 14 ميلادية. يوليوس قيصر ماكانش إمبراطور، كان ديكتاتور." }
    },
    {
        id: "gq_pyramids_location",
        level: 1,
        question: { fr: "Dans quel pays se trouvent les grandes pyramides de Gizeh ?", en: "In which country are the Great Pyramids of Giza located?", es: "¿En qué país se encuentran las grandes pirámides de Giza?", dr: "فأي بلاد كاينين أهرامات الجيزة الكبار؟" },
        options: { fr: ["Grèce", "Mexique", "Égypte", "Soudan"], en: ["Greece", "Mexico", "Egypt", "Sudan"], es: ["Grecia", "México", "Egipto", "Sudán"], dr: ["اليونان", "المكسيك", "مصر", "السودان"] },
        correctAnswer: { fr: "Égypte", en: "Egypt", es: "Egipto", dr: "مصر" },
        explanation: { fr: "Les célèbres pyramides de Gizeh sont situées en Égypte, près de la ville du Caire.", en: "The famous Pyramids of Giza are located in Egypt, near the city of Cairo.", es: "Las famosas pirámides de Giza se encuentran en Egipto, cerca de la ciudad de El Cairo.", dr: "أهرامات الجيزة المشهورة كاينة فمصر، حدا مدينة القاهرة." }
    },
    {
        id: "gq_light_speed",
        level: 3,
        question: { fr: "Quelle est approximativement la vitesse de la lumière dans le vide ?", en: "What is approximately the speed of light in a vacuum?", es: "¿Cuál es aproximadamente la velocidad de la luz en el vacío?", dr: "شحال تقريبا هي سرعة الضوء فالخلاء؟" },
        options: { fr: ["300 000 km/s", "150 000 km/s", "1 000 000 km/s", "30 000 km/s"], en: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"], es: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "30.000 km/s"], dr: ["300,000 كم/ث", "150,000 كم/ث", "1,000,000 كم/ث", "30,000 كم/ث"] },
        correctAnswer: { fr: "300 000 km/s", en: "300,000 km/s", es: "300.000 km/s", dr: "300,000 كم/ث" },
        explanation: { fr: "La vitesse de la lumière dans le vide est une constante physique universelle, d'environ 299 792 kilomètres par seconde.", en: "The speed of light in a vacuum is a universal physical constant, approximately 299,792 kilometers per second.", es: "La velocidad de la luz en el vacío es una constante física universal, de aproximadamente 299.792 kilómetros por segundo.", dr: "سرعة الضوء فالخلاء هي ثابتة فيزيائية عالمية، تقريبا 299,792 كيلومتر فالثانية." }
    },
    {
        id: "gq_human_bones",
        level: 2,
        question: { fr: "Combien d'os un squelette humain adulte a-t-il ?", en: "How many bones does an adult human skeleton have?", es: "¿Cuántos huesos tiene un esqueleto humano adulto?", dr: "شحال من عظم كاين فالجسم ديال الإنسان البالغ؟" },
        options: { fr: ["206", "180", "250", "300"], en: ["206", "180", "250", "300"], es: ["206", "180", "250", "300"], dr: ["206", "180", "250", "300"] },
        correctAnswer: { fr: "206", en: "206", es: "206", dr: "206" },
        explanation: { fr: "Le squelette d'un être humain adulte est composé de 206 os. Les bébés naissent avec plus d'os (environ 300), qui fusionnent en grandissant.", en: "The adult human skeleton is composed of 206 bones. Babies are born with more bones (around 300), which fuse together as they grow.", es: "El esqueleto de un ser humano adulto se compone de 206 huesos. Los bebés nacen con más huesos (alrededor de 300), que se fusionan a medida que crecen.", dr: "الهيكل العظمي ديال الإنسان البالغ فيه 206 ديال العظام. الأطفال الصغار كيتزادو بعظام كتر (تقريبا 300)، وكيتلاصقو مع بعضياتهم منين كيكبرو." }
    },
    {
        id: "gq_great_wall_china",
        level: 2,
        question: { fr: "Pour quelle raison principale la Grande Muraille de Chine a-t-elle été construite ?", en: "For what primary reason was the Great Wall of China built?", es: "¿Por qué razón principal se construyó la Gran Muralla China?", dr: "علاش تبنى سور الصين العظيم؟" },
        options: { fr: ["Décoration", "Défense", "Route commerciale", "Contrôle des inondations"], en: ["Decoration", "Defense", "Trade route", "Flood control"], es: ["Decoración", "Defensa", "Ruta comercial", "Control de inundaciones"], dr: ["زواق", "دفاع", "طريق تجارية", "تحكم فالفيضانات"] },
        correctAnswer: { fr: "Défense", en: "Defense", es: "Defensa", dr: "دفاع" },
        explanation: { fr: "La Grande Muraille de Chine a été construite principalement comme une fortification de défense pour protéger les États et empires chinois contre les raids et invasions des divers groupes nomades des steppes eurasiennes.", en: "The Great Wall of China was built primarily as a defensive fortification to protect Chinese states and empires against raids and invasions from the various nomadic groups of the Eurasian Steppe.", es: "La Gran Muralla China se construyó principalmente como una fortificación defensiva para proteger a los estados e imperios chinos contra las incursiones e invasiones de los diversos grupos nómadas de la estepa euroasiática.", dr: "سور الصين العظيم تبنى فالأصل كحصن دفاعي باش يحمي الدول والإمبراطوريات الصينية من الغارات والغزوات ديال القبائل الرحل ديال السهوب الأوراسية." }
    },
    {
        id: "gq_dna_acronym",
        level: 3,
        question: { fr: "Que signifie l'acronyme ADN ?", en: "What does the acronym DNA stand for?", es: "¿Qué significa el acrónimo ADN?", dr: "(ADN)شنو كيعني اختصار" },
        options: { fr: ["Acide désoxyribonucléique", "Acide dinitrique", "Amide d'azote double", "Aucune de ces réponses"], en: ["Deoxyribonucleic acid", "Dinitric acid", "Double nitrogen amide", "None of these"], es: ["Ácido desoxirribonucleico", "Ácido dinítrico", "Amida de nitrógeno doble", "Ninguna de estas"], dr: ["حمض نووي ريبوزي منقوص الأكسجين", "حمض ثنائي النيتريك", "أميد النيتروجين المزدوج", "تا وحدة من هادو"] },
        correctAnswer: { fr: "Acide désoxyribonucléique", en: "Deoxyribonucleic acid", es: "Ácido desoxirribonucleico", dr: "حمض نووي ريبوزي منقوص الأكسجين" },
        explanation: { fr: "ADN signifie Acide Désoxyribonucléique. C'est une molécule qui porte les instructions génétiques pour le développement, le fonctionnement, la croissance et la reproduction de tous les organismes connus et de nombreux virus.", en: "DNA stands for Deoxyribonucleic Acid. It is a molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses.", es: "ADN significa Ácido Desoxirribonucleico. Es una molécula que porta las instrucciones genéticas para el desarrollo, funcionamiento, crecimiento y reproducción de todos los organismos conocidos y muchos virus.", dr: "ADN كتعني حمض نووي ريبوزي منقوص الأكسجين. هي جزيئة كتحمل التعليمات الجينية للتطور، الوظيفة، النمو والتكاثر ديال جميع الكائنات الحية والفيروسات." }
    },
    {
        id: "gq_gutenberg_invention",
        level: 4,
        question: { fr: "Quelle invention majeure est attribuée à Johannes Gutenberg ?", en: "What major invention is attributed to Johannes Gutenberg?", es: "¿Qué gran invento se atribuye a Johannes Gutenberg?", dr: "شنو هو الاختراع الكبير اللي منسوب ليوهانس غوتنبرغ؟" },
        options: { fr: ["Le télescope", "La machine à vapeur", "L'imprimerie à caractères mobiles", "Le téléphone"], en: ["The telescope", "The steam engine", "The printing press with movable type", "The telephone"], es: ["El telescopio", "La máquina de vapor", "La imprenta de tipos móviles", "El teléfono"], dr: ["التلسكوب", "المحرك البخاري", "المطبعة بالحروف المتحركة", "التليفون"] },
        correctAnswer: { fr: "L'imprimerie à caractères mobiles", en: "The printing press with movable type", es: "La imprenta de tipos móviles", dr: "المطبعة بالحروف المتحركة" },
        explanation: { fr: "Johannes Gutenberg est crédité d'avoir inventé l'imprimerie à caractères mobiles en Europe vers 1440. Cette invention a joué un rôle clé dans la Renaissance, la Réforme et l'Âge des Lumières.", en: "Johannes Gutenberg is credited with inventing the printing press with movable type in Europe around 1440. This invention played a key role in the Renaissance, the Reformation, and the Age of Enlightenment.", es: "A Johannes Gutenberg se le atribuye la invención de la imprenta de tipos móviles en Europa alrededor de 1440. Este invento desempeñó un papel clave en el Renacimiento, la Reforma y la Ilustración.", dr: "يوهانس غوتنبرغ كيتنسب ليه اختراع المطبعة بالحروف المتحركة فأوروبا حوالي عام 1440. هاد الاختراع لعب دور كبير فعصر النهضة والإصلاح وعصر التنوير." }
    },
    {
        id: "gq_longest_river_amazon",
        level: 3,
        question: { fr: "Quel est le plus long fleuve du monde ?", en: "What is the longest river in the world?", es: "¿Cuál es el río más largo del mundo?", dr: "شنو هو أطول نهر فالعالم؟" },
        options: { fr: ["Nil", "Amazone", "Yangtsé", "Mississippi"], en: ["Nile", "Amazon", "Yangtze", "Mississippi"], es: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], dr: ["النيل", "الأمازون", "اليانغتسي", "المسيسيبي"] },
        correctAnswer: { fr: "Amazone", en: "Amazon", es: "Amazonas", dr: "الأمازون" },
        explanation: { fr: "Il traverse plusieurs pays d’Amérique du Sud et mesure plus de 6 400 km.", en: "It flows through several South American countries and is over 6,400 km long.", es: "Atraviesa varios países de Sudamérica y mide más de 6.400 km.", dr: "كيقطع بزاف ديال البلدان فأمريكا الجنوبية والطول ديالو كتر من 6400 كيلومتر." }
    },
    {
        id: "gq_largest_rainforest",
        level: 2,
        question: { fr: "Quelle est la plus grande forêt tropicale du monde ?", en: "What is the largest tropical rainforest in the world?", es: "¿Cuál es la selva tropical más grande del mundo?", dr: "شنو هي أكبر غابة استوائية فالعالم؟" },
        options: { fr: ["La forêt amazonienne", "La forêt du Congo", "La forêt de Bornéo", "La forêt de Sumatra"], en: ["The Amazon rainforest", "The Congo rainforest", "The Borneo rainforest", "The Sumatra rainforest"], es: ["La selva amazónica", "La selva del Congo", "La selva de Borneo", "La selva de Sumatra"], dr: ["غابة الأمازون", "غابة الكونغو", "غابة بورنيو", "غابة سومطرة"] },
        correctAnswer: { fr: "La forêt amazonienne", en: "The Amazon rainforest", es: "La selva amazónica", dr: "غابة الأمازون" },
        explanation: { fr: "Elle couvre une grande partie de l’Amérique du Sud et joue un rôle crucial dans le climat mondial.", en: "It covers a large part of South America and plays a crucial role in the global climate.", es: "Cubre una gran parte de América del Sur y juega un papel crucial en el clima mundial.", dr: "كتغطي جزء كبير من أمريكا الجنوبية وكتلعب دور مهم فالمناخ العالمي." }
    },
    {
        id: "gq_largest_ocean_2",
        level: 2,
        question: { fr: "Quel est le plus grand océan du monde ?", en: "What is the largest ocean in the world?", es: "¿Cuál es el océano más grande del mundo?", dr: "شنو هو أكبر محيط فالعالم؟" },
        options: { fr: ["Pacifique", "Atlantique", "Indien", "Arctique"], en: ["Pacific", "Atlantic", "Indian", "Arctic"], es: ["Pacífico", "Atlántico", "Índico", "Ártico"], dr: ["الهادئ", "الأطلسي", "الهندي", "المتجمد الشمالي"] },
        correctAnswer: { fr: "Pacifique", en: "Pacific", es: "Pacífico", dr: "الهادئ" },
        explanation: { fr: "Il s’étend sur plus de 168 millions de km², le plus vaste de la planète.", en: "It covers more than 168 million sq km, the largest on the planet.", es: "Se extiende por más de 168 millones de km², el más vasto del planeta.", dr: "كيمتد على كتر من 168 مليون كيلومتر مربع، وهو الأكبر فالكوكب." }
    },
    {
        id: "gq_most_populous_country",
        level: 2,
        question: { fr: "Quel pays a la population la plus nombreuse au monde ?", en: "Which country has the largest population in the world?", es: "¿Qué país tiene la población más grande del mundo?", dr: "أشنو هو البلد اللي عندو أكبر عدد ديال السكان فالعالم؟" },
        options: { fr: ["Inde", "Chine", "États-Unis", "Indonésie"], en: ["India", "China", "United States", "Indonesia"], es: ["India", "China", "Estados Unidos", "Indonesia"], dr: ["الهند", "الصين", "الولايات المتحدة", "إندونيسيا"] },
        correctAnswer: { fr: "Chine", en: "China", es: "China", dr: "الصين" },
        explanation: { fr: "Avec plus d’1,4 milliard d’habitants, c’est le pays le plus peuplé.", en: "With over 1.4 billion inhabitants, it is the most populous country.", es: "Con más de 1.400 millones de habitantes, es el país más poblado.", dr: "بأكثر من 1.4 مليار نسمة، هي الدولة الأكثر سكانا." }
    },
    {
        id: "gq_highest_mountain",
        level: 1,
        question: { fr: "Quelle montagne est la plus haute du monde ?", en: "Which mountain is the highest in the world?", es: "¿Qué montaña es la más alta del mundo?", dr: "أشنو هو أعلى جبل فالعالم؟" },
        options: { fr: ["Mont Everest", "K2", "Kangchenjunga", "Lhotse"], en: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], es: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"], dr: ["جبل إيفرست", "كي 2", "كانغشينجونغا", "لوتسي"] },
        correctAnswer: { fr: "Mont Everest", en: "Mount Everest", es: "Monte Everest", dr: "جبل إيفرست" },
        explanation: { fr: "Elle culmine à 8 848 mètres au-dessus du niveau de la mer.", en: "It peaks at 8,848 meters above sea level.", es: "Alcanza una altura de 8.848 metros sobre el nivel del mar.", dr: "القمة ديالو كتوصل ل 8848 متر فوق سطح البحر." }
    },
    {
        id: "gq_largest_hot_desert",
        level: 2,
        question: { fr: "Quel est le plus grand désert chaud du monde ?", en: "What is the largest hot desert in the world?", es: "¿Cuál es el desierto cálido más grande del mundo?", dr: "شنو هي أكبر صحراء سخونة فالعالم؟" },
        options: { fr: ["Sahara", "Gobi", "Kalahari", "Sonora"], en: ["Sahara", "Gobi", "Kalahari", "Sonoran"], es: ["Sahara", "Gobi", "Kalahari", "Sonora"], dr: ["الصحراء الكبرى", "غوبي", "كالاهاري", "سونورا"] },
        correctAnswer: { fr: "Sahara", en: "Sahara", es: "Sahara", dr: "الصحراء الكبرى" },
        explanation: { fr: "Il s’étend sur 9 millions de km² en Afrique du Nord.", en: "It covers 9 million sq km in North Africa.", es: "Se extiende por 9 millones de km² en el norte de África.", dr: "كتمتد على 9 مليون كيلومتر مربع فشمال إفريقيا." }
    },
    {
        id: "gq_capital_australia",
        level: 3,
        question: { fr: "Quelle est la capitale de l’Australie ?", en: "What is the capital of Australia?", es: "¿Cuál es la capital de Australia?", dr: "شنو هي عاصمة أستراليا؟" },
        options: { fr: ["Sydney", "Melbourne", "Canberra", "Brisbane"], en: ["Sydney", "Melbourne", "Canberra", "Brisbane"], es: ["Sídney", "Melbourne", "Canberra", "Brisbane"], dr: ["سيدني", "ملبورن", "كانبرا", "بريسبان"] },
        correctAnswer: { fr: "Canberra", en: "Canberra", es: "Canberra", dr: "كانبرا" },
        explanation: { fr: "Bien que Sydney soit plus connue, Canberra est la capitale administrative.", en: "Although Sydney is more famous, Canberra is the administrative capital.", es: "Aunque Sídney es más conocida, Canberra es la capital administrativa.", dr: "وخا سيدني مشهورة كتر، كانبرا هي العاصمة الإدارية." }
    },
    {
        id: "gq_land_of_rising_sun",
        level: 2,
        question: { fr: "Quel pays est surnommé le “pays du soleil levant” ?", en: "Which country is nicknamed the 'land of the rising sun'?", es: "¿Qué país es apodado el 'país del sol naciente'?", dr: "أشنو هو البلد اللي ملقب ب 'بلاد الشمس المشرقة'؟" },
        options: { fr: ["Chine", "Japon", "Thaïlande", "Corée du Sud"], en: ["China", "Japan", "Thailand", "South Korea"], es: ["China", "Japón", "Tailandia", "Corea del Sur"], dr: ["الصين", "اليابان", "تايلاند", "كوريا الجنوبية"] },
        correctAnswer: { fr: "Japon", en: "Japan", es: "Japón", dr: "اليابان" },
        explanation: { fr: "Ce surnom provient de sa position à l’est de l’Asie.", en: "This nickname comes from its position in the east of Asia.", es: "Este apodo proviene de su posición al este de Asia.", dr: "هاد اللقب جا من الموقع ديالو فشرق آسيا." }
    },
    {
        id: "gq_largest_country_area",
        level: 2,
        question: { fr: "Quel est le pays le plus vaste du monde en superficie ?", en: "What is the largest country in the world by area?", es: "¿Cuál es el país más grande del mundo en superficie?", dr: "أشنو هو أكبر بلد فالعالم من حيث المساحة؟" },
        options: { fr: ["Canada", "Russie", "Chine", "États-Unis"], en: ["Canada", "Russia", "China", "United States"], es: ["Canadá", "Rusia", "China", "Estados Unidos"], dr: ["كندا", "روسيا", "الصين", "الولايات المتحدة"] },
        correctAnswer: { fr: "Russie", en: "Russia", es: "Rusia", dr: "روسيا" },
        explanation: { fr: "Avec environ 17 millions de km², c’est le pays le plus grand de la planète.", en: "With about 17 million sq km, it is the largest country on the planet.", es: "Con aproximadamente 17 millones de km², es el país más grande del planeta.", dr: "بمساحة حوالي 17 مليون كيلومتر مربع، هي أكبر دولة فالكوكب." }
    },
    {
        id: "gq_giza_pyramids_builders",
        level: 1,
        question: { fr: "Quelle civilisation a construit les pyramides de Gizeh ?", en: "Which civilization built the pyramids of Giza?", es: "¿Qué civilización construyó las pirámides de Giza?", dr: "أشنو هي الحضارة اللي بنات أهرامات الجيزة؟" },
        options: { fr: ["Les Mayas", "Les Égyptiens", "Les Babyloniens", "Les Romains"], en: ["The Mayans", "The Egyptians", "The Babylonians", "The Romans"], es: ["Los Mayas", "Los Egipcios", "Los Babilonios", "Los Romanos"], dr: ["المايا", "المصريون", "البابليون", "الرومان"] },
        correctAnswer: { fr: "Les Égyptiens", en: "The Egyptians", es: "Los Egipcios", dr: "المصريون" },
        explanation: { fr: "Les pyramides datent de l’Égypte antique, il y a environ 4 500 ans.", en: "The pyramids date back to ancient Egypt, about 4,500 years ago.", es: "Las pirámides datan del antiguo Egipto, hace unos 4.500 años.", dr: "الأهرامات كترجع لمصر القديمة، تقريبا قبل 4500 عام." }
    },
    {
        id: "gq_paper_invention",
        level: 4,
        question: { fr: "Quel pays a inventé le papier ?", en: "Which country invented paper?", es: "¿Qué país inventó el papel?", dr: "أشنو هو البلد اللي ختارع الورق؟" },
        options: { fr: ["Égypte", "Chine", "Inde", "Grèce"], en: ["Egypt", "China", "India", "Greece"], es: ["Egipto", "China", "India", "Grecia"], dr: ["مصر", "الصين", "الهند", "اليونان"] },
        correctAnswer: { fr: "Chine", en: "China", es: "China", dr: "الصين" },
        explanation: { fr: "L’invention du papier remonte à environ 105 après J.-C. en Chine.", en: "The invention of paper dates back to around 105 AD in China.", es: "La invención del papel se remonta a alrededor del 105 d.C. en China.", dr: "اختراع الورق كيرجع لحوالي عام 105 ميلادي فالصين." }
    },
    {
        id: "gq_city_of_light",
        level: 2,
        question: { fr: "Quelle ville est connue comme la “ville lumière” ?", en: "Which city is known as the 'city of light'?", es: "¿Qué ciudad es conocida como la 'ciudad de la luz'?", dr: "أشنو هي المدينة اللي معروفة ب 'مدينة الأنوار'؟" },
        options: { fr: ["Londres", "New York", "Paris", "Rome"], en: ["London", "New York", "Paris", "Rome"], es: ["Londres", "Nueva York", "París", "Roma"], dr: ["لندن", "نيويورك", "باريس", "روما"] },
        correctAnswer: { fr: "Paris", en: "Paris", es: "París", dr: "باريس" },
        explanation: { fr: "Surnommée ainsi pour son rôle culturel et l’éclairage de ses rues au XVIIIe siècle.", en: "Nicknamed for its cultural role and the lighting of its streets in the 18th century.", es: "Apodada así por su papel cultural y la iluminación de sus calles en el siglo XVIII.", dr: "تلقبات هكاك للدور ديالها الثقافي والإضاءة ديال شوارعها فالقرن 18." }
    },
    {
        id: "gq_ocean_east_africa",
        level: 2,
        question: { fr: "Quel océan borde la côte est de l’Afrique ?", en: "Which ocean borders the east coast of Africa?", es: "¿Qué océano baña la costa este de África?", dr: "أشنو هو المحيط اللي كيطل على الساحل الشرقي لأفريقيا؟" },
        options: { fr: ["Atlantique", "Indien", "Pacifique", "Arctique"], en: ["Atlantic", "Indian", "Pacific", "Arctic"], es: ["Atlántico", "Índico", "Pacífico", "Ártico"], dr: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"] },
        correctAnswer: { fr: "Indien", en: "Indian", es: "Índico", dr: "الهندي" },
        explanation: { fr: "L’océan Indien sépare l’Afrique de l’Asie et de l’Australie.", en: "The Indian Ocean separates Africa from Asia and Australia.", es: "El océano Índico separa África de Asia y Australia.", dr: "المحيط الهندي كيفصل بين أفريقيا وآسيا وأستراليا." }
    },
    {
        id: "gq_largest_freshwater_lake",
        level: 3,
        question: { fr: "Quel est le plus grand lac d’eau douce par superficie ?", en: "What is the largest freshwater lake by area?", es: "¿Cuál es el lago de agua dulce más grande por superficie?", dr: "شنو هي أكبر بحيرة ديال الما الحلو من حيث المساحة؟" },
        options: { fr: ["Lac Supérieur", "Lac Victoria", "Lac Baïkal", "Lac Tanganyika"], en: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Tanganyika"], es: ["Lago Superior", "Lago Victoria", "Lago Baikal", "Lago Tanganica"], dr: ["بحيرة سوبيريور", "بحيرة فيكتوريا", "بحيرة بايكال", "بحيرة تنجانيقا"] },
        correctAnswer: { fr: "Lac Supérieur", en: "Lake Superior", es: "Lago Superior", dr: "بحيرة سوبيريور" },
        explanation: { fr: "Situé en Amérique du Nord, il couvre environ 82 100 km².", en: "Located in North America, it covers about 82,100 sq km.", es: "Situado en América del Norte, cubre aproximadamente 82.100 km².", dr: "كاين فأمريكا الشمالية، والمساحة ديالو تقريبا 82100 كيلومتر مربع." }
    },
    {
        id: "gq_most_linguistic_diversity",
        level: 5,
        question: { fr: "Quel pays a la plus grande diversité linguistique au monde ?", en: "Which country has the greatest linguistic diversity in the world?", es: "¿Qué país tiene la mayor diversidad lingüística del mundo?", dr: "أشنو هو البلد اللي فيه أكبر تنوع لغوي فالعالم؟" },
        options: { fr: ["Inde", "Papouasie Nouvelle Guinée", "Nigeria", "Chine"], en: ["India", "Papua New Guinea", "Nigeria", "China"], es: ["India", "Papúa Nueva Guinea", "Nigeria", "China"], dr: ["الهند", "بابوا غينيا الجديدة", "نيجيريا", "الصين"] },
        correctAnswer: { fr: "Papouasie Nouvelle Guinée", en: "Papua New Guinea", es: "Papúa Nueva Guinea", dr: "بابوا غينيا الجديدة" },
        explanation: { fr: "Plus de 800 langues sont parlées dans ce pays.", en: "Over 800 languages are spoken in this country.", es: "En este país se hablan más de 800 idiomas.", dr: "كيتكلمو فيه كتر من 800 لغة." }
    },
    {
        id: "gq_roman_roads_viae",
        level: 4,
        question: { fr: "Quel empire ancien a inventé le système de routes appelé “viae” ?", en: "Which ancient empire invented the road system called 'viae'?", es: "¿Qué imperio antiguo inventó el sistema de carreteras llamado 'viae'?", dr: "أشنو هي الإمبراطورية القديمة اللي ختارعت نظام الطرق 'فياي'؟" },
        options: { fr: ["Empire romain", "Empire grec", "Empire perse", "Empire byzantin"], en: ["Roman Empire", "Greek Empire", "Persian Empire", "Byzantine Empire"], es: ["Imperio Romano", "Imperio Griego", "Imperio Persa", "Imperio Bizantino"], dr: ["الإمبراطورية الرومانية", "الإمبراطورية اليونانية", "الإمبراطورية الفارسية", "الإمبراطورية البيزنطية"] },
        correctAnswer: { fr: "Empire romain", en: "Roman Empire", es: "Imperio Romano", dr: "الإمبراطورية الرومانية" },
        explanation: { fr: "Les Romains ont construit un réseau de routes pour faciliter le commerce et la conquête.", en: "The Romans built a network of roads to facilitate trade and conquest.", es: "Los romanos construyeron una red de carreteras para facilitar el comercio y la conquista.", dr: "الرومان بناو شبكة ديال الطرق باش يسهلو التجارة والغزو." }
    },
    {
        id: "gq_most_active_volcanoes",
        level: 4,
        question: { fr: "Quel pays a le plus grand nombre de volcans actifs ?", en: "Which country has the most active volcanoes?", es: "¿Qué país tiene el mayor número de volcanes activos?", dr: "أشنو هو البلد اللي فيه أكبر عدد ديال البراكين النشطة؟" },
        options: { fr: ["Japon", "Indonésie", "États-Unis", "Chili"], en: ["Japan", "Indonesia", "United States", "Chile"], es: ["Japón", "Indonesia", "Estados Unidos", "Chile"], dr: ["اليابان", "إندونيسيا", "الولايات المتحدة", "تشيلي"] },
        correctAnswer: { fr: "Indonésie", en: "Indonesia", es: "Indonesia", dr: "إندونيسيا" },
        explanation: { fr: "Elle est située sur la “ceinture de feu du Pacifique” avec plus de 130 volcans actifs.", en: "It is located on the 'Pacific Ring of Fire' with over 130 active volcanoes.", es: "Está situada en el 'Cinturón de Fuego del Pacífico' con más de 130 volcanes activos.", dr: "كاينة ف 'حزام النار فالمحيط الهادئ' وفيها كتر من 130 بركان نشط." }
    },
    {
        id: "gq_oldest_megalithic_monument",
        level: 6,
        question: { fr: "Quel est le plus ancien monument mégalithique connu ?", en: "What is the oldest known megalithic monument?", es: "¿Cuál es el monumento megalítico más antiguo conocido?", dr: "شنو هو أقدم نصب ميغاليتي معروف؟" },
        options: { fr: ["Stonehenge", "Gobekli Tepe", "Pyramides de Gizeh", "Carnac"], en: ["Stonehenge", "Gobekli Tepe", "Pyramids of Giza", "Carnac"], es: ["Stonehenge", "Gobekli Tepe", "Pirámides de Giza", "Carnac"], dr: ["ستونهنج", "غوبكلي تيبي", "أهرامات الجيزة", "كارناك"] },
        correctAnswer: { fr: "Gobekli Tepe", en: "Gobekli Tepe", es: "Gobekli Tepe", dr: "غوبكلي تيبي" },
        explanation: { fr: "Situé en Turquie, il date d’environ 9600 av. J.-C.", en: "Located in Turkey, it dates back to around 9600 BC.", es: "Situado en Turquía, data de alrededor del 9600 a.C.", dr: "كاين فتركيا، وكيرجع لحوالي 9600 قبل الميلاد." }
    },
    {
        id: "gq_cradle_western_civilization",
        level: 3,
        question: { fr: "Quel pays est considéré comme le berceau de la civilisation occidentale ?", en: "Which country is considered the cradle of Western civilization?", es: "¿Qué país es considerado la cuna de la civilización occidental?", dr: "أشنو هو البلد اللي كيتعتبر مهد الحضارة الغربية؟" },
        options: { fr: ["Grèce", "Italie", "Égypte", "Mésopotamie"], en: ["Greece", "Italy", "Egypt", "Mesopotamia"], es: ["Grecia", "Italia", "Egipto", "Mesopotamia"], dr: ["اليونان", "إيطاليا", "مصر", "بلاد ما بين النهرين"] },
        correctAnswer: { fr: "Grèce", en: "Greece", es: "Grecia", dr: "اليونان" },
        explanation: { fr: "La Grèce antique a fondé la démocratie, la philosophie et de nombreuses bases culturelles de l’Occident.", en: "Ancient Greece founded democracy, philosophy, and many cultural foundations of the West.", es: "La antigua Grecia fundó la democracia, la filosofía y muchas de las bases culturales de Occidente.", dr: "اليونان القديمة أسسات الديمقراطية والفلسفة وبزاف ديال الأسس الثقافية ديال الغرب." }
    },
    {
        id: "gq_largest_solar_production_2025",
        level: 4,
        question: { fr: "Quel est le pays avec la plus grande production d’énergie solaire en 2025 ?", en: "Which country has the largest solar energy production in 2025?", es: "¿Qué país tiene la mayor producción de energía solar en 2025?", dr: "أشنو هو البلد اللي عندو أكبر إنتاج للطاقة الشمسية ف 2025؟" },
        options: { fr: ["Chine", "États-Unis", "Inde", "Allemagne"], en: ["China", "United States", "India", "Germany"], es: ["China", "Estados Unidos", "India", "Alemania"], dr: ["الصين", "الولايات المتحدة", "الهند", "ألمانيا"] },
        correctAnswer: { fr: "Chine", en: "China", es: "China", dr: "الصين" },
        explanation: { fr: "La Chine domine le marché mondial des panneaux solaires et de la production d’énergie solaire.", en: "China dominates the global market for solar panels and solar energy production.", es: "China domina el mercado mundial de paneles solares y producción de energía solar.", dr: "الصين مسيطرة على السوق العالمي ديال الألواح الشمسية وإنتاج الطاقة الشمسية." }
    },
    {
        id: "gq_currency_japan",
        level: 2,
        question: { fr: "Quelle est la monnaie officielle du Japon ?", en: "What is the official currency of Japan?", es: "¿Cuál es la moneda oficial de Japón?", dr: "شنو هي العملة الرسمية ديال اليابان؟" },
        options: { fr: ["Yen", "Won", "Yuan", "Dollar"], en: ["Yen", "Won", "Yuan", "Dollar"], es: ["Yen", "Won", "Yuan", "Dólar"], dr: ["الين", "الوون", "اليوان", "الدولار"] },
        correctAnswer: { fr: "Yen", en: "Yen", es: "Yen", dr: "الين" },
        explanation: { fr: "Le yen est la monnaie nationale depuis 1871.", en: "The yen has been the national currency since 1871.", es: "El yen es la moneda nacional desde 1871.", dr: "الين هو العملة الوطنية من عام 1871." }
    },
    {
        id: "gq_capital_norway",
        level: 2,
        question: { fr: "Quelle est la capitale de la Norvège ?", en: "What is the capital of Norway?", es: "¿Cuál es la capital de Noruega?", dr: "شنو هي عاصمة النرويج؟" },
        options: { fr: ["Oslo", "Stockholm", "Copenhague", "Helsinki"], en: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"], es: ["Oslo", "Estocolmo", "Copenhague", "Helsinki"], dr: ["أوسلو", "ستوكهولم", "كوبنهاغن", "هلسنكي"] },
        correctAnswer: { fr: "Oslo", en: "Oslo", es: "Oslo", dr: "أوسلو" },
        explanation: { fr: "Oslo est le centre politique et économique de la Norvège.", en: "Oslo is the political and economic center of Norway.", es: "Oslo es el centro político y económico de Noruega.", dr: "أوسلو هي المركز السياسي والاقتصادي ديال النرويج." }
    },
    {
        id: "gq_tea_origin",
        level: 3,
        question: { fr: "Quelle est l’origine du thé vert ?", en: "Which country is known for creating tea?", es: "¿Qué país es conocido por haber creado el té?", dr: "أشنو هو البلد اللي معروف بأنه هو اللي بدا أتاي؟" },
        options: { fr: ["Chine", "Inde", "Japon", "Angleterre"], en: ["China", "India", "Japan", "England"], es: ["China", "India", "Japón", "Inglaterra"], dr: ["الصين", "الهند", "اليابان", "إنجلترا"] },
        correctAnswer: { fr: "Chine", en: "China", es: "China", dr: "الصين" },
        explanation: { fr: "Le thé y a été découvert il y a plus de 4 000 ans.", en: "Tea was discovered there over 4,000 years ago.", es: "El té fue descubierto allí hace más de 4.000 años.", dr: "أتاي تكتشف تماكتر من 4000 عام." }
    },
    {
        id: "gq_machu_picchu_builders",
        level: 3,
        question: { fr: "Quelle civilisation a bâti Machu Picchu ?", en: "Which civilization built Machu Picchu?", es: "¿Qué civilización construyó Machu Picchu?", dr: "أشنو هي الحضارة اللي بنات ماتشو بيتشو؟" },
        options: { fr: ["Les Incas", "Les Aztèques", "Les Mayas", "Les Olmèques"], en: ["The Incas", "The Aztecs", "The Mayas", "The Olmecs"], es: ["Los Incas", "Los Aztecas", "Los Mayas", "Los Olmecas"], dr: ["الإنكا", "الأزتيك", "المايا", "الأولمك"] },
        correctAnswer: { fr: "Les Incas", en: "The Incas", es: "Los Incas", dr: "الإنكا" },
        explanation: { fr: "Machu Picchu est un site inca au Pérou datant du XVe siècle.", en: "Machu Picchu is an Inca site in Peru dating from the 15th century.", es: "Machu Picchu es un sitio inca en Perú que data del siglo XV.", dr: "ماتشو بيتشو هو موقع ديال الإنكا فالبيرو كيرجع للقرن 15." }
    },
    {
        id: "gq_capital_canada",
        level: 2,
        question: { fr: "Quelle est la capitale du Canada ?", en: "What is the capital of Canada?", es: "¿Cuál es la capital de Canadá?", dr: "شنو هي عاصمة كندا؟" },
        options: { fr: ["Toronto", "Vancouver", "Ottawa", "Montréal"], en: ["Toronto", "Vancouver", "Ottawa", "Montreal"], es: ["Toronto", "Vancouver", "Ottawa", "Montreal"], dr: ["تورونتو", "فانكوفر", "أوتاوا", "مونتريال"] },
        correctAnswer: { fr: "Ottawa", en: "Ottawa", es: "Ottawa", dr: "أوتاوا" },
        explanation: { fr: "Ottawa est la capitale du Canada, bien que Toronto et Montréal soient des villes plus grandes.", en: "Ottawa is the capital of Canada, although Toronto and Montreal are larger cities.", es: "Ottawa es la capital de Canadá, aunque Toronto y Montreal son ciudades más grandes.", dr: "أوتاوا هي عاصمة كندا، واخا تورونتو و مونتريال مدن كبر منها." }
    },
    {
        id: "gq_1984_author",
        level: 4,
        question: { fr: "Qui a écrit le roman '1984' ?", en: "Who wrote the novel '1984'?", es: "¿Quién escribió la novela '1984'?", dr: "شكون كتب رواية '1984'؟" },
        options: { fr: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"], en: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"], es: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"], dr: ["جورج أورويل", "ألدوس هكسلي", "ج. ر. ر. تولكين", "ف. سكوت فيتزجيرالد"] },
        correctAnswer: { fr: "George Orwell", en: "George Orwell", es: "George Orwell", dr: "جورج أورويل" },
        explanation: { fr: "'1984' est un roman dystopique de George Orwell publié en 1949.", en: "'1984' is a dystopian novel by George Orwell published in 1949.", es: "'1984' es una novela distópica de George Orwell publicada en 1949.", dr: "'1984' هي رواية ديستوبية كتبها جورج أورويل و تنشرات ف 1949." }
    },
    {
        id: "gq_smallest_continent",
        level: 1,
        question: { fr: "Quel est le plus petit continent du monde ?", en: "What is the smallest continent in the world?", es: "¿Cuál es el continente más pequeño del mundo?", dr: "شنو هي أصغر قارة فالعالم؟" },
        options: { fr: ["Europe", "Antarctique", "Amérique du Sud", "Australie"], en: ["Europe", "Antarctica", "South America", "Australia"], es: ["Europa", "Antártida", "América del Sur", "Australia"], dr: ["أوروبا", "أنتاركتيكا", "أمريكا الجنوبية", "أستراليا"] },
        correctAnswer: { fr: "Australie", en: "Australia", es: "Australia", dr: "أستراليا" },
        explanation: { fr: "L'Australie (ou Océanie) est le plus petit continent en termes de superficie terrestre.", en: "Australia (or Oceania) is the smallest continent in terms of land area.", es: "Australia (u Oceanía) es el continente más pequeño en términos de superficie terrestre.", dr: "أستراليا (أو أوقيانوسيا) هي أصغر قارة من حيث المساحة." }
    },
    {
        id: "gq_telephone_inventor",
        level: 3,
        question: { fr: "Qui est crédité de l'invention du téléphone ?", en: "Who is credited with inventing the telephone?", es: "¿A quién se le atribuye la invención del teléfono?", dr: "شكون كيتّسب ليه اختراع التليفون؟" },
        options: { fr: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], en: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], es: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], dr: ["توماس إديسون", "نيكولا تيسلا", "ألكسندر غراهام بيل", "غولييلمو ماركوني"] },
        correctAnswer: { fr: "Alexander Graham Bell", en: "Alexander Graham Bell", es: "Alexander Graham Bell", dr: "ألكسندر غراهام بيل" },
        explanation: { fr: "Alexander Graham Bell a obtenu le premier brevet pour le téléphone en 1876.", en: "Alexander Graham Bell was awarded the first patent for the telephone in 1876.", es: "A Alexander Graham Bell se le concedió la primera patente para el teléfono en 1876.", dr: "ألكسندر غراهام بيل خدا أول براءة اختراع للتليفون ف 1876." }
    },
    {
        id: "gq_emc2_meaning",
        level: 4,
        question: { fr: "Que représente le 'c' dans la célèbre équation d'Einstein, E=mc² ?", en: "What does 'c' represent in Einstein's famous equation, E=mc²?", es: "¿Qué representa la 'c' en la famosa ecuación de Einstein, E=mc²?", dr: "شنو كتمثل 'c' فمعادلة أينشتاين الشهيرة E=mc²؟" },
        options: { fr: ["La vitesse du son", "La vitesse de la lumière", "La constante de Planck", "La charge d'un électron"], en: ["The speed of sound", "The speed of light", "Planck's constant", "The charge of an electron"], es: ["La velocidad del sonido", "La velocidad de la luz", "La constante de Planck", "La carga de un electrón"], dr: ["سرعة الصوت", "سرعة الضوء", "ثابت بلانك", "شحنة الإلكترون"] },
        correctAnswer: { fr: "La vitesse de la lumière", en: "The speed of light", es: "La velocidad de la luz", dr: "سرعة الضوء" },
        explanation: { fr: "Dans E=mc², 'E' est l'énergie, 'm' est la masse, et 'c' est la vitesse de la lumière dans le vide.", en: "In E=mc², 'E' is energy, 'm' is mass, and 'c' is the speed of light in a vacuum.", es: "En E=mc², 'E' es la energía, 'm' es la masa y 'c' es la velocidad de la luz en el vacío.", dr: "ف E=mc²، 'E' هي الطاقة، 'm' هي الكتلة، و 'c' هي سرعة الضوء فالخلاء." }
    },
    {
        id: "gq_most_time_zones",
        level: 4,
        question: { fr: "Quel pays s'étend sur le plus grand nombre de fuseaux horaires ?", en: "Which country spans the most time zones?", es: "¿Qué país abarca la mayor cantidad de zonas horarias?", dr: "أشنو هو البلد لي عندو أكبر عدد ديال المناطق الزمنية؟" },
        options: { fr: ["Russie", "États-Unis", "Canada", "France"], en: ["Russia", "United States", "Canada", "France"], es: ["Rusia", "Estados Unidos", "Canadá", "Francia"], dr: ["روسيا", "الولايات المتحدة", "كندا", "فرنسا"] },
        correctAnswer: { fr: "France", en: "France", es: "Francia", dr: "فرنسا" },
        explanation: { fr: "En incluant ses territoires d'outre-mer, la France s'étend sur 12 fuseaux horaires, le plus grand nombre au monde.", en: "Including its overseas territories, France spans 12 time zones, the most in the world.", es: "Incluyendo sus territorios de ultramar, Francia abarca 12 zonas horarias, la mayor cantidad del mundo.", dr: "إلى حسبنا الأقاليم ديالها لي فالخارج، فرنسا عندها 12 منطقة زمنية، و هو أكبر عدد فالعالم." }
    },
    {
        id: "gq_photosynthesis",
        level: 2,
        question: { fr: "Qu'est-ce que la photosynthèse ?", en: "What is photosynthesis?", es: "¿Qué es la fotosíntesis?", dr: "شنو هو التركيب الضوئي؟" },
        options: { fr: ["Un processus de respiration animale", "Un processus de conversion de la lumière en énergie chimique par les plantes", "Un type de formation rocheuse", "Un phénomène météorologique"], en: ["A process of animal respiration", "A process of converting light into chemical energy by plants", "A type of rock formation", "A weather phenomenon"], es: ["Un proceso de respiración animal", "Un proceso de conversión de la luz en energía química por las plantas", "Un tipo de formación rocosa", "Un fenómeno meteorológico"], dr: ["عملية تنفس الحيوانات", "عملية كتحول فيها النباتات الضوء لطاقة كيميائية", "نوع من تشكل الصخور", "ظاهرة جوية"] },
        correctAnswer: { fr: "Un processus de conversion de la lumière en énergie chimique par les plantes", en: "A process of converting light into chemical energy by plants", es: "Un proceso de conversión de la luz en energía química por las plantas", dr: "عملية كتحول فيها النباتات الضوء لطاقة كيميائية" },
        explanation: { fr: "La photosynthèse est le processus utilisé par les plantes, les algues et certaines bactéries pour convertir l'énergie lumineuse en énergie chimique.", en: "Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy.", es: "La fotosíntesis es el proceso utilizado por las plantas, las algas y algunas bacterias para convertir la energía lumínica en energía química.", dr: "التركيب الضوئي هو العملية لي كيستعملوها النباتات، الطحالب و بعض البكتيريا باش يحولو الطاقة الضوئية لطاقة كيميائية." }
    },
    {
        id: "gq_largest_mammal",
        level: 1,
        question: { fr: "Quel est le plus grand mammifère du monde ?", en: "What is the largest mammal in the world?", es: "¿Cuál es el mamífero más grande del mundo?", dr: "شنو هو أكبر حيوان ثديي فالعالم؟" },
        options: { fr: ["Éléphant d'Afrique", "Baleine bleue", "Girafe", "Rhinocéros blanc"], en: ["African Elephant", "Blue Whale", "Giraffe", "White Rhino"], es: ["Elefante africano", "Ballena azul", "Jirafa", "Rinoceronte blanco"], dr: ["الفيل الإفريقي", "الحوت الأزرق", "الزرافة", "الكركدن الأبيض"] },
        correctAnswer: { fr: "Baleine bleue", en: "Blue Whale", es: "Ballena azul", dr: "الحوت الأزرق" },
        explanation: { fr: "La baleine bleue est le plus grand animal sur Terre, non seulement le plus grand mammifère.", en: "The blue whale is the largest animal on Earth, not just the largest mammal.", es: "La ballena azul es el animal más grande de la Tierra, no solo el mamífero más grande.", dr: "الحوت الأزرق هو أكبر حيوان على وجه الأرض، ماشي غير أكبر حيوان ثديي." }
    },
    {
        id: "gq_starry_night_painter",
        level: 3,
        question: { fr: "Qui a peint 'La Nuit étoilée' ?", en: "Who painted 'The Starry Night'?", es: "¿Quién pintó 'La noche estrellada'?", dr: "شكون رسم 'الليلة المضيئة بالنجوم'؟" },
        options: { fr: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], en: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], es: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], dr: ["كلود مونيه", "بابلو بيكاسو", "فنسنت فان غوخ", "سلفادور دالي"] },
        correctAnswer: { fr: "Vincent van Gogh", en: "Vincent van Gogh", es: "Vincent van Gogh", dr: "فنسنت فان غوخ" },
        explanation: { fr: "'La Nuit étoilée' est l'une des œuvres les plus célèbres du peintre post-impressionniste néerlandais Vincent van Gogh.", en: "'The Starry Night' is one of the most famous works by the Dutch post-impressionist painter Vincent van Gogh.", es: "'La noche estrellada' es una de las obras más famosas del pintor postimpresionista holandés Vincent van Gogh.", dr: "'الليلة المضيئة بالنجوم' هي وحدة من أشهر أعمال الرسام الهولندي ما بعد الانطباعي فنسنت فان غوخ." }
    },
    {
        id: "gq_colosseum_function",
        level: 2,
        question: {"fr":"Quelle était la fonction principale du Colisée romain?","en":"What was the primary function of the Roman Colosseum?","es":"¿Cuál era la función principal del Coliseo romano?","dr":"شنو كانت الوظيفة الرئيسية ديال الكوليزي الروماني؟"},
        options: {"fr":["Amphithéâtre","Temple","Palais","Marché"],"en":["Amphitheater","Temple","Palace","Market"],"es":["Anfiteatro","Templo","Palacio","Mercado"],"dr":["مسرح روماني","معبد","قصر","سوق"]},
        correctAnswer: {"fr":"Amphithéâtre","en":"Amphitheater","es":"Anfiteatro","dr":"مسرح روماني"},
        explanation: {"fr":"Le Colisée était un grand amphithéâtre pour les combats de gladiateurs et les spectacles publics.","en":"The Colosseum was a large amphitheater for gladiatorial contests and public spectacles.","es":"El Coliseo fue un gran anfiteatro para combates de gladiadores y espectáculos públicos.","dr":"الكوليزي كان مسرح روماني كبير للمصارعات ديال الكلاّدياتور والعروض العامة."}
    },
    {
        id: "gq_statue_liberty_gift",
        level: 1,
        question: {"fr":"Quel pays a offert la Statue de la Liberté aux États-Unis?","en":"Which country gifted the Statue of Liberty to the USA?","es":"¿Qué país regaló la Estatua de la Libertad a los EE. UU.?","dr":"أنهي بلاد عطات تمثال الحرية لأمريكا؟"},
        options: {"fr":["France","Royaume-Uni","Allemagne","Espagne"],"en":["France","United Kingdom","Germany","Spain"],"es":["Francia","Reino Unido","Alemania","España"],"dr":["فرنسا","بريطانيا","ألمانيا","إسبانيا"]},
        correctAnswer: {"fr":"France","en":"France","es":"Francia","dr":"فرنسا"},
        explanation: {"fr":"La Statue de la Liberté fut un cadeau de la France aux États-Unis d'Amérique.","en":"The Statue of Liberty was a gift from France to the United States of America.","es":"La Estatua de la Libertad fue un regalo de Francia a los Estados Unidos de América.","dr":"تمثال الحرية كان هدية من فرنسا لأمريكا."}
    },
    {
        id: "gq_friends_monica_apartment",
        level: 2,
        question: {"fr":"Quel est le numéro d'appartement de Monica dans Friends ?","en":"What is Monica's apartment number in Friends?","es":"¿Cuál es el número de apartamento de Mónica en Friends?","dr":"شنو هو رقم الشقة ديال مونيكا ف مسلسل Friends؟"},
        options: {"fr":["19","20","4","5"],"en":["19","20","4","5"],"es":["19","20","4","5"],"dr":["19","20","4","5"]},
        correctAnswer: {"fr":"20","en":"20","es":"20","dr":"20"},
        explanation: {"fr":"Monica et Rachel vivent dans l'appartement numéro 20 à New York.","en":"Monica and Rachel live in apartment number 20 in New York.","es":"Monica y Rachel viven en el apartamento número 20 en Nueva York.","dr":"مونيكا ورايتشل كانو ساكنين ف الشقة رقم 20 ف نيويورك."}
    },
    {
        id: "gq_breaking_bad_protagonist_name",
        level: 1,
        question: {"fr":"Qui est le personnage principal de Breaking Bad ?","en":"Who is the main character in Breaking Bad?","es":"¿Quién es el personaje principal de Breaking Bad?","dr":"شكون هي الشخصية الرئيسية ف مسلسل Breaking Bad؟"},
        options: {"fr":["Jesse Pinkman","Saul Goodman","Walter White","Gus Fring"],"en":["Jesse Pinkman","Saul Goodman","Walter White","Gus Fring"],"es":["Jesse Pinkman","Saul Goodman","Walter White","Gus Fring"],"dr":["جيسي بينكمان","سول غودمان","والتر وايت","غاس فرينغ"]},
        correctAnswer: {"fr":"Walter White","en":"Walter White","es":"Walter White","dr":"والتر وايت"},
        explanation: {"fr":"Walter White est le professeur de chimie qui devient un baron de la drogue.","en":"Walter White is the chemistry teacher who becomes a drug lord.","es":"Walter White es el profesor de química que se convierte en un capo de la droga.","dr":"والتر وايت هو أستاذ الكيمياء اللي تحول لموزع مخدرات كبير."}
    },
    {
        id: "gq_the_office_us_location",
        level: 2,
        question: {"fr":"Où se situe Dunder Mifflin The Office (US) ?","en":"Where is Dunder Mifflin The Office (US) located?","es":"¿Dónde se encuentra Dunder Mifflin The Office (EE. UU.)?","dr":"فين كاينا شركة Dunder Mifflin ف مسلسل The Office (النسخة الأمريكية)؟"},
        options: {"fr":["Scranton","New York","Boston","Philadelphie"],"en":["Scranton","New York","Boston","Philadelphia"],"es":["Scranton","Nueva York","Boston","Filadelfia"],"dr":["سكرانتون","نيويورك","بوسطن","فيلادلفيا"]},
        correctAnswer: {"fr":"Scranton","en":"Scranton","es":"Scranton","dr":"سكرانتون"},
        explanation: {"fr":"La succursale de Dunder Mifflin est située à Scranton, en Pennsylvanie.","en":"The Dunder Mifflin branch is located in Scranton, Pennsylvania.","es":"La sucursal de Dunder Mifflin se encuentra en Scranton, Pensilvania.","dr":"الفرع ديال شركة Dunder Mifflin كاين ف مدينة سكرانتون، بنسلفانيا."}
    },
    {
        id: "gq_stranger_things_town_name",
        level: 3,
        question: {"fr":"Comment s'appelle la ville dans Stranger Things ?","en":"What is the name of the town in Stranger Things?","es":"¿Cómo se llama el pueblo en Stranger Things?","dr":"شنو سميت المدينة ف مسلسل Stranger Things؟"},
        options: {"fr":["Hawkins","Springfield","Riverdale","Sunnydale"],"en":["Hawkins","Springfield","Riverdale","Sunnydale"],"es":["Hawkins","Springfield","Riverdale","Sunnydale"],"dr":["هوكينز","سبرينغفيلد","ريفردايل","صانيديل"]},
        correctAnswer: {"fr":"Hawkins","en":"Hawkins","es":"Hawkins","dr":"هوكينز"},
        explanation: {"fr":"Hawkins, Indiana, est le cadre principal des événements de Stranger Things.","en":"Hawkins, Indiana, is the main setting for the events of Stranger Things.","es":"Hawkins, Indiana, es el escenario principal de los eventos de Stranger Things.","dr":"أحداث مسلسل Stranger Things كادوز ف مدينة هوكينز، إنديانا."}
    },
    {
        id: "gq_pulp_fiction_director",
        level: 1,
        question: {"fr":"Qui a réalisé le film \"Pulp Fiction\" ?","en":"Who directed the movie \"Pulp Fiction\"?","es":"¿Quién dirigió la película \"Pulp Fiction\"?","dr":"شكون لي مخرج فيلم \"Pulp Fiction\"؟"},
        options: {"fr":["Quentin Tarantino","Martin Scorsese","Steven Spielberg","Christopher Nolan"],"en":["Quentin Tarantino","Martin Scorsese","Steven Spielberg","Christopher Nolan"],"es":["Quentin Tarantino","Martin Scorsese","Steven Spielberg","Christopher Nolan"],"dr":["كونتين تارانتينو","مارتن سكورسيزي","ستيفن سبيلبرغ","كريستوفر نولان"]},
        correctAnswer: {"fr":"Quentin Tarantino","en":"Quentin Tarantino","es":"Quentin Tarantino","dr":"كونتين تارانتينو"},
        explanation: {"fr":"Quentin Tarantino est le célèbre réalisateur et scénariste de \"Pulp Fiction\".","en":"Quentin Tarantino is the famous director and writer of \"Pulp Fiction\".","es":"Quentin Tarantino es el famoso director y guionista de \"Pulp Fiction\".","dr":"كونتين تارانتينو هو المخرج والكاتب المعروف ديال فيلم \"Pulp Fiction\"."}
    },
    
    
];
