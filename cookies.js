document.addEventListener("DOMContentLoaded", function() {
    // HTML-код плашки, который будет вставлен автоматически
    const cookieHtml = `
    <div id="cookie-toast" class="cookie-toast">
        <p>Мы используем немного cookies для аналитики Google. Никакой магии, только базовая статистика. 🍪</p>
        <div class="cookie-buttons">
            <button id="accept-cookies" class="cookie-btn">Ок, понятно</button>
            <a href="/privacy.html" class="cookie-link">Подробнее</a>
        </div>
    </div>`;

    // Если пользователь еще не нажимал "Ок"
    if (!localStorage.getItem("cookieAccepted")) {
        document.body.insertAdjacentHTML('beforeend', cookieHtml);
        
        const cookieToast = document.getElementById("cookie-toast");
        const acceptBtn = document.getElementById("accept-cookies");

        // Показываем с задержкой
        setTimeout(() => {
            cookieToast.classList.add("show");
        }, 1000);

        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookieAccepted", "true");
            cookieToast.classList.remove("show");
            cookieToast.classList.add("hide");
        });
    }
});
