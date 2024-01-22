let balance = 0;
let currencyFrom = window.prompt(
 "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
);
switch (currencyFrom) {
 case "1":
 currencyFrom = 3450;
 break;
 case "2":
 currencyFrom = 1;
 break;
 case "3":
 currencyFrom = 480;
 break;
 case "4":
 currencyFrom = 38;
 break;
 default:
 window.alert ("buruu");
}
let value = window.prompt("End toon utga oruulna uu ?");
let currencyTo = window.prompt(
 "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
);
switch (currencyTo) {
 case "1":
 currencyTo = 3450;
 break;
 case "2":
 currencyTo = 1;
 break;
 case "3":
 currencyTo = 480;
 break;
 case "4":
 currencyTo = 38;
 break;
 default:
 console.log("Buruu orolt");
}
window.alert((currencyFrom * value) / currencyTo);
