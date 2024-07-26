// Activity 1 for loop 
for(let i=1;i<=10;i++){
    console.log(i);
}

// multiplication table 
let mul_of=5;
for(let i=1;i<=10;i++){
    console.log(`${mul_of} X ${i} = ${mul_of * i}`);

}
// Activity 2  while loop 

// sum of numbers or  n natural numbers
let number =1
let total=0

while (number<=10) {
    total+=number
    number+=1
}
console.log("totaling from 1 to 10 is ",total);

// numbers from 10 to 1
console.log("number from 10 to 1");

let numb =10

while(numb >=1){
    console.log(numb);
    numb-=1
}

// Acvity 3 Do While 
console.log("number from 1 to 5");
let num=1
do {
    console.log(num);
    num+=1

} while (num<=5);

// task 6 factorial

let factorial=1
let numbr=5
do {
    factorial*=numbr
    numbr--;
} while (numbr>0);
console.log(`the factorial of number is : ${factorial}`);

// Activity 4 Nested loop
// right triangle
for(let i =0;i<=5;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write("*")
    }
    console.log();
}
// 1 to 10 skip 5
for(let i=1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i);
}

// task9 break at 7
for(let i=1;i<=10;i++){
    if(i==7){
        break
    }
    console.log(i);
}