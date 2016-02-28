"use strict"

function Queue() {
  if (!(this instanceof Queue)) {
    return new Queue()
  }

  this.queue = [];
}

Queue.prototype.enqueue = function(element) {
  this.queue.push(element)
}

Queue.prototype.dequeue = function() {
  if (this.queue.length === 0) {
    return undefined
  }

  return this.queue.splice(0, 1)[0]
}

module.exports = Queue
