function dividedbyThree (num1, num2, num3, num4){
    let sum = 0
    if (num1 % 3 == 0) {
        sum = sum + 1
    }
    if (num2 % 3 == 0) {
        sum = sum + 1
    }
    if (num3 % 3 == 0) {
        sum = sum + 1
    }
    if (num4 % 3 == 0) {
        sum = sum + 1
    }
    return sum;
}
let lastresult = dividedbyThree (5, 12, 8, 9)
console.log(lastresult);