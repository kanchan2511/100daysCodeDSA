//day-23

// Minimum Window of Required Ingredients

// Scenario:
// You’re working on an inventory management system for a restaurant. The chef gives you a list of required ingredients for a dish, and you have a list of ingredients available over several deliveries in sequence.

// You need to figure out the shortest continuous sequence of deliveries that contains all the required ingredients at least once.

// Input:

// deliveries[]: an array of strings, each representing an ingredient delivered that day in order.

// required[]: a set/list of ingredients needed for the dish.

// Output:
// Length of the smallest window in deliveries that contains all required ingredients. If not possible, return -1.

function minWindow(deliveries){
    let minlength = Infinity;
    let left = 0;
    let tomato = 0;
    let cheese = 0;
    let onion = 0;
    for(let i = 0;i<deliveries.length;i++){
        if(deliveries[i] == "tomato"){
            tomato++;
        }
        if(deliveries[i] == "cheese"){
            cheese++;
        }
        if(deliveries[i] == "onion"){
            onion++;
        }
        while(tomato >= 1 && cheese >= 1 && onion >=1){
            minlength = Math.min(minlength,i - left + 1)
            if(deliveries[left] == "tomato"){
                tomato--;
            }
            if(deliveries[left] == "cheese"){
                cheese--;
            }
            if(deliveries[left] == "onion"){
                onion--;
            }
            left++;
        }
        
    }
     return minlength === Infinity ? -1 : minlength;
}
console.log(minWindow(["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]))

//output: 3