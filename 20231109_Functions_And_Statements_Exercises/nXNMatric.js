function solve(matrixSize){
    let counter = matrixSize
    while(counter > 0){
        let rows = []
        for (let i = 0 ; i < matrixSize; i++){
            rows.push(matrixSize)
        }
        console.log(rows.join(' '))
        counter--;
    }
}
solve(3)
solve(7)