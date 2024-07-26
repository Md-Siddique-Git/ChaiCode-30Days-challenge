// Activity 1:Arithmetic operations
var a=12;
var b=23;
console.log(`sum of ${a} and ${b} is :`,a+b);
console.log(`subtraction of ${a} and ${b} is :`,b-a);
console.log(`multiplication of ${a} and ${b} is :`,a*b);
console.log(`divide of ${a} and ${b} is :`,b/a);
console.log(`remender of ${a} and ${b} is :`,b%a);

// Activity 2 Assignment operators
var c=23;
c+=24;
console.log(c);
var d=12;
d-=1;
console.log(d);

// Activity3 comparison operator
// comapair two numbers
console.log(c>d);
console.log(c<d);

console.log(c<=d);
console.log(c>=d);

console.log(a==b);
console.log(b===a);

// activity 4 logical opperators
console.log(a<b && c>d);
console.log(a>b || c<d);
console.log(!(a>d));

let e=-23;
console.log((e>0)?`${e} is a positive number`:`${e} is negative`);