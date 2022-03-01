// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// TEST //
// Test myEach against the native forEach to ensure that myEach works as the same as forEach
let myArray = [1,2,,4,5];   // Array called by the function

// Test with 1 parameter: element
console.log("myEach (1 parameter): element");
myArray.myEach(x => console.log(x));   // Parameter: x => console.log(x)
console.log("forEach (1 parameter): element");
myArray.forEach(x => console.log(x));   // Parameter: x => console.log(x)

// Test with 2 parameters: element, index
console.log("myEach (2 parameters): element, index");
myArray.myEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)
console.log("forEach (2 parameters): element, index");
myArray.forEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)

// Test with 3 parameters: element, index, array
console.log("myEach (3 parameters): element, index, array");
myArray.myEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)
console.log("forEach (3 parameters): element, index, array");
myArray.forEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)

// Original array is not affected
console.log("Original array:");
console.log(myArray);
/*
// MAP //
Array.prototype.myMap = function() {

};

// SOME //
Array.prototype.mySome = function() {

};
*/
// REDUCE //
Array.prototype.myReduce = function(reduceFnc,initialValue) {
    let total=0;
    let i=0;
    if(initialValue === undefined)  //If initial value not given, total value starts at index 0, iterate array starting from index 1
    {
        i=1;
        total=this[0]
    }
    else
        total=initialValue //EX. initialValue is "2", Initial Value if given set iterate through entire array
        
    for (i; i < this.length; i++) {   
        if (this[i] === undefined) continue;
        total=reduceFnc(total,this[i]); //EX. reduceFnc is "previousValue-currentValue", also the previous/total value added with new initial
    }                                   
    return total;
};

// TEST //
// Test myReduce against the native reduce to ensure that myReduce works as the same as reduce

let initialValue = 2;
let myArrayReduce = [1, 2, 3, 4];   // Array called by the function

//Test add all values together with no inital value
let sumWithInitial = myArrayReduce.reduce((previousValue, currentValue) => previousValue + currentValue);
let sumWithInitial2 = myArrayReduce.myReduce((previousValue,currentValue)=> previousValue + currentValue);

console.log("reduce: previousValue + currentValue, no initial");
console.log(sumWithInitial);

console.log("myReduce: previousValue + currentValue, no initial");
console.log(sumWithInitial2);

//Test add all values together with inital value
sumWithInitial=myArrayReduce.reduce((previousValue,currentValue)=> previousValue + currentValue, initialValue);
sumWithInitial2=myArrayReduce.myReduce((previousValue,currentValue)=> previousValue + currentValue, initialValue);

console.log("reduce: previousValue + currentValue, with initial");
console.log(sumWithInitial);

console.log("myReduce: previousValue + currentValue, with initial");
console.log(sumWithInitial2);

//Test subtract all values together with inital value

sumWithInitial = myArrayReduce.reduce((previousValue, currentValue) => previousValue - currentValue, initialValue);
sumWithInitial2=myArrayReduce.myReduce((previousValue,currentValue)=> previousValue - currentValue, initialValue);

console.log("reduce: previousValue - currentValue, with initial");
console.log(sumWithInitial);

console.log("myReduce: previousValue - currentValue, with initial");
console.log(sumWithInitial2);

console.log("Original array:");
console.log(myArrayReduce); 


// INCLUDES //
Array.prototype.myIncludes = function(include) {
    for (let i = 0; i < this.length; i++) {  
        if (this[i] === undefined) continue;
        if(this[i] === include) //EX. include is "2"
            return true;
    } 
    return false;
};

// TEST //
// Test myIncludes against the native includes to ensure that myIncludes works as the same as includes

//Test if array contains 2
const myArrayInclude = [1, 2, 3];

console.log("includes: contains 2?");
console.log(myArrayInclude.includes(2));
console.log("myIncludes: contains 2?");
console.log(myArrayInclude.myIncludes(2));
console.log("Original array:");
console.log(myArrayInclude); 


//Test if array contains cat
const pets = ['cat', 'dog', 'bat'];


console.log("includes: contains cat?");
console.log(pets.includes('cat'));
console.log("myIncludes: contains cat?");
console.log(pets.myIncludes('cat'));
// expected output: true
console.log("Original array:");
console.log(pets); 

//Test if array does outputs false
console.log("includes: contains at?");
console.log(pets.includes('at'));
console.log("myIncludes: contains at?");
console.log(pets.myIncludes('at'));
// expected output: false
console.log("Original array:");
console.log(pets);

/*// INDEXOF //
Array.prototype.myIndexOf = function() {

};*/

// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// TEST //
// Test myPush against the native Push to ensure that myPush works as the same as Push
let myArrayPush = [1,2,3,4,5];   // Array called by the function
console.log("myPush:");
console.log(myArrayPush.myPush(6,7,8));   // Output returned array length
console.log(myArrayPush);   // Output [1,2,3,4,5,6,7,8]

myArray = [1,2,3,4,5];   // Array called by the function
console.log("Push:");
console.log(myArrayPush.push(6,7,8));   // Output returned array length
console.log(myArrayPush);   // Output [1,2,3,4,5,6,7,8]
/*
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

}; */