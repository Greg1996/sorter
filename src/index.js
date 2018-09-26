class Sorter {
 
  constructor() {
    this.array = new Array();
    this.comparator = (a, b) => a-b;
  }

  add(element) {
    this.array.splice(this.array.length, 0, element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
     
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    const sortedArr = [];
    const sortedIndices = indices.sort((a,b) => a-b);
    for (let i = 0; i < sortedIndices.length; i++) {
      sortedArr.push(this.array[sortedIndices[i]]);
    }
    sortedArr.sort(this.comparator);
    for (let i = 0; i < sortedIndices.length; i++){
      this.array[sortedIndices[i]] = sortedArr.shift();
    }
    return this.array;
  }

  setComparator(compareFunction) {
     this.comparator = compareFunction;
  }
}

module.exports = Sorter;