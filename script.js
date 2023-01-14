document.getElementById('submit-btn').addEventListener('click', function () {
  // Collect user input and convert to uppercase
  var fil = document.getElementById('fil').value.toUpperCase();
  var eng = document.getElementById('eng').value.toUpperCase();
  var math = document.getElementById('math').value.toUpperCase();
  var sci = document.getElementById('sci').value.toUpperCase();
  var ap = document.getElementById('ap').value.toUpperCase();
  var clve = document.getElementById('clve').value.toUpperCase();
  var tle = document.getElementById('tle').value.toUpperCase();
  var mapeh = document.getElementById('mapeh').value.toUpperCase();
  var comp = document.getElementById('comp').value.toUpperCase();

  // Check for missing grades
  if (
    fil == '' ||
    eng == '' ||
    math == '' ||
    sci == '' ||
    ap == '' ||
    clve == '' ||
    tle == '' ||
    mapeh == '' ||
    comp == ''
  ) {
    alert('Please fill out all subjects.');
    return;
  }

  // Map letter grades to set variables
  var A = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
  var P = Math.floor(Math.random() * (94 - 90 + 1)) + 90;
  var AP = Math.floor(Math.random() * (89 - 85 + 1)) + 85;
  var E = Math.floor(Math.random() * (84 - 80 + 1)) + 80;
  var B = Math.floor(Math.random() * (79 - 75 + 1)) + 75;

  // Collect number values for letter grades
  var numGrades = [];
  if (fil == 'A') {
    numGrades.push(A);
  } else if (fil == 'P') {
    numGrades.push(P);
  } else if (fil == 'AP') {
    numGrades.push(AP);
  } else if (fil == 'E') {
    numGrades.push(E);
  } else if (fil == 'B') {
    numGrades.push(B);
  }
  if (eng == 'A') {
    numGrades.push(A);
  } else if (eng == 'P') {
    numGrades.push(P);
  } else if (eng == 'AP') {
    numGrades.push(AP);
  } else if (eng == 'E') {
    numGrades.push(E);
  } else if (eng == 'B') {
    numGrades.push(B);
  }
  if (math == 'A') {
    numGrades.push(A);
  } else if (math == 'P') {
    numGrades.push(P);
  } else if (math == 'AP') {
    numGrades.push(AP);
  } else if (math == 'E') {
    numGrades.push(E);
  } else if (math == 'B') {
    numGrades.push(B);
  }
  if (sci == 'A') {
    numGrades.push(A);
  } else if (sci == 'P') {
    numGrades.push(P);
  } else if (sci == 'AP') {
    numGrades.push(AP);
  } else if (sci == 'E') {
    numGrades.push(E);
  } else if (sci == 'B') {
    numGrades.push(B);
  }
  if (ap == 'A') {
    numGrades.push(A);
  } else if (ap == 'P') {
    numGrades.push(P);
  } else if (ap == 'AP') {
    numGrades.push(AP);
  } else if (ap == 'E') {
    numGrades.push(E);
  } else if (ap == 'B') {
    numGrades.push(B);
  }
  if (clve == 'A') {
    numGrades.push(A);
  } else if (clve == 'P') {
    numGrades.push(P);
  } else if (clve == 'AP') {
    numGrades.push(AP);
  } else if (clve == 'E') {
    numGrades.push(E);
  } else if (clve == 'B') {
    numGrades.push(B);
  }
  if (tle == 'A') {
    numGrades.push(A);
  } else if (tle == 'P') {
    numGrades.push(P);
  } else if (tle == 'AP') {
    numGrades.push(AP);
  } else if (tle == 'E') {
    numGrades.push(E);
  } else if (tle == 'B') {
    numGrades.push(B);
  }
  if (mapeh == 'A') {
    numGrades.push(A);
  } else if (mapeh == 'P') {
    numGrades.push(P);
  } else if (mapeh == 'AP') {
    numGrades.push(AP);
  } else if (mapeh == 'E') {
    numGrades.push(E);
  } else if (mapeh == 'B') {
    numGrades.push(B);
  }
  if (comp == 'A') {
    numGrades.push(A);
  } else if (comp == 'P') {
    numGrades.push(P);
  } else if (comp == 'AP') {
    numGrades.push(AP);
  } else if (comp == 'E') {
    numGrades.push(E);
  } else if (comp == 'B') {
    numGrades.push(B);
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
