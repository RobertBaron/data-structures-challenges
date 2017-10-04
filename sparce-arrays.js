class Sparce {
  constructor() {
    this.collection = []
  }

  addItem(item) {
    this.collection.push(item)
  }

  query(query) {
    return this.collection.reduce((total, value) => {
      if(value === query) {
        return total + 1;
      }

      return total
    }, 0)
  }
}

module.exports = Sparce