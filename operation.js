
const equal = document.getElementById('equal')

//funcion para seleccionar las operaciones
const operation = datos => {
    let operacion = []
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] === '+') {
            operacion.push('suma')
        }
        if (datos[i] === '-') {
            operacion.push('resta')
        }
        if (datos[i] === '*') {
            operacion.push('multiplicacion')
        }
        if (datos[i] === '/') {
            operacion.push('division')
        }
    }
    return operacion
}

//función para separar los numeros a operar
const createNumbers = textos => {
    let numbers = []
    let num = ''

    for (let i = 0; i < textos.length; i++) {
        if (textos[i] === '+' || textos[i] === '-' || textos[i] === '*' || textos[i] === '/') {
            let floatNum = parseFloat(num)
            numbers.push(floatNum)
            num = ''
        }
        else {
            num += textos[i]
        }
    }
    let floatNum = parseFloat(num)
    numbers.push(floatNum)
    numbers.forEach(parseFloat)
    return numbers
}

//Funcion para realizar las operaciones matematicas
const selectOperation = (ope, dat) => {

    let arit = dat[0]

    for (let i = 0; i < ope.length; i++) {
        if (ope[i] === 'suma') {
            arit += dat[i + 1]
            
        }
        if (ope[i] === 'resta') {
            arit -= dat[i + 1]
        }
        if (ope[i] === 'multiplicacion') {
            arit *= dat[i + 1]
        }
        if (ope[i] === 'division') {
            arit /= dat[i +1]
        }
    }
    return arit
}

equal.addEventListener('click', () => {
    let lista = document.getElementsByClassName('delete')
    let textos = Array.from(lista).map(elemento => elemento.innerHTML);
    console.log(calculator.results(calculator.selectOperation(textos), calculator.createNumbers(textos)))    
})
