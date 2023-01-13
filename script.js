document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault(); // prevent default behavior
    function clearContent() {
      document
        .querySelectorAll('.subject, h2')
        .forEach((element) => element.remove());
    }
    clearContent();
    var A = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
    var P = Math.floor(Math.random() * (94 - 90 + 1)) + 90;
    var AP = Math.floor(Math.random() * (89 - 85 + 1)) + 85;
    var E = Math.floor(Math.random() * (84 - 80 + 1)) + 80;
    var B = Math.floor(Math.random() * (79 - 75 + 1)) + 75;
    // create object to map letter grades to numerical values
    var letterGrades = {
      A: A,
      P: P,
      AP: AP,
      E: E,
      B: B,
    };

    // extract values from inputs
    const inputs = document.querySelectorAll('input[type=text]');
    let gradesArray = [];
    inputs.forEach((input) => {
      if (!(input.value in letterGrades)) {
        alert('Invalid Input, Please enter a valid letter grade!');
        return;
      }
      gradesArray.push(letterGrades[input.value]);
    });
    if (gradesArray.length === 0) {
      alert('Invalid Input, Please enter a valid letter grade!');
      return;
    }
    // calculate the final grade
    let sum = 0;
    gradesArray.forEach((grade) => (sum += grade));
    let final = sum / gradesArray.length;
    let finalGrade = document.createElement('h1');
    finalGrade.innerText = `Final grade: ${final}`;
    finalGrade.style.display = 'block';
    finalGrade.style.position = 'absolute';
    finalGrade.style.top = '50%';
    finalGrade.style.left = '50%';
    finalGrade.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(finalGrade);
    document.getElementById('submit-btn').style.display = 'none';
  });
});
