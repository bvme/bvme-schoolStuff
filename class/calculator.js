// let num1 = window.prompt("1deh utga");
// const symbol = window.prompt ("uildel songono uu ?\n1. + \n2. - \n3. * \n4. /");
// let num2 = window.prompt("2dahi utga");
// function myFunction (num1, num2) {
//     if (symbol === 1) {
//         console.log (num1 + num2);
//     } else if (symbol === 2) {
//         console.log (num1 - num2);
//     } else if (symbol === 3) {
//         console.log (num1 * num2);
//     } else if (symbol === 4) {
//         console.log (num1 / num2);
//     } else {
//         console.log ("undefined")
//     }
// };
// myFunction (num1, num2);

let num1 = window.prompt("1deh utga");
const symbol = window.prompt ("uildel songono uu ?\n1. + \n2. - \n3. * \n4. /");
let num2 = window.prompt("2dahi utga");
function myFunction (symbol) {
    switch (symbol) {
        case "1" :
            window.alert (Number(num1) + Number(num2));
        break;
        case "2" :
            window.alert (num1 - num2);
        break;
        case "3" :
            window.alert (num1 * num2);
        break;
        case "4" :
            window.alert (num1 / num2);
        break;
    }
};
myFunction (symbol);
