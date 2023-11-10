function solve(array) {
  const desiredTickness = array.shift();
  let xRayCounter = 0;
  let isFinished = false;
  function resetOperations(){
    return {
        Cut: [(a) => a / 4, 0],
        Lap: [(a) => a * 0.8, 0],
        Grind: [(a) => a - 20, 0],
        Etch: [(a) => a - 2, 0],
      };
  }
  let operations = resetOperations()

  function xRay(ore) {
    if (xRayCounter === 0) {
      ore += 1;
      xRayCounter++;
      return ore;
    }
  }

  function transportAndWashing(ore) {
    console.log("Transporting and washing");
    return Math.floor(ore);
  }
  while (array.length > 0) {
    currentOre = array.shift();
    console.log(`Processing chunk ${currentOre} microns`);
    while (currentOre > desiredTickness) {
        if (isFinished){
            break
        }
      for (let operation of Object.keys(operations)) {
        if (isFinished) {
          break;
        }
        let testOre = currentOre;
        while (testOre >= desiredTickness) {
          testOre = operations[operation][0](testOre);
          if (testOre < desiredTickness - 1) {
            break;
          }
          currentOre = testOre;
          operations[operation][1]++;
        }if (operations[operation][1] > 0){
            console.log(`${operation} x${operations[operation][1]}`);
            currentOre = transportAndWashing(currentOre);
        }
        if (currentOre === desiredTickness) {
          isFinished = true;
        } else if (currentOre === desiredTickness - 1) {
          currentOre = xRay(currentOre);
          console.log("X-ray x1");
          isFinished = true;
          xRayCounter = 0;
        }
      }
    }
    console.log(`Finished crystal ${desiredTickness} microns`);
    isFinished = false
    operations = resetOperations()
  }
}
solve([1375, 50000]);
solve([1000, 4000, 8100]);