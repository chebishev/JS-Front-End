function solve(input){
    let meetings = {};
    while (input.length > 0) {
        let [day, name] = input.shift().split(' ');
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else {
            console.log(`Conflict on ${day}!`);
        }
    }
    
    for (let [key, value] of Object.entries(meetings)) {
        if (value === false) {
           continue
        }
        console.log(`${key} -> ${value}`);

    }    

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)
