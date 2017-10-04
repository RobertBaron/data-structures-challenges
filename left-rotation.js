class LeftRotation {
  constructor(a) {
    this.structure = a;
  }

  rotate(d = 1) {
    if(this.structure.length) {
      Array.apply(null, Array(d)).forEach(() => {
        const aux = this.structure.shift()
        this.structure.push(aux)
      })
    }

    return this.structure
  }
}

module.exports = LeftRotation