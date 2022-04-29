var input = document.querySelectorAll('.angle-input')
var button = document.querySelector('#check-button')
var output = document.querySelector('#output-area')



function sumOfAngles() {
    var sum = Number(input[0].value) + Number(input[1].value) + Number(input[2].value);
    return sum;
}


function angleChecker() {
    if (sumOfAngles() === 180) {
        console.log("yes");
        output.innerText = "Yes, these angles can make a Triangle together"
    } else {
        console.log("no");
        output.innerText = "Oh no! these angles are not enough for a Triangle"
    }
}



button.addEventListener("click", angleChecker)