// a function that calculates cng rent ...

function getCngFare(kotoDurGese, raitni = false, waitKorseni = 0){
    let varaFor2km = 50;
    let varaAfter2km = kotoDurGese > 2 ?((kotoDurGese - 2) * 15) : 0;
    let waitingVara = waitKorseni * 2;
    let raiterExtraNise = raitni ? 0.2 : 0;
    let exraVara = (varaFor2km + varaAfter2km + waitingVara) * raiterExtraNise;
    let totalVara = varaFor2km + varaAfter2km + waitingVara + exraVara;
    return totalVara;
}

console.log(getCngFare(3,true, 10));
