var tree;
var n;
var array = [];

function setup() {
  noCanvas();
   tree = new Tree;
   tree.addValue(5);
   tree.addValue(3);
   tree.addValue(7);
   tree.addValue(10);
   tree.traverse();
  console.log(tree);
  console.log(array);
}

//Tree class
function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(value) {
  n = new Node(value);
  if(this.root == null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
}

//prints out all of the contents in a sorted array
Tree.prototype.traverse = function() {
  this.root.visit();
}

//Node class
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function(n) {
  if(n.data < this.data) {
    if(this.left == null) {
      //same scenario as with adding as a root node because its empty...
      this.left = n;
    } else {
      //recursive function here <3
      this.left.addNode(n);
    }
  } else {
    if(this.right == null) {
      //yes,right node is empty,just set it as n value...
      this.right = n;
    } else {
      //add a node to the right,with recursive function again...
      this.right.addNode(n);
    }
  }
}


Node.prototype.visit = function() {
  //means that if the 'pointer' has not reached the end yet,dont print the value
  //null means the node is not pointing to anything,meaning that it is the end of the tree
  if(this.left != null) {
    this.left.visit();
  }
  array.push(this.data);
  if(this.right != null) {
    this.right.visit();
  }
}
