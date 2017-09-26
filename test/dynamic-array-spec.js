const expect    = require("chai").expect
const sinon = require("sinon")
const DynamicArray = require('../dynamic-array')

const input = require('./input')
const expected = require('./expected')

describe('dynamic array', () => {

  it('should have lastAnswer initialized to 0', function () {
    const dynamicArray = new DynamicArray(2)
    expect(dynamicArray.lastAnswer).to.be.equal(0)
  });

  it('should initialize properly', function () {
    const dynamicArray = new DynamicArray(2, 5)
    expect(dynamicArray.lastAnswer).to.be.equal(0)
    expect(dynamicArray.N).to.be.equal(2)
    expect(dynamicArray.Q).to.be.equal(5)

    expect(dynamicArray.s1.length).to.be.equal(0)
    expect(dynamicArray.s2.length).to.be.equal(0)
  });

  it('should find sequence', () => {
    const dynamicArray = new DynamicArray(2, 5)
    let x =  0
    expect(dynamicArray.findSequence(x)).to.be.equal(0)
    expect(dynamicArray.findSequence(1)).to.be.equal(1)

    dynamicArray.lastAnswer = 7
    expect(dynamicArray.findSequence(x)).to.be.equal(1)
  });

  it('should query based on type 1', function () {
    const dynamicArray = new DynamicArray(2, 5)
    sinon.stub(dynamicArray, 'queryType1')
    dynamicArray.query(1)

    expect(dynamicArray.queryType1.calledOnce).to.be.true

    dynamicArray.queryType1.restore()
  });

  it('should query based on type 2', function () {
    const dynamicArray = new DynamicArray(2, 5)
    sinon.stub(dynamicArray, 'queryType2')
    dynamicArray.query(2)

    expect(dynamicArray.queryType2.calledOnce).to.be.true

    dynamicArray.queryType2.restore()
  });

  it('should append integer y to sequence', function () {
    const dynamicArray = new DynamicArray(2, 5)

    const queryType = 1
    const x = 0
    const y = 5
    dynamicArray.query(queryType, x, y)

    expect(dynamicArray.s1[0]).to.be.equal(y)

    dynamicArray.query(queryType, 1, 7)
    expect(dynamicArray.s2[0]).to.be.equal(7)
  });

  it('should get sequence list', function () {
    const dynamicArray = new DynamicArray(2, 5)
    dynamicArray.s1.push(1)
    dynamicArray.s2.push(2)

    expect(dynamicArray.getSequence(0)).to.be.eql(dynamicArray.s1)
    expect(dynamicArray.getSequence(1)).to.be.eql(dynamicArray.s2)
  });

  it('should find value of element y % size', function () {
    const dynamicArray = new DynamicArray(2, 5)

    const queryType = 1
    dynamicArray.query(queryType, 0, 5)
    dynamicArray.query(queryType, 1, 7)
    dynamicArray.query(queryType, 0, 3)

    const x = 1
    const y = 0
    const seq = dynamicArray.findSequence(x)
    expect(dynamicArray.findValue(seq, y)).to.be.equal(7)
  });

  it('should process query 2', function () {
    const dynamicArray = new DynamicArray(2, 5)

    let queryType = 1
    dynamicArray.query(queryType, 0, 5)
    dynamicArray.query(queryType, 1, 7)
    dynamicArray.query(queryType, 0, 3)

    queryType = 2
    const x = 1
    const y = 0

    dynamicArray.query(queryType, x, y)
    expect(dynamicArray.lastAnswer).to.equal(7)

    dynamicArray.query(queryType, 1, 1)
    expect(dynamicArray.lastAnswer).to.equal(3)
  });

  describe('test', () => {
    xit('should pass big test', function () {
      const expectedTest = expected.split('\n');

      const inputTest = input.split('\n');
      const instructions = inputTest[0].split(' ');
      const N = parseInt(instructions[0]);
      const Q = parseInt(instructions[1])

      inputTest.splice(0,1);
      const dynamicArray = new DynamicArray(N, Q)

      expect(dynamicArray.N).to.be.equal(89999)
      expect(dynamicArray.Q).to.be.equal(79999)

      let expectedLine = 0
      inputTest.forEach(function (e) {
        const queryInput = e.split(' ');
        const query = { Q: parseInt(queryInput[0]), x: parseInt(queryInput[1]), y: parseInt(queryInput[2]) };

        dynamicArray.query(query.Q, query.x, query.y)
        if(query.Q === 2) {
          expect(dynamicArray.lastAnswer).to.be.equal(expectedTest[expectedLine])

          expectedLine++
        }
      });
    });
  })
})