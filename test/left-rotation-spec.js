const expect    = require("chai").expect
const LeftRotation = require('../left-rotation')

describe.only('left rotation array', 

  it('should initialize properly', () => {
    expect(LeftRotation).to.not.be.undefined
  })

  it('should define structure', () => {
    const a =  [1,2,3,4,5]
    const leftRotation = new LeftRotation(a)
    expect(leftRotation.structure).to.be.eql(a)
  })

  it('should rotate left', () => {
    const a =  [1,2,3,4,5]
    const leftRotation = new LeftRotation(a)

    leftRotation.rotate()
    expect(leftRotation.structure).to.be.eql([2, 3, 4,5,1])

    leftRotation.rotate()
    expect(leftRotation.structure).to.be.eql([3, 4,5,1, 2])
  })

  it('should rotate N times', () => {
    const a =  [1,2,3,4,5]
    const leftRotation = new LeftRotation(a)

    leftRotation.rotate(4)
    expect(leftRotation.structure).to.be.eql([5,1,2,3,4])
  })
})
