
// 💡 Today’s Challenge - Browser Tabs Manager (DLL Insertions, Deletions & Traversal) 

// Imagine you’re designing a Browser Tabs Manager. Each tab is represented as a node in a Doubly Linked List, allowing quick navigation forward and backward.

// 👉 Requirements:
// 1. Open New Tab at End → Insert a new tab at the end.
// 2. Open New Tab at Position → Insert a new tab at a given position (0-based).
// 3. Close Tab at Position → Delete the tab at a given position.
// 4. Move Next Tab → Traverse forward by one step.
// 5. Move Previous Tab → Traverse backward by one step.
// 6. Show All Tabs Forward → Print tabs left to right.
// 7. Show All Tabs Backward → Print tabs right to left.

// ⚡ Input Example

// OpenTabEnd "Google"  
// OpenTabEnd "YouTube"  
// OpenTabEnd "GitHub"  
// OpenTabAt 1 "LinkedIn"  
// ShowForward  
// CloseTabAt 2  
// ShowForward  
// MoveNext  
// MovePrev  
// ShowBackward  


// ✅ Expected Output

// Google → LinkedIn → YouTube → GitHub  
// Google → LinkedIn → GitHub  
// LinkedIn  
// Google  
// GitHub → LinkedIn → Google  


/* class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Browser {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.size = 0;
    }

    // 1. Open new tab at end
    openAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.current = this.tail;
        this.size++;
    }

    // 2. Open tab at a given position
    openAtPosition(position, data) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        const newNode = new Node(data);

        if (position === 0) { // insert at head
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
            if (this.size === 0) this.tail = newNode;
        }
        else if (position === this.size) { // insert at tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else { // insert in middle
            let temp = this.head;
            for (let i = 0; i < position; i++) {
                temp = temp.next;
            }
            newNode.prev = temp.prev;
            newNode.next = temp;
            temp.prev.next = newNode;
            temp.prev = newNode;
        }

        this.current = newNode;
        this.size++;
    }

    // 3. Close tab at a given position
    closeAtPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) { // remove head
            if (this.current === this.head) this.current = this.head.next;
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
        }
        else if (position === this.size - 1) { // remove tail
            if (this.current === this.tail) this.current = this.tail.prev;
            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;
            else this.head = null;
        }
        else { // remove middle
            let temp = this.head;
            for (let i = 0; i < position; i++) {
                temp = temp.next;
            }
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            if (this.current === temp) this.current = temp.next;
        }

        this.size--;
    }

   moveNext() {
    if (this.current && this.current.next) {
        this.current = this.current.next;   // move first
        console.log(this.current.data);     // then print
    }
}

movePrev() {
    if (this.current && this.current.prev) {
        this.current = this.current.prev;   // move first
        console.log(this.current.data);     // then print
    }
}




    // 6. Show all tabs forward
    showForward() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" → "));
    }

    // 7. Show all tabs backward
    showBackward() {
        let temp = this.tail;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.join(" → "));
    }
}

// ⚡ Test
let tabs = new Browser();
tabs.openAtEnd("Google");
tabs.openAtEnd("YouTube");
tabs.openAtEnd("GitHub");
tabs.openAtPosition(1, "LinkedIn");
tabs.showForward();       // Google → LinkedIn → YouTube → GitHub
tabs.closeAtPosition(2);
tabs.showForward();       // Google → LinkedIn → GitHub
tabs.moveNext();          // LinkedIn
tabs.movePrev();          // Google
tabs.showBackward();      // GitHub → LinkedIn → Google


//output
// Google → LinkedIn → YouTube → GitHub
// Google → LinkedIn → GitHub
// GitHub
// LinkedIn
// GitHub → LinkedIn → Google */

//Day 39 challenge 💥




class Node{
    constructor(data){
        this.data= data;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
        this.current=null;
    }

    OpenNewTabEnd(data){

        const newNode = new Node(data);
        if(this.head===null){
            this.head=this.tail=this.current=newNode;
        }
        else{
            newNode.prev= this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
            newNode.next=null;
        }
        this.size++;
    }



    addAtStart(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    

    openNewTabAtPosition(index, data) {
        if (index <= 0) {
            this.addAtStart(data);
            if (!this.current) this.current = this.head;
            return;
        }
        if (index >= this.size) {
            this.OpenNewTabEnd(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        let prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = current;
        current.prev = newNode;

        this.size++;
    }




     deleteAtStart() {
        if (this.head === null) {
            console.log("list is empty");
            return;
        }

        const deleteData = this.head.data;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return deleteData;
    }


    deleteAtEnd() {
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
        }
         this.size --;
    }



    closeTabAtPosition(index) {
        if (index < 0 || index >= this.size) {
            console.log("invalid index");
            return;
        }
        if (index == 0) {
            this.deleteAtStart();
            return;
        }
        if (index == this.size - 1) {
            this.deleteAtEnd();
            return;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }


        let deletedData = current.data;
        let prevNode = current.prev;
        let nextNode = current.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.size--;
        return deletedData;

    }




    moveNextTabForward(){
        if(!this.current){
            return null;
        }
        this.current = this.current.next ? this.current.next : this.head;
        return this.current;
    }

    moveNextTabBackward(){
        if(!this.current){
            return null;
        }
        this.current = this.current.prev ? this.current.prev : this.tail;
        return this.current;
    }


    viewForward() {
        let result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" → "));
    }

    viewBackward() {
        let result = [];
        let temp = this.tail;
        while (temp) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.join(" → "));
    }
    

}


//testing 

const browserTabs = new DoublyLinkedList();

browserTabs.OpenNewTabEnd("Google");
browserTabs.OpenNewTabEnd("YouTube");
browserTabs.OpenNewTabEnd("GitHub");
browserTabs.openNewTabAtPosition(1, "LinkedIn");

browserTabs.viewForward();          
browserTabs.closeTabAtPosition(2);   
browserTabs.viewForward();           // 

console.log(browserTabs.moveNextTabForward().data);
console.log(browserTabs.moveNextTabBackward().data); 

browserTabs.viewBackward();


//output
// Google → LinkedIn → YouTube → GitHub
// Google → LinkedIn → GitHub
// LinkedIn
// Google
// GitHub → LinkedIn → Google