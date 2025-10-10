
//  Today’s Challenge - Circular Queue of Printers 

// Imagine you’re designing a Printer Queue System for an office. Multiple printers are connected in a circular network, and print jobs are assigned in a round-robin fashion.

// 👉 Requirements:
// 1. AddPrinter → Insert a new printer into the circular queue (end of list).
// 2. ShowPrinters → Traverse once and print all printers in the queue.
// 3. AssignJobs(k) → Simulate job assignment for k jobs in round-robin order (traverse circularly k times and print the printer assigned each job).

// ⚡ Input Example
// AddPrinter "Printer1"  
// AddPrinter "Printer2"  
// AddPrinter "Printer3"  
// ShowPrinters  
// AssignJobs k=7  


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class circularLinked{
    constructor(data){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    AddPrinterAtHead(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
            this.tail.next=newNode;
        }
        this.size++;
    }
    AddPrinterAtEnd(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.next=this.head;
            this.tail=newNode;
        }
        this.size++;
    }
    showPrinter(){
        let result=[];
        if(!this.head) return result;
        let current=this.head;
        do{
           result.push(current.data);
           current=current.next;
        }
        while(current!==this.head);
            return result;
    }
    AssignJobs(k){
        if(!this.head) return;
        let current=this.head;
        for(let i=0; i<k; i++){
            console.log("Assigning job" + current.data);
            current = current.next;
        }
        
    }
}


let printer= new circularLinked();
 printer.AddPrinterAtEnd("printer1")
 printer.AddPrinterAtEnd("printer 2")
 printer.AddPrinterAtEnd("printer 3")
 console.log(printer.showPrinter().join("->"));
 printer.AssignJobs(7);


//output:
//  printer1->printer 2->printer 3
// Assigning jobprinter1
// Assigning jobprinter 2
// Assigning jobprinter 3
// Assigning jobprinter1
// Assigning jobprinter 2
// Assigning jobprinter 3
// Assigning jobprinter1