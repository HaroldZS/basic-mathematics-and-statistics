const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.group("Square");
console.log({
  squareSide,
  squarePerimeter,
  squareArea,
});
console.groupEnd("Square");

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBaseSide = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBaseSide;
const triangleArea = (triangleBaseSide * triangleHeight) / 2;

function calculateSquare(side) {
  return {
    perimeter: side * 4,
    area: side * side,
  };
}

function calculateTriangle(side1, side2, base, height) {
  return {
    perimeter: side1 + side2 + base,
    area: (base * height) / 2,
  };
}

console.group("Triangle");
console.log({
  triangleSide1,
  triangleSide2,
  triangleBaseSide,
  triangleHeight,
  trianglePerimeter,
  triangleArea,
});
console.groupEnd("Triangle");

const circleRadius = 3;
const circleDiameter = circleRadius * 2;
const PI = 3.1415;
const circumference = circleDiameter * PI;
const cirleArea = circleRadius ** 2 * PI;

console.log({
  circleRadius,
  circleDiameter,
  PI,
  circumference,
  cirleArea,
});

console.group("Circle");
function calculateCircle(radius) {
  const diameter = radius * 2;
  const squareRadius = Math.pow(radius, 2);

  return {
    circumference: diameter * Math.PI,
    area: squareRadius * Math.PI,
  };
}
console.groupEnd("Circle");
