function multoffOddnum (num1, num2, num3) {
    let result = 1 
    if (num1 % 2 == 1) {
        result = result * num1 
    }
    if (num2 % 2 == 1) {
        result = result * num2 
    }
    if (num3 % 2 == 1) {
        result = result * num3 
    }
    return result;
}
let lastResult = multoffOddnum (3, 4, 5);

console.log(lastResult);