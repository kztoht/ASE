function checkAnswers() {
    // Object mapping dropdown IDs to their correct answers
    const answers = {
        word1: "a",
        word2: "a",
        word3: "the",
        word4: "the",
        word5: "a",
        word6: "a",
        word7: "a",
        word8: "the",
        word9: "the",
        word10: "the",
        word11: "a",
        word12: "the",
        word13: "an",
        word14: "the",
        word15: "a",
        word16: "the",
        word17: "a",
        word18: "the"
        // Add more pairs if additional dropdowns are added
    };

    Object.keys(answers).forEach(id => {
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
