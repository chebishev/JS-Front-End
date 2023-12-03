function heroesRegistry(heroesArr) {
  let heroesObj = {};
  for (const heroData of heroesArr) {
    let [Hero, level, items] = heroData.split(" / ");
    level = Number(level);
    items = items.split(", ");
    heroesObj[level] = {
      Hero,
      level,
      items,
    };
  }
  for (let [level, heroData] of Object.entries(heroesObj)) {
    console.log(`Hero: ${heroData.Hero}`);
    console.log(`level => ${level}`);
    console.log(`items => ${heroData.items.join(", ")}`);
  }
}
heroesRegistry([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroesRegistry([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
