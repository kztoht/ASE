const textElement = document.getElementById("text");
const feedbackElement = document.getElementById("feedback");

const correctAnswers = [
    "", "a", "a", "the", "the", "a", "a", "the", "the", "an", "a", "the", "a", "the", "the", "a", "the", "a", "a", "the", "the", "a", "the", "the", "the", "the"
];

function checkAnswers() {
  let mistakes = false;
  let feedback = "";

  const articleSelects = textElement.querySelectorAll("select[name='article']");

  articleSelects.forEach((select, index) => {
    // Create the select element dynamically
    const option = document.createElement("option");
    option.value = "";
    option.text = "--"; // Default option text
    select.appendChild(option);

    // Add other options based on correct answers
    const options = ["a", "an", "the", ""]; // All possible options
    options.forEach(choice => {
      const option = document.createElement("option");
      option.value = choice;
      option.text = choice;
      select.appendChild(option);
    });

    // Set the selected value based on user choice (if any)
    select.value = select.options[select.selectedIndex].value;

    // Check if the answer is correct
    if (select.value !== correctAnswers[index]) {
      mistakes = true;
      select.style.backgroundColor = "pink"; // Highlight incorrect answer
    }
  });

  feedback = mistakes ? "There are some mistakes. Please try again." : "All answers are correct!";
  feedbackElement.textContent = feedback;
}
