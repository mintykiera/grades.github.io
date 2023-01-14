document.getElementById('submit-btn').addEventListener('click', function () {
  var validInput = /^(A|P|B|E|AP|IE)$/;
  var grades = [
    'fil',
    'eng',
    'math',
    'sci',
    'ap',
    'clve',
    'tle',
    'mapeh',
    'comp',
  ];
  var numGrades = [];
  var missing = false;

  for (var i = 0; i < grades.length; i++) {
    var grade = document.getElementById(grades[i]).value.toUpperCase();

    if (!validInput.test(grade)) {
      alert('Invalid input, please use a valid letter grade.');
      return;
    } else if (grade == '') {
      missing = true;
    } else {
      numGrades.push(grade);
    }
  }

  if (missing) {
    alert('Please fill out all subjects.');
    return;
  }

  //Map letter grades to set variables
  var A = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
  var P = Math.floor(Math.random() * (94 - 90 + 1)) + 90;
  var AP = Math.floor(Math.random() * (89 - 85 + 1)) + 85;
  var E = Math.floor(Math.random() * (84 - 80 + 1)) + 80;
  var B = Math.floor(Math.random() * (79 - 75 + 1)) + 75;
  var IE = Math.floor(Math.random() * (74 - 70 + 1)) + 70;

  // Collect number values for letter grades
  for (var i = 0; i < numGrades.length; i++) {
    if (numGrades[i] == 'A') {
      numGrades[i] = A;
    } else if (numGrades[i] == 'P') {
      numGrades[i] = P;
    } else if (numGrades[i] == 'AP') {
      numGrades[i] = AP;
    } else if (numGrades[i] == 'E') {
      numGrades[i] = E;
    } else if (numGrades[i] == 'B') {
      numGrades[i] = B;
    } else if (numGrades[i] == 'IE') {
      numGrades[i] = IE;
    }
  }

  // Find general average
  var sum = 0;
  for (var i = 0; i < numGrades.length; i++) {
    sum += numGrades[i];
  }
  var final = (sum / numGrades.length).toFixed(2);

  // Display final grade
  let finalGrade = document.createElement('h1');
  let container = document.querySelector('.container');
  finalGrade.innerText = `Final grade: ${final}`;
  finalGrade.style.display = 'block';
  finalGrade.style.position = 'absolute';
  finalGrade.style.top = '50%';
  finalGrade.style.left = '50%';
  finalGrade.style.transform = 'translate(-50%, -50%)';
  finalGrade.style.textAlign = 'center';
  container.appendChild(finalGrade);

  // Add clearContent function
  function clearContent() {
    document.querySelectorAll('.subject, h2, p, button').forEach((elem) => {
      elem.remove();
    });
  }
  clearContent();
});
