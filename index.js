document.getElementById('teenaAger').addEventListener('click', function () {
    const ageInputId = document.getElementById('AgeInput');
    const ageInputText = ageInputId.value;
    const inputAge = parseFloat(ageInputText);
    console.log(inputAge)
    if (inputAge <= 19 && inputAge > 13) {
        alert('teen ager')

    }
    else if (inputAge < 13) {
        ageInputId.value = ''
    }
    else {
        alert('not teen ager')
    }
})
let color = ['red', 'orange', 'blue']
let button = document.getElementById('colorBtn')
button.addEventListener('click', function () {

    let randomColor = color[Math.floor(Math.random() * color.length)]

    let container = document.getElementById('colorBtn');
    container.style.backgroundColor = randomColor
})