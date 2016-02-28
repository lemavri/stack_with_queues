"use strict"

var assert = require('assert'),
  Stack = require('./stack')

describe('Stack built using two queues', function () {

  describe('when pushing', function() {

    it('keeps last pushed element first in queue ready for popping', function() {

      let stack = new Stack()

      stack.push(1)
      assert.equal(1, stack.queueTwo.queue[0])
      stack.push(2)
      assert.equal(2, stack.queueTwo.queue[0])
      stack.push(5)
      assert.equal(5, stack.queueTwo.queue[0])
    })

  })

  describe('when popping', function() {

    it('removes last pushed element', function() {
      let stack = new Stack()

      const testElements = [3, 4, 5, 6]

      testElements.forEach(element => {
        stack.push(element)
      })

      assert.equal(6, stack.pop())
      assert.equal(5, stack.pop())
      assert.equal(4, stack.pop())
      assert.equal(3, stack.pop())
      assert.equal(undefined, stack.pop())
    })

  })

})
