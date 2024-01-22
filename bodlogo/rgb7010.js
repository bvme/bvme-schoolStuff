function sum (num) {
    console.log (((num - num%100)/100) + ((num%100 - num%10)/10) + num%10);
}
sum(100);