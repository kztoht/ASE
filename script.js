function checkAnswers() {
    const answers = {
        word1: "a",
        word2: "a",
        word3: "the",
        word4: "the",
        // Continue adding the correct answers for each dropdown ID
    };

    Object.keys(answers).forEach(function(id) {
        const dropdown = document.getElementById(id);
        if (dropdown.value === answers[id]) {
            dropdown.classList.add('correct');
            dropdown.classList.remove('incorrect');
        } else {
            dropdown.classList.add('incorrect');
            dropdown.classList.remove('correct');
        }
    });
}
