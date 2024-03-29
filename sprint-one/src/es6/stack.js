class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    var results = this.storage[this.count];
    delete this.storage[this.count];
    if (this.count) {
      this.count--;
    }
    return results;
  }

  size() {
    return this.count;
  }
}