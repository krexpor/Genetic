const langArr = {
    // --- ЗАГАЛЬНІ / МЕНЮ ---
    "page-title": { "ru": "Krexpor | Projects", "en": "Krexpor | Projects", "uk": "Krexpor | Проєкти" },
    "bio": { "ru": "Проекты и жизнь 20-ти летнего парня", "en": "Projects and life of a 20-year-old guy", "uk": "Проєкти та життя 20-річного хлопця" },
    "btn-genetic": { "ru": "🧬 Генетические калькуляторы", "en": "🧬 Genetic Calculators", "uk": "🧬 Генетичні калькулятори" },
    "btn-guitar-hub": { "ru": "🎸 Гитара и музыка", "en": "🎸 Guitar & Music", "uk": "🎸 Гітара та музика" },
    "privacy": { "ru": "Политика конфиденциальности", "en": "Privacy Policy", "uk": "Політика конфіденційності" },
    "back-home": { "ru": "← Вернуться на главную", "en": "← Back to home", "uk": "← Повернутися на головну" },
    "back-menu": { "ru": "⬅ Назад в меню", "en": "⬅ Back to menu", "uk": "⬅ Назад у меню" },
    
    // --- ПРАВИЛА COOKIE ---
    "cookie-text": { "ru": "Мы используем немного cookies для аналитики Google. Никакой магии, только базовая статистика. 🍪", "en": "We use a few cookies for Google Analytics. No magic, just basic statistics. 🍪", "uk": "Ми використовуємо трохи cookies для аналітики Google. Ніякої магії, тільки базова статистика. 🍪" },
    "cookie-btn-accept": { "ru": "Ок, понятно", "en": "Got it", "uk": "Ок, зрозуміло" },
    "cookie-link": { "ru": "Подробнее", "en": "Learn more", "uk": "Детальніше" },

    // --- ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ---
    "privacy-title": { "ru": "Политика конфиденциальности | Krexpor", "en": "Privacy Policy | Krexpor", "uk": "Політика конфіденційності | Krexpor" },
    "privacy-h1": { "ru": "Политика конфиденциальности", "en": "Privacy Policy", "uk": "Політика конфіденційності" },
    "privacy-date": { "ru": "Последнее обновление: Июнь 2026 г.", "en": "Last updated: June 2026", "uk": "Останнє оновлення: Червень 2026 р." },
    "privacy-h2-1": { "ru": "1. Сбор и обработка информации", "en": "1. Information Collection and Processing", "uk": "1. Збір та обробка інформації" },
    "privacy-p-1": { "ru": "Мы с уважением относимся к вашей конфиденциальности. Все данные, которые вы вводите в генетические калькуляторы на сайте <strong>krexpor.com</strong>, обрабатываются исключительно локально в вашем браузере. Мы не собираем, не храним и не передаем эти данные на наши серверы или третьим лицам.", "en": "We respect your privacy. All data you enter into the genetic calculators on the <strong>krexpor.com</strong> website is processed exclusively locally in your browser. We do not collect, store, or transmit this data to our servers or third parties.", "uk": "Ми з повагою ставимося до вашої конфіденційності. Всі дані, які ви вводите в генетичні калькулятори на сайті <strong>krexpor.com</strong>, обробляються виключно локально у вашому браузері. Ми не збираємо, не зберігаємо і не передаємо ці дані на наші сервери або третім особам." },
    "privacy-h2-2": { "ru": "2. Использование аналитики", "en": "2. Use of Analytics", "uk": "2. Використання аналітики" },
    "privacy-p-2": { "ru": "Для улучшения качества проекта мы используем сервис веб-аналитики Google Analytics. Этот сервис может собирать анонимные данные о вашем взаимодействии с сайтом (просмотренные страницы, время пребывания на сайте, тип устройства). Эти данные собираются с помощью файлов cookie.", "en": "To improve the quality of the project, we use the Google Analytics web analytics service. This service may collect anonymous data about your interaction with the site (pages viewed, time spent on the site, device type). This data is collected using cookies.", "uk": "Для покращення якості проєкту ми використовуємо сервіс веб-аналітики Google Analytics. Цей сервіс може збирати анонімні дані про вашу взаємодію з сайтом (переглянуті сторінки, час перебування на сайті, тип пристрою). Ці дані збираються за допомогою файлів cookie." },
    "privacy-h2-3": { "ru": "3. Реклама и файлы Cookie от Google", "en": "3. Advertising and Google Cookies", "uk": "3. Реклама та файли Cookie від Google" },
    "privacy-p-3-1": { "ru": "Мы используем сторонние рекламные компании, включая Google, для показа объявлений во время вашего посещения нашего веб-сайта. Эти компании могут использовать информацию о ваших посещениях этого и других веб-сайтов с целью предоставления наиболее релевантных объявлений.", "en": "We use third-party advertising companies, including Google, to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide the most relevant advertisements.", "uk": "Ми використовуємо сторонні рекламні компанії, включаючи Google, для показу оголошень під час вашого відвідування нашого веб-сайту. Ці компанії можуть використовувати інформацію про ваші відвідування цього та інших веб-сайтів з метою надання найбільш релевантних оголошень." },
    "privacy-p-3-2": { "ru": "Google использует файлы cookie DART. Вы можете отказаться от использования файлов cookie DART, посетив страницу <a href='https://policies.google.com/technologies/ads' target='_blank'>политики конфиденциальности рекламной сети Google</a>.", "en": "Google uses DART cookies. You may opt out of the use of the DART cookie by visiting the <a href='https://policies.google.com/technologies/ads' target='_blank'>Google ad and content network privacy policy</a>.", "uk": "Google використовує файли cookie DART. Ви можете відмовитися від використання файлів cookie DART, відвідавши сторінку <a href='https://policies.google.com/technologies/ads' target='_blank'>політики конфіденційності рекламної мережі Google</a>." },
    "privacy-h2-4": { "ru": "4. Согласие", "en": "4. Consent", "uk": "4. Згода" },
    "privacy-p-4": { "ru": "Используя наш сайт, вы автоматически соглашаетесь с нашей Политикой конфиденциальности и условиями обработки анонимных данных.", "en": "By using our site, you automatically consent to our Privacy Policy and the terms of processing anonymous data.", "uk": "Використовуючи наш сайт, ви автоматично погоджуєтеся з нашою Політикою конфіденційності та умовами обробки анонімних даних." },
    "privacy-h2-5": { "ru": "5. Контакты", "en": "5. Contacts", "uk": "5. Контакти" },
    "privacy-p-5": { "ru": "Если у вас возникли вопросы относительно данной политики, вы можете связаться с нами через <a href='https://t.me/krexpor' target='_blank'>Telegram</a>.", "en": "If you have any questions regarding this policy, you can contact us via <a href='https://t.me/krexpor' target='_blank'>Telegram</a>.", "uk": "Якщо у вас виникли запитання щодо цієї політики, ви можете зв'язатися з нами через <a href='https://t.me/krexpor' target='_blank'>Telegram</a>." },

    // --- ПРО ПРОЄКТ ---
    "footer-about": { "ru": "О проекте", "en": "About", "uk": "Про проєкт" },
    "about-title": { "ru": "О проекте | Krexpor", "en": "About | Krexpor", "uk": "Про проєкт | Krexpor" },
    "about-h2": { "ru": "О проекте", "en": "About Krexpor", "uk": "Про проєкт" },
    "about-h3-1": { "ru": "Что такое Krexpor?", "en": "What is Krexpor?", "uk": "Що таке Krexpor?" },
    "about-p-1": { "ru": "Krexpor — это моя личная цифровая площадка для реализации идей. В будущем здесь будут появляться новые сервисы, трекеры, проекты.", "en": "Krexpor is my personal digital playground for bringing ideas to life. In the future, new services, trackers, and projects will appear here.", "uk": "Krexpor — це мій особистий цифровий майданчик для реалізації ідей. В майбутньому тут з'являтимуться нові сервіси, трекери, проєкти." },
    "about-h3-2": { "ru": "Отказ от ответственности", "en": "Medical Disclaimer", "uk": "Відмова від відповідальності" },
    "about-p-2": { "ru": "Обратите внимание: раздел генетических калькуляторов предоставляется исключительно в образовательных и развлекательных целях.", "en": "Please note: the genetic calculators section is provided strictly for educational and entertainment purposes.", "uk": "Зверніть увагу: розділ генетичних калькуляторів надається виключно в освітніх та розважальних цілях." },
    "about-p-3": { "ru": "Эти инструменты <strong>не являются заменой профессиональной медицинской диагностики</strong>.", "en": "These tools <strong>are not a substitute for professional medical diagnosis</strong>.", "uk": "Ці інструменти <strong>не є заміною професійної медичної діагностики</strong>." },
    "about-h3-3": { "ru": "Связь", "en": "Contact", "uk": "Зв'язок" },
    "about-p-4": { "ru": "Открыт к предложениям, идеям и обратной связи.", "en": "Open to suggestions, ideas, and feedback.", "uk": "Відкритий до пропозицій, ідей та зворотного зв'язку." },

    // --- ПОМИЛКА 404 ---
    "404-title": { "ru": "Страница не найдена | Krexpor", "en": "Page not found | Krexpor", "uk": "Сторінка не знайдена | Krexpor" },
    "404-h1": { "ru": "Тупик", "en": "Dead End", "uk": "Глухий кут" },
    "404-p": { "ru": "Похоже, вы свернули не в тот переулок.", "en": "Looks like you took a wrong turn.", "uk": "Схоже, ви звернули не в той провулок." },
    "404-btn": { "ru": "Вернуться на старт", "en": "Return to start", "uk": "Повернутися на старт" },

    // --- МЕНЮ КАЛЬКУЛЯТОРІВ ---
    "menu-title": { "ru": "Генетические калькуляторы | Krexpor", "en": "Genetic Calculators | Krexpor", "uk": "Генетичні калькулятори | Krexpor" },
    "menu-header": { "ru": "🧬 Генетика для каждого", "en": "🧬 Genetics for everyone", "uk": "🧬 Генетика для кожного" },
    "menu-desc": { "ru": "Узнайте, что передастся по наследству. Выберите инструмент:", "en": "Find out what will be inherited. Choose a tool:", "uk": "Дізнайтеся, що передасться у спадок. Виберіть інструмент:" },
    "menu-height": { "ru": "Калькулятор роста", "en": "Height Calculator", "uk": "Калькулятор росту" },
    "menu-blood": { "ru": "Группа крови и Резус-фактор", "en": "Blood Type and Rh Factor", "uk": "Група крові та Резус-фактор" },
    "menu-eyes": { "ru": "Вероятность цвета глаз", "en": "Eye Color Probability", "uk": "Ймовірність кольору очей" },
    "menu-hair": { "ru": "Генетика волос (Цвет и тип)", "en": "Hair Genetics (Color & Type)", "uk": "Генетика волосся (Колір і тип)" },
    "menu-face": { "ru": "Конструктор лица (Особые черты)", "en": "Face Constructor (Special Traits)", "uk": "Конструктор обличчя (Особливі риси)" },
    "menu-hands": { "ru": "Левша или Правша?", "en": "Left-handed or Right-handed?", "uk": "Шульга чи Правша?" },
    "btn-share": { "ru": "🔗 Поделиться калькулятором", "en": "🔗 Share Calculator", "uk": "🔗 Поділитися калькулятором" },
    "menu-knowledge": { "ru": "База знаний (Словарь)", "en": "Knowledge Base (Dictionary)", "uk": "База знань (Словник)" },
    "hub-desc": { "ru": "Все проекты и личный блог", "en": "All projects and personal blog", "uk": "Всі проєкти та особистий блог" },

    // --- БАЗА ЗНАНЬ ---
    "know-title": { "ru": "База знаний | Krexpor", "en": "Knowledge Base | Krexpor", "uk": "База знань | Krexpor" },
    "know-h1": { "ru": "📚 База знаний", "en": "📚 Knowledge Base", "uk": "📚 База знань" },
    "know-desc": { "ru": "Мини-словарь генетических терминов.", "en": "A mini-dictionary of genetic terms.", "uk": "Міні-словник генетичних термінів." },
    "know-t1": { "ru": "ДНК и Гены", "en": "DNA and Genes", "uk": "ДНК та Гени" },
    "know-d1": { "ru": "Ген — это участок ДНК, который содержит инструкцию по созданию определенного признака.", "en": "A gene is a segment of DNA that contains instructions for a specific trait.", "uk": "Ген — це ділянка ДНК, яка містить інструкцію щодо створення певного признаку." },
    "know-t2": { "ru": "Доминантный ген", "en": "Dominant Gene", "uk": "Домінантний ген" },
    "know-d2": { "ru": "Сильный ген. Этот признак обязательно проявится, подавив более слабый ген.", "en": "A strong gene. This trait will manifest, suppressing the weaker gene.", "uk": "Сильний ген. Цей признак обов'язково проявиться, пригнічуючи більш слабкий ген." },
    "know-t3": { "ru": "Рецессивный ген", "en": "Recessive Gene", "uk": "Рецесивний ген" },
    "know-d3": { "ru": "Слабый (скрытый) ген.", "en": "A weak (hidden) gene.", "uk": "Слабкий (прихований) ген." },
    "know-t4": { "ru": "Генотип и Фенотип", "en": "Genotype and Phenotype", "uk": "Генотип і Фенотип" },
    "know-d4": { "ru": "Генотип — скрытый набор генов. Фенотип — внешнее проявление.", "en": "Genotype is hidden set of genes. Phenotype is physical manifestation.", "uk": "Генотип — прихований набір генів. Фенотип — зовнішній прояв." },

    // --- AI ТА ПСИХОЛОГІЯ (НОВЕ) ---
    "tests-title": { "ru": "AI & Психология", "en": "AI & Psychology", "uk": "AI та Психологія" },
    "profiler-title": { "ru": "Глубокий анализ личности", "en": "Deep Personality Analysis", "uk": "Глибокий аналіз особистості" },
    "profiler-desc": { "ru": "Психологический портрет от нейросети", "en": "Psychological portrait by neural network", "uk": "Психологічний портрет від нейромережі" },

    // --- AI-ПРОФАЙЛІНГ (ТЕСТ) ---
    "ai-page-title": { "ru": "AI-Профайлинг личности | Krexpor", "en": "AI Personality Profiling | Krexpor", "uk": "AI-Профайлінг особистості | Krexpor" },
    "ai-h1": { "ru": "Глубокий анализ личности", "en": "Deep Personality Analysis", "uk": "Глибокий аналіз особистості" },
    "ai-subtitle": { "ru": "Дайте искренние ответы на эти три вопроса. Наш алгоритм проанализирует их и создаст детальный психологический портрет вашего характера.", "en": "Give sincere answers to these three questions. Our algorithm will analyze them and create a detailed psychological portrait of your character.", "uk": "Дайте щирі відповіді на ці три питання. Наш алгоритм проаналізує їх та створить детальний психологічний портрет вашого характеру." },

    "ai-q1-label": { "ru": "1. Как вы реагируете, когда ваши планы внезапно меняются из-за обстоятельств?", "en": "1. How do you react when your plans suddenly change due to circumstances?", "uk": "1. Як ви реагуєте, коли ваші плани раптово змінюються через обставини?" },
    "ai-q1-ph": { "ru": "Расскажите о своих эмоциях и действиях...", "en": "Tell us about your emotions and actions...", "uk": "Розкажіть про свої емоції та дії..." },

    "ai-q2-label": { "ru": "2. Что для вас наиболее утомительно в общении с другими людьми?", "en": "2. What is most exhausting for you in communicating with other people?", "uk": "2. Що для вас є найбільш виснажливим у спілкуванні з іншими людьми?" },
    "ai-q2-ph": { "ru": "Поделитесь своими мыслями...", "en": "Share your thoughts...", "uk": "Поділіться своїми думками..." },

    "ai-q3-label": { "ru": "3. Опишите свой идеальный стан комфорта и спокойствия.", "en": "3. Describe your ideal state of comfort and tranquility.", "uk": "3. Опишіть свій ідеальний стан комфорту та спокою." },
    "ai-q3-ph": { "ru": "Что вас окружает в этот момент?", "en": "What surrounds you at this moment?", "uk": "Що вас оточує в цей момент?" },

    "ai-btn": { "ru": "Получить мой разбор", "en": "Get my analysis", "uk": "Отримати мій розбір" },
    "ai-loading": { "ru": "Анализируем ваши ответы... Это займет несколько секунд 🔮", "en": "Analyzing your answers... This will take a few seconds 🔮", "uk": "Аналізуємо ваші відповіді... Це займе кілька секунд 🔮" },

    // SEO СТАТТЯ ДЛЯ AI
    "ai-seo-h2": { "ru": "Что такое AI-профайлинг личности?", "en": "What is AI Personality Profiling?", "uk": "Що таке AI-профайлінг особистості?" },
    "ai-seo-p1": { "ru": "В современном мире психологические тесты вышли далеко за пределы стандартных опросников с вариантами ответов «да» или «нет». <strong>AI-профайлинг (анализ личности с помощью искусственного интеллекта)</strong> — это инновационный подход к самопознанию, который позволяет получить глубокий срез вашего психоэмоционального состояния на основе свободных ответов.", "en": "In the modern world, psychological tests have gone far beyond standard yes/no questionnaires. <strong>AI profiling (personality analysis using artificial intelligence)</strong> is an innovative approach to self-discovery that provides a deep cross-section of your psycho-emotional state based on free-form answers.", "uk": "У сучасному світі психологічні тести вийшли далеко за межі стандартних опитувальників із варіантами відповідей «так» або «ні». <strong>AI-профайлінг (аналіз особистості за допомогою штучного інтелекту)</strong> — це інноваційний підхід до самопізнання, який дозволяє отримати глибокий зріз вашого психоемоційного стану на основі вільних відповідей." },
    "ai-seo-p2": { "ru": "Вместо того чтобы загонять вас в жесткие рамки типологий (например, исключительно интроверт или экстраверт), нейросети анализируют семантику вашего текста: как вы строите предложения, какие слова выбираете для описания стресса и что именно формирует вашу зону комфорта. Это позволяет создать уникальный психологический портрет, учитывающий все тонкости вашего характера.", "en": "Instead of forcing you into rigid typologies (e.g., exclusively introvert or extrovert), neural networks analyze the semantics of your text: how you construct sentences, what words you choose to describe stress, and what exactly shapes your comfort zone. This creates a unique psychological portrait that takes into account all the nuances of your character.", "uk": "Замість того, щоб заганяти вас у жорсткі рамки типологій (наприклад, виключно інтроверт або екстраверт), нейромережі аналізують семантику вашого тексту: як ви будуєте речення, які слова обираєте для опису стресу та що саме формує вашу зону комфорту. Це дозволяє створити унікальний психологічний портрет, який враховує всі півтони вашого характеру." },
    "ai-seo-h3-1": { "ru": "Как алгоритмы анализируют паттерны поведения", "en": "How algorithms analyze behavioral patterns", "uk": "Як алгоритми аналізують патерни поведінки" },
    "ai-seo-p3": { "ru": "Основой нашего инструмента является технология обработки естественного языка (NLP). Когда вы описываете свою реакцию на внезапную смену планов или социальную усталость, искусственный интеллект не просто считывает слова. Он распознает скрытые паттерны:", "en": "The foundation of our tool is Natural Language Processing (NLP) technology. When you describe your reaction to a sudden change of plans or social fatigue, the AI doesn't just read words. It recognizes hidden patterns:", "uk": "Основою нашого інструменту є технологія обробки природної мови (NLP). Коли ви описуєте свою реакцію на раптову зміну планів або соціальне виснаження, штучний інтелект не просто читає слова. Він розпізнає приховані патерни:" },
    "ai-seo-li-1": { "ru": "<strong>Уровень адаптивности:</strong> насколько быстро ваша психика способна перестраиваться под новые обстоятельства.", "en": "<strong>Adaptability level:</strong> how quickly your psyche can readjust to new circumstances.", "uk": "<strong>Рівень адаптивності:</strong> наскільки швидко ваша психіка здатна перебудовуватися під нові обставини." },
    "ai-seo-li-2": { "ru": "<strong>Социальные границы:</strong> где заканчивается ваша толерантность к внешним раздражителям и начинается потребность в изоляции.", "en": "<strong>Social boundaries:</strong> where your tolerance for external stimuli ends and your need for isolation begins.", "uk": "<strong>Соціальні кордони:</strong> де закінчується ваша толерантність до зовнішніх подразників і починається потреба в ізоляції." },
    "ai-seo-li-3": { "ru": "<strong>Механизмы копинга (преодоления стресса):</strong> склонны ли вы к анализу или, наоборот, к эмоциональному отстранению.", "en": "<strong>Coping mechanisms:</strong> whether you are prone to analysis or, conversely, to emotional detachment.", "uk": "<strong>Механізми копінгу (подолання стресу):</strong> чи схильні ви до аналізу, чи навпаки — до емоційного відсторонення." },
    "ai-seo-h3-3": { "ru": "Почему важно знать свой истинный психотип?", "en": "Why is it important to know your true psychotype?", "uk": "Чому важливо знати свій справжній психотип?" },
    "ai-seo-p5": { "ru": "Понимание своих глубинных реакций — это не просто развлечение, а мощный инструмент для улучшения качества жизни. Глубокий анализ личности помогает в нескольких ключевых сферах:", "en": "Understanding your deep reactions is not just entertainment, but a powerful tool for improving your quality of life. Deep personality analysis helps in several key areas:", "uk": "Розуміння своїх глибинних реакцій — це не просто розвага, це потужний інструмент для покращення якості життя. Глибокий аналіз особистості допомагає в кількох ключових сферах:" },
    "ai-seo-li-4": { "ru": "<strong>Профилактика выгорания:</strong> Зная, что именно истощает вас в социуме, вы можете сознательно дозировать общение и избегать токсичных ситуаций.", "en": "<strong>Burnout prevention:</strong> Knowing exactly what exhausts you socially, you can consciously dose interactions and avoid toxic situations.", "uk": "<strong>Профілактика вигоряння:</strong> Знаючи, що саме виснажує вас у соціумі, ви можете свідомо дозувати спілкування і уникати токсичних ситуацій." },
    "ai-seo-li-5": { "ru": "<strong>Построение карьеры:</strong> Понимание своей реакции на хаос и дедлайны позволяет выбрать тот формат работы, где вы будете максимально эффективны (например, фриланс вместо офиса).", "en": "<strong>Career building:</strong> Understanding your reaction to chaos and deadlines allows you to choose the work format where you will be most effective (e.g., freelance instead of an office).", "uk": "<strong>Побудова кар'єри:</strong> Розуміння своєї реакції на хаос і дедлайни дозволяє обрати той формат роботи, де ви будете максимально ефективними (наприклад, фриланс замість корпоративного опен-спейсу)." },
    "ai-seo-li-6": { "ru": "<strong>Гармония в отношениях:</strong> Когда вы можете четко артикулировать свои потребности в комфорте, вашим близким становится гораздо проще вас понять.", "en": "<strong>Harmony in relationships:</strong> When you can clearly articulate your need for comfort, it becomes much easier for your loved ones to understand you.", "uk": "<strong>Гармонія у стосунках:</strong> Коли ви можете чітко артикулювати свої потреби в комфорті, вашим близьким стає набагато простіше вас зрозуміти." },
    "ai-seo-h3-2": { "ru": "Конфиденциальность и безопасность данных", "en": "Data Privacy and Security", "uk": "Конфіденційність та безпека даних" },
    "ai-seo-p4": { "ru": "Мы понимаем, что вопросы психологического комфорта являются глубоко личными. Этот инструмент работает исключительно как транзитный шлюз: ваши текстовые ответы обрабатываются нейросетью в режиме реального времени для генерации результата и <strong>не сохраняются</strong> на наших серверах. Это гарантирует полную анонимность вашего цифрового психоанализа.", "en": "We understand that issues of psychological comfort are deeply personal. This tool works exclusively as a transit gateway: your text responses are processed by the neural network in real time to generate the result and are <strong>not stored</strong> on our servers. This guarantees the complete anonymity of your digital psychoanalysis.", "uk": "Ми розуміємо, що питання психологічного комфорта є глибоко особистими. Цей інструмент працює виключно як транзитний шлюз: ваші текстові відповіді обробляються нейромережею в режимі реального часу для генерації результату і <strong>не зберігаються</strong> на наших серверах. Це гарантує повну анонімність вашого цифрового психоаналізу." },
    "ai-seo-p6": { "ru": "Безопасность ваших данных — наш приоритет. Мы не собираем и не анализируем ваш профиль для маркетинговых целей, а все данные, введенные вами, удаляются сразу после завершения сеанса обработки. Вы можете быть уверены, что ваши мысли остаются только между вами и алгоритмом.", "en": "Your data security is our priority. We do not collect or analyze your profile for marketing purposes, and all the data you enter is deleted immediately after the processing session is completed. You can be sure that your thoughts remain only between you and the algorithm.", "uk": "Безпека ваших даних — наш пріоритет. Ми не збираємо і не аналізуємо ваш профіль для маркетингових цілей, а всі дані, введені вами, видаляються відразу після завершення сеансу обробки. Ви можете бути впевнені, що ваші думки залишаються тільки між вами і алгоритмом." },

    // --- КАЛЬКУЛЯТОРИ (ПРОДОВЖЕННЯ) ---
    "height-title": { "ru": "Калькулятор роста", "en": "Height Calculator", "uk": "Калькулятор росту" },
    "height-h2": { "ru": "Калькулятор роста", "en": "Height Calculator", "uk": "Калькулятор росту" },
    "height-subtitle": { "ru": "Введите рост родителей (в см)", "en": "Enter parents' height (in cm)", "uk": "Введіть зріст батьків (у см)" },
    "height-label-father": { "ru": "Рост отца:", "en": "Father's height:", "uk": "Зріст батька:" },
    "height-label-mother": { "ru": "Рост матери:", "en": "Mother's height:", "uk": "Зріст матері:" },
    "height-label-gender": { "ru": "Пол ребенка:", "en": "Child's gender:", "uk": "Стать дитини:" },
    "height-opt-boy": { "ru": "Мальчик", "en": "Boy", "uk": "Хлопчик" },
    "height-opt-girl": { "ru": "Девочка", "en": "Girl", "uk": "Дівчинка" },
    "height-btn-calc": { "ru": "Рассчитать рост", "en": "Calculate height", "uk": "Розрахувати зріст" },
    "height-result-title": { "ru": "Ожидаемый рост:", "en": "Expected height:", "uk": "Очікуваний зріст:" },
    "height-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },
    
    "hands-title": { "ru": "Левша или правша", "en": "Left-handed or Right-handed", "uk": "Шульга чи правша" },
    "hands-h2": { "ru": "Левша или правша?", "en": "Left-handed or Right-handed?", "uk": "Шульга чи правша?" },
    "hands-subtitle": { "ru": "Узнайте вероятность ведущей руки у ребенка", "en": "Find out the probability of a child's dominant hand", "uk": "Дізнайтеся ймовірність ведучої руки у дитини" },
    "hands-label-dad": { "ru": "Ведущая рука отца:", "en": "Father's dominant hand:", "uk": "Ведуча рука батька:" },
    "hands-label-mom": { "ru": "Ведущая рука матери:", "en": "Mother's dominant hand:", "uk": "Ведуча рука матері:" },
    "hands-opt-right": { "ru": "Правша", "en": "Right-handed", "uk": "Правша" },
    "hands-opt-left": { "ru": "Левша", "en": "Left-handed", "uk": "Шульга" },
    "hands-btn-calc": { "ru": "Узнать вероятность", "en": "Calculate probability", "uk": "Дізнатися ймовірність" },
    "hands-result-title": { "ru": "Прогноз для ребенка:", "en": "Forecast for the child:", "uk": "Прогноз для дитини:" },
    "hands-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },
    
    "hair-title": { "ru": "Калькулятор волос", "en": "Hair Calculator", "uk": "Калькулятор волосся" },
    "hair-h2": { "ru": "Генетика волос", "en": "Hair Genetics", "uk": "Генетика волосся" },
    "hair-subtitle": { "ru": "Узнайте цвет и структуру волос ребенка", "en": "Find out your child's hair color and texture", "uk": "Дізнайтеся колір і структуру волосся дитини" },
    "hair-label-dad": { "ru": "Волосы отца:", "en": "Father's hair:", "uk": "Волосся батька:" },
    "hair-label-mom": { "ru": "Волосы матери:", "en": "Mother's hair:", "uk": "Волосся матері:" },
    "hair-opt-black": { "ru": "Черные", "en": "Black", "uk": "Чорне" },
    "hair-opt-brown": { "ru": "Каштановые/Русые", "en": "Brown/Light Brown", "uk": "Каштанове/Русяве" },
    "hair-opt-blonde": { "ru": "Светлые (Блонд)", "en": "Blonde", "uk": "Світле (Блонд)" },
    "hair-opt-red": { "ru": "Рыжие", "en": "Red", "uk": "Руде" },
    "hair-opt-straight": { "ru": "Прямые", "en": "Straight", "uk": "Пряме" },
    "hair-opt-wavy": { "ru": "Волнистые", "en": "Wavy", "uk": "Хвилясте" },
    "hair-opt-curly": { "ru": "Кудрявые", "en": "Curly", "uk": "Кучеряве" },
    "hair-btn-calc": { "ru": "Узнать вероятность", "en": "Calculate probability", "uk": "Дізнатися ймовірність" },
    "hair-result-title": { "ru": "Прогноз для ребенка:", "en": "Forecast for the child:", "uk": "Прогноз для дитини:" },
    "hair-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },
    
    "face-title": { "ru": "Конструктор лица", "en": "Face Constructor", "uk": "Конструктор обличчя" },
    "face-h2": { "ru": "Конструктор лица", "en": "Face Constructor", "uk": "Конструктор обличчя" },
    "face-subtitle": { "ru": "Узнайте вероятность наследования особых примет", "en": "Find out the probability of inheriting special traits", "uk": "Дізнайтеся ймовірність успадкування особливих прикмет" },
    "face-label-dimples": { "ru": "😊 Ямочки на щеках:", "en": "😊 Cheek dimples:", "uk": "😊 Ямочки на щоках:" },
    "face-label-freckles": { "ru": "☀️ Веснушки:", "en": "☀️ Freckles:", "uk": "☀️ Ластовиння:" },
    "face-label-chin": { "ru": "🦸‍♂️ Ямочка на подбородке:", "en": "🦸‍♂️ Cleft chin:", "uk": "🦸‍♂️ Ямочка на підборідді:" },
    "face-opt-dad-yes": { "ru": "Отец: Есть", "en": "Father: Yes", "uk": "Батько: Є" },
    "face-opt-dad-no": { "ru": "Отец: Нет", "en": "Father: No", "uk": "Батько: Немає" },
    "face-opt-mom-yes": { "ru": "Мать: Есть", "en": "Mother: Yes", "uk": "Мати: Є" },
    "face-opt-mom-no": { "ru": "Мать: Нет", "en": "Mother: No", "uk": "Мати: Немає" },
    "face-btn-calc": { "ru": "Собрать профиль", "en": "Build profile", "uk": "Зібрати профіль" },
    "face-result-title": { "ru": "Вероятность для ребенка:", "en": "Probability for the child:", "uk": "Ймовірність для дитини:" },
    "face-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },
    
    "eyes-title": { "ru": "Калькулятор цвета глаз", "en": "Eye Color Calculator", "uk": "Калькулятор кольору очей" },
    "eyes-h2": { "ru": "Цвет глаз", "en": "Eye Color", "uk": "Колір очей" },
    "eyes-subtitle": { "ru": "Выберите цвет глаз родителей", "en": "Select parents' eye color", "uk": "Виберіть колір очей батьків" },
    "eyes-label-dad": { "ru": "Глаза отца:", "en": "Father's eyes:", "uk": "Очі батька:" },
    "eyes-label-mom": { "ru": "Глаза матери:", "en": "Mother's eyes:", "uk": "Очі матері:" },
    "eyes-opt-brown": { "ru": "Карие", "en": "Brown", "uk": "Карі" },
    "eyes-opt-green": { "ru": "Зеленые", "en": "Green", "uk": "Зелені" },
    "eyes-opt-blue": { "ru": "Голубые", "en": "Blue", "uk": "Блакитні" },
    "eyes-opt-grey": { "ru": "Серые", "en": "Gray", "uk": "Сірі" },
    "eyes-btn-calc": { "ru": "Показать вероятность", "en": "Show probability", "uk": "Показати ймовірність" },
    "eyes-result-title": { "ru": "Шансы для ребенка:", "en": "Chances for the child:", "uk": "Шанси для дитини:" },
    "eyes-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },
    
    "blood-title": { "ru": "Калькулятор группы крови", "en": "Blood Type Calculator", "uk": "Калькулятор групи крові" },
    "blood-h2": { "ru": "Группа крови", "en": "Blood Type", "uk": "Група крові" },
    "blood-subtitle": { "ru": "Узнайте возможную группу крови ребенка", "en": "Find out the child's possible blood type", "uk": "Дізнайтеся можливу групу крові дитини" },
    "blood-label-dad": { "ru": "Группа крови отца:", "en": "Father's blood type:", "uk": "Група крові батька:" },
    "blood-label-mom": { "ru": "Группа крови матери:", "en": "Mother's blood type:", "uk": "Група крові матері:" },
    "blood-btn-calc": { "ru": "Показать возможные варианты", "en": "Show possible variants", "uk": "Показати можливі варіанти" },
    "blood-result-title": { "ru": "Возможная группа крови:", "en": "Possible blood type:", "uk": "Можлива група крові:" },
    "blood-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" }
};

// Механизм переключения языков
function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    window.currentLang = lang; 

    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (langArr[key]) {
            if (el.tagName === "TITLE") {
                document.title = langArr[key][lang];
            } else if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") {
                // Тепер скрипт вміє перекладати підказки всередині полів для вводу!
                el.setAttribute('placeholder', langArr[key][lang]);
            } else {
                el.innerHTML = langArr[key][lang];
            }
        }
    });

    // Оновлення результату в калькуляторах (якщо відкритий)
    const resultBox = document.getElementById("result-box");
    if (resultBox && resultBox.style.display === "block") {
        const btn = document.querySelector('button[onclick^="calculate"]');
        if (btn) btn.click();
    }
}

// Автоматичне визначення мови браузера при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('selectedLang');
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Якщо у користувача стоїть українська, сайт відкриється українською
        if (browserLang.toLowerCase().startsWith('uk')) {
            savedLang = 'uk';
        } else if (browserLang.toLowerCase().startsWith('ru') || browserLang.toLowerCase().startsWith('be')) {
            savedLang = 'ru';
        } else {
            savedLang = 'en';
        }
    }
    changeLanguage(savedLang);
});
