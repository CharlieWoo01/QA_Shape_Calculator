const shapeTypes = {
  shape1: "Circle",
  shape2: "Rectangle",
  shape3: "Triangle",
};

const CIRCLE_PI = Math.PI;

const shape = () => {
  const shapeValue = $("#shape-type").val();
  return shapeValue;
};

const checkShape = () => {
  const selectedShape = shape();
  return selectedShape in shapeTypes;
};

const validRectangleLengths = () => {
  const width = $("#rectangle-width")?.val();
  const length = $("#rectangle-length")?.val();
  return width > 0 && length > 0;
};

const validTriangleLengths = () => {
  const sideA = parseInt($("#triangle-a")?.val());
  const sideB = parseInt($("#triangle-b")?.val());
  const sideC = parseInt($("#triangle-c")?.val());
  const height = parseInt($("#triangle-height")?.val());
  return sideA > 0 && sideB > 0 && sideC > 0 && height > 0;
};

const validCircleLengths = () => {
  const radius = $("#circle-radius")?.val();
  return radius > 0;
};

const validateRectangle = () => {
  const width = $("#rectangle-width")?.val();
  const length = $("#rectangle-length")?.val();
  return (
    (validRectangleLengths() && width > length) ||
    (validRectangleLengths() && width < length)
  );
};

const rectangleArea = () => {
  const width = $("#rectangle-width")?.val();
  const length = $("#rectangle-length")?.val();
  return validateRectangle() ? width * length : 0;
};

const rectanglePerimeter = () => {
  const width = $("#rectangle-width")?.val();
  const length = $("#rectangle-length")?.val();
  return validateRectangle() ? width * 2 + length * 2 : 0;
};

const circleArea = () => {
  const radius = $("#circle-radius")?.val();
  return validCircleLengths() ? Math.pow(radius, 2) * CIRCLE_PI : 0;
};

const circlePerimeter = () => {
  const radius = $("#circle-radius")?.val();
  return validCircleLengths() ? 2 * CIRCLE_PI * radius : 0;
};

const triangleArea = () => {
  const base = $("#triangle-b")?.val();
  const height = $("#triangle-height")?.val();
  return validTriangleLengths() ? 0.5 * base * height : 0;
};

const trianglePerimeter = () => {
  const sideA = parseInt($("#triangle-a")?.val());
  const sideB = parseInt($("#triangle-b")?.val());
  const sideC = parseInt($("#triangle-c")?.val());
  return validTriangleLengths() ? sideA + sideB + sideC : 0;
};

const hideCalculatorResult = () => {
  $(".calculation-answer").hide();
};

const showCalculatorResult = () => {
  $(".calculation-answer").show();
};

const showShapeInputs = () => {
  const selectedShape = shape();
  const checkedShape = checkShape();
  const circleInputs = $(".circle-input");
  const rectangleInputs = $(".rectangle-input");
  const triangleInputs = $(".triangle-input");
  const calculatorButton = $("#calculator-activation");

  circleInputs.hide();
  rectangleInputs.hide();
  triangleInputs.hide();
  calculatorButton.hide();

  // So that the button can remove the result when clicked off I chose to write as a function.
  hideCalculatorResult();

  if (checkedShape) {
    calculatorButton.show();
  }

  if (selectedShape === "shape1") {
    circleInputs.show();
  } else if (selectedShape === "shape2") {
    rectangleInputs.show();
  } else if (selectedShape === "shape3") {
    triangleInputs.show();
  }
};

const calculations = () => {
  const errorMessage = $("#error-message");
  const perimeterCalculation = $("#perimeter-calculation");
  const areaCalculation = $("#area-calculation");
  if (checkShape() && shape() === "shape1") {
    if (circlePerimeter() > 0 || circleArea() > 0) {
      perimeterCalculation.html(circlePerimeter());
      areaCalculation.html(circleArea());
      showCalculatorResult();
    } else {
      errorMessage.html("Please ensure that your numbers are over 0");
      errorMessage.show();
    }
  } else if (checkShape() && shape() === "shape2") {
    if (rectanglePerimeter() > 0 || rectanglePerimeter() > 0) {
      perimeterCalculation.html(rectanglePerimeter());
      areaCalculation.html(rectangleArea());
      showCalculatorResult();
    } else {
      errorMessage.html(
        "Please ensure that your numbers are over 0 and the lengths and widths are not equal"
      );
      errorMessage.show();
    }
  } else if (checkShape() && shape() === "shape3") {
    if (trianglePerimeter() > 0 || triangleArea() > 0) {
      perimeterCalculation.html(trianglePerimeter());
      areaCalculation.html(triangleArea());
      showCalculatorResult();
    } else {
      errorMessage.html("Please ensure that your numbers are over 0");
      errorMessage.show();
    }
  }
};
