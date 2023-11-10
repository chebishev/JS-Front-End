function solve(array){
    percentage = 10
    array.shift()
    let operations = {
        'soap': (a) => a + 10,
        'water': (a) => a * 1.20,
        'vacuum cleaner': (a) => a * 1.25,
        'mud': (a) => a * 0.9
    }
    for (let operation of array){
        percentage = operations[operation](percentage)
    }
    console.log(`The car is ${percentage.toFixed(2)}% clean.`)
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])