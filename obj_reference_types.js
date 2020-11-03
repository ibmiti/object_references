// reference type example 
var obj1 = { value : 10 };

// this variable exists as an reference for box1 -- and nothing more
var refobj1 = obj1;

// truth test :::

obj1 == refobj1 
// >> output true

if ( obj1 == refobj1 ){
    return console.log('obj1 and its ref refobj1 are equal');
} else {
    console.log('they are not equal');
}

//  obj1 == refobj1 && obj2 == obj2 && refobj1 
// showing that we can pass along references to other variables 
var obj2 = obj1; 

var obj3 = { value: 10};

if (obj1 && obj2 == obj3){
    console.log('true : these are equal');
} else {
    console.log('false : these are not equal');
}
// out put will be false... these are not equal
// an obj is not equal to another obj 


// however ::

objfoo = { v:true };
objbar = { v:true };

if (objfoo.v == objbar.v) {
    console.log('true : the prop vals can be equal');
} else {
    console.log('false : the prop vals are not equal');
} 
// output :: will return true

