class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    let list = [];
    let currentNode = this.head;
    while (currentNode != null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list.join(" --> "));
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    this.printList();
    return this.length;
  }

  // Append a value at the beginning
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    this.printList();
    return this.length;
  }

  //Insert a node at given index
  insert(index, value) {
    //Verify index
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Enter valid index, Current length is ${this.length}`);
      return this.length;
    }

    //Insert at index 0
    if (index === 0) {
      return this.prepend(value);
    }

    //Insert at end
    if (index === this.length) {
      return this.append(value);
    }

    //Insert at given index
    let newNode = new Node(value);
    let previousNode = this.head;
    for (let k = 0; k < index; k++) {
      previousNode = previousNode.next;
    }
    let nextNode = previousNode.next;
    newNode.next = nextNode;
    previousNode.next = newNode;

    this.length++;
    this.printList();
    return this.length;
  }

  remove(index) {
    //Verify index
    if (!Number.isInteger(index) || index < 0 || index >= this.length) {
      console.log(
        `Enter valid index. Current length of the linked list is ${this.length}`
      );
      return this.length;
    }

    //Remove Head Node
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      this.printList();
      return this.length;
    }

    //Remove tail Node
    if (index === this.length - 1) {
      let lastNode = this.head.next;
      let secondLastNode = this.head;

      while (lastNode.next !== null) {
        secondLastNode = secondLastNode.next;
        lastNode = lastNode.next;
      }
      secondLastNode.next = null;
      this.tail = secondLastNode;

      this.length--;
      this.printList();
      return this.length;
    }

    //Remove at given index
    let previousNode = this.head;
    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }
    let nextNode = previousNode.next;
    previousNode.next = nextNode.next;

    this.length--;
    this.printList();
    return this.length;
  }
}

const myLinkedList = new SingleLinkedList(10);
myLinkedList.printList(); // 10

myLinkedList.append(5); // 10 --> 5
myLinkedList.append(16); // 10 --> 5 --> 16

myLinkedList.prepend(1); // 1 --> 10 --> 5 --> 16

// Insert 99 at index 2
myLinkedList.insert(2, 99); // 1 --> 10 --> 99 --> 5 --> 16
myLinkedList.insert(20, 88); // Enter valid index. Current length of the linked list is 5.
myLinkedList.insert(5, 80); // 1 --> 10 --> 99 --> 5 --> 16 --> 80
myLinkedList.insert(0, 80); // 80 --> 1 --> 10 --> 99 --> 5 --> 16 --> 80

myLinkedList.remove(0); // 1 --> 10 --> 99 --> 5 --> 16 --> 80
myLinkedList.remove(5); // 1 --> 10 --> 99 --> 5 --> 16
myLinkedList.remove(2);
