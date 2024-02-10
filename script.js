const keys =  document.getElementsByClassName('number')
const screen = document.getElementById('screen')
const deletKey = document.getElementById('D')
const deleteAll = document.getElementById('C')
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
        console.log(screenNumbers)
    }
    screenNumbers = []
    console.log(screenNumbers)
})
