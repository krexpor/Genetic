document.addEventListener("DOMContentLoaded", function() {
    // Перевіряємо, чи користувач вже погодився
    if (localStorage.getItem("cookieAccepted")) return;

    // 1. Автоматично додаємо стилі плашки
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-toast {
            position: fixed;
            bottom: 20px;
            right: -400px;
            background: rgba(26, 28, 35, 0.85);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(218, 54, 51, 0.2);
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            padding: 20px;
            border-radius: 12px;
            width: 280px;
            z-index: 9999;
            transition: right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.4s ease;
            opacity: 0;
            text-align: left;
            font-family: 'Inter', -apple-system, sans-serif;
        }
        .cookie-toast.show { right: 20px; opacity: 1; }
        .cookie-toast.hide { opacity: 0; right: -400px; }
        .cookie-toast p {
            color: #8b949e;
            font-size: 0.85rem;
            margin: 0 0 15px 0;
            line-height: 1.5;
        }
        .cookie-buttons { display: flex; align-items: center; gap: 15px; }
        .cookie-btn {
            background: transparent;
            color: #da3633;
            border: 1px solid #da3633;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.8rem;
            transition: all 0.3s;
            text-transform: uppercase;
        }
        .cookie-btn:hover { background: #da3633; color: #0b0c10; }
        .cookie-link { color: #64748b; font-size: 0.8rem; text-decoration: none; transition: 0.3s; }
        .cookie-link:hover { color: #f8fafc; text-decoration: underline; }
    `;
    document.head.appendChild(style);

    // 2. Автоматично додаємо HTML плашки
    const cookieHtml = `
    <div id="cookie-toast" class="cookie-toast">
        <p>Ми використовуємо трохи cookies для аналітики Google. Ніякої магії, тільки базова статистика. 🍪</p>
        <div class="cookie-buttons">
            <button id="accept-cookies" class="cookie-btn">Ок, зрозуміло</button>
            <a href="/privacy.html" class="cookie-link">Детальніше</a>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', cookieHtml);

    // 3. Логіка появи та зникнення
    const cookieToast = document.getElementById("cookie-toast");
    const acceptBtn = document.getElementById("accept-cookies");

    // Плавно показуємо через 1 секунду
    setTimeout(() => { cookieToast.classList.add("show"); }, 1000);

    // Ховаємо при кліку і запам'ятовуємо вибір
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookieAccepted", "true");
        cookieToast.classList.remove("show");
        
        // Повністю видаляємо елемент з коду після завершення анімації
        setTimeout(() => cookieToast.remove(), 500); 
    });
});
