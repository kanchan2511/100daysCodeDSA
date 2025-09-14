//Day-32

// ⿡ Visit a new URL → Insert at the end.
// ⿢ Go back → Move one step backward (but remember, in singly linked list you can’t directly go back think how you’ll handle this).
// ⿣ Go forward → Move one step forward in the list.
// ⿤ Show current page → Print the current node’s value.

// ⚡ Input Example
// Visit google.com  
// Visit github.com  
// Visit linkedin.com  
// Back  
// Forward  
// Visit stackoverflow.com  
// Show Current Page

// ✅ Expected Output
// google.com  
// github.com  
// linkedin.com  
// github.com  
// linkedin.com  
// stackoverflow.com  
// stackoverflow.com

//  Hint:
// 1. In a singly linked list, you can’t move backward directly.
// 2. To implement Back, you may need to traverse from the head each time until you reach the previous node.


class Node {
    constructor(URL) {
        this.data = URL; 
        this.next = null;
    }
}
 
class LinkedList {
    constructor() {
        this.head = null;
        this.current = null;
    }

    visit(URL) {
        const newNode = new Node(URL);
        if (this.head == null) {
            this.head = newNode;
            this.current = newNode;
        } else {
            this.current.next = newNode;
            this.current = newNode;
        }
        console.log("Visited:", this.current.data);
    }

    back() {
        if (this.current === this.head) {
            console.log("No previous page");
            return;
        }
        let temp = this.head;
        while (temp.next !== this.current) {
            temp = temp.next;
        }
        this.current = temp;
        console.log("Back to:", this.current.data);
    }

    forward() {
        if (this.current === null || this.current.next === null) {
            console.log("No forward page");
            return;
        }
        this.current = this.current.next;
        console.log("Forward to:", this.current.data);
    }

    currentPage() {
        if (this.current === null) {
            console.log("No page visited");
            return;
        }
        console.log("Current Page:", this.current.data);
    }
}

const url = new LinkedList();
url.visit("google.com");
url.visit("github.com");
url.visit("linkedin.com");
url.back();
url.forward();
url.visit("stackoverflow.com");
url.currentPage();


//output
// Visited: google.com
// Visited: github.com
// Visited: linkedin.com
// Back to: github.com
// Forward to: linkedin.com
// Visited: stackoverflow.com
// Current Page: stackoverflow.com
