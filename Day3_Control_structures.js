// Activty 1 num is pos neg or zero
let values = [23, -5, 0];

values.forEach(a => {
    if (a > 0) {
        console.log(`${a} is positive`);
    } else if (a < 0) {
        console.log(`${a} is negative`);
    } else {
        console.log(`${a} is zero`);
    }
});

// Activity 2 nested if else
// largest of 3 number
let a=4;
let b=5;
let c=7;
if (a>=b && a>=c) {
    console.log(`${a} is greatest`);
}else if(b>=a && b>=c){
    console.log(`${b} is greatest`);
}else {
    console.log(`${c} is largest`);
}

// Eligible for vote 
 let age=16;
 if (age<=18) {
    console.log('You are not eligible for vote');
    
 } else {
    console.log('you can vote');
 }

//  Activity 3 nested if else /
// switch case
var Day=5;
switch(Day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesdat');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break; 
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invailid number');
    
}

// Grading system using switch case 

let marks=30;
switch(true){
    case(marks >=90 && marks<=100):
    console.log('Grade A');
    break;
    case(marks >=80 && marks<=90):
    console.log('Grade B');
    break;
    case(marks >=70 && marks<=80):
    console.log('Grade C');
    break;
    case(marks >=60 && marks<=70):
    console.log('Grade D');
    break;
    default:{
        console.log('Grade F');
    }
      
}

// Activty 4 conditinal ternary operator 
// even odd 
let num =22;
let result = num %2==0? `${num} is even`:`${num} is odd`;
console.log(result);

// Activty 5 Leap year checker
let year=2001;
console.log((year%4===0 && year %100 !==0 )||(year%400 ===0)
? `${year} is a leap year`
: `${year} is nopt a leap year`
); 