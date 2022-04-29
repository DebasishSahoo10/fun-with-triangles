var aLength = document.querySelector('#a-length')
var bLength = document.querySelector('#b-length')
var button = document.querySelector('#check-button')
var output = document.querySelector('#output-area')




function calculateHypotenuse() {
    var hypotenuse = Math.sqrt((aLength.value*aLength.value)+(bLength.value*bLength.value));
    output.innerText = "And the Hypotenuse is : " + hypotenuse;
}




button.addEventListener("click", calculateHypotenuse)