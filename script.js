const textElement = document.getElementById("text");
const feedbackElement = document.getElementById("feedback");

const correctAnswers = [
    "a", "a", "the", "the", "a", "a", "the", "the", "an", "a", "the", "a", "the", "the", "a", "the", "a", "a", "the", "the", "a", "the", "the", "the", "the"
];

function checkAnswers() {
  let mistakes = false;
  let feedback = "";

  const articleSelects = textElement.querySelectorAll("[name='
