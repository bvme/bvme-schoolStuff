let i = 0;
let result = 1;
function number (num1, num2) {
    while (i < num2) {
        result = result * num1;
        i++;
    }
    console.log(result);
}
number (3, 4);