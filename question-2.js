// a function that takes name of the day and returns it's weekend or wording day or it's invalid ...

function getDayType(day){
    day = day.toLowerCase();

    switch(day){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working day";
        default:
            return "Invalid day";
    }
}

// console.log(getDayType("THURsday"));
// console.log(getDayType("mayday"));

