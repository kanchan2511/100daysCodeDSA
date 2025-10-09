
//Day 41 DSA CHALLENGE 💥

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

  insertPlayerAtHead(data) {

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

  insertPlayerAtTail(data) {
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
    return result;
  }


  traverseRounds(k) {
    const result = [];
    if (!this.head) return result;
    let current = this.head;
    for (let i = 0; i < k * this.size; i++) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }


}


const players = new circularLinked();
players.insertPlayerAtTail("Alice");
players.insertPlayerAtTail("bob");
players.insertPlayerAtTail("charlie");
players.insertPlayerAtHead("Zara");
console.log(players.traverse().join("->"));
console.log(players.traverseRounds(2).join("->"));


//output:
// Zara->Alice->bob->charlie
//Zara->Alice->bob->charlie->Zara->Alice->bob->charlie