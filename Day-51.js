//DAY 51 CHALLENGE 


// 💡 Today’s Challenge - Find the Middle of a Linked List

// 👉 Requirements:
// 1. Given a singly linked list, write a function findMiddle(head) that returns the value of the middle node.
// 2. If the list has even number of nodes, return the second middle node (standard interview convention).
// 3. Make sure the solution runs in O(n) time and uses O(1) extra space.


// ⚡ Input Example 

// Linked List: 10 -> 20 -> 30 -> 40 -> 50 -> 60


// ✅ Expected Output

// Middle Node: 40



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtNodeEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    insertAtBegining(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }


    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    



    middle() {
        if (!this.head) {
            console.log("List is empty");
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log("Middle:", slow.data);
        return slow;
    }


}



let list = new LinkedList();
list.insertAtBegining(60);
list.insertAtBegining(50);
list.insertAtBegining(40);
list.insertAtBegining(30);
list.insertAtBegining(20);
list.insertAtBegining(10);
list.printList();
list.middle();


//output
// 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> null
// Middle: 40