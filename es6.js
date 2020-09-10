
let largestString;

const findLargestString = (strings) => {
    return largestString =  strings.reduce((a,b)=> a.length > b.length ? a : b, '');
    // set largestString to point to the 
    // longest string found in the strings array passed in
}
console.log("result", findLargestString(["the", "quick", "brown", "fox", "jumped", "over", "some", "shit"]));
