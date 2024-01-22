function season (num){
    if (num > 1 && num < 5){
        console.log ("Spring");
    } else if (num > 4 && num < 8) {
        console.log("Summer");
    }else if (num > 7 && num < 11) {
        console.log("Autumn");
    }else if (num > 10 && num < 13) {
        console.log("Winter");
    }else if (num == 1){
        console.log("Winter");
    }else {
        console.log("bolomjgui utga");
    }
}
season (10);