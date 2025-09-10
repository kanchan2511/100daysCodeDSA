// Implement the following operations on a Singly Linked List:
//  Insert a node at the end
//  Insert a node at the beginning
//  Delete a node from the beginning
//  Delete a node from the end

// => Input Example:
// Insert 10 at end  
// Insert 20 at end  
// Insert 5 at beginning  
// Delete node from end  
// Delete node from beginning  
// Print Linked List

// ⚡ Hint:

// Take care when the list is empty.
// For deletion at end, traverse till the second-last node.
// Always check boundary conditions.

class Node{
    constructor(data){
       this.data=data;
       this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtBegining(data){
        const newNode = new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtEnd(data){
        const newNode=new Node(data);
         if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
         }
         this.tail.next=newNode;
         this.tail=newNode;
    }
    deleteFromBeginning(){
        if(this.head===null){
            console.log("list is empty");
            return;
        }
        this.head=this.head.next;
        if(this.head===null){
            this.tail=null;
        }
    }
    deleteFromEnd(){
        if(this.head===null){
            console.log("list is empty");
            return;
        }
        if(this.head.next===null){
            //only one node
            this.head=null;
            this.tail=null;
            return;
        }
        let current=this.head;
        while(current.next!==this.tail){
            current=current.next;
        }
        current.next=null;
        this.tail=current;

    }
    printList(){
        let result="";
        let temp=this.head;
        while(temp!==null){
            result+=temp.data+"->";
            temp=temp.next;
        }
        result+="null";
        console.log(result);
    }
}

let list=new LinkedList();

list.insertAtBegining(5);
list.insertAtEnd(10);
list.insertAtEnd(20);
list.deleteFromEnd();
list.deleteFromBeginning();

list.printList();

//output:
//10->null