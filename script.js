document.querySelectorAll('.dropdown').forEach(element => {
  element.onclick = function() {
    let currentText = element.textContent.replace(/[\[\]]/g, '');
    let dropdown = createDropdown(currentText);
    dropdown.onchange = function() {
      element.textContent = '[' + this.value + ']';
      element.appendChild(dropdown); // Hide dropdown after selection
    };
    element.innerHTML = '';
    element.appendChild(dropdown);
  };
});

function createDropdown(selected) {
  let options = ['a', 'an', 'the', ''];
  let select = document.createElement('select');
  options.forEach(option => {
    let opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option || 'none';
    if (option === selected) opt.selected = true;
    select.appendChild(opt);
  });
  return select;
}

function checkAnswers() {
  let answers = ['a', 'a', 'the', 'the', 'a', 'a', 'a', 'the', 'the', 'the', 'a', 'the', 'an', 'the', 'a', 'the', 'a', 'the'];
  document.querySelectorAll('.dropdown').forEach((element, index) => {
    let userAnswer = element.textContent.replace(/[\[\]]/g, '');
    if (userAnswer === answers[index]) {
      element.classList.add('correct');
      element.classList.remove('incorrect');
    } else {
      element.classList.add('incorrect');
      element.classList.remove('correct');
    }
  });
}
