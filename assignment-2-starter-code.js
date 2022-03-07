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

// MAP //
Array.prototype.myMap = function(callback) {
    const resultArray = [];
    // "this" keyword refers to the array being called.
    for (let i = 0; i < this.length; i++){
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        // pushes the element of the called array into the new array
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
};

// TEST //
// Test myMap against the native map to ensure that myMap works as the same as map
let myArrayMap = [1,2,3,4,5];   // Array called by the function

// Test with 1 parameter: element
console.log("myMap (1 parameter): element");
const myDouble = myArrayMap.myMap(x => x * 2);
console.log(myDouble);   

console.log("map (1 parameter): element");
const double = myArrayMap.map(x => x * 2);   
console.log(double); 

// Test with 2 parameters: element, index
console.log("myMap (2 parameters): element, index");
myArrayMap.myMap((x,i) => console.log(x,i));

console.log("map (2 parameters): element, index");
myArrayMap.map((x,i) => console.log(x,i));

// Test with 3 parameters: element, index, array
console.log("myMap (3 parameters): element, index, array");
myArrayMap.myMap((x,i,myArrayMap) => console.log(x,i,myArrayMap));

console.log("map (3 parameters): element, index, array");
myArrayMap.map((x,i,myArrayMap) => console.log(x,i,myArrayMap));

// SOME //
Array.prototype.mySome = function(callBackFunction) {
    for (let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if(callBackFunction(this[i], i, this)) return true;
      }
    return false;
};

//TEST1
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
//TEST2,3
function isBiggerThan10(element, index, array) {
  return element > 10;
};
//TEST4,5
const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.mySome(function(arrVal) {
    return val === arrVal;
  });
};

console.log("TEST1 output:"+array.mySome(even));
console.log("TEST2 output:"+[2, 5, 8, 1, 4].mySome(isBiggerThan10));
console.log("TEST3 output:"+[12, 5, 8, 1, 4].mySome(isBiggerThan10));
console.log("TEST4 output:"+checkAvailability(fruits, 'kela'));
console.log("TEST5 output:"+checkAvailability(fruits, 'banana'));
console.log("TEST1 expected : true");
console.log("TEST2 expected : false");
console.log("TEST3 expected : true");
console.log("TEST4 expected : false");
console.log("TEST5 expected : true");
//SOME END//


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

// INDEXOF //
Array.prototype.myIndexOf = function(string, index) {
    let startingIndex = 0;
    if (index != undefined){
        startingIndex = index;
    }
    
    for (let i = startingIndex; i < this.length; i++){
        if(this[i] == undefined) continue;
        if (this[i] == string){
            return i;
        }
    }
    return -1
};

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// TEST //
// Test myIndexOf against the native indexOf to ensure that myIndexOf works as the same as indexOf

// Test with 1 parameter: string
console.log("myIndexOf (1 parameter): string");
console.log(beasts.myIndexOf('bison')); // expected output: 1

console.log("indexOf (1 parameter): string");
console.log(beasts.indexOf('bison'));   // expected output: 1

// Test with 1 parameter: string
console.log("myIndexOf (1 parameter): string");
console.log(beasts.myIndexOf('giraffe')); // expected output: -1
console.log("indexOf (1 parameter): string");
console.log(beasts.indexOf('giraffe')); // expected output: -1

// Test with 2 parameters: string, index
console.log("myIndexOf (2 parameters): string, index");
console.log(beasts.myIndexOf('bison', 2));  // expected output: 4

console.log("indexOf (2 parameters): string, index");
console.log(beasts.indexOf('bison', 2));    // expected output: 4

// Test with 2 parameters: string, index
console.log("myIndexOf (2 parameters): string, index");
console.log(beasts.myIndexOf('ant', 2));  // expected output: -1

console.log("indexOf (2 parameters): string, index");
console.log(beasts.indexOf('ant', 2));    // expected output: -1


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

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(item,index) {
	index===undefined ? startingIndex=this.length-1:startingIndex=index;
	for (let i = startingIndex; i >=0 ; i--) {
        if(this[i] === undefined) continue;
        if(this[i] === item) return i;
    }
    return -1;
};

//test1-5
var numbers = [2, 5, 9, 2];
//test6-8
var letters = ['a', 'b', 'a', 'c', 'a', 'd'];

console.log("TEST1 output:"+numbers.lastIndexOf(2));
console.log("TEST2 output:"+numbers.lastIndexOf(7));
console.log("TEST3 output:"+numbers.lastIndexOf(2, 3));
console.log("TEST4 output:"+numbers.lastIndexOf(2, 2));
console.log("TEST5 output:"+numbers.lastIndexOf(2, -2));
console.log("TEST6 output:"+letters.myLastIndexOf("a"));
console.log("TEST7 output:"+letters.myLastIndexOf("c"));
console.log("TEST8 output:"+letters.myLastIndexOf("a",3));
console.log("TEST1 expected : 3");
console.log("TEST2 expected : -1");
console.log("TEST3 expected : 3");
console.log("TEST4 expected : 0");
console.log("TEST5 expected : 0");
console.log("TEST6 expected : 4");
console.log("TEST7 expected : 3");
console.log("TEST8 expected : 2");
// LASTINDEXOF END //

// KEYS //
Object.myKeys = function(obj) {
    let keyArr = [];
    for (var k in obj)
    {
        keyArr.push(k);
    }

    return keyArr;
};

// VALUES //
Object.myValues = function(obj) {
    let valArr = [];
    for (var v in obj)
    {
        valArr.push(obj[v]);
    }

    return valArr;
}; 