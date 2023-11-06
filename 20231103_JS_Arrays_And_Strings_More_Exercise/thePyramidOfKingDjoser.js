function solve(base, increment) {
  let height = 0;
  let materials = {
    Stone: 0,
    Marble: 0,
    "Lapis Lazuli": 0,
    Gold: 0,
  };

  function wholeBlockSize() {
    return base * base * increment;
  }

  function doubleBase() {
    return base * 2;
  }

  while (base > 2) {
    height++;
    let outerMaterial = doubleBase();
    base -= 2;
    outerMaterial += doubleBase();
    decorationToAdd = outerMaterial * increment;
    if (height % 5 === 0) {
      materials["Lapis Lazuli"] += decorationToAdd;
    } else {
      materials.Marble += decorationToAdd;
    }
    materials.Stone += wholeBlockSize();
  }
  materials.Gold = wholeBlockSize();
  height = Math.floor(++height * increment);
  for (let key in materials) {
    console.log(`${key} required: ${Math.ceil(materials[key])}`);
  }
  console.log(`Final pyramid height: ${height}`);
}
solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);
