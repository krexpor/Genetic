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
    "blood-fact-title": { "ru": "💡 Интересный факт:", "en": "💡 Interesting fact:", "uk": "💡 Цікавий факт:" },

    // --- ТЕСТ: СТОСУНКИ ТА КОРДОНИ ---
    "rel-page-title": { "ru": "Анализ отношений и границ | Krexpor", "en": "Relationship & Boundaries Analysis | Krexpor", "uk": "Аналіз стосунків та кордонів | Krexpor" },
    "rel-h1": { "ru": "Язык отношений и границы", "en": "Relationship Language & Boundaries", "uk": "Мова стосунків та кордони" },
    "rel-subtitle": { "ru": "Выберите варианты, которые наиболее точно описывают ваши внутренние реакции. Алгоритм проанализирует ваш тип привязанности.", "en": "Choose the options that most accurately describe your internal reactions. The algorithm will analyze your attachment style.", "uk": "Оберіть варіанти, які найбільш точно описують ваші внутрішні реакції. Алгоритм проаналізує ваш тип прив'язаності." },
    
    "rel-q1": { "ru": "1. Как вы реагируете, если близкий человек внезапно отдаляется или пишет реже?", "en": "1. How do you react if a close person suddenly distances themselves or texts less?", "uk": "1. Як ви реагуєте, якщо близька людина раптово віддаляється або пише рідше?" },
    "rel-q1-a": { "ru": "Даю пространство, но внутри тревожусь и ищу причину в себе.", "en": "I give them space, but worry inside and look for the reason in myself.", "uk": "Даю простір, але всередині тривожуся і шукаю причину в собі." },
    "rel-q1-b": { "ru": "Отдаляюсь в ответ, чтобы защитить себя от возможной боли.", "en": "I distance myself in response to protect myself from possible pain.", "uk": "Віддаляюся у відповідь, щоб захистити себе від можливого болю." },
    "rel-q1-c": { "ru": "Сразу иду на диалог, чтобы прямо выяснить, что происходит.", "en": "I immediately start a dialogue to find out directly what is happening.", "uk": "Одразу йду на діалог, щоб прямо з'ясувати, що відбувається." },
    "rel-q1-d": { "ru": "Воспринимаю спокойно, у каждого должно быть личное время.", "en": "I take it calmly, everyone should have personal time.", "uk": "Сприймаю спокійно, у кожного має бути свій особистий час." },

    "rel-q2": { "ru": "2. Что для вас является абсолютным «красным флагом» (недопустимым) в отношениях?", "en": "2. What is an absolute 'red flag' (unacceptable) for you in a relationship?", "uk": "2. Що для вас є абсолютним «червоним прапорцем» (неприпустимим) у стосунках?" },
    "rel-q2-a": { "ru": "Обесценивание моих эмоций и фразы в стиле «ты преувеличиваешь».", "en": "Devaluing my emotions and phrases like 'you are exaggerating'.", "uk": "Знецінення моїх емоцій та фрази в стилі «ти перебільшуєш»." },
    "rel-q2-b": { "ru": "Тотальный контроль и попытки нарушить мое личное пространство.", "en": "Total control and attempts to violate my personal space.", "uk": "Тотальний контроль і спроби порушити мій особистий простір." },
    "rel-q2-c": { "ru": "Нечестность и скрытность даже в мелких бытовых вещах.", "en": "Dishonesty and secrecy even in small everyday things.", "uk": "Нечесність і скритність навіть у дрібних побутових речах." },
    "rel-q2-d": { "ru": "Эмоциональные качели: сегодня люблю, завтра игнорирую.", "en": "Emotional swings: love you today, ignore you tomorrow.", "uk": "Емоційні гойдалки: сьогодні люблю, завтра ігнорую." },

    "rel-q3": { "ru": "3. Опишите идеальное проявление заботы, когда вы абсолютно истощены:", "en": "3. Describe the ideal manifestation of care when you are completely exhausted:", "uk": "3. Опишіть ідеальний прояв турботи, коли ви абсолютно виснажені:" },
    "rel-q3-a": { "ru": "Просто обнять и выслушать, без попыток дать логичный совет.", "en": "Just hug and listen, without trying to give logical advice.", "uk": "Просто обійняти і вислухати, без спроб дати логічну пораду." },
    "rel-q3-b": { "ru": "Практическая помощь: приготовить еду, взять на себя дела.", "en": "Practical help: cook food, take over chores.", "uk": "Практична допомога: приготувати їжу, взяти на себе справи." },
    "rel-q3-c": { "ru": "Оставить меня в тишине и одиночестве, чтобы я мог(ла) восстановиться.", "en": "Leave me in silence and alone so I can recover.", "uk": "Залишити мене в тиші наодинці, щоб я зміг/змогла відновитися." },
    "rel-q3-d": { "ru": "Сделать какой-то приятный сюрприз, чтобы переключить мое внимание.", "en": "Make some pleasant surprise to switch my attention.", "uk": "Зробити якийсь приємний сюрприз, щоб переключити мою увагу." },

    "rel-btn": { "ru": "Анализировать мой профиль", "en": "Analyze my profile", "uk": "Аналізувати мій профіль" },
    "rel-loading": { "ru": "Собираем паттерны и формируем анализ... 🔮", "en": "Collecting patterns and generating analysis... 🔮", "uk": "Збираємо патерни та формуємо аналіз... 🔮" },

    "rel-seo-h2": { "ru": "Как AI анализирует язык любви и тип привязанности?", "en": "How does AI analyze love language and attachment style?", "uk": "Як AI аналізує мову любові та тип прив'язаності?" },
    "rel-seo-p1": { "ru": "Теория привязанности — одна из важнейших концепций в современной психологии. Наш алгоритм использует ваши ответы на ключевые триггерные ситуации, чтобы составить глубокий анализ того, как вы выстраиваете границы и реагируете на близость.", "en": "Attachment theory is one of the most important concepts in modern psychology. Our algorithm uses your responses to key trigger situations to provide a deep analysis of how you build boundaries and react to intimacy.", "uk": "Теорія прив'язаності — одна з найважливіших концепцій у сучасній психології. Наш алгоритм використовує ваші відповіді на ключові тригерні ситуації, щоб скласти глибокий аналіз того, як ви вибудовуєте кордони та реагуєте на близькість." },
    "rel-seo-h3-1": { "ru": "Типы привязанности в психологии", "en": "Attachment styles in psychology", "uk": "Типи прив'язаності в психології" },
    "rel-seo-li-1": { "ru": "<strong>Надежный:</strong> Комфортно в близости, нет страха одиночества. Выбор ответов, ориентированных на диалог и уважение пространства.", "en": "<strong>Secure:</strong> Comfortable in intimacy, no fear of loneliness. Choosing answers focused on dialogue and respect for space.", "uk": "<strong>Надійний:</strong> Комфортно в близькості, немає страху самотності. Вибір відповідей, орієнтованих на діалог та повагу до простору." },
    "rel-seo-li-2": { "ru": "<strong>Тревожный:</strong> Сильная потребность в подтверждении чувств, страх быть отвергнутым.", "en": "<strong>Anxious:</strong> Strong need for validation of feelings, fear of rejection.", "uk": "<strong>Тривожний:</strong> Сильна потреба у підтвердженні почуттів, страх бути відкинутим." },
    "rel-seo-li-3": { "ru": "<strong>Избегающий:</strong> Дистанцирование при малейшей угрозе комфорту, защита через независимость.", "en": "<strong>Avoidant:</strong> Distancing at the slightest threat to comfort, defense through independence.", "uk": "<strong>Уникаючий:</strong> Дистанціювання при найменшій загрозі комфорту, захист через незалежність." },
    "rel-seo-p2": { "ru": "Сочетая ваш выбор реакции на отдаление партнера, красные флаги и предпочтения в заботе, искусственный интеллект формирует персональную карту ваших эмоциональных потребностей.", "en": "By combining your choice of reaction to partner distancing, red flags, and care preferences, artificial intelligence forms a personal map of your emotional needs.", "uk": "Поєднуючи ваш вибір реакції на віддалення партнера, червоні прапорці та вподобання в турботі, штучний інтелект формує персональну карту ваших емоційних потреб." },

    "rel-q4": { "ru": "4. Как вы обычно ведете себя во время серьезной ссоры или конфликта?", "en": "4. How do you usually behave during a serious argument or conflict?", "uk": "4. Як ви зазвичай поводитеся під час серйозної сварки чи конфлікту?" },
    "rel-q4-a": { "ru": "Пытаюсь все логично обсудить и найти решение прямо сейчас.", "en": "I try to discuss everything logically and find a solution right now.", "uk": "Намагаюся все логічно обговорити і знайти рішення прямо зараз." },
    "rel-q4-b": { "ru": "Взрываюсь эмоциями, мне нужно выплеснуть напряжение.", "en": "I explode with emotions, I need to release the tension.", "uk": "Вибухаю емоціями, мені потрібно виплеснути напругу." },
    "rel-q4-c": { "ru": "Замыкаюсь в себе или ухожу, мне нужно время остыть.", "en": "I withdraw into myself or leave, I need time to cool down.", "uk": "Замикаюся в собі або йду, мені потрібен час, щоб охолонути." },
    "rel-q4-d": { "ru": "Пытаюсь сгладить острые углы и быстрее помириться.", "en": "I try to smooth off the rough edges and make peace faster.", "uk": "Намагаюся згладити гострі кути і швидше помиритися." },

    "rel-q5": { "ru": "5. Сколько времени вам нужно, чтобы по-настоящему открыться новому человеку?", "en": "5. How much time do you need to truly open up to a new person?", "uk": "5. Скільки часу вам потрібно, щоб по-справжньому відкритися новій людині?" },
    "rel-q5-a": { "ru": "Открываюсь довольно быстро, если чувствую «своего» человека.", "en": "I open up quite quickly if I feel it's 'my' person.", "uk": "Відкриваюся досить швидко, якщо відчуваю «свою» людину." },
    "rel-q5-b": { "ru": "Годами держу дистанцию, полное доверие нужно заслужить.", "en": "I keep my distance for years, complete trust must be earned.", "uk": "Роками тримаю дистанцію, повну довіру потрібно заслужити." },
    "rel-q5-c": { "ru": "Тестирую человека ситуациями, прежде чем доверить личное.", "en": "I test the person with situations before trusting them with personal things.", "uk": "Тестую людину ситуаціями, перш ніж довірити особисте." },
    "rel-q5-d": { "ru": "Зависит от обстоятельств, но всегда оставляю скрытую часть себя.", "en": "Depends on the circumstances, but I always leave a hidden part of myself.", "uk": "Залежить від обставин, але завжди залишаю приховану частину себе." },

    // --- ТЕСТ: ТІНЬОВА СТОРОНА (SHADOW WORK) ---
    "shad-page-title": { "ru": "Теневая сторона личности | Krexpor", "en": "Shadow Self Analysis | Krexpor", "uk": "Тіньова сторона особистості | Krexpor" },
    "shad-h1": { "ru": "Теневая сторона личности", "en": "Shadow Self Analysis", "uk": "Тіньова сторона особистості" },
    "shad-subtitle": { "ru": "Отвечайте максимально честно, не пытаясь выбрать 'правильный' вариант. Алгоритм проанализирует ваши скрытые мотивы и подавленные эмоции.", "en": "Answer as honestly as possible, without trying to choose the 'right' option. The algorithm will analyze your hidden motives and repressed emotions.", "uk": "Відповідайте максимально чесно, не намагаючись обрати 'правильний' варіант. Алгоритм проаналізує ваші приховані мотиви та витіснені емоції." },

    "shad-q1": { "ru": "1. Что вы чаще всего имитируете в компании людей, чтобы казаться 'нормальным'?", "en": "1. What do you most often fake in the company of people to appear 'normal'?", "uk": "1. Що ви найчастіше імітуєте в компанії людей, щоб здаватися 'нормальним'?" },
    "shad-q1-a": { "ru": "Позитив и энергию, даже когда внутри абсолютная пустота.", "en": "Positivity and energy, even when there is absolute emptiness inside.", "uk": "Позитив та енергію, навіть коли всередині абсолютна порожнеча." },
    "shad-q1-b": { "ru": "Спокойствие и контроль, хотя внутри бушует тревога.", "en": "Calmness and control, although anxiety is raging inside.", "uk": "Спокій та контроль, хоча всередині вирує тривога." },
    "shad-q1-c": { "ru": "Заинтересованность, хотя мне скучно и хочется поскорее уйти.", "en": "Interest, although I am bored and want to leave as soon as possible.", "uk": "Зацікавленість, хоча мені нудно і хочеться скоріше піти." },
    "shad-q1-d": { "ru": "Согласие с большинством, чтобы избежать конфликта и внимания.", "en": "Agreement with the majority to avoid conflict and attention.", "uk": "Згоду з більшістю, щоб уникнути конфлікту та уваги." },

    "shad-q2": { "ru": "2. Какую эмоцию вы бы хотели выплеснуть прямо сейчас, если бы вас никто не осудил?", "en": "2. What emotion would you like to let out right now if no one judged you?", "uk": "2. Яку емоцію ви б хотіли виплеснути прямо зараз, якби вас ніхто не засудив?" },
    "shad-q2-a": { "ru": "Ярость и гнев на тех, кто нарушал мои границы или предавал.", "en": "Rage and anger at those who violated my boundaries or betrayed me.", "uk": "Лють і гнів на тих, хто порушував мої кордони або зраджував." },
    "shad-q2-b": { "ru": "Глубокую грусть, слезы и желание, чтобы меня просто пожалели.", "en": "Deep sadness, tears, and the desire to just be pitied.", "uk": "Глибокий смуток, сльози і бажання, щоб мене просто пожаліли." },
    "shad-q2-c": { "ru": "Раздражение от чужой некомпетентности, медлительности и глупости.", "en": "Irritation from other people's incompetence, slowness, and stupidity.", "uk": "Роздратування від чужої некомпетентності, повільності та дурості." },
    "shad-q2-d": { "ru": "Усталость и желание сдаться, перестать бороться на какое-то время.", "en": "Fatigue and the desire to give up, stop fighting for a while.", "uk": "Втому і бажання здатися, перестати боротися на якийсь час." },

    "shad-q3": { "ru": "3. Какое главное требование внутреннего критика вы никогда не нарушаете?", "en": "3. What is the main demand of your inner critic that you never break?", "uk": "3. Яку головну вимогу внутрішнього критика ви ніколи не порушуєте?" },
    "shad-q3-a": { "ru": "«Я должен(на) справляться со всем самостоятельно, просить о помощи — слабость».", "en": "«I must handle everything myself, asking for help is a weakness».", "uk": "«Я повинен(на) справлятися з усім самостійно, просити про допомогу — слабкість»." },
    "shad-q3-b": { "ru": "«Я не должен(на) показывать свою уязвимость, иначе этим воспользуются».", "en": "«I must not show my vulnerability, otherwise it will be used against me».", "uk": "«Я не повинен(на) показувати свою вразливість, інакше цим скористаються»." },
    "shad-q3-c": { "ru": "«Моя работа и результаты должны быть идеальными, посредственность недопустима».", "en": "«My work and results must be perfect, mediocrity is unacceptable».", "uk": "«Моя робота і результати мають бути ідеальними, посередність неприпустима»." },
    "shad-q3-d": { "ru": "«Я должен(на) быть удобным и полезным для близких, иначе меня разлюбят».", "en": "«I must be convenient and useful to my loved ones, otherwise they will stop loving me».", "uk": "«Я повинен(на) бути зручним і корисним для близьких, інакше мене розлюблять»." },

    "shad-q4": { "ru": "4. Как вы обычно 'наказываете' себя за ошибки или провалы?", "en": "4. How do you usually 'punish' yourself for mistakes or failures?", "uk": "4. Як ви зазвичай 'караєте' себе за помилки чи провали?" },
    "shad-q4-a": { "ru": "Жестким внутренним монологом, постоянным прокручиванием ситуации.", "en": "With a harsh internal monologue, constantly replaying the situation.", "uk": "Жорстким внутрішнім монологом, постійним прокручуванням ситуації." },
    "shad-q4-b": { "ru": "Лишаю себя отдыха или удовольствий, заставляю работать еще больше.", "en": "I deprive myself of rest or pleasure, force myself to work even more.", "uk": "Позбавляю себе відпочинку або задоволень, змушую працювати ще більше." },
    "shad-q4-c": { "ru": "Изолируюсь от людей, потому что чувствую сильный стыд.", "en": "I isolate myself from people because I feel a strong sense of shame.", "uk": "Ізолююся від людей, тому що відчуваю сильний сором." },
    "shad-q4-d": { "ru": "Делаю вид, что все в порядке, но внутри медленно съедаю себя.", "en": "I pretend everything is fine, but inside I slowly eat myself up.", "uk": "Роблю вигляд, що все гаразд, але всередині повільно з'їдаю себе." },

    "shad-q5": { "ru": "5. Чего вы на самом деле хотите больше всего, но боитесь себе в этом признаться?", "en": "5. What do you actually want the most, but are afraid to admit to yourself?", "uk": "5. Чого ви насправді хочете найбільше, але боїтеся собі в цьому зізнатися?" },
    "shad-q5-a": { "ru": "Чтобы кто-то пришел, взял всё под контроль и решил мои проблемы.", "en": "For someone to come, take everything under control, and solve my problems.", "uk": "Щоб хтось прийшов, взяв усе під контроль і вирішив мої проблеми." },
    "shad-q5-b": { "ru": "Бросить всё, оборвать старые связи и начать жизнь с чистого листа.", "en": "To drop everything, cut old ties, and start life with a clean slate.", "uk": "Кинути все, обірвати старі зв'язки і почати життя з чистого аркуша." },
    "shad-q5-c": { "ru": "Получить абсолютное, безоговорочное признание и восхищение окружающих.", "en": "To receive absolute, unconditional recognition and admiration from others.", "uk": "Отримати абсолютне, беззаперечне визнання і захоплення оточуючих." },
    "shad-q5-d": { "ru": "Разрешить себе быть эгоистом, 'плохим' человеком и перестать стараться для всех.", "en": "To allow myself to be selfish, a 'bad' person, and stop trying for everyone.", "uk": "Дозволити собі бути егоїстом, 'поганою' людиною і перестати старатися для всіх." },

    "shad-btn": { "ru": "Исследовать свою Тень", "en": "Explore my Shadow", "uk": "Дослідити свою Тінь" },
    "shad-loading": { "ru": "Погружаемся в бессознательное... 🌑", "en": "Diving into the unconscious... 🌑", "uk": "Занурюємося в несвідоме... 🌑" },

    "shad-seo-h2": { "ru": "Что такое Теневая сторона личности?", "en": "What is the Shadow side of personality?", "uk": "Що таке Тіньова сторона особистості?" },
    "shad-seo-p1": { "ru": "Концепция 'Тени' была введена швейцарским психиатром Карлом Густавом Юнгом. Тень — это бессознательная часть нашей психики, в которой скрыты вытесненные эмоции, страхи, инстинкты и желания, которые мы считаем неприемлемыми для общества или самих себя.", "en": "The concept of the 'Shadow' was introduced by the Swiss psychiatrist Carl Gustav Jung. The Shadow is the unconscious part of our psyche, where repressed emotions, fears, instincts, and desires that we consider unacceptable to society or ourselves are hidden.", "uk": "Концепція 'Тіні' була введена швейцарським психіатром Карлом Густавом Юнгом. Тінь — це несвідома частина нашої психіки, в якій приховані витіснені емоції, страхи, інстинкти і бажання, які ми вважаємо неприйнятними для суспільства або самих себе." },
    "shad-seo-h3-1": { "ru": "Зачем изучать свою Тень?", "en": "Why study your Shadow?", "uk": "Навіщо вивчати свою Тінь?" },
    "shad-seo-li-1": { "ru": "<strong>Возврат энергии:</strong> Подавление эмоций (гнева, стыда, грусти) требует колоссальных затрат внутренней энергии. Осознав их, вы высвобождаете ресурс.", "en": "<strong>Energy return:</strong> Suppressing emotions (anger, shame, sadness) requires an enormous amount of internal energy. By acknowledging them, you release resources.", "uk": "<strong>Повернення енергії:</strong> Придушення емоцій (гніву, сорому, смутку) вимагає колосальних витрат внутрішньої енергії. Усвідомивши їх, ви вивільняєте ресурс." },
    "shad-seo-li-2": { "ru": "<strong>Снятие масок:</strong> Постоянная имитация спокойствия или позитива приводит к выгоранию. Интеграция тени помогает стать целостным.", "en": "<strong>Removing masks:</strong> Constantly faking calmness or positivity leads to burnout. Integrating the shadow helps to become whole.", "uk": "<strong>Зняття масок:</strong> Постійна імітація спокою або позитиву призводить до вигоряння. Інтеграція тіні допомагає стати цілісним." },
    "shad-seo-li-3": { "ru": "<strong>Контроль над внутренним критиком:</strong> Поняв истинную причину своего самосаботажа, вы перестаете наказывать себя за малейшие ошибки.", "en": "<strong>Control over the inner critic:</strong> By understanding the true cause of your self-sabotage, you stop punishing yourself for the slightest mistakes.", "uk": "<strong>Контроль над внутрішнім критиком:</strong> Зрозумівши справжню причину свого самосаботажу, ви перестаєте карати себе за найменші помилки." },
    "shad-seo-p2": { "ru": "Наш искусственный интеллект анализирует ваши ответы на вопросы о социальных масках, подавленных желаниях и внутреннем критике, чтобы помочь вам безопасно заглянуть в свое бессознательное и найти там скрытый потенциал.", "en": "Our artificial intelligence analyzes your answers to questions about social masks, repressed desires, and the inner critic to help you safely look into your unconscious and find hidden potential there.", "uk": "Наш штучний інтелект аналізує ваші відповіді на питання про соціальні маски, придушені бажання та внутрішнього критика, щоб допомогти вам безпечно зазирнути у своє несвідоме і знайти там прихований потенціал." },

    // --- ТЕСТ: ЕСТЕТИКА ДУШІ (INNER VIBE) ---
    "aes-page-title": { "ru": "Эстетика души | Krexpor", "en": "Soul Aesthetics | Krexpor", "uk": "Естетика душі | Krexpor" },
    "aes-h1": { "ru": "Эстетика вашей души", "en": "The Aesthetics of Your Soul", "uk": "Естетика вашої душі" },
    "aes-subtitle": { "ru": "Ответьте на 5 вопросов через призму ассоциаций. Алгоритм проанализирует ваши вкусы и определит ваш уникальный внутренний 'вайб'.", "en": "Answer 5 questions through the prism of associations. The algorithm will analyze your tastes and determine your unique inner 'vibe'.", "uk": "Дайте відповідь на 5 питань через призму асоціацій. Алгоритм проаналізує ваші смаки та визначить ваш унікальний внутрішній 'вайб'." },

    "aes-q1": { "ru": "1. Если бы ваше внутреннее состояние было комнатой, как бы она выглядела?", "en": "1. If your inner state were a room, what would it look like?", "uk": "1. Якби ваш внутрішній стан був кімнатою, як би вона виглядала?" },
    "aes-q1-a": { "ru": "Темное дерево, стеллажи со старыми книгами, теплый свет лампы и запах пыли.", "en": "Dark wood, shelves with old books, warm lamp light, and the smell of dust.", "uk": "Темне дерево, стелажі зі старими книгами, тепле світло лампи та запах пилу." },
    "aes-q1-b": { "ru": "Абсолютный минимализм, холодный свет, стекло, металл и много свободного пространства.", "en": "Absolute minimalism, cold light, glass, metal, and lots of free space.", "uk": "Абсолютний мінімалізм, холодне світло, скло, метал та багато вільного простору." },
    "aes-q1-c": { "ru": "Неоновый свет, хаос из кабелей, экранов и коллекционных фигурок.", "en": "Neon light, a chaos of cables, screens, and collectible figures.", "uk": "Неонове світло, хаос із кабелів, екранів та колекційних фігурок." },
    "aes-q1-d": { "ru": "Много растений, открытые окна, солнечные лучи и светлый лен.", "en": "Lots of plants, open windows, sunbeams, and light linen.", "uk": "Багато рослин, відкриті вікна, сонячні промені та світлий льон." },

    "aes-q2": { "ru": "2. Какой саундтрек играл бы на фоне вашей жизни в моменты наивысшего напряжения?", "en": "2. What soundtrack would play in the background of your life during moments of highest tension?", "uk": "2. Який саундтрек грав би на фоні вашого життя в моменти найвищої напруги?" },
    "aes-q2-a": { "ru": "Классическая музыка: тревожные скрипки или надрывное фортепиано.", "en": "Classical music: anxious violins or angsty piano.", "uk": "Класична музика: тривожні скрипки або надривне фортепіано." },
    "aes-q2-b": { "ru": "Мощный электронный бит, синтвейв или тяжелый бас.", "en": "Powerful electronic beat, synthwave, or heavy bass.", "uk": "Потужний електронний біт, синтвейв або важкий бас." },
    "aes-q2-c": { "ru": "Меланхоличное инди, акустическая гитара или лоу-фай.", "en": "Melancholic indie, acoustic guitar, or lo-fi.", "uk": "Меланхолійне інді, акустична гітара або лоу-фай." },
    "aes-q2-d": { "ru": "Абсолютная тишина или звуки природы (шум дождя, свист ветра).", "en": "Absolute silence or sounds of nature (sound of rain, whistling wind).", "uk": "Абсолютна тиша або звуки природи (шум дощу, свист вітру)." },

    "aes-q3": { "ru": "3. Если бы вам пришлось носить одежду только одного стиля всю жизнь, что бы это было?", "en": "3. If you had to wear only one style of clothing your whole life, what would it be?", "uk": "3. Якби вам довелося носити одяг лише одного стилю все життя, що б це було?" },
    "aes-q3-a": { "ru": "Тотальный черный, строгие линии, кожа и серебряные аксессуары.", "en": "Total black, strict lines, leather, and silver accessories.", "uk": "Тотальний чорний, строгі лінії, шкіра та срібні аксесуари." },
    "aes-q3-b": { "ru": "Мягкие пастельные тона, оверсайз свитеры и комфортные ткани.", "en": "Soft pastel tones, oversized sweaters, and comfortable fabrics.", "uk": "М'які пастельні тони, оверсайз светри та комфортні тканини." },
    "aes-q3-c": { "ru": "Землистые оттенки (коричневый, зеленый), винтаж и многослойность.", "en": "Earthy tones (brown, green), vintage, and layering.", "uk": "Землясті відтінки (коричневий, зелений), вінтаж та багатошаровість." },
    "aes-q3-d": { "ru": "Яркие контрасты, футуристичный крой или гранж с потертостями.", "en": "Bright contrasts, futuristic cut, or distressed grunge.", "uk": "Яскраві контрасти, футуристичний крій або гранж із потертостями." },

    "aes-q4": { "ru": "4. Какая погода за окном идеально отражает вашу зону комфорта?", "en": "4. What weather outside the window perfectly reflects your comfort zone?", "uk": "4. Яка погода за вікном ідеально відображає вашу зону комфорту?" },
    "aes-q4-a": { "ru": "Сильный проливной дождь и гроза, пока я нахожусь в безопасности дома.", "en": "Heavy pouring rain and thunderstorm while I am safely at home.", "uk": "Сильний проливний дощ і гроза, поки я перебуваю в безпеці вдома." },
    "aes-q4-b": { "ru": "Густой утренний туман и прохладный, свежий воздух.", "en": "Thick morning fog and cool, fresh air.", "uk": "Густий ранковий туман і прохолодне, свіже повітря." },
    "aes-q4-c": { "ru": "Яркое, слепящее полуденное солнце и безоблачное небо.", "en": "Bright, blinding midday sun and a cloudless sky.", "uk": "Яскраве, сліпуче полуденне сонце і безхмарне небо." },
    "aes-q4-d": { "ru": "«Золотой час», теплые лучи заката и длинные тени.", "en": "'Golden hour', warm sunset rays and long shadows.", "uk": "«Золота година», теплі промені заходу сонця і довгі тіні." },

    "aes-q5": { "ru": "5. Какой предмет несет для вас наибольшую эмоциональную ценность?", "en": "5. What object holds the greatest emotional value for you?", "uk": "5. Який предмет несе для вас найбільшу емоційну цінність?" },
    "aes-q5-a": { "ru": "Старый исписанный дневник или зачитанная до дыр книга.", "en": "An old written-in diary or a well-read book.", "uk": "Старий списаний щоденник або зачитана до дірок книга." },
    "aes-q5-b": { "ru": "Мой любимый гаджет, ноутбук или фотоаппарат.", "en": "My favorite gadget, laptop, or camera.", "uk": "Мій улюблений гаджет, ноутбук або фотоапарат." },
    "aes-q5-c": { "ru": "Коробка со старыми полароидами, билетами и памятными мелочами.", "en": "A box with old polaroids, tickets, and memorable trinkets.", "uk": "Коробка зі старими полароїдами, квитками та пам'ятними дрібницями." },
    "aes-q5-d": { "ru": "Кольцо, кулон или вещь с длинной историей.", "en": "A ring, pendant, or item with a long history.", "uk": "Каблучка, кулон або річ із довгою історією." },

    "aes-btn": { "ru": "Узнать свою эстетику", "en": "Find out your aesthetic", "uk": "Дізнатися свою естетику" },
    "aes-loading": { "ru": "Генерируем ваш визуальный код... ✨", "en": "Generating your visual code... ✨", "uk": "Генеруємо ваш візуальний код... ✨" },

    "aes-seo-h2": { "ru": "Что такое психологическая эстетика (Core Vibe)?", "en": "What is psychological aesthetics (Core Vibe)?", "uk": "Що таке психологічна естетика (Core Vibe)?" },
    "aes-seo-p1": { "ru": "В современном интернете визуальные эстетики (такие как Dark Academia, Cottagecore, Cyberpunk, Ethereal, Soft Minimalism) стали новым способом самовыражения. Это не просто стиль одежды, это визуальный язык, который переводит наше внутреннее психологическое состояние в образы, цвета и звуки.", "en": "In the modern internet, visual aesthetics (such as Dark Academia, Cottagecore, Cyberpunk, Ethereal, Soft Minimalism) have become a new way of self-expression. It is not just a clothing style, it is a visual language that translates our inner psychological state into images, colors, and sounds.", "uk": "У сучасному інтернеті візуальні естетики (такі як Dark Academia, Cottagecore, Cyberpunk, Ethereal, Soft Minimalism) стали новим способом самовираження. Це не просто стиль одягу, це візуальна мова, яка переводить наш внутрішній психологічний стан в образи, кольори та звуки." },
    "aes-seo-h3-1": { "ru": "Как AI определяет ваш стиль?", "en": "How does AI determine your style?", "uk": "Як AI визначає ваш стиль?" },
    "aes-seo-li-1": { "ru": "<strong>Пространственный якорь:</strong> Ваш выбор интерьера показывает, как вы организуете свои мысли — хаотично, структурно или органично.", "en": "<strong>Spatial anchor:</strong> Your choice of interior shows how you organize your thoughts — chaotically, structurally, or organically.", "uk": "<strong>Просторовий якір:</strong> Ваш вибір інтер'єру показує, як ви організовуєте свої думки — хаотично, структурно чи органічно." },
    "aes-seo-li-2": { "ru": "<strong>Звуковой профиль:</strong> Музыка при напряжении раскрывает ваши механизмы преодоления стресса.", "en": "<strong>Sound profile:</strong> Music during tension reveals your stress-coping mechanisms.", "uk": "<strong>Звуковий профіль:</strong> Музика при напрузі розкриває ваші механізми подолання стресу." },
    "aes-seo-li-3": { "ru": "<strong>Атмосферный комфорт:</strong> Погода и предметы отражают ваши отношения со временем.", "en": "<strong>Atmospheric comfort:</strong> Weather and objects reflect your relationship with time.", "uk": "<strong>Атмосферний комфорт:</strong> Погода та предмети відображають ваші відносини з часом." },
    "aes-seo-p2": { "ru": "Наш алгоритм анализирует пересечение этих 5 визуальных маркеров и находит ту самую 'Core' эстетику, которая наиболее точно резонирует с вашей уникальной личностью.", "en": "Our algorithm analyzes the intersection of these 5 visual markers and finds that very 'Core' aesthetic that most accurately resonates with your unique personality.", "uk": "Наш алгоритм аналізує перетин цих 5 візуальних маркерів і знаходить ту саму 'Core' естетику, яка найбільш точно резонує з вашою унікальною особистістю." }
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
