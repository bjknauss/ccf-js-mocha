const { expect } = require('chai')
const { Example } = require('./example')

describe('Example', function() {
  /** @type {Example} */
  let example

  beforeEach(function() {
    example = new Example()
  })

  it('adds two numbers together', function() {
    expect(example.add(1, 2)).to.equal(3)
  })

  it('subtracts', function() {
    expect(example.subtract(5, 3)).to.eq(2)
  })
})
