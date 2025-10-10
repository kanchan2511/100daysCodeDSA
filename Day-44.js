
//  Today’s Challenge  Music Playlist (Circular Linked List) 

//  Requirements:
// 1. Add Song at End → Insert a new song into the playlist (end of list).
// 2. Add Song at Beginning → Insert a new song at the start of the playlist.
// 3. Show Playlist → Traverse once and print all songs in the playlist order.
// 4. Play Songs in Loop → Traverse circularly and print the first k songs being played in order.

// ⚡ Input Example

// AddSong "Shape of You" at end  
// AddSong "Believer" at end  
// AddSong "Senorita" at beginning  
// ShowPlaylist  
// PlaySongs k=5

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
        this.size = 0;
    }

    insertSongAtStart(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = newNode;
        }
        this.size++;
    }



    insertSongAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }


    showPlaylist() {
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



    playSongsInLoop(k) {
        if (!this.head) return;
        let current = this.head;
        for (let i = 0; i < k; i++) {
            console.log("Playing: " + current.data);
            current = current.next;
        }
    }


}


const songs = new circularLinked();


songs.insertSongAtEnd("SHAPE OF YOU");
songs.insertSongAtEnd("BELIEVER");
songs.insertSongAtStart("SENORITA");
console.log("Playlist:", songs.showPlaylist().join(" -> "));
songs.playSongsInLoop(5)


//output
// Playlist: SENORITA -> SHAPE OF YOU -> BELIEVER
// Playing: SENORITA
// Playing: SHAPE OF YOU
// Playing: BELIEVER
// Playing: SENORITA
// Playing: SHAPE OF YOU


