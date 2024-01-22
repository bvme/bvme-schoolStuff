const FPN = [`5`,`3`,`4`];
let dn = 31;
if (dn > 0 && dn < 21) {
    console.log("1 dugeer orts", (((dn - dn % FPN[2])/FPN[2]) + 1), "davhariin", dn % FPN[2], "dh haalga");
}
// } else if (dn % FPN[2] == 0){
//     console.log("1 dugeer orts", (((dn - dn % FPN[2])/FPN[2]) + 1), "davhariin 4 dh haalga");
// }


if (dn > 20 && dn < 41){
    console.log("2 dugaar orts", ((((dn - dn % FPN[2])/FPN[2]) + 1) - 6), "davhariin", dn % FPN[2], "dh haalga");
}
// } else if (dn % FPN[2] == 0){
//     console.log("2 dugaar orts", ((((dn - dn % FPN[2])/FPN[2]) + 1) - 6), "davhariin 4 dh haalga");
// }


if (dn > 40 && dn < 61){
    console.log("3 dugaar orts", ((((dn - dn % FPN[2])/FPN[2]) + 1) - 11), "davhariin", dn % FPN[2], "dh haalga");
}
// } else if (dn % FPN[2] == 0){
//     console.log("3 dugaar orts", ((((dn - dn % FPN[2])/FPN[2]) + 1) - 10), "davhariin 4 dh haalga");
// }