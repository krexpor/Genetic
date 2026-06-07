document.addEventListener("DOMContentLoaded", function() {
    const cookieHtml = `
    <div id="cookie-toast" class="cookie-toast" style="position:fixed; bottom:20px; right:20px; background:rgba(26,28,35,0.9); backdrop-filter:blur(10px); border:1px solid #30363d; padding:20px; border-radius:12px; width:280px; z-index:9999; text-align:left; font-family:sans-serif;">
        <p style="color:#8b949e; font-size:0.85rem; margin:0 0 15px 0; line-height:1.5;">Мы используем cookies для аналитики Google. Никакой магии, только статистика. 🍪</p>
        <div style="display:flex; gap:15px; align-items:center;">
            <button id="accept-cookies" style="background:transparent; color:#da3633; border:1px solid #da3633; padding:8px 15px; border-radius:6px; cursor:pointer; font-size:0.8rem; text-transform:uppercase;">Ок, понятно</button>
            <a href="/privacy.html" style="color:#64748b; font-size:0.8rem; text-decoration:none;">Подробнее</a>
        </div>
    </div>`;

    if (!localStorage.getItem("cookieAccepted")) {
        document.body.insertAdjacentHTML('beforeend', cookieHtml);
        document.getElementById("accept-cookies").addEventListener("click", function() {
            localStorage.setItem("cookieAccepted", "true");
            document.getElementById("cookie-toast").style.display = 'none';
        });
    }
});
