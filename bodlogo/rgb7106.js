function multiply (num1, num2, num3, num4) {
    let result = 1
    if (num1 < 5) {
        result = result * num1;
    } 
    if (num2 < 5) {
        result = result * num2; 
    } 
    if (num3 < 5) {
        result = result * num3;
    } 
    if (num4 < 5) {
        result = result * num4;
    }
    return result ;
}
let lastresult = multiply (2, 2, 6, 9)
console.log(lastresult);
