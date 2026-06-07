function calculateHeight() {
    const fatherHeight = parseFloat(document.getElementById('father').value);
    const motherHeight = parseFloat(document.getElementById('mother').value);
    const gender = document.getElementById('gender').value;

    if (!fatherHeight || !motherHeight || fatherHeight <= 0 || motherHeight <= 0) {
        alert("Пожалуйста, введите корректный рост родителей!");
        return;
    }

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