function checkAnswers() {
    const dropdowns = document.querySelectorAll('.dropdown');
    let correct = true;
    let feedback = "";

    dropdowns.forEach(dropdown => {
        const selectedValue = dropdown.value;
        const correctValue = dropdown.dataset.correct;

        if (selectedValue !== correctValue) {
            correct = false;
            dropdown.style.backgroundColor = "orange"; // Highlight incorrect dropdown
            feedback += "Incorrect answer: " + correctValue + " should be selected. ";
        } else {
            dropdown.style.backgroundColor = ""; // Reset background color
        }
    });

    if (correct) {
        feedback = "All answers are correct!";
    }

    document.getElementById('feedback').innerText = feedback;
}
