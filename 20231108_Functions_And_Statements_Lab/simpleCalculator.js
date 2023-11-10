function solve(firstNumber, secondNumber, operation){
    operations = {
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b,
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b
    }
    function getResult(firstNumber, secondNumber, operation){
        return operations[operation](firstNumber, secondNumber)
    }
    result = getResult(firstNumber, secondNumber, operation)
    console.log(result)
}
solve(5, 5, "multiply")
solve(40, 8, 'divide')
solve(12, 19, "add")
solve(50, 13, "subtract")