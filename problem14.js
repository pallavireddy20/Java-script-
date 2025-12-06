//Print numbers from 1 to 10 using a loop
for(i=0;i<=10;i++){
    console.log(i)
}
//Print all even numbers from 1 to 20
for(i=0;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

//Print the sum of numbers from 1 to 50
let sum=0
for(i=0;i<=50;i++){
    sum+=i;
}
console.log(sum)
// mutliplication tablee
for (let i = 1; i <= 10; i++) {
  console.log(`4 x ${i} = ${4 * i}`);
}
//Count numbers divisible by 7 from 1 to 50
let count=0
for(i=0;i<=50;i++){
    if(i%7===0){
     count++;
    }
}
console.log(count)