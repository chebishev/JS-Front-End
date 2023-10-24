function solve(start, stop){
    let sum = 0;
    let list = '';
    for (let i = start; i <= stop; i++){
        list += i + ' ';
        sum += i;
    }
    console.log(list);
    console.log("Sum: " + sum);
}

solve(5, 10)
solve(0, 26)