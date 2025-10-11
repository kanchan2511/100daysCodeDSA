

// 💡 Today’s Challenge - Daily Temperatures

// You’re given an array temperatures[] where each element represents the daily temperature.

// For each day, find out how many days you’ll have to wait until a warmer temperature.
// If there’s no future day for which this is possible, output 0 for that day.

// Example 1

// Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

// Explanation:
// For 73 → next warmer day after 1 day (74)
// For 74 → next warmer after 1 day (75)
// For 75 → next warmer after 4 days (76)
// For 76 → no warmer day → 0

// Example 2
// Input: [30, 40, 50, 60]
// Output: [1, 1, 1, 0]

// Requirements:
// 1. Implement using a stack (no nested loops).
// 2. The stack will keep indices of days, not temperatures.
// 3. Traverse array once (O(n)):

// For each new day, check if its temperature is higher than the one on top of the stack.
// If yes → pop the stack, and calculate the difference in indices (that’s the waiting days).
// If no → push current day index to stack.

// ⚡ Hint:
// * Stack stores indices of decreasing temperatures.
// * As soon as you find a higher temperature, it means the day at the top of the stack got its answer.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
class DailyTemperature {
    constructor(temp){
        this.temp = temp;
        this.result = new Array(temp.length).fill(0);
        this.stack = new Stack();
    }
    calculate(){
        for(let i = 0;i<this.temp.length;i++){
            while(!this.stack.isEmpty() && this.temp[i]>this.temp[this.stack.peek()]){
                const prevIndex = this.stack.pop();
                this.result[prevIndex] = i - prevIndex;
            }
            this.stack.push(i)
        }
        return this.result;
    }
    display(){
        console.log("Temperatures:", this.temp)
        console.log("Days to wait for warmer temp:",this.result)
    }
}
const day1 = new DailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]);
day1.calculate();
day1.display();

const day2 = new DailyTemperature([30, 40, 50, 60]);
day2.calculate();
day2.display();


//output
// Temperatures: [
//   73, 74, 75, 71,
//   69, 72, 76, 73
// ]
// Days to wait for warmer temp: [
//   1, 1, 4, 2,
//   1, 1, 0, 0
// ]
// Temperatures: [ 30, 40, 50, 60 ]
// Days to wait for warmer temp: [ 1, 1, 1, 0 ]