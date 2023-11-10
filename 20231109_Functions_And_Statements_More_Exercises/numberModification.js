function solve(number){
    number = number.toString();
    function checkAverage(string){
        sum = 0
        for (n of string){
            sum += Number(n)
        }
        return sum / string.length
    }
    average = checkAverage(number)
    while (average < 5){
        number += 9;
        average = checkAverage(number)
    }
    console.log(number)
}
solve(100)
solve(5835)