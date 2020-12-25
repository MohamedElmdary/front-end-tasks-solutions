// @ts-check
'use strict'

// ################ Task 1 ################
/**
 * @method #1
 *
 * @param { string } str
 * @returns { string }
 */
function reversestring1(str) {
  return str.split('').reverse().join('')
}

/**
 * @method #2
 *
 * @param { string } str
 * @returns { string }
 */
function reversestring2(str) {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

/**
 * @method #3
 *
 * @param { string } str
 * @returns { string }
 */
function reversestring3(str) {
  /**
   *
   * @param { string } str
   * @param { number } idx
   * @param { string } result
   * @returns { string }
   */
  function _reversedString(str, idx, result) {
    if (str.length === idx) return result
    return _reversedString(str, idx + 1, str[idx] + result)
  }
  return _reversedString(str, 0, '')
}

// ################ Task 2 ################
/**
 * @method #1
 *
 * @param { string } signal
 * @returns { string }
 */
function notGate1(signal) {
  return signal.replace(/0|1/g, (v) => (v === '0' ? '1' : '0'))
}

/**
 * @method #2
 *
 * @param { string } signal
 * @returns { string }
 */
function notGate2(signal) {
  let result = ''
  for (let i = 0; i < signal.length; i++) {
    if (signal[i] === '0') {
      result += 1
    } else if (signal[i] === '1') {
      result += 0
    } else {
      result += 'x'
    }
  }
  return result
}

/**
 * @method #3
 *
 * @param { string } signal
 * @returns { string }
 */
function notGate3(signal) {
  let result = ''
  for (let i = 0; i < signal.length; i++) {
    const c = signal[i]
    result += c === '0' ? '1' : c === '1' ? '0' : 'x'
  }
  return result
}

/**
 * @method #4
 *
 * @param { string } signal
 * @returns { string }
 */
function notGate4(signal) {
  return signal
    .split('')
    .map((v) => {
      if (v === 'x') return v
      return v === '0' ? '1' : '0'
    })
    .join('')
}

// ################ Task 3 ################
/**
 * @method #1
 *
 * @param { Array<{ name: string, price: number, type: string }> } products
 * @param { string } pType
 * @returns { number }
 */
function getTotalPrice1(products, pType) {
  return products.reduce((total, { type, price }) => {
    if (pType !== type) return total
    return total + price
  }, 0)
}

/**
 * @method #2
 *
 * @param { Array<{ name: string, price: number, type: string }> } products
 * @param { string } pType
 * @returns { number }
 */
function getTotalPrice2(products, pType) {
  let total = 0
  for (let i = 0; i < products.length; i++) {
    if (products[i].type === pType) {
      total += products[i].price
    }
  }
  return total
}

/**
 * @method #3
 *
 * @param { Array<{ name: string, price: number, type: string }> } products
 * @param { string } pType
 * @returns { number }
 */
function getTotalPrice3(products, pType) {
  return products
    .filter((p) => p.type === pType)
    .reduce((total, { price }) => total + price, 0)
}
