
function aboutMeGame() {
  var correctAnswers = 0;
  var answer1 = prompt("Did I grow up in Puyallup? Yes or no.");
  if ((answer1.toUpperCase() === "YES") || (answer1.toUpperCase() === "Y")) {
    alert("That's correct. I did grow up in Puyallup.");
    correctAnswers +=1;
    console.log("That's correct. I did grow up in Puyallup.");
  } else {
    alert("Wrong. I did grow up in Puyallup.");
    console.log("Wrong. I did grow up in Puyallup.");
  }

  var answer2 = prompt("Have I been to China? Yes or no.");
  if ((answer2.toUpperCase() === "YES") || (answer2.toUpperCase() === "Y")) {
    alert("That's correct. I have been to China.");
    correctAnswers +=1;
    console.log("That's correct. I have been to China.");
  } else {
    alert("Wrong. I have been to China.");
    console.log("Wrong. I have been to China.");
  }

  var answer3 = prompt("Did I repell down the Jackson Federal Building? Yes or no.");
  if ((answer3.toUpperCase() === "YES") || (answer3.toUpperCase() === "Y")) {
    alert("That's correct. I did repell down the Jackson Federal Building.");
    correctAnswers +=1;
    console.log("That's correct. I did repell down the Jackson Federal Building.");
  } else {
    alert("Wrong. I did repell down the Jackson Federal Building.");
    console.log("Wrong. I did repell down the Jackson Federal Building.");
  }

  alert("You got " + correctAnswers + " question(s) correct.");
  if (correctAnswers === 3) {
    alert("Do I know you?");
  } else if
    (correctAnswers === 2) {
    alert("Not bad!");
  } else {
    alert("You should get to know me better.");
  }
}

function planetGame() {
  var correctAnswers = 0;
  var planet = ["VENUS", "MARS", "NEPTUNE"];
  var question = [
    "Which is the hottest planet?",
    "Which planet has the tallest mountain?",
    "Which planet was discovered using math instead of a telescope?"
  ];
  for (var index = 0; index < question.length; index++) {
    question[index] = prompt(question[index]).toUpperCase();
    if (question[index] === planet[index]) {
      alert("Excellent! That's right!");
      correctAnswers += 1;
      } else {
        alert("Sorry. The correct answer is " + planet[index]);
      }
  }
  alert("You got " + correctAnswers + " question(s) correct.");
  if (correctAnswers === 3) {
    alert("Who are you? Neil deGrasse Tyson?");
  } else if
    (correctAnswers === 2) {
    alert("Not bad!");
  } else {
    alert("You may want to study up.");
    }
}

$('#spouse').hide();
  $('.spouse').on('click', function(){
    $('#spouse').slideToggle("slow", "linear");
  });

