document.addEventListener('DOMContentLoaded', (event) => {
    const articles = document.querySelectorAll('.article');
    const blanks = document.querySelectorAll('.blank');
    let correctCount = 0;
    let attempts = 0;

    articles.forEach(article => {
        article.addEventListener('dragstart', dragStart);
    });

    blanks.forEach(blank => {
        blank.addEventListener('dragover', dragOver);
        blank.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.innerText);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const droppedArticle = e.dataTransfer.getData('text');
        const correctAnswer = e.target.getAttribute('data-answer');

        if (droppedArticle === correctAnswer) {
            e.target.innerText = droppedArticle;
            e.target.classList.add('correct');
            correctCount++;
        } else {
            e.target.innerText = droppedArticle;
            e.target.classList.add('incorrect');
        }

        checkCompletion();
    }

    function checkCompletion() {
        attempts++;
        if (correctCount === blanks.length) {
            document.getElementById('result').innerText = `Congratulations! You completed the exercise correctly in ${attempts} attempts.`;
        } else if (attempts >= 3) {
            blanks.forEach(blank => {
                if (!blank.classList.contains('correct')) {
                    blank.classList.add('highlight');
                }
            });
            document.getElementById('result').innerText = `You've reached 3 attempts. The correct answers are highlighted.`;
        }
    }
});
