var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // Check to see whether the value is greater than this object's value
  if (this.value < value) {
    // If yes, check if the current node has a right value
    if (this.right) {
      // If the node has a right value, call recursively
      this.right.insert(value);
    } else {
      // If the node does not have a right value, set this.right equal to value
      this.right = new BinarySearchTree(value);
    }
  } else if (this.value > value) {
    // If no, check if the current node has a left value
    if (this.left) {
      // If the node has a left value, call recursively
      this.left.insert(value);
    } else {
      // If the node does not have a left value, set this.left equal to value
      this.left = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  // Initialize result variable
  var result = false;

  // Define check function
  var check = function (obj, value) {
    // Check to see whether the current node's value is equal to 'value'
    if (obj === null) {
      return result;
    } else if (obj.value === value) {
      // If yes, the return true
      result = true;
      // If no, then check whether the current node's value is greater than or equal to 'value'
    } else if (obj.value > value) {
      // If greater, then call recursively on the right node
      check(obj.left, value);
      // If lesser, then call recursively on the left node
    } else if (obj.value < value) {
      check(obj.right, value);
    }
  }

  // Call check function
  check(this, value);

  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
