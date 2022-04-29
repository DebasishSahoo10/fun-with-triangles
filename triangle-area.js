var base = document.querySelector('#base-length')
var height = document.querySelector('#height-length')
var button = document.querySelector('#check-button')
var output = document.querySelector('#output-area')


function calculateArea() {
    var area = ((base.value*height.value) / 2);
    output.innerText = "And the area is : " + area;
}


button.addEventListener("click", calculateArea)