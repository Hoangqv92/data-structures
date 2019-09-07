var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //create variable a boolean with the outcome of our function
  var results = false;
  // create a new function to recursively iterate thru tree
  var search = function(newTree, target) {
    if (newTree.value === target) {
      results = true;
    } else if (newTree.children) {
      for (var i = 0; i < newTree.children.length; i++) {
        search(newTree.children[i], target);
      }
    }
  }
  search(this, target);
  // return boolean
  return results;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
