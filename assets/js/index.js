var questions = [
  {
    text: "In The Matrix, what colored pill does Neo take?",
    choices: ["Red", "Blue", "Green", "None of the above"],
    answer: "Red",
  },
  {
    text: "What is the name of the skyscraper in Die Hard?",
    choices: ["Freedom Tower", "Nakatomi Plaza", "Shanghai Tower", "Nakatomi Tower"],
    answer: "Nakatomi Plaza",
  },
  {
    text: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
    choices: ["Horse", "Pig", "Giraffe", "Donkey"],
    answer: "Horse",
  },
  {
    text: "What Hollywood movie star plays himself in Zombieland?",
    choices: ["Bob Marley", "Bruno Mars", "Bernie Mac", "Bill Murray"],
    answer: "Bill Murray",
  },
  {
    text: "Joaquin Phoenix received his first Oscar nomination for playing Roman emperor Commodus in what 2000 Oscar-winning epic?",
    choices: ["Signs", "Walk the Line", "Her", "Gladiator"],
    answer: "Gladiator",
  },
  {
    text: "What is the highest-grossing R-rated movie of all time?",
    choices: ["Deadpool", "It", "Joker", "Logan"],
    answer: "Joker",
  },
  {
    text: "What is the real name of Uma Thurman’s “The Bride” character from Kill Bill?",
    choices: ["Beatrix Kiddo", "Mary Kiddo", "Beatrice Kiddo", "Lisa Kiddo"],
    answer: "Beatrix Kiddo",
  },
  {
    text: "Who played the Green Goblin in 2002 box-office smash Spider-Man?",
    choices: ["Robin Williams", "Willem Dafoe", "George Clooney", "William Shatner"],
    answer: "Willem Dafoe",
  },
  {
    text: "Who directed the hit 2017 movie Get Out?",
    choices: ["James Wan", "Jordan Peele", "Tim Story", "None of the above"],
    answer: "Jordan Peele",
  },
  {
    text: "What was the name of the first film in the 'Harry Potter' series?",
    choices: ["Prisoner of Azkaban", "Goblet of Fire", "Sorcerer's Stone", "Chamber of Secrets"],
    answer: "Sorcerer's Stone",
  },
];

var TIME_PER_QUESTION = 5;
var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * TIME_PER_QUESTION;

var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var questionTextEl = document.getElementById("question-text");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsInputEl = document.getElementById("initials");
var initialsSubmitBtn = document.getElementById("submit");

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  questionsEl.setAttribute("class", "show");

  timerId = setInterval(handleTicks, 1000);

  askQuestions();
}

function askQuestions() {
  var currentQuestionObj = questions[quizQuestionsIndex];
  console.log(currentQuestionObj);
  var questionText = currentQuestionObj.text;

  questionTextEl.textContent = questionText;

  choicesEl.innerHTML = "";
  choicesEl.textContent = "";

  var choicesArr = currentQuestionObj.choices;
  for (var i = 0; i < choicesArr.length; i++) {
    var liEl = document.createElement("li");
    console.log(choicesArr[i]);
    liEl.setAttribute("value", choicesArr[i]);
    liEl.textContent = i + 1 + ". " + choicesArr[i];
    choicesEl.appendChild(liEl);
  }
}

function quizEnd() {
  console.log("quizEnd");
  clearInterval(timerId);
  questionsEl.setAttribute("class", "hide");
  finalScoreEl.textContent = timeCount;
  endScreenEl.setAttribute("class", "show");

  return;
}

function handleTicks() {
  timeCount--;
  timerEl.textContent = timeCount;
  if (!timeCount) {
    console.log("Time is up");
    clearInterval(timerId);
    quizEnd();
  }
}

function handleChoices(event) {
  console.log("handleChoices");
  var choiceValue = event.target.getAttribute("value");
  console.log(choiceValue);
  if (choiceValue === questions[quizQuestionsIndex].answer) {
    feedbackEl.textContent = "Correct!";
  }

  else {
    timeCount -= TIME_PER_QUESTION;
    if (timeCount < 0) {
      timeCount = 0;
    }
    timerEl.textContent = timeCount;
    feedbackEl.textContent = "Wrong!";
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "hide");
  }, 1500);

  quizQuestionsIndex++;
  if (quizQuestionsIndex === questions.length) {
    quizEnd();
  } else {
    askQuestions();
  }
}

function saveScores() {
  console.log("saveScores");
  var initialsValue = initialsInputEl.value.trim();
  var scores = [];
  if (initialsValue) {
    scores = JSON.parse(localStorage.getItem("scores"));
    if (!scores) {
      scores = [];
    }

    var newScore = {
      score: timeCount,
      initials: initialsValue,
    };
    console.log(scores);
    scores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(scores));
  }
  location.href = "./highscores.html";

  return;
}

function handleInitialsKeyup(event) {
  console.log("handleInitialsKeyup");
  console.log("event.key", event.key);
  if (event.key === "Enter") {
    saveScores();
  }
  return;
}

function handleInitialsSubmit(event) {
  console.log("handleInitialsSubmit");

  saveScores();
}

startBtn.addEventListener("click", startQuiz);

choicesEl.onclick = handleChoices;

initialsInputEl.onkeyup = handleInitialsKeyup;

initialsSubmitBtn.addEventListener("click", handleInitialsSubmit);
