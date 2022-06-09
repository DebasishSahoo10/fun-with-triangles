var base = document.querySelector('#base-length')
var height = document.querySelector('#height-length')
var button = document.querySelector('#check-button')
var output = document.querySelector('#output-area')


function calculateArea() {
    if (base.value >= 1 && height.value >=1) {
        var area = ((base.value*height.value) / 2);
        output.innerText = "And the area is : " + area;
    } else {
        output.innerText = "Please Input positive values"
    }
}


button.addEventListener("click", calculateArea)