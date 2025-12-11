//Take marks (0–100) and print grade:A (90–100)B (80–89)C (70–79)D (60–69)F (<60)
let marks=25
if(marks >=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B")
}
else if(marks>=70){
    console.log("Grade C")
}
else if(marks>=60){
    console.log("Grade D")
}
else if(marks<60){
    console.log("Grade F")
}

//Take the current hour (0–23) and print:Good MorningGood AfternoonGood Evening Good Night
let hours=4;
if(hours>=6){
    console.log("Good morning")
}
else if(hours >=12){
    console.log("Good afternoon")
}
else if(hours >=5){
    console.log("Good Evening")
}
else {
    console.log("Good night")
}

