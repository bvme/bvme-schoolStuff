function num (num) {

    console.log ( (num - num%60)/60 , "minut", num % 60, "sekund");
}
num (500);