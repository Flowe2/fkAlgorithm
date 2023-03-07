/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
let ParkingSystem = function (big, medium, small) {
    this.Big = big;
    this.Medium = medium;
    this.Small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {

    if (carType == 1 && this.Big > 0) {
        this.Big--;
        return true;
    }
    else if (carType == 2 && this.Medium > 0) {
        this.Medium--;
        return true;
    }
    else if (carType == 3 && this.Small > 0) {
        this.Small--;
        return true;
    } else {
        return false
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */