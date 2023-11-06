function solve(array){
    let evenSum = 0;
    let oddSum = 0;
    while (array.length > 0){
        if (array[0] % 2 === 0){
            evenSum += array[0];
        } else {
            oddSum += array[0];
        }
        array.shift();
    }
    console.log(evenSum - oddSum);
    }
solve([1, 2, 3, 4, 5, 6])
solve([3, 5, 7, 9])
solve([2, 4, 6, 8, 10])