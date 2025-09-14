// Design a Playlist Manager (DLL Insertions & Traversal) 

// You are asked to build a Playlist Manager where songs are stored in a Doubly Linked List. The system should allow insertion at different positions and viewing songs both ways.

// 👉 Requirements:
// 1. Add Song at Head → Insert a new song at the beginning.
// 2. Add Song at Tail → Insert a new song at the end.
// 3. Add Song at Index → Insert a song at a specific position (0-based index).
// 4. Show Playlist Forward → Print songs from head to tail.
// 5. Show Playlist Backward → Print songs from tail to head.

// ⚡ Input Example

// AddAtHead "SongA"  
// AddAtTail "SongB"  
// AddAtTail "SongC"  
// AddAtIndex 1 "SongX"  
// ShowForward  
// ShowBackward  


// ✅ Expected Output

// SongA → SongX → SongB → SongC  
// SongC → SongB → SongX → SongA  


// 💡 Hint:
// * Inserting at head
// * Inserting at tail
// * Inserting in the middle

class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}
class ListManager{
    constructor(){
        this.head = null
        this.tail = null
    }
    addAtHead(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }
    addAtTail(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    addAtIndex(index, data){
        if(index === 0){
            this.addAtHead(data)
            return
        }
        let temp = this.head
        let count = 0
        while(temp !== null && count < index - 1){
            temp = temp.next;
            count++
        }
        if(temp === null){
            this.addAtTail(data)
            return
        }
        const newNode = new Node(data)
        newNode.next = temp.next;
        newNode.prev = temp
        if(temp.next !== null){
            temp.next.prev = newNode
        }else{
            this.tail = newNode
        }
        temp.next = newNode
    }
    forward(){
        let temp = this.head;
        let result = "";
        while (temp) {
            result += temp.data;
            if (temp.next) result += " → ";
            temp = temp.next;
        }
        console.log(result);
    }
    backward(){
        let temp = this.tail;
        let result = "";
        while (temp) {
            result += temp.data;
            if (temp.prev) result += " → ";
            temp = temp.prev;
        }
        console.log(result);
    }
}
const playlist = new ListManager();

playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.forward()
playlist.backward()

//output
// SongA → SongX → SongB → SongC
// SongC → SongB → SongX → SongA