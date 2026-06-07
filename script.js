// 1. Автоматически загружаем данные при открытии страницы
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('fatherHeight')) {
        document.getElementById('father').value = localStorage.getItem('fatherHeight');
    }
    if (localStorage.getItem('motherHeight')) {
        document.getElementById('mother').value = localStorage.getItem('motherHeight');
    }
    if (localStorage.getItem('childGender')) {
        document.getElementById('gender').value = localStorage.getItem('childGender');
    }
});

function calculateHeight() {
    const fatherHeight = parseFloat(document.getElementById('father').value);
    const motherHeight = parseFloat(document.getElementById('mother').value);
    const gender = document.getElementById('gender').value;

    if (!fatherHeight || !motherHeight || fatherHeight <= 0 || motherHeight <= 0) {
        alert("Пожалуйста, введите корректный рост родителей!");
        return;
    }

    // 2. Сохраняем введенные данные в память браузера (Local Storage)
    localStorage.setItem('fatherHeight', fatherHeight);
    localStorage.setItem('motherHeight', motherHeight);
    localStorage.setItem('childGender', gender);

    let predictedHeight = 0;

    if (gender === 'boy') {
        predictedHeight = (fatherHeight + motherHeight + 13) / 2;
    } else {
        predictedHeight = (fatherHeight + motherHeight - 13) / 2;
    }

    predictedHeight = predictedHeight.toFixed(1);

    document.getElementById('final-height').innerText = predictedHeight + " см";
    document.getElementById('result-box').style.display = 'block';
}
