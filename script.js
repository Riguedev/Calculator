const keys =  document.getElementsByClassName('number')
const screen = document.getElementById('screen')
const deletKey = document.getElementById('D')
const deleteAll = document.getElementById('C')
const equal = document.getElementById('equal')
let screenNumbers = []

const addNumber = () => {
    const number = document.createElement('span')
    number.classList.add('delete')
    number.innerText = screenNumbers[screenNumbers.length - 1]
    screen.appendChild(number)
}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
        screenNumbers.push(keys[i].innerHTML)
        addNumber()
    })
}

deletKey.addEventListener('click', () => {
    const deleteNumbers = document.getElementsByClassName('delete')
    const lastDeleteNumber = deleteNumbers[deleteNumbers.length - 1]
    lastDeleteNumber.parentNode.removeChild(lastDeleteNumber);
    screenNumbers.pop()
    console.log(screenNumbers)
})

deleteAll.addEventListener('click', () => {
    const deleteNumbers = document.getElementsByClassName('delete')
    for (let i = 0; i < screenNumbers.length; i++) {
        const lastDeleteNumber = deleteNumbers[deleteNumbers.length - 1]
        lastDeleteNumber.parentNode.removeChild(lastDeleteNumber);
    
    }
    screenNumbers = []
    console.log(screenNumbers.length)
})

equal.addEventListener('click', () => {
    const lista = document.getElementsByClassName('delete')
    const textos = Array.from(lista).map(elemento => elemento.innerHTML);
    console.log(calculator.results(calculator.selectOperation(textos), calculator.createNumbers(textos)))


    for (let i = 0; i < screenNumbers.length; i++) {
        const lastDeleteNumber = lista[lista.length - 1]
        lastDeleteNumber.parentNode.removeChild(lastDeleteNumber);
    }
    screenNumbers = []

    const result = document.createElement('span')
    result.classList.add('delete')
    result.innerText = calculator.results(calculator.selectOperation(textos), calculator.createNumbers(textos))
    screen.appendChild(result)
    screenNumbers.push(result.innerHTML)
})