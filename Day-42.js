//DSA DAY CHALLENGE 💥



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class circularLinked {
    constructor() {
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
    return result;
  }







  traverseFrom(node) {
    if (!node) return;
    let current = node;
    const result = [];
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== node);
    console.log(result.join(" -> ") + " -> " + node.data);
  }



}



const numbers = new circularLinked();

numbers.insertAtHead(2)
numbers.insertAtHead(1)

numbers.insertAtTail(3);
numbers.insertAtTail(4);



numbers.traverseFrom(numbers.head);

numbers.traverseFrom(numbers.tail);



let position =2;
let current=numbers.head;
for(let i=0;i<position;i++){
  current=current.next
}
numbers.traverseFrom(current)


//output
// 1 -> 2 -> 3 -> 4 -> 1
// 4 -> 1 -> 2 -> 3 -> 4
// 3 -> 4 -> 1 -> 2 -> 3