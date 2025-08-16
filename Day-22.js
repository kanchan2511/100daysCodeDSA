//Day-22

// During an Independence Day parade, different colored flags are being waved one after another.
// You are given an array colors[], where each element is a string representing the color of a flag in order.

// Your task is to find the shortest continuous segment in colors that contains at least one "orange", one "white", and one "green" the three colors of the Indian flag.

// If no such segment exists, return -1.


function shortestIndianFlag(colors){
    let counts = {orange: 0, white: 0, green: 0}
    let minlength = Infinity;
    let left =0;
    
    for(let i=0;i<colors.length;i++){
       if(counts.hasOwnProperty(colors[i])){
        counts[colors[i]]++;
       }
        while(counts.orange > 0 && counts.white > 0 && counts.green > 0){
            minlength = Math.min(minlength,i - left + 1);
            if(counts.hasOwnProperty(colors[left])){
        counts[colors[left]]--;
       }
             left++;
        }
         
    }
     return minlength === Infinity ? -1 : minlength;
}
console.log(shortestIndianFlag(["blue", "orange", "white","green", "orange"]));

//output: 3