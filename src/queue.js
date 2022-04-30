const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }

  getUnderlyingList() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  enqueue(value) {
    if (this.lenght === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }

    this.lenght++;
  }

  dequeue() {
    let backup = this.head;
    this.head = this.head.next;

    this.lenght--;

    return backup.value;
  }
}

module.exports = {
  Queue,
};
