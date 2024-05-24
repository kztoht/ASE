document.getElementById('submitBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.article');
    let allCorrect = true;

    selects.forEach(select => {
        const correctAnswer = select.getAttribute('data-answer');
        if (select.value.toLowerCase() !== correctAnswer.toLowerCase()) {
            select.style.backgroundColor = 'orange';
            allCorrect = false;
        } else {
            select.style.backgroundColor = '';
        }
    });

    if (allCorrect) {
        alert('All answers are correct!');
    } else {
        alert('Some answers are incorrect. Please try again.');
    }
});
