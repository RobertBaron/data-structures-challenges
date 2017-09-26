class DynamicArray {
  constructor(N, Q) {

    this.N = N
    this.Q = Q

    this.s1 = []
    this.s2 = []
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
    this.getSequence(seq).push(y)
  }

  getSequence(seq) {
    if(seq === 0) {
      return this.s1
    }

    if(seq === 1) {
      return this.s2
    }

    return
  }

  findValue(seq, y) {
    const list = this.getSequence(seq)
    return list[y % list.length]
  }

  queryType2(x, y) {
    const seq = this.findSequence(x)
    const value = this.findValue(seq, y)
    this.lastAnswer = value

    //console.log(this.lastAnswer)
    return this.lastAnswer;
  }
}

module.exports = DynamicArray