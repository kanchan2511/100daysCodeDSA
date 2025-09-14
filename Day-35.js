// Photo Gallery Viewer (DLL Insertions & Traversal)

// Imagine you’re building a Photo Gallery App where each photo is linked to the previous and next photo. A Doubly Linked List is the perfect structure for this! 

// 👉 Requirements:
// 1. Add Photo at End → Insert a new photo into the gallery (at the end).
// 2. Add Photo at Beginning → Insert a new photo at the start.
// 3. View Gallery Forward → Traverse forward to display photos in order.
// 4. View Gallery Backward → Traverse backward to display photos in reverse order.

// ⚡ Input Example

// AddPhoto P1 at end  
// AddPhoto P2 at end  
// AddPhoto P0 at beginning  
// View Forward  
// View Backward


// ✅ Expected Output

// Forward: P0 → P1 → P2  
// Backward: P2 → P1 → P0

// ⚡ Hint:
// * Each photo node stores prev and next pointers.
// * Update both pointers properly during insertion.
// * Backward traversal is only possible because of DLL (not possible in SLL).


class Node{
    constructor(data){
         this.data = data
         this.prev = null
         this.next = null
    }
}
class PhotoGallery {
    constructor(){
        this.head = null
        this.tail = null
    }
    addPhotoAtEnd(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }
    addPhotoAtBeginning(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    forward(){
         let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.data;
            if (temp.next !== null) result += " → ";
            temp = temp.next;
        }
        console.log("Forward:", result);
    }
    backward(){
        let temp = this.tail;
        let result = "";
        while (temp !== null) {
            result += temp.data;
            if (temp.prev !== null) result += " → ";
            temp = temp.prev;
        }
        console.log("Backward:", result);
    }
}
const gallery = new PhotoGallery();

gallery.addPhotoAtEnd("P1");
gallery.addPhotoAtEnd("P2");
gallery.addPhotoAtBeginning("P0");
gallery.forward(); 
gallery.backward()

//output
// Forward: P0 → P1 → P2
// Backward: P2 → P1 → P0
 
