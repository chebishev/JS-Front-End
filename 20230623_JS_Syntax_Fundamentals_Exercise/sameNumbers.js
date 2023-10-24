function solve(number){
    let sum = 0;
    let array = []
    let allNumbersAreEqual = true;
    while (number > 0){
        sum += number % 10;
        array.push(number % 10);
        number = Math.floor(number / 10);
    }
    numberToCheck = array.shift();
    array.forEach(element => {
        if (element !== numberToCheck){
            allNumbersAreEqual = false;
        }
    })
    console.log(allNumbersAreEqual);
    console.log(sum);
}
solve(2222222);
solve(1234);