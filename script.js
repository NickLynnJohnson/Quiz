var clockTimer = document.getElementById("clock-timer");
var mainContainer = document.querySelector(".container");
var mainText = document.getElementById("main-text");
var landingTitle = document.getElementById("landing-title");
var starterPara = document.getElementById("starter-para");
var startButton = document.getElementById("start-button");

var totalSeconds = 100;
var positionInArray = 0;
var correctTotal = 0;

// Note: Question and Answer content pulled from: https://data-flair.training/blogs/javascript-quiz/

var questionAnswersCorrect = [
    {
        Question: "Javascript is a _____ -side programming language.",
        Answers: ["Client", "Server", "Both", "None"],
        Correct: 2 
    },
    {
        Question: "Which of the following will write the message 'Hello DataFlair!' in an alert box?",
        Answers: ["alertBox('Hello DataFlair!');", "alert(Hello DataFlair!);", "msgAlert('Hello DataFlair!');", "alert('Hello DataFlair!');"],
        Correct: 3
    },
    {
        Question: "How do you find the minimum of x and y using JavaScript?",
        Answers: ["min(x,y);", "Math.min(x,y)", "Math.min(xy)", "min(xy):"],
        Correct: 2
    }
];

// Landing page initializer begins

startButton.addEventListener("click", function() {
    removeLandingPage();
    startTheTime();
    displayQA(positionOfQuestion);
});

function removeLandingPage() {
    landingTitle.remove();
    starterPara.remove();
    startButton.remove();
}

function startTheTime() {
    var timerInitiator = setInterval(clockStarter, 1000);
    function clockStarter() {
        totalSeconds = totalSeconds - 1;
        clockTimer.textContent = totalSeconds + " seconds";
        clearInterval(timerInitiator);
    }
}

// Building block functions referenced by DisplayQA

function buildNewQuestion() {
    var questionTitle = document.createElement("h4");
    questionTitle.className = "main-padding";
    questionTitle.id = "question-title-id";
    mainText.appendChild(questionTitle);
}

function buildNewAnswerGroup() {
    var NewAnswerGroup = document.createElement("div");
    NewAnswerGroup.id = "new-answer-group";
    mainText.appendChild(NewAnswerGroup);
}

function insertUniqueAnswers() {
    var uniqueAnswer = document.createElement("button");
    uniqueAnswer.textContent = answerFromForLoop;
    uniqueAnswer.className = "btn btn-primary";
    uniqueAnswer.id = positionInArray;
    document.getElementById("new-answer-group").appendChild(uniqueAnswer);   
}

function clickedOnAnswer() {
    if (alreadyClickedAnswer === null) {
        // Do nothing
    } else {
        clickedAnswerMessage.remove();
    }

    if (idOfClickedOnAnswer === valueOfQACorrect) {
        var correctAnswer = "Correct!";
        triggerNextQA(correctAnswer);
    } else {
        var incorrectAnswer = "Incorrect!";
        triggerNextQA(incorrectAnswer);
    }
}

// 

function displayQA(positionInMainArray) {


    buildNewQuestion();
    buildNewAnswerGroup();
    insertUniqueAnswers();
    clickedOnAnswer();

    
    var answerBottomDiv = document.getElementById("answer-bottom-div");
    
    var currentQuestionAnswer = questionAnswer[positionInMainArray];

    


    questionTitle.textContent = currentQuestionAnswer.Question;
    

    for (b = 0; b < currentQuestionAnswer.Answers.length; b++) {

        var currentAnswer = currentQuestionAnswer.Answers[b];

            
        var a = currentAnswer;
        var z = b === currentQuestionAnswer.Correct;
        insertUniqueAnswers (a, z);



        

        answer.onclick = function () {
            if (answerBottomDiv === null) {
                alert("Null?");
            } else {
                answerBottomDiv.remove();
            }
            

            if (this.id === currentQuestionAnswer.Correct) {
                var correctAnswer = "Correct!";
                nextQuestion(correctAnswer);
            } else {
                var incorrectAnswer = "Incorrect!";
                nextQuestion(incorrectAnswer);
            } 
        } 
    }  
}


function nextQuestion(clickedAnswer) {
    console.log("YoYoYo");

    document.getElementById("question-title-id").remove();
    document.getElementById("button-group").remove();

    if (clickedAnswer === "Correct!") {
        correctTotal++;
    } else {
        totalSeconds = totalSeconds - 10;
        
    }

    i++;

    if (i < questionAnswer.length) {

        var clickedAnswerMessage = document.createElement("div");
        clickedAnswerMessage.id = "answer-bottom-div";
        clickedAnswerMessage.textContent = clickedAnswer;
        mainContainer.appendChild(clickedAnswerMessage);

        displayQA(i);


    } else {
         allDone();
     }
}


function allDone() {

}



