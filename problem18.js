//Given two numbers, print the larger number.
num1=20;
num2=30;
if(num1>num2){
    console.log("num1 is larger number")
}
else{
    console.log("num2 is larger number")
}

//Check if a person is a child (<13), teen (13–19), or adult (20+).
let a = 14;
if(a>=20){
    console.log("Adult")
}
else if(a>=13&&a<=19){
    console.log("Teen Age")
}
else{
    console.log("Child")
}

//Check if a character is a vowel or consonant
let ch='b';
ch = ch.toLowerCase();
if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
    console.log("Vowel");
}
else{
    console.log("consonent");
}

//Check whether a student passed or failed (pass mark = 35)
let marks=65;
if(marks >=35){
    console.log("Pass");
}
else{
    console.log("Failed");
}

//Check if a number is divisible by both 3 and 5.
let num=30;
if(num%3===0&&num%5===0){
    console.log("Divisible by 3 and 5")
}
else{
    console.log("not divisible by 3 and 5")
}