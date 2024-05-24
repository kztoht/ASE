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
    option.text
