function time (num) {
    if ( num < 3599) {
        console.log ("0 tsag",((num-num%60)/60), "minut", ((num%60)%60), "sekund");
    } else  {
        console.log (((num / 60) - ((num / 60) % 60)) / 60, "tsag", ((num-num%60)/60) % 60, "minut", ((num%60)%60), "sekund" )
    }
}
time(4500)