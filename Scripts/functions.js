import calculator from './calculator.js'

export const addNumber = screenNumbers => {
  const screen = document.getElementById('screen')
  const number = document.createElement('span')
  number.classList.add('delete')
  number.innerText = screenNumbers[screenNumbers.length - 1]
  screen.appendChild(number)
}

export const deleteKey = screenNumbers => {
  const deleteNumbers = document.getElementsByClassName('delete')
  const lastDeleteNumber = deleteNumbers[deleteNumbers.length - 1]
  lastDeleteNumber.parentNode.removeChild(lastDeleteNumber)
  screenNumbers.pop()
}

export const deleteAllScreen = (screenNumbers) => {
  const deleteNumbers = document.getElementsByClassName('delete')
  for (let i = 0; i < screenNumbers.length; i++) {
    const lastDeleteNumber = deleteNumbers[deleteNumbers.length - 1]
    lastDeleteNumber.parentNode.removeChild(lastDeleteNumber)
  }
  screenNumbers.splice(0, screenNumbers.length)
}

export const operationResult = (screenNumbers) => {
  const screen = document.getElementById('screen')
  const list = document.getElementsByClassName('delete')
  const contenList = Array.from(list).map(elemento => elemento.innerHTML)

  deleteAllScreen(screenNumbers)

  const result = document.createElement('span')
  result.classList.add('delete')
  result.innerText = calculator.results(calculator.selectOperation(contenList), calculator.createNumbers(contenList))
  screen.appendChild(result)
  screenNumbers.push(result.innerHTML)
}
