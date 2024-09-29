const { complexNumber } = require("./../Complex Number Handling/complexNumbers.js");
const { generateLinSpace } = require("./generateLinearSpaces.js");

function generateMandelbrotPoints(maxNumberOfIterations, resolution) {
    let z = new complexNumber(0, 0);
    const imageRange = generateLinSpace(-2.5, 1, resolution);
    console.log(imageRange);
}

generateMandelbrotPoints(10, 100)