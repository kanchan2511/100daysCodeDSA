//Day-16
//Count Occurrences of Anagrams
// Given a string txt and a pattern string pat, your task is to count how many times an anagram of pat appears in txt as a substring.

function countAnagrams(txt,pat){
    let count=0;
    let sortedPat=pat.split("").sort().join("");
    for(let i=0;i<=txt.length - pat.length;i++){
        let substring=txt.substring(i, i + pat.length).split("").sort().join("");
        if(substring===sortedPat){
            count++;
        }
    }
    return count;
}
console.log(countAnagrams("forxxorfxdofr","for"));

//output: 3