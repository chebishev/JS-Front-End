function piccolo(carsDataArr) {
  let parkingLot = [];
  for (let i = 0; i < carsDataArr.length; i++) {
    let [direction, plateNumber] = carsDataArr[i].split(", ");
    if (direction === "IN" && !parkingLot.includes(plateNumber)) {
      parkingLot.push(plateNumber);
    } else if (direction === "OUT" && parkingLot.includes(plateNumber)) {
      parkingLot.splice(parkingLot.indexOf(plateNumber), 1);
    }
  }
  if (parkingLot.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    parkingLot.sort((a, b) => a.localeCompare(b));
    console.log(parkingLot.join("\n"));
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
