// Today’s Challenge - Reverse a Name using Doubly Linked List 

// Imagine you are storing a person’s name in a Doubly Linked List, where each character is stored as a node. Your task is to print the name in reverse by traversing backward.

// 👉 Requirements:
// 1. Insert each character of the name into a Doubly Linked List.
// 2. Traverse forward to print the name normally.
// 3. Think of how you can reverse name in Doubly 

// ⚡ Input Example

// Name: "KANCHAN"


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertAtEnd(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    printForward(){
        let current = this.head;
        let result = [];
        while(current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward Traversal:" , result.join(" -> "))
    }
    printBackward(){
        let current = this.tail;
         let result = [];
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    console.log("Backward Traversal:", result.join(" -> "));
    }
}
const name = "KANCHAN"
const list = new DoublyLinkedList();
for(let ch of name){
    list.insertAtEnd(ch);
}
list.printForward();
list.printBackward();


//output
// Forward Traversal: K -> A -> N -> C -> H -> A -> N
// Backward Traversal: N -> A -> H -> C -> N -> A -> K