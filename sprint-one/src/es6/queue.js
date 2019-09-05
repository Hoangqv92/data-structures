class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.tail = 0;
  }

  enqueue(value) {
    if (value) {
      this.storage[this.count] = value;
      this.count++;
    }
  }

  dequeue() {
    if (this.count - this.tail === 0) {
      return undefined;
    }
    var results = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return results;
  }

  size() {
    return this.count - this.tail;
  }

}
