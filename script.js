document.getElementById('submitBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.article');
    let allCorrect = true;

    selects.forEach(select => {
        const correctAnswer = select.getAttribute('data-answer');
        if (select.value.toLowerCase() !== correctAnswer.toLowerCase()) {
            select.classList.add('wrong');
            allCorrect = false;
        } else {
            select.classList.remove('wrong');
        }
    });

    if (allCorrect) {
        alert('All answers are correct!');
    } else {
        alert('Some answers are incorrect. Please try again.');
    }
});
