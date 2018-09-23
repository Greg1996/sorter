class Sorter {
 
  constructor() {
    this.array = new Array();
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

    var arr1 = new Array();
    var arr2 = new Array();
 
    for(var i=0; i<indices.length; i++){
      arr1[i]=this.array[indices[i]]; 
    }
    if (indices[0]< indices[1]){
    for(var h = indices.length-1 ; h >= 0; h--) {
      this.array.splice(indices[h], 1);
      }
    }
    else {
      for(var h = 0 ; h<indices.length; h++) {
        this.array.splice(indices[h], 1);
        }
      }
    arr1.sort(function(a, b) {
      if (indices[0]< indices[1]){
        return a - b;
      }
      else {
        return b - a;
      }
    });
    if (indices[0]< indices[1]){
      for (var j=0; j<indices.length; j++) {
       this.array.splice(indices[j],0,arr1[j]);
      }
    }
    else {
      for (var j=indices.length-1; j>=0; j--) {
        this.array.splice(indices[j],0,arr1[j]);
      }
    }
       return this.array;
  }

  setComparator(compareFunction) {
 
  }
}

module.exports = Sorter;