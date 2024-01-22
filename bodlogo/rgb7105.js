function sum (num1, num2, num3, num4) {
    let result = 0
    if (num1 > 80) {
        result = result + num1;
    } 
    if (num2 > 80) {
        result = result + num2; 
    } 
    if (num3 > 80) {
        result = result + num3;
    } 
    if (num4 > 80) {
        result = result + num4;
    }
    return result ;
}
let lastresult = sum (85, 75, 96, 69)
console.log(lastresult);