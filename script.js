

// I. Landing page (and throughout each other page):
    // 1. View Highscores function (top left placement)
        // When clicked it goes to a page that shows the initials and score amount total
    // 2. Time limit countdown function (top right placement)
        // Starts when start quiz button is clicked
        // Set time to 180 seconds and decrement by 1 second
        // If a question is incorrect, subtract 10 seconds

// II. Display of questions:

    // Need to create variables in JS based on their counterparts in HTML

var cardParentDiv = document.querySelector(".card");
var cardBody = document.querySelector(".card-body");
var cardTitle = document.querySelector(".card-title");
// var cardText = document.querySelector(".card-text");

var starterPara = document.getElementById("starter-para");
// //var buttonGroup = document.getElementById("button-group");
//     var answer1 = document.getElementById("answer-1");
//     var answer2 = document.getElementById("answer-2");
//     var answer3 = document.getElementById("answer-3");
//     var answer4 = document.getElementById("answer-4");
var resultPara = document.getElementById("result-para");
var startButton = document.getElementById("start-button");

var correctAnswer = "";
var incorrectAnswer = "";
var correctAnswerTotal = 0;

var i = 0;

    // Need to store the questions and their answers as objects within an array
        // Note: Questions and Answers pulled from:
            // https://data-flair.training/blogs/javascript-quiz/

var questionAnswer = [
    {
        Question: "Javascript is a _____ -side programming language.",
        Answers: ["Client", "Server", "Both", "None"],
        Correct: 2 
    },
    {
        Question: "Which of the following will write the message 'Hello DataFlair!' in an alert box?",
        Answers: ["alertBox('Hello DataFlair!');", "alert(Hello DataFlair!);", "msgAlert('Hello DataFlair!');", "alert('Hello DataFlair!');"],
        Correct: 3
    }
];



// Hide buttons on landing page

// window.onload = function() {
//     buttonGroup.style.display = "none";
// }


    // Need an initializing function to:
        // When landing page start quiz button is clicked, then it changes the page to the first question

startButton.addEventListener("click", function() {
    displayQA(i);
})

    // Need a secondary function to:
        // Display a question pulling from the array, put it on top, bold it
        // Display its four possible answers as possible clicks
            // If a correct answer is clicked, display "Correct!" below the four questions
                // Tally in the background how many are correct
            // If an incorrect answer is clicked, display "Incorrect! 10 Seconds subtracted." below the four questions
                // Tally in the background how many are incorrect
                // And subtract 10 seconds from the timer



function displayQA(idx) {
    console.log("Hey");

    // cardBody.style.textAlign = "left";

    // textContent the question and the 4 answers

    // Question: "Javascript is a _____ -side programming language.",
    // Answers: ["Client", "Server", "Both", "None"],
    // Correct: Answers[2] 



    
    var currentQuestionAnswer = questionAnswer[idx];

    starterPara.textContent = "";
    cardTitle.textContent = currentQuestionAnswer.Question;

    var buttonGroupDiv = document.createElement("div");
    buttonGroupDiv.id = "button-group";
    document.querySelector(".card-text").appendChild(buttonGroupDiv);
    
    // for (a = 0; a < 4; a++) {
    //     var example(a) = document.createElement("button");
    //     example(a).className = "btn btn-primary";
    //     a.id = "answer-" + a;
    //     a.onclick = function () {console.log("yo");};
    //     document.getElementById("button-group").appendChild(a);
    // }

    for (b = 0; b < currentQuestionAnswer.Answers.length; b++) {
        var currentAnswer = currentQuestionAnswer.Answers[b];

        var answer = document.createElement("button");
        answer.textContent = currentAnswer;
        answer.className = "btn btn-primary";
        answer.id = "answer-" + b;
        answer.onclick = function () {
            nextQuestion();
        }
        document.getElementById("button-group").appendChild(answer);
    }
}

function nextQuestion() {
    console.log("YoYoYo");
    if (i < questionAnswer.length) {
        
        i++;
        if (i < questionAnswer.length) {
            displayQA(i);
        }
    } else {
        function done() {
            console.log("Done");
        }
    }
}


/*

    () => { i++ };

    var answer1 = document.createElement("button");
    answer1.className = "btn btn-primary";
    answer1.id = "answer-1";
    answer1.onclick = function () {console.log("yo");};
    document.getElementById("button-group").appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.className = "btn btn-primary";
    answer2.id = "answer-2";
    answer2.onclick = function () {console.log("yo");};
    document.getElementById("button-group").appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.className = "btn btn-primary";
    answer3.id = "answer-3";
    answer3.onclick = function () {console.log("yo");};
    document.getElementById("button-group").appendChild(answer3);

    var answer4 = document.createElement("button");
    answer4.className = "btn btn-primary";
    answer4.id = "answer-4";
    answer4.onclick = function () {console.log("yo");};
    document.getElementById("button-group").appendChild(answer4);


    answer1.textContent = questionAnswer[i].Answers[i];
    answer2.textContent = questionAnswer[i].Answers[i+1];
    answer3.textContent = questionAnswer[i].Answers[i+2];
    answer4.textContent = questionAnswer[i].Answers[i+3];
*/
    // for (j = 0; j < 4; j++) {
    //     document.querySelector(".btn").textContent = questionAnswer[i].Answers[j];

        

    //     // var starterInput = document.createElement("button");
    //     // starterInput.textContent = questionAnswer[i].Answers[j];
    //     // document.body.appendChild(starterInput);





    
         
    // }  


//function checkAnswer(result) {
    // 1, 2, 3, 4
//}
    

    // once the four answers are textContented, turn them into buttons

    // questionAnswer[i].Answer[j + 1]Answer)
    // if ((questionAnswer[i].Answer[j + 1]Answer) === "Correct") {

    // } 
    // when buttons are clicked:
        // check against the their answer value and say either correct or incorrect on the next page
        // bring the user to the next set of question/answers













//     cardTitle.textContent = questionAnswer[i].question;
//     cardText.appendChild(questionAnswer[i].Answer1);
//     questionAnswer[i].Answer1.appendChild(questionAnswer[i].Answer2);
//     questionAnswer[i].Answer2.appendChild(questionAnswer[i].Answer3);
//     questionAnswer[i].Answer3.appendChild(questionAnswer[i].Answer4);

    
//     questionAnswer[i].Answer1.addEventListener("click", function(){

//     })



//     for (i = 0; i < questionAnswer.length; i++) {

//     }


//     cardTitle.textContent = questionAnswer[0].question;
//     cardText.appendChild(questionAnswer[0].Answer1);
//     questionAnswer[0].Answer1.appendChild(questionAnswer[0].Answer2);
//     questionAnswer[0].Answer2.appendChild(questionAnswer[0].Answer3);
//     questionAnswer[0].Answer3.appendChild(questionAnswer[0].Answer4);

//     if ((questionAnswer[0].Answer1.addEventListener("click") === true) && (questionAnswer[0].Answer1Answer === "Correct")) {

//     }

// }

// III. Summary page:
    // "All Done!" Header
    // Description: "Your total score is (score)."
    // "Enter initials:"" (input field) (Submit button)
        // When Submit is clicked, bring user to Highscores page & Remove the top left View Highscores link and top right Clock

// IV. Highscores page:
    // "Highscores" header
    // List with faded purple background of "1. AB - 22" for example
        // This list continues indefinitely based on user session in local storage
    // "Go Back" button returns to the landing page
        // Resets the clock
        // To the right, same line, "Clear Highscores" button removes highscores list under Highscores
    // Note: On this page the top left "View Highscores" and top right "Time: (Time)" are absent






