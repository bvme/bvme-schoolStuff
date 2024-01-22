function sumofEvennumber (num1, num2, num3) {
    let result = 0
    if (num1 % 2 == 0) {
        result = result + num1 
    }
    if (num2 % 2 == 0) {
        result = result + num2 
    }
    if (num3 % 2 == 0) {
        result = result + num3 
    }
    return result;
}
let lastresult = sumofEvennumber (10, 4, 7);

console.log(lastresult);