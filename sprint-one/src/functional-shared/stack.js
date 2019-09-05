var Stack = function() {

  var obj = {};
  obj.count = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj;
}

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {

    if (this.count) {
      this.count--;
    }
    var results = this.storage[this.count];
    delete this.storage[this.count];
    return results;
  },

  size: function() {
    return this.count;
  }
};


