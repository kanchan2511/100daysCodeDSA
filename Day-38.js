
// 💡 Today’s Challenge - Text Editor with Undo/Redo (DLL Insertions, Deletions & Traversal) 

// Imagine you are building a Text Editor where each action (typing or deleting text) is stored in a Doubly Linked List. This allows you to move backward (Undo) and forward (Redo) through the actions efficiently.

// 👉 Requirements:
// 1. Insert Action at End → Add a new action (like “Type A” or “Delete B”) at the end of the list.
// 2. Undo → Move one step backward in the DLL and show the previous action.
// 3. Redo → Move one step forward in the DLL and show the next action.
// 4. Delete Last Action → Remove the most recent action from the history.
// 5. Show History Forward → Print all actions from start to end.
// 6. Show History Backward → Print all actions from end to start.

// ⚡ Input Example

// InsertAction "Type A"  
// InsertAction "Type B"  
// InsertAction "Type C"  
// Undo  
// Redo  
// DeleteLastAction  
// ShowHistoryForward  
// ShowHistoryBackward  


class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.current = null;
    }



    addAction(data) {
        const newNode = new Node(data);
        if (this.current && this.current !== this.tail) {
            let temp = this.current.next;
            while (temp) {
                let next = temp.next;
                temp.prev = temp.next = null;
                temp = next;
            }
            this.current.next = null;
            this.tail = this.current;
        }

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.current = this.tail; 
    }
    deleteActionAtEnd() {
        if (this.tail === null) {
            console.log("list is empty");
            return;
        }

        if (this.tail.prev === null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            if (this.current && this.current.next === null) {
                this.current = this.tail;
            }
        }
        this.size--;
    }
    viewForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + (current.next ? "->" : "");
            current = current.next;
        }
        console.log("Forward :" + result);
    }
    viewBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.data + (current.prev ? "->" : "");
            current = current.prev;
        }
        console.log("Backward :" + result);
    }
    undo() {
        if (this.current === null) {
            console.log("nothing to undo");
        }
        else if (this.current.prev !== null) {
            this.current = this.current.prev;
            console.log(this.current.data)
        }
        else {
            this.current = null;
            console.log('no current action')
        }
    }
    redo() {
        if (this.current === null && this.head !== null) {
            this.current = this.head;
            console.log(this.current.data)
        }
        else if (this.current.next !== null) {
            this.current = this.current.next;
            console.log(this.current.data)
        }
        else {
            console.log("no action to redo")
        }
    }
}
let double = new DoublyLinkedList();
double.addAction("type A");
double.addAction("type B");
double.addAction("type C");
double.undo();
double.redo();
double.deleteActionAtEnd();
double.viewForward();
double.viewBackward();


//output
// type B
// type C
// Forward :type A->type B
// Backward :type B->type A