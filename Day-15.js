//Day-15
//problem:  "Detect Suspicious Browsing Pattern"

// Problem Statement:
// You're analyzing user browsing behavior. You are given a list of webpages (as strings), visited in order, and a window size k. You need to find if any window of k consecutive pages contains all unique pages (i.e., no page is repeated).
// If such a window exists, return true. Else, return false.

function uniqueWindow(pages,k){
    for(i=0;i<pages.length - k;i++){
        let seen = [];
        for(j=i;j<i+k;j++){
            if(seen.includes(pages[j])){
                break;
            }else{
                seen.push(pages[j]);
            }
        }
        if(seen.length === k){
            return true;
        }
    }
    return false;
}
console.log(uniqueWindow(["home", "about", "products", "home", "cart", "checkout"],3))

//output: true
//Explanation: The window ["about", "products", "home"] has all unique entries.

