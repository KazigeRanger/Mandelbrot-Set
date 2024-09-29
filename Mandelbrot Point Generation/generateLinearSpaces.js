const Decimal = require("decimal.js");

function generateLinSpace(start, end, substeps) {
    let linspace = [];
    const substepSize = new Decimal((Math.abs(Math.max(start, end)-Math.min(start, end)))/(substeps-1));

    for (let i = 0; i < substeps-1; i++) {
        linspace.push(new Decimal(start).plus(new Decimal(substepSize.times(i))));
    }
    linspace.push(end);

    return linspace;
}

module.exports = {generateLinSpace};