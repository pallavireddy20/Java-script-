//Use switch to check the month number (1–12) and print season.

let month =11;
switch(month){
    case 12 :
    case 1:
        case 2:
            console.log("Winter Season");
            break;
    case 3:
    case 4:
    case 5:
        console.log("Summer Season");
        break;
    case 6:
        case 7:
            case 8:
                console.log("Monsoon Season");
                break;

    case 9:
        case 10:
            case 11:
                console.log("Autumn season");
                break;
                default:
                    console.log("invalid month");


}

//Use switch to print “Weekend” or “Weekday”.
let day=4;
switch (day) {
    case 6:
         case 5:
            console.log("Weekend");
            break;
            case 4:
                case 3:
                    case 2:
                        case 1:
                            case 5:
                                console.log("weekday");
                                break;
                                default:
                                    console.log("invalid day");
}

//Use switch to check grade and print description:A → ExcellentB → Very GoodC → GoodD → PassF → Fail
let Grade='A';
switch (Grade){
    case 'A':
        console.log("Excellent");
        break;
        case 'B':
            console.log("Very Good");
            break;
            case 'C':
                console.log("Good");
                break;
                case 'D':
                    console.log("Pass");
                    break;
                    case 'E':
                        console.log("Fail");
                        break;
                        default:
                            console.log("Invalid  Marks");
}