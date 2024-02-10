const keys =  document.getElementsByClassName('number')
const screen = document.getElementById('screen')
let screenNumbers = []

/*
    Es la primera prueba de agregar datos a la pantalla

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
        const newNumberScreen = document.createElement('span')
        newNumberScreen.innerText = keys[i].innerHTML
        screen.appendChild(newNumberScreen)

        console.log(screen.length)
    })
}*/

const addNumber = () => {
    const number = document.createElement('span')
    number.innerText = screenNumbers[screenNumbers.length - 1]
    screen.appendChild(number)
}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
        screenNumbers.push(keys[i].innerHTML)
        addNumber()
        console.log(screenNumbers)
    })
}

