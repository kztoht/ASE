document.getElementById('submitBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.article');
    let allCorrect = true;
    let correctCount = 0;

    selects.forEach(select => {
        const correctAnswer = select.getAttribute('data-answer');
        if (select.value.toLowerCase() !== correctAnswer.toLowerCase()) {
            select.style.backgroundColor = 'orange';
            allCorrect = false;
        } else {
            select.style.backgroundColor = '';
            correctCount++;
        }
    });

    const totalQuestions = selects.length;
    const grade = (correctCount / totalQuestions) * 100;

    if (allCorrect) {
        alert(`All answers are correct! Your grade is 100%.`);
    } else {
        alert(`Some answers are incorrect. Please try again. Your grade is ${grade.toFixed(2)}%.`);
    }
});
