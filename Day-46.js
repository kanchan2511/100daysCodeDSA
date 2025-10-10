//  Today’s Challenge - Token Ring Network Simulation 

// In computer networks, a Token Ring Protocol allows devices to pass a "token" around in a circular fashion to control communication. Let’s simulate this using a Circular Linked List.

// 👉 Requirements:
// 1. AddNode → Insert a new computer/node into the circular network (end of list).
// 2. ShowNetwork → Traverse once and display all nodes in the ring.
// 3. PassToken(k) → Starting from head, simulate passing the token k times around the ring and print which node has the token at each step.

// ⚡ Input Example
// AddNode "ComputerA"  
// AddNode "ComputerB"  
// AddNode "ComputerC"  
// ShowNetwork  
// PassToken k=6  


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
    }



    AddNode(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    showNetwork() {
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
   passToken(k){
        if(!this.head) return;
        let current=this.head;
        for(let i=0; i<k; i++){
            console.log("Token at:"   +   current.data);
            current=current.next;
        }
    }
}

let computers= new circularLinked()
computers.AddNode("COMPUTER A");
computers.AddNode("COMPUTER B");
computers.AddNode("COMPUTER C");
console.log(computers.showNetwork().join("->"));
computers.passToken(6)



//output
// Token at:COMPUTER A
// Token at:COMPUTER B
// Token at:COMPUTER C
// Token at:COMPUTER A
// Token at:COMPUTER B
// Token at:COMPUTER C