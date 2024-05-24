let attemptCount = 0;

document.getElementById('submitBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.article');
    let correctCount = 0;
    let allCorrect = true;

    selects.forEach(select => {
        const correctAnswer = select.getAttribute('data-answer');
        if (select.value === correctAnswer) {
            correctCount++;
            select.style.backgroundColor = ''; // Reset background color
        } else {
            allCorrect = false;
            select.style.backgroundColor = ''; // Reset background color
        }
    });

    const totalQuestions = selects.length;
    const grade = (correctCount / totalQuestions) * 100;

    document.getElementById('result').innerText = `Your grade is ${grade.toFixed(2)}%.`;

    attemptCount++;

    if (!allCorrect && attemptCount >= 3) {
        selects.forEach(select => {
            const correctAnswer = select.getAttribute('data-answer');
            if (select.value !== correctAnswer) {
                select.style.backgroundColor = 'orange';
            }
        });
    }
});
