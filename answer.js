//ans:1
function describeValue(data){
    let type = typeof data;
    let trueOrfalse
    
    if(data){
        trueOrfalse = "truthy";
    } else{
        trueOrfalse = "falsy";
    }

    return `"${type} | ${trueOrfalse}"`;
};

//ans:2
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
};

//ans:3
function validateUsername(username){
    username = username.toLowerCase();

    if(username.length <= 3){
        return "Too short";
    }else if (username.includes(" ")){
        return "No spaces allowed";
    }else if(username.includes("admin")){
        return "Reserved Word";
    }else{return "Available";}

};

//ans:4
function getCngFare(kotoDurGese, raitni = false, waitKorseni = 0){
    let varaFor2km = 50;
    let varaAfter2km = kotoDurGese > 2 ?((kotoDurGese - 2) * 15) : 0;
    let waitingVara = waitKorseni * 2;
    let raiterExtraNise = raitni ? 0.2 : 0;
    let exraVara = (varaFor2km + varaAfter2km + waitingVara) * raiterExtraNise;
    let totalVara = varaFor2km + varaAfter2km + waitingVara + exraVara;
    return totalVara;
};

//ans:5
const getChaseVerdict = (target, runHoise, ballAse) => {
    let runLagbe = target - runHoise;
    let runRate = (runLagbe / ballAse) * 6;
    let amarVerdict;

    switch(true){
        case runLagbe <= 0:
            return "Won";
        case ballAse <= 0:
            return "Lost";
        case runRate <= 6:
            amarVerdict = "Comfortable";
            break;
        case 6 < runRate && runRate <= 12:
            amarVerdict = "Tough";
            break;
        case runRate > 12:
            amarVerdict = "Almost Impossible";
            break;
    }

    return `Need ${runLagbe} runs in ${ballAse} balls | ${amarVerdict}`
};