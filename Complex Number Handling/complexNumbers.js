class complexNumber {
    constructor(realPart, imaginaryPart) {
        this._realPart = realPart;
        this._imaginaryPart = imaginaryPart
    }

    add(numberToAdd) {
        if (numberToAdd._imaginaryPart !== undefined) {
            return new complexNumber(this._realPart+numberToAdd._realPart, this._imaginaryPart+numberToAdd._imaginaryPart);
        } else if (numberToAdd._imaginaryPart === undefined) {
            return new complexNumber(this._realPart+numberToAdd, this._imaginaryPart);
        }
    }

    subtract(numberToSubtract) {
        if (numberToSubtract._imaginaryPart !== undefined) {
            return new complexNumber(this._realPart-numberToSubtract._realPart, this._imaginaryPart-numberToSubtract._imaginaryPart);
        } else if (numberToSubtract._imaginaryPart === undefined) {
            return new complexNumber(this._realPart-numberToSubtract, this._imaginaryPart);
        }
    }

    multiplyComplex(complexNumberToMultiplyWith) {
        return new complexNumber(this._realPart*complexNumberToMultiplyWith._realPart-this._imaginaryPart*complexNumberToMultiplyWith._imaginaryPart, this._realPart*complexNumberToMultiplyWith._imaginaryPart+this._imaginaryPart*complexNumberToMultiplyWith._realPart);
    }

    calculatePhiRad() {
        return Math.atan(this._imaginaryPart/this._realPart);
    }

    calculatePhiDeg() {
        return 180/Math.PI*Math.atan(this._imaginaryPart/this._realPart);
    }

    calculateRadius() {
        return Math.sqrt(Math.pow(Math.abs(this._realPart), 2)+Math.pow(Math.abs(this._imaginaryPart), 2));
    }
}

module.exports = {complexNumber};