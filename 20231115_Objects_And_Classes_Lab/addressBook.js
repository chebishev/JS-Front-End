function solve(array){
    let person = {
    }
    for (let i=0; i<array.length; i++){
        let [name, address] = array[i].split(':');
        person[name] = address;
    }
    let sortable = []
    for (let key in person){
        sortable.push([key, person[key]])
    }
    sortable.sort(function(a, b){
        return a[0].localeCompare(b[0]);
    })
    for (let i=0; i<sortable.length; i++){
        console.log(`${sortable[i][0]} -> ${sortable[i][1]}`)
    }

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'
])