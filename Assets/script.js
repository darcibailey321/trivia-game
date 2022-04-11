var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
    {
        question: "What is the first letter of the alphabet?",
        choices: ["A", "B", "C"],
 
        answer: 'A'
    },  
    {
        question: "What is the fifth letter of the alphabet?",
        choices: ["D", "E", "F"],
 
        answer: 'E'
    },
    {
        question: "What is the tenth letter of the alphabet?",
        choices: ["H", "I", "J"],
 
        answer: 'J'
    }
];


function generateQuiz() {
    debugger
    var currentQuestion = myQuestions[0].question
    var currentChoices = myQuestions[0].choices
    var currentAnswer = myQuestions[0].answer

    var question = document.createElement("p");
    question.textContent = currentQuestion
    document.getElementById("quiz").appendChild(question);


    for (var i=0; i<3; i++){
        var selector = document.createElement("button");
        selector.textContent = currentChoices[i]
        selector.addEventListener("click", function (e){
            console.log(e.target.textContent)
        })
        document.getElementById("quiz").appendChild(selector)
    }
}


var buttonStart = document.querySelector("#start")
var timeEl = document.getElementById("timer");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
    timeEl.textContent = secondsLeft + " second left.";
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

buttonStart.addEventListener("click",function() {
    setTime();
    generateQuiz();

});