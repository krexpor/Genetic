// export.js - Універсальний скрипт для генерації картинок з HTML

function downloadAsImage(targetId, btnElement) {
    const card = document.getElementById(targetId);
    
    if (!card) {
        console.error(`Блок з ID "${targetId}" не знайдено!`);
        return;
    }

    // Зберігаємо оригінальний текст кнопки та блокуємо її від подвійного кліку
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = "⏳ Генерация...";
    btnElement.disabled = true;
    btnElement.style.opacity = "0.7";

    // Налаштування для створення картинки високої якості (scale: 3)
    html2canvas(card, {
        backgroundColor: '#0f0f11', // Колір фону (темний)
        scale: 3,                   // Висока роздільна здатність
        useCORS: true               // Дозвіл на завантаження зовнішніх шрифтів/картинок
    }).then(canvas => {
        // Створюємо віртуальне посилання для завантаження
        const link = document.createElement('a');
        link.download = 'krexpor-result.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Відновлюємо кнопку
        btnElement.innerHTML = originalText;
        btnElement.disabled = false;
        btnElement.style.opacity = "1";
    }).catch(err => {
        console.error("Ошибка при генерации изображения: ", err);
        btnElement.innerHTML = "❌ Ошибка";
        setTimeout(() => { 
            btnElement.innerHTML = originalText; 
            btnElement.disabled = false;
            btnElement.style.opacity = "1";
        }, 2000);
    });
}
