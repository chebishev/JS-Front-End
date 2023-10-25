function solve(num1, operator, num2){
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    let result = operations[operator](num1, num2).toFixed(2);
    console.log(result);
}

solve(5, '+', 10);
solve(25.5, '-', 3);