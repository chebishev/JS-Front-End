function solve(speed, roadType){
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let speedDifference = 0;
    let speedStatus = "";
    
    if (speed <= limits[roadType]){
        console.log(`Driving ${speed} km/h in a ${limits[roadType]} zone`);
    }else{
        speedDifference = speed - limits[roadType];
        if (speedDifference > 40){
            speedStatus = "reckless driving";
        }else if (speedDifference > 20){
            speedStatus = "excessive speeding";
        }else if (speedDifference > 0){
            speedStatus = "speeding";
        }
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limits[roadType]} - ${speedStatus}`)
    }
}  
solve(40, 'city');
solve(21, "residential");
solve(120, 'interstate')