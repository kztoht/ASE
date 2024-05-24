function checkAnswers() {
    const dropdowns = document.querySelectorAll('.dropdown');
    let correct = true;
    let feedback = "";

    dropdowns.forEach(dropdown => {
        if (dropdown.value !== dropdown.options[dropdown.selectedIndex].value) {
            correct = false;
            feedback += "Incorrect answer: " + dropdown.options[dropdown.selectedIndex].value + " should be selected. ";
        }
    });

    if (correct) {
        feedback = "All answers are correct!";
    }

    document.getElementById('feedback').innerText = feedback;
}
