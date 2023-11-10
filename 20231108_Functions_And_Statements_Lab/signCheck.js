function solve(...numbers){
    let countNegative = 0
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < 0){
            countNegative++
        }
    }
    if (countNegative % 2 === 0){
        console.log("Positive")
    }else{
        console.log("Negative")
    }
}
solve(5, 12, -15)
solve(-6, -12, 14)
solve(-1, -2, -3)
solve(-5, 1, 1)