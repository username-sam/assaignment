// a function to chase cricket run verdict...

const getChaseVerdict = (target, runHoise, ballAse) =>{
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
}


// console.log(getChaseVerdict(200, 200, 12));
// console.log(getChaseVerdict(200, 190, 0));
// console.log(getChaseVerdict(100, 90, 12));
// console.log(getChaseVerdict(100, 80, 12));
// console.log(getChaseVerdict(100, 70, 12));
// console.log(getChaseVerdict(150, 149, 1));