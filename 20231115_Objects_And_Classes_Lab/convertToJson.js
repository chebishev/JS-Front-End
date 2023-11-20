function convert(name, lastName, hairColor){
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    let json = JSON.stringify(object);
    console.log(json);
}
convert('George', 'Jones', 'Brown')
convert("Peter", "Smith", "Blond")