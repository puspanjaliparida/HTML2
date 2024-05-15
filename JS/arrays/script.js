/* there are two types of data types primitive and non-primitive*/

// 1.primitive data types stores/compares values whereas non-primitive compares address 
let str="raj"
let str1="raj";
console.log(str==str1);
let arr=[2,3,5];
let x=arr;
let arr1=[2,3,5];
console.log(arr==x)
arr.push(6)
console.log(arr)

// 2.primitive data types are immutable-not changable
let str2="shekhar"
str2.toUpperCase()
console.log(str2)

// Arrays-
// Array is a collection of Elements.
let a=["rajkumar",0,true]
console.log(a.length)
console.log(a.push(5),a)
console.log(a.pop(),a)
console.log(a.unshift(25),a)
console.log(a.shift(),a)
console.log(a.push(5,6,7,8,9),a)
console.log(a.splice(4,0,14,15),a)
console.log(a.reverse())
console.log(a.indexOf("raj"))
console.log(a.sort())
console.log(["xyz","abc"].join("   "));

console.log(arr)
let res1=arr.forEach(function(v)
{
   console.log(v)
})
console.log(res1)
// [5,8,7,6,3]
//write for,for..of,for..in to print array elements

let arrDemo=[5,6,7,6,3]
//every element printed whose are present in array
for(let x=0;x<arrDemo.length;x++)
    {
        console.log(arrDemo[x])
    }
//every element printed whose are present in array
for(let x of arrDemo){
    console.log(x)
}
//for in gives the indexes
for(let x in arrDemo){
    console.log(x)
}
//every element printed whose are present in array
arrDemo.forEach(function(v){
    console.log(v)
})

let newArray=arrDemo.forEach(function(v){
    console.log(v*v)
    return v*v;
})
//forEach cannot return anything
console.log(newArray)
arrDemo.forEach(function(v){
    console.log(v)
})

let newArray2=arrDemo.map(function(v){
    console.log(v*v)
    return v*v;
})
console.log(newArray2)

let newArray3=arrDemo.filter(function(v){
    console.log(v*v)
    return v % 2==0;
})
console.log(newArray3)

let newArray4=arrDemo.reduce(function(c,p){
    return c+p;
},0)
console.log(newArray4)

// take an Array,print the Elements,square and sort them,filter numbers geaterthan 20 and find their sum

let array=[1,2,3,4,5]
array.forEach(function (x){ console.log(x)})
let newArray1=array.map(function(v){
    return v*v
})
newArray1.sort()
const newArray9=array.filter(function(v){
    return v>20
},0)
console.log([25,26,27,28].reduce(function(c,p){
     return c+p
},10))
