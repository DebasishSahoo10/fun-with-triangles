var quizForm = document.querySelector('.quiz-form')
var button = document.querySelector('#check-button')
var output = document.querySelector('#output-area')

var correctAnswer = ["90°", "right angled", "28cm", "69.65m.square", "3", "less than 90", "right", "30", "acute", "isosceles"]



function checkAnswer() {
    let score = 0;
    let index = 0;
    var form = new FormData(quizForm);
    for (let value of form.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "And your score is : " + score;
}






button.addEventListener("click", checkAnswer)