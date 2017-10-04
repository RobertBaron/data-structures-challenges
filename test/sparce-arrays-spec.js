const expect = require('chai').expect

const Sparce = require('../sparce-arrays')

describe('sparce arrays', () => {
  it('should initialize', () => {
    const sparce = new Sparce()

    expect(sparce).to.not.be.undefined
    expect(sparce.collection).to.be.an('array')
  });

  it('should add items to collection', () => {
    const sparce = new Sparce()

    sparce.addItem('string')
    expect(sparce.collection.length).to.be.equal(1)
  });

  it('should find query ', () => {
    const sparce = new Sparce()
    sparce.addItem('aba')
    const count = sparce.query('aba')

    expect(count).to.be.equal(1)
  });

  it('should add repetead elements', () => {
    const sparce = new Sparce()
    sparce.addItem('aba')
    sparce.addItem('aba')

    expect(sparce.collection.length).to.be.equal(2)
  });

  it('should find query in multiple string', () => {
    const sparce = new Sparce()
    sparce.addItem('aba')
    sparce.addItem('baba')
    sparce.addItem('aba')
    sparce.addItem('xzxb')

    const count = sparce.query('aba')

    expect(count).to.be.equal(2)
  });

})