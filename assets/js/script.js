// Data
// Global variables for application state

var questions = [
    {
        text: "In The Matrix, what colored pill does Neo take?",
        choices: ["Red", "Blue", "Green", "None of the above"],
        answer: 0, //"Red"
    },
    {
        text: "What’s the name of the skyscraper in Die Hard?",
        choices: ["Freedom Tower", "Nakatomi Plaza", "Shanghai Tower", "Nakatomi Tower"],
        answer: 1, //"Nakatomi Plaza"
    },
    {
        text: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        choices: ["Horse", "Pig", "Giraffe", "Donkey"],
        answer: 0, //"Horse"
    },
    {
        text: "What Hollywood movie star plays himself in Zombieland?",
        choices: ["Bob Marley", "Bruno Mars", "Bernie Mac", "Bill Murray"],
        answer: 3, //"Bill Murray"
    },
    {
        text: "Joaquin Phoenix received his first Oscar nomination for playing Roman emperor Commodus in what 2000 Oscar-winning epic?",
        choices: ["Signs", "Walk the Line", "Her", "Gladiator"],
        answer: 3, //"Gladiator"
    },
    {
        text: "What is the highest-grossing R-rated movie of all time?",
        choices: ["Deadpool", "It", "Joker", "Logan"],
        answer: 2, //"Joker"
    },
    {
        text: "What is the real name of Uma Thurman’s “The Bride” character from Kill Bill?",
        choices: ["Beatrix Kiddo", "Mary Kiddo", "Beatrice Kiddo", "Lisa Kiddo"],
        answer: 0, //"Beatrix Kiddo"
    },
    {
        text: "Who played the Green Goblin in 2002 box-office smash Spider-Man?",
        choices: ["Robin Williams", "Willem Dafoe", "George Clooney", "William Shatner"],
        answer: 1, //"Willem Dafoe"
    },
    {
        text: "Who directed the hit 2017 movie Get Out?",
        choices: ["James Wan", "Jordan Peele", "Tim Story", "None of the above"],
        answer: 1, //"Jordan Peele"
    },
    {
        text: "What was the name of the first film in the 'Harry Potter' series?",
        choices: ["Prisoner of Azkaban", "Goblet of Fire", "Sorcerer's Stone", "Chamber of Secrets"],
        answer: 2, //"Sorcerer's Stone"
    },
]

var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * 2;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var questionsTextEl = document.getElementById("question-text");

//
// Main Process
//

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");

    // start timer
    timerId = setInterval(handleTicks, 1000);

    // ask questions
    askQuestions();
};

function askQuestions() {
    var currentQuestion = questions[quizQuestionsIndex];
    var questionTitle = currentQuestion.text;

    // display question text
    questionsTextEl.textContent = questionTitle;
    // ?? Display choices

    // Increment Index for the next question
    quizQuestionsIndex++;
};

function handleTicks() {
    // decement time count 
    timeCount--;
    // display time count 
    timerEl.textContent = timeCount;
    // Check time count if it reaches 0
    // if timed out quiz ends 
    if (!timeCount) {
        console.log("Time is up");
        clearInterval(timerId);
        // ?? quizend
    }
};

startBtn.addEventListener("click", startQuiz);













