
// 💡 Today’s Challenge - Music Playlist Editor (DLL Insertions, Deletions & Traversal) 

// You are designing a Music Playlist App where songs are stored in a Doubly Linked List. Your system should support both insertion and deletion operations, while allowing traversal in both directions.

// 👉 Requirements:
// 1. Add Song at Head → Insert a new song at the beginning.
// 2. Add Song at Tail → Insert a new song at the end.
// 3. Add Song at Index → Insert a song at a specific position (0-based index).
// 4. Delete Song at Head → Remove the first song.
// 5. Delete Song at Tail → Remove the last song.
// 6. Delete Song at Index → Remove the song at a specific position.
// 7. Show Playlist Forward → Traverse from head to tail.
// 8. Show Playlist Backward → Traverse from tail to head.

// ⚡ Input Example

// AddAtHead "SongA"  
// AddAtTail "SongB"  
// AddAtTail "SongC"  
// AddAtIndex 1 "SongX"  
// ShowForward  
// DeleteAtIndex 2  
// ShowForward  
// ShowBackward  
// DeleteAtHead  
// DeleteAtTail  
// ShowForward


class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}
class Playlist{
    constructor(){
        this.head = null
        this.tail = null
    }
    addAtHead(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }
    addAtTail(data){
        const newNode = new Node(data)
        if (!this.tail) {
            this.head = this.tail = newNode;
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
        let temp = this.head;
        for(let i = 0; i<index-1 && temp; i++){
            temp = temp.next
        }
        if(!temp) return
        if(!temp.next){
            this.addAtTail(data)
        }else{
            const newNode = new Node(data)
            newNode.next = temp.next;
            newNode.prev = temp
            temp.next.prev = newNode
            temp.next = newNode
        }
    }
    deleteAtHead(){
        if(!this.head) return
        let current = this.head
        if(this.head === this.tail){
             this.head = this.tail = null;
        }else{
            current.next.prev = null
            this.head = current.next
            current.next = null 
        }
    }
    deleteAtTail(){
        if(!this.tail) return;
        let temp = this.tail;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
    }
     deleteAtIndex(index) {
        if (index === 0) {
            this.deleteAtHead();
            return;
        }
        let temp = this.head;
        for (let i = 0; i < index && temp; i++) {
            temp = temp.next;
        }
        if (!temp) return; // invalid index
        if (temp === this.tail) {
            this.deleteAtTail();
        } else {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
    }
    showForward(){
        let forward = [];
        let current = this.head;
        while(current){
            forward.push(current.data);
            current = current.next;
        }
        console.log(forward.join(" → "));
      }
      showBackward() {
        let songs = [];
        let temp = this.tail;
        while (temp) {
            songs.push(temp.data);
            temp = temp.prev;
        }
        console.log(songs.join(" → "));
    }
}
const play = new Playlist();
play.addAtHead("SongA")
play.addAtTail("SongB")
play.addAtTail("SongC")
play.addAtIndex(1,"SongX")
play.showForward()
play.deleteAtIndex(2)
play.showForward()
play.showBackward()
play.deleteAtHead()
play.deleteAtTail()
play.showForward()

//output
// SongA → SongX → SongB → SongC
// SongA → SongX → SongC
// SongC → SongX → SongA
// SongX