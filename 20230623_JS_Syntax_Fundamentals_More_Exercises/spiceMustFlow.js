function solve(yield){
    let extractedSpices = 0;
    let days = 0;
    let expenses = 0;
    while (yield >= 100){
        extractedSpices += yield
        yield -= 10
        days += 1
    }
    expenses = (days * 26) + 26;
    console.log(days);
    total = (extractedSpices - expenses);
    if (total < 0){
        total = 0;
    }
    console.log(total);
}

solve(111);
solve(450);