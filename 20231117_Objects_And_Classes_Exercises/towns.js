function createPrintFromTextTable(dataArr) {
  for (const dataEntry of dataArr) {
    let [town, latitude, longitude] = dataEntry.split(" | ");
    const dataObject = {};
    dataObject.town = town;
    dataObject.latitude = Number(latitude).toFixed(2);
    dataObject.longitude = Number(longitude).toFixed(2);
    console.log(dataObject);
  }
}
createPrintFromTextTable([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
createPrintFromTextTable(["Plovdiv | 136.45 | 812.575"]);
