// Функція перемикання теми
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('site-theme', newTheme);
    updateThemeIcon(newTheme);
}

// Функція оновлення іконки на кнопці
function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerText = theme === 'dark' ? '☀️' : '🌙';
    }
}

// При завантаженні сторінки перевіряємо, яку тему обрав користувач раніше
document.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('site-theme');
    
    // Якщо користувач ще не обирав тему, ставимо темну за замовчуванням
    if (!savedTheme) {
        savedTheme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
});

// --- КНОПКА ПЛАВНОГО СКРОЛЛА НАВЕРХ ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Создаем кнопку динамически
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Вернуться наверх');
    
    // Вставляем красивую минималистичную SVG-стрелочку
    scrollBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    
    // Добавляем кнопку на страницу
    document.body.appendChild(scrollBtn);

    // 2. Отслеживаем скролл, чтобы показывать/скрывать кнопку
    window.addEventListener('scroll', () => {
        // Если прокрутили больше 300 пикселей вниз — показываем кнопку
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    // 3. Плавный скролл наверх при клике
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

