var Stack = function() {
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add count and use count to store value in storage;
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    // removes value at top count in storage and returns value before top count
    var results = storage[count];
    delete storage[count];
    if (count) {
      count--;
    }
    return results;
  };

  someInstance.size = function() {
    // returns the count;
    return count;
  };

  return someInstance;
};
