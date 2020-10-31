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


startButton.addEventListener("click", function() {
    startTheTime(); 
    removeLandingPage();
    displayQA(index);
    
});

function startTheTime() {
    var timerInitiator = setInterval(clockStarter, 1000);
    function clockStarter() {
        if (totalSeconds === 0) {
            clearInterval(timerInitiator);
        } else {
            totalSeconds = totalSeconds - 1;
            clockTimer.textContent = totalSeconds + " seconds";
        }   
    }
}

function removeLandingPage() {
    landingTitle.remove();
    starterPara.remove();
    startButton.remove();
}

// Building block functions referenced by DisplayQA function farther below

function buildNewQuestion(objectQACQuestion) {
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
   
    // document.getElementById("new-answer-group").style.width = "-50%";
    document.getElementById("new-answer-group").style.height = "50%";
    document.getElementById("new-answer-group").style.display = "block";
}

function clickedOnAnswer(alreadyClickedAnswerMessage, idOfClickedOnAnswer, valueOfQACorrect) {
    console.log("Does this work");
    if (alreadyClickedAnswerMessage === null) {
        // Do nothing
    } else {
        alreadyClickedAnswerMessage.remove();
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
    var objectQuestion = questionAnswersCorrect[i].Question;
    var objectAnswersArray = questionAnswersCorrect[i].Answers;
    var objectCorrect = questionAnswersCorrect[i].Correct;
    var previousAnswerMessageDiv = document.getElementById("answer-message-div");

    buildNewQuestion(objectQuestion);
    buildNewAnswerGroup();
    // Pull all answers from objectAnswersArray and insert them into the "new-answer-group" div via buildNewAnswerGroup();
    // "a" is positionInArray
    for (ans = 0; ans < objectAnswersArray.length; ans++) {
        var objectAnswerContent = objectAnswersArray[ans];
        var uniqueAnswer = document.createElement("button");
        uniqueAnswer.textContent = objectAnswerContent;
        uniqueAnswer.className = "btn btn-primary chosen-button";
        uniqueAnswer.id = ans;
        document.getElementById("new-answer-group").appendChild(uniqueAnswer);  
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
    var clickedAnswerMessageDiv = document.createElement("div");
    clickedAnswerMessageDiv.id = "answer-message-div";
    clickedAnswerMessageDiv.textContent = chosenAnswer;
    mainContainer.appendChild(clickedAnswerMessageDiv);   
}

// Function that's triggered by the user clicking on an answer. If answer is correct, increment points via correctTotalTally. If answer is incorrect, penalize user's time via incorrectTimePenalty.
    // Then, 1) if there are remaining questions in the questionAnswersCorrect array, restart displayQA(i) which makes a new question and its answers 
    // or 2) stop restarting displayQA(i) once all questions have been asked OR time is out, and run the finishedWithQuiz function

function triggerNextQA(clickedAnswerOption) {
    correctTotalTally(clickedAnswerOption);
    incorrectTimePenalty(clickedAnswerOption);
    removePreviousQA();

    // Increment "i" to shift to the next object in the questionAnswersCorrect array
    i++;

    if (i < questionAnswersCorrect.length) {
        createAnswerMessage(clickedAnswerOption);
        displayQA(i);
    } else {
        finishedWithQuiz();
     }
}

function finishedWithQuiz() {
    console.log("Almost finished with first part of quiz");
}

// var tryThis = document.getElementById("1")
// var chosenButton = document.querySelector(".chosen-button"); 

// console.log(tryThis);
// console.log(chosenButton);

// document.querySelector(".chosen-button").onclick = function() {
//     console.log("I was just clicked");
//     clickedOnAnswer(previousAnswerMessageDiv, ans, objectCorrect);
// }







