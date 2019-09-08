

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Move to the index position in the storage array
  // Check if the position contains an array
  var collisionSet = this._storage[index];
  if (Array.isArray(collisionSet)) {
    // If yes, loop through the inner array
    for (var i = 0; i < collisionSet.length; i++) {
      // Check the 0th position of each key/value pair within the array
      if (collisionSet[i][0] === k) {
        // If the 0th value is equal to k
        collisionSet[i][1] = v;
        // Change the 1st array value position to v
      } else {
        // Else no 0th value is equal to k
        // Push the key value pair to the end of the array
        collisionSet.push([k, v]);
      }
    }
  } else {
    this._storage[index] = [[k, v]];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var searchIndex = this._storage[index];
  // Check if the index position of the array is an array
  if (Array.isArray(searchIndex)) {
    // If yes, iterate through each item in the array
    for (var i = 0; i < searchIndex.length; i++) {
      // Check if the first index position of each item is equal k
      if (searchIndex[i][0] === k) {
        // If yes, return the second index position in the pair
        return searchIndex[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


