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
    
    // Якщо користувач ще не обирав тему, перевіряємо налаштування його системи
    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
});
