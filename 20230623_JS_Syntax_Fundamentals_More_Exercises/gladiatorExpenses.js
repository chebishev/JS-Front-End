function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let total;
    let counter = {
        helmet: 0,
        sword: 0,
        shield: 0,
        armor: 0
    }
    for (let i = 1; i <= lostFights; i++){
        if (i % 2 === 0){
            counter.helmet += 1;
        }
        if (i % 3 === 0){
            counter.sword += 1;
        }
        if (i % 6 === 0){
            counter.shield += 1;
        }
        if (i % 12 === 0){
            counter.armor += 1;
        }
    }
    total = (counter.helmet * helmetPrice) + (counter.sword * swordPrice) + (counter.shield * shieldPrice) + (counter.armor * armorPrice);
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}


solve(7, 2, 3, 4, 5)
solve(23, 12.50, 21.50, 40, 200)