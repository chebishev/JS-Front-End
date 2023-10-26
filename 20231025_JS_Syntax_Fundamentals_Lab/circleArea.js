function circleArea(radius) {
  console.log(
    typeof radius === "number"
      ? (Math.PI * radius ** 2).toFixed(2)
      : `We can not calculate the circle area, because we receive a ${typeof radius}.`
  );
}
circleArea(5);
circleArea("5");
