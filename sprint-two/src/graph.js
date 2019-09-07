

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create new object
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Iterate of the object
  for (var key in this) {
    // Check whether the key is equal to the node
    if (parseInt(key) === node) {
      // Return true if it is
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Iterate over the object
  for (var key in this) {
    // Check whether the key is equal to the node
    if (parseInt(key) === node) {
      delete this[node];
      for (var key in this) {
        for (var i = 0; i < this[key].length; i++) {
          if (this[key][i] === node) {
            this[key].splice(i, 1);
          }
        }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;

  if (this[fromNode].includes(toNode)) {
    result = true;
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Check if both nodes exist
  if (this[fromNode] && this[toNode]) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Iterate over origin node's array
  for (var i = 0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      this[fromNode].splice(i, 1);
    }
  }
  for (var j = 0; j < this[toNode].length; j++) {
    if (this[toNode][j] === fromNode) {
      this[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


