function solve(input){
    let person = {}

    while (input.length > 0) {
        let [name, phone] = input.shift().split(' ');
        person[name] = phone;
    }
    for (let [key, value] of Object.entries(person)) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)