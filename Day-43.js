

//Day 43 DSA CHALLENGE 💥

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class circularLinked {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtHead(data) {

    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  traverse(){
    let result = [];
    if (!this.head) return result;
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    }
    while (current !== this.head);
    return    result;
  }

  simulateRound(){
    if(!this.head) return ;
    let current=this.head;
    do{
        console.log("executing:" + current.data)
        current=current.next;
    }
    while(current!==this.head);
  }
  


}


const roundRobin = new circularLinked();
roundRobin.insertAtTail("Task1");
roundRobin.insertAtTail("Task2");
roundRobin.insertAtHead("Task3");
console.log(roundRobin.traverse().join("->"));
roundRobin.simulateRound();

//output
// Task3->Task1->Task2
// executing:Task3
// executing:Task1
// executing:Task2