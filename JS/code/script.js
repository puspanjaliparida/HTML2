for(let i =100;i>=0;i-5)
    {
        console.log(i)
    }
// take an array 
// [2,5,7,8,9],print all elements of array using loop
for(let i=0;i<0;i+2)
    {
        console.log(i)
    }
for(let i of arr) //for of widely used for arrays
{
    console.log(i)
}
for(let i in arr) //for in widely used for objects
{
    console.log(i)
}
function countString(str) {
    let nv = 0, nc = 0, w = 0, s = 0;
    w = str.split(" ").length;
    for (let i in str) {
        if (/[aeiou]/i.test(str[i])) {
            nv++;
        } else if (/[a-z]/i.test(str[i])) {
            nc++;
        } else if (str[i] === " ") {
            s++;
        }
    }
    return {
        vowels: nv,
        consonants: nc,
        words: w,
        spaces: s
    };
}


