import { addNumber, deleteKey, deleteAllScreen, operationResult } from './functions.js'

const keys = document.getElementsByClassName('number')
const deletKey = document.getElementById('D')
const deleteAll = document.getElementById('C')
const equal = document.getElementById('equal')
const screenNumbers = []

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', () => {
    screenNumbers.push(keys[i].innerHTML)
    addNumber(screenNumbers)
  })
}

deletKey.addEventListener('click', () => deleteKey(screenNumbers))
deleteAll.addEventListener('click', () => deleteAllScreen(screenNumbers))
equal.addEventListener('click', () => operationResult(screenNumbers))
