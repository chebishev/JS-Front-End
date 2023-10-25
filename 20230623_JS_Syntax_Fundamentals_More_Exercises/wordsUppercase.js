function solve(string){

    // regex that checks for all delimiters
    const re = /\W/g
    let output = '';

    // it holds the splitted string
    let tempArray = string.split(re);
    tempArray.forEach(element => {
        
        // if element is not empty (former blank space and after split ""), replace it with ", "
        if (element){
            output += element.toUpperCase() + ', ';
        }
    });
    // remove the last two characters
    console.log(output.slice(0, -2));
}
solve('Hi, how are you?');
solve('hello');
solve('Functions in JS can be nested, i.e. hold other functions')