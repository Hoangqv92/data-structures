var Queue = function() {
  // creeate variable for count(placeholder) and tail(end of placeholder)
  var count = 0;
  var someInstance = {};
  var tail = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add to the count(adds to the top of the Sandwich)
    if (value) {
      storage[count] = value;
      count++;
    }
  };

  someInstance.dequeue = function() {
    // removes the tail end of count(removes end of Sandwich)
    if (count - tail === 0) {
      return undefined;
    }
    var results = storage[tail];
    delete storage[tail];
    tail++;
    return results;
  };

  someInstance.size = function() {
    // Subracts total new count with new tail to get total (returns back to OG size)
    return count - tail;
  };

  return someInstance;
};
