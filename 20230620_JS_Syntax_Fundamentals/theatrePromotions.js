function solve (dayType, age) {
    let price;
    if (age > 64 && age <= 122) {
        price = [12, 15, 10]
    }else if (age > 18 && age <= 64) {
        price = [18, 20, 12]
    }else if (age >= 0 && age <= 18) {
        price = [12, 15, 5]
    }else {
        price = false
    }

    if (price){
        switch (dayType) {
            case "Weekday":
                console.log(price[0]+"$");
                break;
            case "Weekend":
                console.log(price[1]+"$");
                break;
            case "Holiday":
                console.log(price[2]+"$");
                break;
        }
    }else {
        console.log("Error!");
    }
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);