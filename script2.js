document.getElementById('submitBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.article');
    let correctCount = 0;

    selects.forEach(select => {
        const correctAnswer = select.getAttribute('data-answer');
        if (select.value === correctAnswer) {
            correctCount++;
        }
    });

    const totalQuestions = selects.length;
    const grade = (correctCount / totalQuestions) * 100;

    document.getElementById('result').innerText = `Your grade is ${grade.toFixed(2)}%.`;
});
