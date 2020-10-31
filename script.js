var clockTimer = document.getElementById("clock-timer");
var mainContainer = document.querySelector(".container");
var mainText = document.getElementById("main-text");
var landingTitle = document.getElementById("landing-title");
var starterPara = document.getElementById("starter-para");
var startButton = document.getElementById("start-button");

// Note: see "incorrectTimePenalty" function below. If a user clicks on an incorrect answer, 10 seconds are deducted from totalSeconds for each incorrect answer
var totalSeconds = 100;

// The position in questionAnswersCorrect array is noted by "index"
var index = 0;

// The total score for a user is the same as how many answers the user got correct
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

// Landing page initializer begins with the "Start Quiz" button 

startButton.addEventListener("click", function() {
    removeLandingPage();
    startTheTime();
    displayQA(index);
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

// Building block functions referenced by DisplayQA function farther below

function buildNewQuestion() {
    var questionTitle = document.createElement("h4");
    questionTitle.className = "main-padding";
    questionTitle.id = "question-title-id";
    questionTitle.textContent = objectQACQuestion;
    mainText.appendChild(questionTitle);
}

function buildNewAnswerGroup() {
    var newAnswerGroup = document.createElement("div");
    newAnswerGroup.id = "new-answer-group";
    mainText.appendChild(newAnswerGroup);
}

function insertUniqueAnswers(answerFromForLoop, positionInArray) {
    var uniqueAnswer = document.createElement("button");
    uniqueAnswer.textContent = answerFromForLoop;
    uniqueAnswer.className = "btn btn-primary";
    uniqueAnswer.id = positionInArray;
    document.getElementById("new-answer-group").appendChild(uniqueAnswer);   
}

function clickedOnAnswer(alreadyClickedAnswer, clickedAnswerMessage, idOfClickedOnAnswer, valueOfQACorrect) {
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

// Function to display new questions and their answers based on "i" position in the questionAnswersCorrect array where "i" is later incremented by 1 when a user clicks on answer

function displayQA(i) {
    var objectQACQuestion = questionAnswersCorrect[i].Question;
    var objectQACAnswers = questionAnswersCorrect[i].Answers;
    buildNewQuestion(objectQACQuestion);
    buildNewAnswerGroup();
    
    // Pull all answers from objectQACAnswers and insert them into the "new-answer-group" div via buildNewAnswerGroup();
    // "a" is positionInArray
    for (ans = 0; ans < objectQACAnswers.length; ans++) {
        var loop = answerFromForLoop; 
        insertUniqueAnswers(loop, ans);

        uniqueAnswer.onClick = function() {
            var a = alreadyClickedAnswer;
            var b = clickedAnswerMessage;
            var c = idOfClickedOnAnswer;
            var d = valueOfQACorrect;
            clickedOnAnswer(a, b, c, d);
        }
    }   
}

// Building block functions referenced by triggerNextQA function farther below

function correctTotalTally(chosenAnswer) {
    if (chosenAnswer === "Correct!") {
        correctTotal++;
    }
}

function incorrectTimePenalty(chosenAnswer) {
    if (chosenAnswer !== "Correct!") {
        totalSeconds = totalSeconds - 10;
    }
}

function removePreviousQA() {
    document.getElementById("question-title-id").remove();
    document.getElementById("new-answer-group").remove();
}

function createAnswerMessage(chosenAnswer) {
    var clickedAnswerMessage = document.createElement("div");
    clickedAnswerMessage.id = "answer-bottom-div";
    clickedAnswerMessage.textContent = chosenAnswer;
    mainContainer.appendChild(clickedAnswerMessage);   
}

// Function that's triggered by the user clicking on an answer. If answer is correct, increment points via correctTotalTally. If answer is incorrect, penalize user's time via incorrectTimePenalty.
    // Then, 1) if there are remaining questions in the questionAnswersCorrect array, restart displayQA(i) which makes a new question and its answers 
    // or 2) stop restarting displayQA(i) once all questions have been asked and run the finishedWithQuiz function



function triggerNextQA(clickedAnswerOption) {
    

    

    if (clickedAnswer === "Correct!") {
        correctTotal++;
    } else {
        totalSeconds = totalSeconds - 10;
        
    }

    i++;

    if (i < questionAnswer.length) {

        

        displayQA(i);


    } else {
        finishedWithQuiz();
     }
}


function finishedWithQuiz() {

}



