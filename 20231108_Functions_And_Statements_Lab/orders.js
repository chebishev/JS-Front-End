function solve(drink, count){
    prices = {
        "coffee": 1.50,
        "water": 1,
        "coke": 1.40,
        "snacks": 2
    }
    function calculatePrice(drink, count){
        return prices[drink] * count
    }
    console.log(`${calculatePrice(drink, count).toFixed(2)}`)

}
solve("water", 5)
solve("coffee", 2)