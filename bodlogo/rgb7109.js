function numequalsFive (num1, num2, num3){
    let sum = 0
    if (num1 == 5) {
        sum = sum + 1
    }
    if (num2 == 5) {
        sum = sum + 1
    }
    if (num3 == 5) {
        sum = sum + 1
    }
    return sum;
}
let lastresult = numequalsFive (5, 2, 5)
console.log(lastresult);