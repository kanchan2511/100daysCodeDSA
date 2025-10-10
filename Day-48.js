

// 💡 Today’s Challenge - Round Table Meeting Simulation 

// 👉 Requirements:
// 1. addParticipant(name) → Insert a new participant at the end of the round table.
// 2. removeParticipant(name) → Remove a participant by their name (if they exist).
// 3. showParticipants() → Traverse the circular table once and display all participants.
// 4. skipAndSelect(k) → Starting from the current participant, move k steps forward and print the selected participant’s name (like passing a mic in the meeting).

// ⚡ Input Example

// addParticipant("Alice")  
// addParticipant("Bob")  
// addParticipant("Charlie")  
// addParticipant("Diana")  
// showParticipants()  
// skipAndSelect(3)  
// removeParticipant("Charlie")  
// showParticipants()  
// skipAndSelect(4)  


class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class RoundTable {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //  Add participant at end
  addParticipant(name) {
    const newNode = new Node(name);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  //  Remove participant by name
  removeParticipant(name) {
    if (!this.head) return;

    //  Single node
    if (this.head === this.tail && this.head.name === name) {
      this.head = this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.name === name) {
        prev.next = current.next;

        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = prev;
        }

        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  //  Show all participants
  showParticipants() {
    if (!this.head) return [];
    const result = [];
    let current = this.head;
    do {
      result.push(current.name);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
    return result;
  }

  //  Skip k participants and select
  skipAndSelect(k) {
    if (!this.head) return;

    let current = this.head;
    let prev = this.tail; // previous node for reference

    // Move k steps
    for (let i = 1; i <= k; i++) {
      prev = current;
      current = current.next;
    }

    console.log("Selected:", current.name);
  }
}


const roundTable = new RoundTable();

roundTable.addParticipant("Alice");
roundTable.addParticipant("Bob");
roundTable.addParticipant("Charlie");
roundTable.addParticipant("Diana");

roundTable.showParticipants(); 

roundTable.skipAndSelect(3);  

roundTable.removeParticipant("Charlie");
roundTable.showParticipants(); 

roundTable.skipAndSelect(4);   


//output
// Alice -> Bob -> Charlie -> Diana
// Selected: Diana
// Alice -> Bob -> Diana
// Selected: Bob