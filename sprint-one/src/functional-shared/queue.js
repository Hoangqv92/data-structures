var Queue = function() {
  var obj = {}
  obj.count = 0;
  obj.tail = 0;
  obj.storage = {};

  _.extend(obj, queueMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  //write methods
  // 1) add on top
  enqueue: function(value) {
    if (value) {
      this.storage[this.count] = value;
      this.count++;
    }
  },
  // 2) remove on bottom
  dequeue: function() {
    if (this.count - this.tail === 0) {
      return undefined;
    }
    var results = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return results;
  },
  // 3) get size by subtracting top and bottom
  size: function() {
    return this.count - this.tail;
  }
};


