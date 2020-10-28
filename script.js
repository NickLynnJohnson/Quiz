

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
var cardText = document.querySelector(".card-text");
var cardButton = document.querySelector(".btn");

var correctAnswer = "";
var incorrectAnswer = "";
var correctAnswerTotal = 0;


    // Need to store the questions and their answers as objects within an array
        // Note: Questions and Answers pulled from:
            // https://data-flair.training/blogs/javascript-quiz/

var questionAnswer = [
    {
        Question: "Javascript is a _____ -side programming language.",
        Answer1: "Client",
        Answer1Answer: "Incorrect",
        Answer2: "Server",
        Answer2Answer: "Incorrect",
        Answer3: "Both",
        Answer3Answer: "Correct",
        Answer4: "None",
        Answer4Answer: "Incorrect",
    },
    {
        Question: "Which of the following will write the message 'Hello DataFlair!' in an alert box?",
        Answer1: "alertBox('Hello DataFlair!');",
        Answer2: "alert(Hello DataFlair!);",
        Answer3: "msgAlert('Hello DataFlair!');",
        Answer4: "alert('Hello DataFlair!');"
    }
];

    // Need an initializing function to:
        // When landing page start quiz button is clicked, then it changes the page to the first question

cardButton.addEventListener("click", function() {
    displayQA();
})

    // Need a secondary function to:
        // Display a question pulling from the array, put it on top, bold it
        // Display its four possible answers as possible clicks
            // If a correct answer is clicked, display "Correct!" below the four questions
                // Tally in the background how many are correct
            // If an incorrect answer is clicked, display "Incorrect! 10 Seconds subtracted." below the four questions
                // Tally in the background how many are incorrect
                // And subtract 10 seconds from the timer

function displayQA() {
    console.log("Hey");

    cardBody.style.textAlign = "left";
    cardTitle.textContent = questionAnswer[0].question;
    cardText.appendChild(questionAnswer[0].Answer1);
    questionAnswer[0].Answer1.appendChild(questionAnswer[0].Answer2);
    questionAnswer[0].Answer2.appendChild(questionAnswer[0].Answer3);
    questionAnswer[0].Answer3.appendChild(questionAnswer[0].Answer4);

    if ((questionAnswer[0].Answer1.addEventListener("click") === true) && (questionAnswer[0].Answer1Answer === "Correct")) {

    }

}

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






