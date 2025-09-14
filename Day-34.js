// - Music Playlist with Singly Linked List

// Imagine you’re building a Playlist Manager where each song is stored in a Singly Linked List.

// 👉 Requirements:
// 1.  Add Song at End → Insert a song at the end of the playlist.
// 2.  Add Song at Beginning → Insert a song at the start of the playlist.
// 3.  Delete Song by Name → Remove the first occurrence of a song by its name.
// 4.  Delete Song by Position → Remove a song at a given position (1-based index).
// 5.  Show Playlist → Print the current list of songs.

// ⚡ Input Example
// AddSong “Shape of You” at end  
// AddSong “Believer” at end  
// AddSong “Perfect” at beginning  
// DeleteSong “Believer”  
// DeleteSong at position 1 
// ShowPlaylist

// ✅ Expected Output
// Perfect → Shape of You → Believer  
// Perfect → Shape of You  
// Shape of You


// ⚡ Hint:
// 1. Handle edge cases like deleting from an empty playlist.
// 2. For deletion by position, carefully handle when position = 1 (deleting head).
// 3. Always update the head pointer correctly after insertions/deletions.



class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addSongAtEnd(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }
    addSongAtBeginning(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    deleteSongByName(data) {
        if (this.head === null) return;
        if (this.head.data === data) {
            this.head = this.head.next
            return;
        }
        let temp = this.head
        while(temp.next !== null && temp.next.data !== data){
            temp = temp.next;
        }
        if(temp.next !== null){
            temp.next = temp.next.next;
        }
    }
    deleteSongByPosition(data){
        if(this.head === null) return;
        if(data === 1){
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;
        while(temp !== null && count < data - 1){
            temp = temp.next;
            count++
        }
        if(temp !== null && temp.next !== null){
            temp.next = temp.next.next;
        }
    }
    showTasks(){
        if(this.head == null){
            console.log("Playlist is empty")
            return;
        }
         let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.data;
            if (temp.next !== null) result += " → ";
            temp = temp.next;
        }
        console.log(result);
    }
}
const list = new LinkedList();
list.addSongAtEnd("Shape of You")
list.addSongAtEnd("Believer");
list.addSongAtBeginning("Perfect");
list.showTasks()
list.deleteSongByName("Believer")
list.showTasks()
list.deleteSongByPosition(1);
list.showTasks()

//output
// Perfect → Shape of You → Believer
// Perfect → Shape of You
// Shape of You