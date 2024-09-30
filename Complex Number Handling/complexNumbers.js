class complexNumber {
    constructor(realPart, imaginaryPart) {
        this._realPart = realPart;
        this._imaginaryPart = imaginaryPart
    }

    // TODO: make the add method work if "numberToAdd" is negative.
    add(numberToAdd) {
        if (numberToAdd._imaginaryPart !== undefined) {
            if (Math.sign(numberToAdd._realPart) === 1 && Math.sign(numberToAdd._imaginaryPart) === 1) {
                return new complexNumber(this._realPart+numberToAdd._realPart, this._imaginaryPart+numberToAdd._imaginaryPart);
            } else if (Math.sign(numberToAdd._realPart) === -1 && Math.sign(numberToAdd._imaginaryPart) === -1) {
                return new complexNumber(this._realPart-numberToAdd._realPart, this._imaginaryPart-numberToAdd._imaginaryPart);
            } else if (Math.sign(numberToAdd._realPart) === 1) {
                return new complexNumber(this._realPart+numberToAdd._realPart, this._imaginaryPart-numberToAdd._imaginaryPart);
            } else if (Math.sign(numberToAdd._imaginaryPart) === 1) {
                return new complexNumber(this._realPart-numberToAdd._realPart, this._imaginaryPart+numberToAdd._imaginaryPart);
            }
        } else if (numberToAdd._imaginaryPart === undefined) {
            if (Math.sign(numberToAdd) === 1) {
                return new complexNumber(this._realPart+numberToAdd, this._imaginaryPart);
            } else if (Math.sign(numberToAdd) === -1) {
                return new complexNumber(this._realPart-numberToAdd, this._imaginaryPart);
            }
        }
    }

    subtract(numberToSubtract) {
        if (numberToSubtract._imaginaryPart !== undefined) {
            if (Math.sign(numberToSubtract._realPart) === 1 && Math.sign(numberToSubtract._imaginaryPart) === 1) {
                return new complexNumber(this._realPart-numberToSubtract._realPart, this._imaginaryPart-numberToSubtract._imaginaryPart);
            } else if (Math.sign(numberToSubtract._realPart) === -1 && Math.sign(numberToSubtract._imaginaryPart) === -1) {
                return new complexNumber(this._realPart+numberToSubtract._realPart, this._imaginaryPart+numberToSubtract._imaginaryPart);
            } else if (Math.sign(numberToSubtract._realPart) === 1) {
                return new complexNumber(this._realPart-numberToSubtract._realPart, this._imaginaryPart+numberToSubtract._imaginaryPart);
            } else if (Math.sign(numberToSubtract._imaginaryPart) === 1) {
                return new complexNumber(this._realPart+numberToSubtract._realPart, this._imaginaryPart-numberToSubtract._imaginaryPart);
            }
        } else if (numberToSubtract._imaginaryPart === undefined) {
            if (Math.sign(numberToSubtract) === 1) {
                return new complexNumber(this._realPart-numberToSubtract, this._imaginaryPart);
            } else if (Math.sign(numberToSubtract) === -1) {
                return new complexNumber(this._realPart+numberToSubtract, this._imaginaryPart);
            }
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