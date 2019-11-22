class Example {
  /**
   * Add two numbers together.
   *
   * @param {number} a
   * @param {number} b
   * @return {number} Sum of two numbers
   */
  add(a, b) {
    return a + b
  }

  /**
   * Subtraction
   * @param {number} minuend The number from which you take something
   * @param {number} subtrahend Number being subtracted
   * @return {number} The difference between the two numbers
   */
  subtract(minuend, subtrahend) {
    return minuend - subtrahend
  }
}

module.exports = {
  Example,
}
