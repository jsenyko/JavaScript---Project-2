let theirName = prompt("Welcome to Jakob's mini golf! What is your name?");
console.log(theirName);

let numofholes = prompt("Hi, "+ theirName +"! would you like to play 3 or 6 holes today?" )
console.log(numofholes);

let = sum = 0; //the total number of strokes
let coursePar = (3 * numofholes); // either 9 or 18


if (numofholes === "3"){


    console.log("The par for 3 holes is 9 putts");
    
    const hole1 = parseInt(prompt("how many putts for hole 1? (par is 3)"))

    const hole2 = parseInt(prompt("how manu putts for hole 2? (par is 3)"))

    const hole3 = parseInt(prompt("how many putts for hole 3? (par is 3)"))

    const sum = hole1 + hole2 + hole3;
    
    console.log(sum);

    let totalPar = (coursePar - sum);

    if (sum < coursePar){
        alert( `Great job, ${theirName}! Your total par was: -${totalPar}.`)
    }
    if (sum === coursePar){
        alert( `Good game, ${theirName}. Your total par was: ${totalPar}.`)
    }
    if (sum > coursePar){
        alert( `Nice try, ${theirName}... Your total par was: +${Math.abs(totalPar)}.`)
    }
}


else if (numofholes ==="6"){

    console.log("The par for 6 holes is 18 putts")

    const hole1 = parseInt(prompt("how many putts for hole 1? (par is 3)"))

    const hole2 = parseInt(prompt("how manu putts for hole 2? (par is 3)"))

    const hole3 = parseInt(prompt("how many putts for hole 3? (par is 3)"))

    const hole4 = parseInt(prompt("how many putts for hole 4? (par is 3)"))

    const hole5 = parseInt(prompt("how manu putts for hole 5? (par is 3)"))

    const hole6 = parseInt(prompt("how many putts for hole 6? (par is 3)"))
    
    const sum = hole1 + hole2 + hole3 + hole4 + hole5 + hole6;
    
    console.log(sum);

    let totalPar = (coursePar - sum);

    if (sum < coursePar){
        alert( `Great job, ${theirName}! Your total par was: -${totalPar}.`)
    }
    if (sum === coursePar){
        alert( `Good game, ${theirName}. Your total par was: ${totalPar}.`)
    }
    if (sum > coursePar){
        alert( `Nice try, ${theirName}... Your total par was: +${Math.abs(totalPar)}.`)
    }
}