// a function that takes a sting as username and gives feedback if the name follows the rules or not ...

function validateUsername(username){
    username = username.toLowerCase();

    if(username.length <= 3){
        return "Too short";
    }else if (username.includes(" ")){
        return "No spaces allowed";
    }else if(username.includes("admin")){
        return "Reserved Word";
    }else{return "Available";}

}

// console.log(validateUsername("sadmin"));
// console.log(validateUsername("karim"));
// console.log(validateUsername("md.samiul islam"));
// console.log(validateUsername("msi"));