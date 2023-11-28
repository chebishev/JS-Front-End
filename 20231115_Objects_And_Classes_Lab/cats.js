function solve(cats){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of cats){
        let [name, age] = cat.split(' ');
        let newCat = new Cat(name, age);
        newCat.sayMeow();
    }
}
solve(['Mellow 2', 'Tom 5'])
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])