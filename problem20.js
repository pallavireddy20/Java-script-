//Check if three numbers form a tringle (sum of any 2 > third).
let a=10;
let b=20;
let sum=a+b;
let c=50;
if(sum>c){
    console.log("Forms a Triangle")
}
else{
    console.log("Doesn't form a Triangle")
}

//Check if a year is a leap year or not.
let year=2024;
if(year %4===0 && year %100!=0 ||year %400===0){
    console.log("it's a leap year")
}
else{
    console.log("its not a leap year")
}

//Take a number and check:If > 0 → PositiveIf < 0 → NegativeIf = 0 → Zero
let num=-10;
if(num>0){
    console.log("positive number");
}
else if(num<0){
    console.log("Negative number");
}
else{
    console.log("zero")
}