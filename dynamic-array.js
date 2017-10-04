class DynamicArray {
  constructor(N, Q) {

    this.N = N
    this.Q = Q
    this.key = 's'

    this.structure = {};
    this.lastAnswer = 0;
  }

  findSequence(x) {
    return (x ^ this.lastAnswer) % this.N
  }

  query(type, x, y) {
    if(type === 1) {
      this.queryType1(x, y)
    }

    if(type === 2) {
      this.queryType2(x, y)
    }
  }

  queryType1(x, y) {
    const seq = this.findSequence(x)
    const list = this.getSequence(seq)
    if(!list) {
      return
    }
    list.push(y)
  }

  getSequence(seq) {
    if(!this.structure[`${this.key}${seq}`]) {
      return this.structure[`${this.key}${seq}`] = []
    }

    return this.structure[`${this.key}${seq}`]
  }

  findValue(seq, y) {
    const list = this.getSequence(seq)
    return list[y % list.length]
  }

  queryType2(x, y) {
    const seq = this.findSequence(x)
    const value = this.findValue(seq, y)
    this.lastAnswer = value

    return this.lastAnswer;
  }
}

module.exports = DynamicArray