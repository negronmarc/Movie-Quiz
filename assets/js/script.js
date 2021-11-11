// Data
// Global variables for application state

var questions = [
    {
        question: "In The Matrix, what colored pill does Neo take?",
        choices: ["Red", "Blue", "Green", "None of the above"],
        answer: 0, //"Red"
    },
    {
        question: "What’s the name of the skyscraper in Die Hard?",
        choices: ["Freedom Tower", "Nakatomi Plaza", "Shanghai Tower", "Nakatomi Tower"],
        answer: 1, //"Nakatomi Plaza"
    },
    {
        question: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        choices: ["Horse", "Pig", "Giraffe", "Donkey"],
        answer: 0, //"Horse"
    },
    {
        question: "What Hollywood movie star plays himself in Zombieland?",
        choices: ["Bob Marley", "Bruno Mars", "Bernie Mac", "Bill Murray"],
        answer: 3, //"Bill Murray"
    },
    {
        question: "Joaquin Phoenix received his first Oscar nomination for playing Roman emperor Commodus in what 2000 Oscar-winning epic?",
        choices: ["Signs", "Walk the Line", "Her", "Gladiator"],
        answer: 3, //"Gladiator"
    },
    {
        question: "What is the highest-grossing R-rated movie of all time?",
        choices: ["Deadpool", "It", "Joker", "Logan"],
        answer: 2, //"Joker"
    },
    {
        question: "What is the real name of Uma Thurman’s “The Bride” character from Kill Bill?",
        choices: ["Beatrix Kiddo", "Mary Kiddo", "Beatrice Kiddo", "Lisa Kiddo"],
        answer: 0, //"Beatrix Kiddo"
    },
    {
        question: "Who played the Green Goblin in 2002 box-office smash Spider-Man?",
        choices: ["Robin Williams", "Willem Dafoe", "George Clooney", "William Shatner"],
        answer: 1, //"Willem Dafoe"
    },
    {
        question: "Who directed the hit 2017 movie Get Out?",
        choices: ["James Wan", "Jordan Peele", "Tim Story", "None of the above"],
        answer: 1, //"Jordan Peele"
    },
    {
        question: "What was the name of the first film in the 'Harry Potter' series?",
        choices: ["Prisoner of Azkaban", "Goblet of Fire", "Sorcerer's Stone", "Chamber of Secrets"],
        answer: 2, //"Sorcerer's Stone"
    },
];

// Variables

var lastQuestion = questions.length - 1;
// let runningQuestion = 0;
let count = 0;
const questionTime = 100; // 100s
const gaugeWidth = 150; // 150 px
const gaugeUnit = gaugeWidth / questionTime;
var timer;
score = 0;

var quizQuestionsIndex = 0;

// HTML elements

var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questList = document.getElementById("questions");
var questionText = document.getElementById("question-text");
var questionChoicesEl = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var results = document.getElementById("final-score");
var submitBtn = document.getElementById("submit");
var questionOne = document.getElementById("1");
var questionTwo = document.getElementById("2");
var questionThree = document.getElementById("3");
var questionFour = document.getElementById("4");
var questionFive = document.getElementById("5");
var questionSix = document.getElementById("6");
var questionSeven = document.getElementById("7");
var questionEight = document.getElementById("8");
var questionNine = document.getElementById("9");
var questionTen = document.getElementById("10");

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questList.setAttribute("class", "show");
};
        
startBtn.addEventListener("click", startQuiz);

function showQuestion() {
    var currentQuestion = questions[quizQuestionsIndex];

};












