function solve(firstNumber, secondNumber, thirdNumber){
    function sum(firstNumber, secondNumber){
        return firstNumber + secondNumber
    }
    function subtract(sum, thirdNumber){
        return sum - thirdNumber
    }
    console.log(subtract(sum(firstNumber, secondNumber), thirdNumber))
}
solve(23, 6, 10)
solve(1, 17, 30)
solve(42, 58, 100)