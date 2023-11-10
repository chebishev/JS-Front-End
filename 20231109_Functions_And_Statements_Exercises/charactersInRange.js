function solve(firstChar, secondChar){
    firstChar = firstChar.charCodeAt(0)
    secondChar = secondChar.charCodeAt(0)
    let [start, stop] = [Math.min(firstChar, secondChar), Math.max(firstChar, secondChar)]
    let result = []
    start++;
    for (let i=start; i<stop; i++){
        result.push(String.fromCharCode(i))
    }
    console.log(result.join(' '))
}
solve('a', 'd')
solve("#", ":")
solve('C', "#")