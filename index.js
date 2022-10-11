const sumDigits = (number) => number.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b));

const calculate = (number) => {
    let result = number;
    let partA;
    let partB;
    if (number > 1) {
        partA = calculate(number - 2)
        partB = calculate(number - 1)  
        result = (partA > 9 ? sumDigits(partA) : partA) + (partB > 9 ? sumDigits(partB) : partB);
    }
    return result;
};

module.exports = calculate;
