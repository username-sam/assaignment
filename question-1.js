// a function that return the given data's type + (truthy or falsy).....

function describeValue(data){
    let type = typeof data;
    let trueOrfalse
    
    if(data){
        trueOrfalse = "truthy";
    } else{
        trueOrfalse = "falsy";
    }

    return `"${type} | ${trueOrfalse}"`;
}

// console.log(describeValue("0"));
// console.log(describeValue(true));
// console.log(describeValue(false));
// console.log(describeValue(null));
// console.log(describeValue(undefined));
// console.log(describeValue('hello'));
// console.log(describeValue(42));
// console.log(describeValue({}));
// console.log(describeValue([]));