function solve(num1, num2, num3, num4) {
  function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  function checkDistance(distance, ...args) {
    let output;
    if (Number.isInteger(distance)) {
      output = "valid";
    } else {
      output = "invalid";
    }
    return `{${args[0]}, ${args[1]}} to {${args[2]}, ${args[3]}} is ${output}`;
  }

  let result = distance(num1, num2, 0, 0);
  console.log(checkDistance(result, num1, num2, 0, 0));

  result = distance(num3, num4, 0, 0);
  console.log(checkDistance(result, num3, num4, 0, 0));

  result = distance(num1, num2, num3, num4);
  console.log(checkDistance(result, num1, num2, num3, num4));
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
