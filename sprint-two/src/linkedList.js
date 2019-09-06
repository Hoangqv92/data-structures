var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else if (list.tail) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    // Create variable to store head value
    var headValue = list.head.value;
    // Set new head to head's next value
    list.head = list.head.next;
    // Return previous head's value
    return headValue;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
