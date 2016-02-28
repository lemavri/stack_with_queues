"use strict"

var Queue = require('./queue')

function Stack() {

  if (!(this instanceof Stack)) { return new Stack() }

  this.queueOne = new Queue()
  this.queueTwo = new Queue()

}

Stack.prototype.push = function(element) {
  this.queueOne.enqueue(element)

  var el
  while(el = this.queueTwo.dequeue()) {
    this.queueOne.enqueue(el)
  }
  let queueOne = this.queueOne;

  // Invert queues instead of moving all elements from one queue to another
  this.queueOne = this.queueTwo;
  this.queueTwo = queueOne;
}

Stack.prototype.pop = function() {
  return this.queueTwo.dequeue()
}

module.exports = Stack
