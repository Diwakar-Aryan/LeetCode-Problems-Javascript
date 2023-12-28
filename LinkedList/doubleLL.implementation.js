class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length++;
  }
  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(" <--> "));
    return this;
  }

  //Insert node at the end of the list
  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  }

  //Insert node at the start of the list
  prepend(value) {
    let newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    this.printList();
  }

  //insert node at given index
  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Invalid Index`);
      return this;
    }
    //If index is 0
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    // If index is equal to this.length, append
    if (index === this.length) {
      this.append(value);
      return this;
    }

    let newNode = new Node(value);
    let previousNode = this.head;
    for (let k = 0; k < index; k++) {
      previousNode = previousNode.next;
    }
    let nextNode = previousNode.next;

    newNode.next = nextNode;
    nextNode.prev = newNode;
    previousNode.next = newNode;
    newNode.prev = previousNode;

    this.length++;
    this.printList();
  }

  //Remove a node
  remove(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    }

    //Remove Head
    if (index == 0) {
      this.head = this.head.next;
      this.head.prev = null;

      this.length--;
      this.printList();
    }

    // Remove tail
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;

      this.length--;
      this.printList();
      return this;
    }

    // Remove node at an index
    let previousNode = this.head;

    for (let k = 0; k < index; k++) {
      previousNode = previousNode.next;
    }
    let deleteNode = previousNode.next;
    let nextNode = deleteNode.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;

    this.length--;
    this.printList();
    return this;
  }
}

let myDoublyList = new DoublyLinkedList(10);

myDoublyList.append(5); // 10 <--> 5

myDoublyList.append(16); // 10 <--> 5 <--> 16

myDoublyList.prepend(1); // 1 <--> 10 <--> 5 <--> 16

myDoublyList.insert(2, 99); // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.insert(20, 88); // Invalid index. Current length is 5.
myDoublyList.insert(5, 80); // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.insert(0, 80); // 80 <--> 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80

myDoublyList.remove(0); // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.remove(5); // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.remove(2);
