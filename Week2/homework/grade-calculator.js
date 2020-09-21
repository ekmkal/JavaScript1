'use strict'

const maxScore = 100;
let grade;

/*
The function calculates the percentage of score and then
evaluates the grade. At the last stage, it writes a
template message to console.
*/
function gradeCalculator(score){
    let scorePercentage = (score/maxScore) * 100;
    /*Using switch statement is an easier way to evaluate
    multiple conditions for the score.*/
    switch(true){
        case (90 <= scorePercentage) && (scorePercentage <= 100):
            grade = 'A';
            break;
        case (80 <= scorePercentage) && (scorePercentage <= 89):
            grade = 'B';
            break;
        case (70 <= scorePercentage) && (scorePercentage <= 79):
            grade = 'C';
            break;
        case 60 <= (scorePercentage) && (scorePercentage <= 69):
            grade = 'D';
            break;
        case 50 <= (scorePercentage) && (scorePercentage <= 59):
            grade = 'E';
            break;
        case (0 <= scorePercentage) && (scorePercentage <= 49):
            grade = 'F';
            break;
        default:
            //A message to whom insert an invalid score.
            //Not showing the template message of function.
            return console.log('Please insert a valid score between 0 - 100!');
    }
    let message = 'You got a ' + grade + ' (' + scorePercentage + '%)!';
    return console.log(message);
}

gradeCalculator(83);
gradeCalculator(32);
gradeCalculator('hello');
gradeCalculator(60);