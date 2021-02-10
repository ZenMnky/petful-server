// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
    this.length++;

    return this.length;
  }

  dequeue() {
    // Remove some data from the queue.
    
    if (!this.first) {
      return;
    }

    const trackingNode = this.first;

    if(this.first === this.last){
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return trackingNode.value;
    
  }

  show() {
    // Return the next item in the queue.
    if(!this.first){
      return null;
    }

    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let collection = [];

    if(!this.first){
      return null;
    }
        
    let currentNode = this.first.value;
    let nextNode = this.first.next;

    collection.push(currentNode);

    while(nextNode){
      currentNode = nextNode;
      nextNode = currentNode.next;
      
      collection.push(currentNode.value);
    }
    
    return collection;

  }
};

module.exports = Queue;
