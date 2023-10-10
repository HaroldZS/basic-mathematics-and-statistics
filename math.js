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