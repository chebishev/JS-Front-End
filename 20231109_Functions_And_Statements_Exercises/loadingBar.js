function solve(number){
    if (number === 100){
        console.log("100% Complete!")
    }else{
        let percent = (number/100)*100
        let progress = number/10
        console.log(`${(number/100)*100}% [${"%".repeat(progress)}${".".repeat(10-progress)}]`)
        console.log("Still loading...")
    }
    
}
solve(30)
solve(50)
solve(100)