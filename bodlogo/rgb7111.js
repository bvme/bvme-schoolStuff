function num (num1, num2, num3, num4) {
    let result = 0 
    if (num1 % 11 !== 0) {
        result = result + num1 
    }
    if (num2 % 11 !==0) {
        result = result + num2
    }
    if (num3 % 11 !==0) {
        result = result + num3
    }
    if (num4 % 11 !==0) {
        result = result + num4 
    }
    return result;
}
let lastresult = num (7, 22, 13, 30)
console.log(lastresult);