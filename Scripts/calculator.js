// eslint-disable-next-line no-unused-vars
const calculator = {
  selectOperation: datos => {
    const operacion = []
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
  },

  createNumbers: textos => {
    const numbers = []
    let num = ''

    for (let i = 0; i < textos.length; i++) {
      if (textos[i] === '+' || textos[i] === '-' || textos[i] === '*' || textos[i] === '/') {
        const floatNum = parseFloat(num)
        numbers.push(floatNum)
        num = ''
      } else {
        num += textos[i]
      }
    }
    const floatNum = parseFloat(num)
    numbers.push(floatNum)
    numbers.forEach(parseFloat)
    return numbers
  },

  results: (ope, dat) => {
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
        arit /= dat[i + 1]
      }
    }
    return arit
  }
}

export default calculator
