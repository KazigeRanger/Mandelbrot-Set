const { complexNumber } = require("./../Complex Number Handling/complexNumbers.js");
const { generateLinSpace } = require("./generateLinearSpaces.js");

function generateMandelbrotPoints(maxNumberOfIterations, resolution) {
    let z = new complexNumber(0, 0);
    const imageHorizontalRange = generateLinSpace(-2.5, 1, resolution);
    const imageVerticalRange = generateLinSpace(-1, 1, resolution);

    console.log("CHECK CHECK");

    let iterationCount = 0;
    for (let i = 0; i < imageHorizontalRange.length; i++) {
        for (let j = 0; j < imageVerticalRange.length; j++) {
            let c = new complexNumber(imageHorizontalRange[i], imageVerticalRange[j]);

            for (let k = 0; k < maxNumberOfIterations; k++) {
                iterationCount += 1
                console.log(`ITERATION ${iterationCount}: z = ${z._realPart} + ${z._imaginaryPart}i     c = ${c._realPart} + ${c._imaginaryPart}i`);
                z1 = z.multiplyComplex(z);
                z = z1.add(c);
            }
        }
    }
}

generateMandelbrotPoints(5, 11);