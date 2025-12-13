// Use switch to print the day name (1–7).
let day =19;
switch(day){
    case 1:
    console.log("MOnday");
    break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Invalid day");

}

//Use switch to perform calculation (+, -, *, /) based on user input.
let a=20;
let b=20;
let op="/";
switch (op){
    case '+':{
        console.log(a+b);
        break;
    }
    case '-':{
        console.log(a-b);
        break;
    }
    case '*':{
        console.log(a*b);
        break;
    }
    case '/':{
        console.log(a/b);
        break;
    }
    default:
        console.log("Invalid operator");
}
//