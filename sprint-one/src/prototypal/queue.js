var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};
  obj.tail = 0;
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value) {
    if (value) {
      this.storage[this.count]= value;
      this.count++;
    }
  },
  dequeue: function() {
    if (this.count-this.tail === 0) {
      return undefined;
    }
    var results = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return results;
  },
  size: function() {
    return this.count-this.tail;
  }
};


