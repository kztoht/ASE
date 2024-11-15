document.getElementById('submitBtn').addEventListener('click', function() {
    var studentName = document.getElementById('studentName').value;
    var selects = document.querySelectorAll('.article');
    var total = selects.length;
    var correct = 0;
    selects.forEach(function(select) {
        var answer = select.dataset.answer;
        if (select.value.toLowerCase() == answer.toLowerCase()) {
            correct++;
        }
    });
    var grade = Math.round((correct / total) * 100);
    // Display the student's name next to the grade
    document.getElementById('result').innerHTML = studentName + ', your grade is: ' + grade + '%';
});
