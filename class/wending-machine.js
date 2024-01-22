// Hariult uguh devsgert 
// 1. 50
// 2. 100
// 3. 500
// 4. 1000
// 5. 5000
// 6. 10000

let select_product = window.prompt(
    "Buteegdehuunee songono uu ? \n1. cola = 1200₮\n2. sprite = 1500₮\n3. alpen gold = 2000₮\n4. suu = 2200₮\n5. talh = 1000₮\n6. zairmag = 500₮\n7. bohi = 150₮\n8. arhi = 15000₮"
);
switch (select_product) {
    case "1" :
        select_product = 1200;
    break;
    case "2" :
        select_product = 1500;
    break;
    case "3" :
        select_product = 2000;
    break;
    case "4" :
        select_product = 2200;
    break;
    case "5" :
        select_product = 1000;
    break;
    case "6" :
        select_product = 500;
    break;
    case "7" :
        select_product = 150;
    break;
    case "8" :
        select_product = 15000;
    break;
    default:
    window.alert("Сонгосон бараа байхгүй байна");
}
let cash = window.prompt("Mungun devsgert oruulna uu ? \n1. 5000\n2. 10000\n3. 20000");
switch (cash) {
    case "1" :
        cash = 5000;
    break;
    case "2" :
        cash = 10000;
    break;
    case "3" :
        cash = 20000;
    break;
    default:
    window.alert("хүлээн авах боломжгүй дэвсгэрт байна")
}
let change = cash - select_product
if (cash > select_product){
    if (change > 10000){

    }
    window.alert (`Таны бүтээгдэхүүн амжилттай захиалагдлаа. Таны хариулт ₮${cash - select_product}. Баярлалаа.`)
} else if (cash < select_product){
    window.alert ("Мөнгөн дэвсгэрт хүрэлцэхгүй байна")
}