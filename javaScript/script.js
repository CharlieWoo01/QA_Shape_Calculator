const shapeTypes = {
  shape1: "Circle",
  shape2: "Rectangle",
  shape3: "Triangle",
};

const CIRCLE_PI = Math.PI;

const shape = () => {
  const shapeValue = document.getElementById("shape-type").value;
  return shapeValue;
};

const checkShape = () => {
  const selectedShape = shape();
  return selectedShape in shapeTypes;
};

const validRectangleLengths = () => {
  const width = document.getElementById("rectangle-width")?.value;
  const length = document.getElementById("rectangle-length")?.value;
  return width > 0 && length > 0;
};

const validTriangleLengths = () => {
  const sideA = parseInt(document.getElementById("triangle-a")?.value);
  const sideB = parseInt(document.getElementById("triangle-b")?.value);
  const sideC = parseInt(document.getElementById("triangle-c")?.value);
  const height = parseInt(document.getElementById("triangle-height")?.value);
  return sideA > 0 && sideB > 0 && sideC > 0 && height > 0;
};

const validCircleLengths = () => {
  const radius = document.getElementById("circle-radius")?.value;
  return radius > 0;
};

const validateRectangle = () => {
  const width = document.getElementById("rectangle-width")?.value;
  const length = document.getElementById("rectangle-length")?.value;
  return (
    (validRectangleLengths() && width > length) ||
    (validRectangleLengths() && width < length)
  );
};

const rectangleArea = () => {
  const width = document.getElementById("rectangle-width").value;
  const length = document.getElementById("rectangle-length").value;
  return validateRectangle() ? width * length : 0;
};

const rectanglePerimeter = () => {
  const width = document.getElementById("rectangle-width").value;
  const length = document.getElementById("rectangle-length").value;
  return validateRectangle() ? width * 2 + length * 2 : 0;
};

const circleArea = () => {
  const radius = document.getElementById("circle-radius").value;
  return validCircleLengths() ? Math.pow(radius, 2) * CIRCLE_PI : 0;
};

const circlePerimeter = () => {
  const radius = document.getElementById("circle-radius").value;
  return validCircleLengths() ? 2 * CIRCLE_PI * radius : 0;
};

const triangleArea = () => {
  const base = document.getElementById("triangle-b").value;
  const height = document.getElementById("triangle-height").value;
  return validTriangleLengths() ? 0.5 * base * height : 0;
};

const trianglePerimeter = () => {
  const sideA = parseInt(document.getElementById("triangle-a").value);
  const sideB = parseInt(document.getElementById("triangle-b").value);
  const sideC = parseInt(document.getElementById("triangle-c").value);
  return validTriangleLengths() ? sideA + sideB + sideC : 0;
};

const hideCalculatorResult = () => {
  const calculationAnswer = document.querySelectorAll(".calculation-answer");
  calculationAnswer.forEach((input) => (input.style.display = "none"));
};

const showCalculatorResult = () => {
  const calculationAnswer = document.querySelectorAll(".calculation-answer");
  calculationAnswer.forEach((input) => (input.style.display = "inline-block"));
};

const showShapeInputs = () => {
  const selectedShape = shape();
  const checkedShape = checkShape();
  const circleInputs = document.querySelectorAll(".circle-input");
  const rectangleInputs = document.querySelectorAll(".rectangle-input");
  const triangleInputs = document.querySelectorAll(".triangle-input");
  const calculatorButton = document.querySelectorAll("#calculator-activation");

  circleInputs.forEach((input) => (input.style.display = "none"));
  rectangleInputs.forEach((input) => (input.style.display = "none"));
  triangleInputs.forEach((input) => (input.style.display = "none"));
  calculatorButton.forEach((input) => (input.style.display = "none"));

  // So that the button can remove the result when clicked off I chose to write as a function.
  hideCalculatorResult();

  if (checkedShape) {
    calculatorButton.forEach((input) => (input.style.display = "inline-block"));
  }

  if (selectedShape === "shape1") {
    circleInputs.forEach((input) => (input.style.display = "inline-block"));
  } else if (selectedShape === "shape2") {
    rectangleInputs.forEach((input) => (input.style.display = "inline-block"));
  } else if (selectedShape === "shape3") {
    triangleInputs.forEach((input) => (input.style.display = "inline-block"));
  }
};

const calculations = () => {
  if (checkShape() && shape() === "shape1") {
    if (circlePerimeter() > 0 || circleArea() > 0) {
      document.getElementById("perimeter-calculation").innerHTML =
        circlePerimeter();
      document.getElementById("area-calculation").innerHTML = circleArea();
      showCalculatorResult();
    } else {
      alert("Please ensure that your numbers are over 0");
    }
  } else if (checkShape() && shape() === "shape2") {
    if (rectanglePerimeter() > 0 || rectanglePerimeter() > 0) {
      document.getElementById("perimeter-calculation").innerHTML =
        rectanglePerimeter();
      document.getElementById("area-calculation").innerHTML = rectangleArea();
      showCalculatorResult();
    } else {
      alert(
        "Please ensure that your numbers are over 0 and the lengths and widths are not equal"
      );
    }
  } else if (checkShape() && shape() === "shape3") {
    if (trianglePerimeter() > 0 || triangleArea() > 0) {
      document.getElementById("perimeter-calculation").innerHTML =
        trianglePerimeter();
      document.getElementById("area-calculation").innerHTML = triangleArea();
      showCalculatorResult();
    } else {
      alert("Please ensure that your numbers are over 0");
    }
  }
};
