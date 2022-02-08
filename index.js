function launchExams(){

    var examForm = document.getElementById("question");
    examForm.style.display = "block";

    var landingPage = document.getElementById("container");
    landingPage.style.display = "none";

}

function sumTotal(){
    var tally = 0;

    var presentOutcome1 = document.exams.question1.value;
    var presentOutcome2 = document.exams.question2.value;
    var presentOutcome3 = document.exams.question3.value;
    var presentOutcome4 = document.exams.question4.value;
    var presentOutcome5 = document.exams.question5.value;

    var answers = document.getElementById("board");
    
    if (presentOutcome1 == "JavaScript is a stripped-down version of Java"){
        tally += 20
    };

    if (presentOutcome2 == "The User's machine running a Web browser"){
        tally += 20
    };

    if (presentOutcome3 == "Storing numbers, dates, or other values"){
        tally += 20
    };

    if (presentOutcome4 == "Storing the form's contents to a database file on the server"){
        tally += 20
    };

    if (presentOutcome5 == "Accept parameters"){
        tally += 20
    };

    // if (tally >= 80){
    //     tally.textContent = "Congratulatios! You have excelled in your test."
    // }

    // else if (tally >= 80 <= 50){
    //     tally.textContent = "Fair trial! You have passed."
    // }

    // else (tally <= 50){
    //     tally.textContent = "Ooops! Test failed. You need to retake the exam."
    // }

    // answers.textContent = tally;

    var finalResults = document.getElementById("answer");
    finalResults.style.display = "block"

    var resultsPage = document.getElementById("question");
    resultsPage.style.display = "none";

    document.getElementById("display").innerHTML = tally;


}