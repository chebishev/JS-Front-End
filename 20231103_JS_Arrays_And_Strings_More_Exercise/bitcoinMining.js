function solve(array) {
  const bitcoinPrice = 11949.16;
  const goldPrice = 67.51;
  let boughtBitcoins = 0;
  let totalMoney = 0;
  let days = 1;
  let output = [];
  while (array.length > 0) {
    goldForTheDay = array.shift();
    if (days % 3 === 0) {
      goldForTheDay *= 0.7;
    }
    totalMoney += goldForTheDay * goldPrice;
    while (totalMoney >= bitcoinPrice) {
      boughtBitcoins++;
      totalMoney -= bitcoinPrice;
      if (boughtBitcoins === 1) {
        output.push(`Day of the first purchased bitcoin: ${days}`);
      }
    }
    days++;
  }
  output.unshift(`Bought bitcoins: ${boughtBitcoins}`);
  output.push(`Left money: ${totalMoney.toFixed(2)} lv.`);
  console.log(output.join("\n"));
}
solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
