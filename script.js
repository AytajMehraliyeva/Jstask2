//Task1
// let month = parseInt(prompt("Ededi daxil edin"))

// switch (month) {
//     case 1:
//         console.log("Yanvar")
//         break;
//     case 2:
//         console.log("Fevral")
//         break;
//     case 3:
//         console.log("Mart")
//         break;
//     case 4:
//         console.log("Aprel")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("Iyun")
//         break;
//     case 7:
//         console.log("Iyul")
//         break;
//     case 8:
//         console.log("Avqust")
//         break;
//     case 9:
//         console.log("Sentyabr")
//         break;
//     case 10:
//         console.log("Oktyabr")
//         break;
//     case 11:
//         console.log("Noyabr")
//         break;
//     case 12:
//         console.log("Dekabr")

// }




//Task2
// let num = parseInt(prompt("Eded daxil edin"))

// if (num > 0) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("Bu eded hem 3-e hem de 5-e bolunur")
//     } else if (num % 3 == 0) {
//         console.log("Bu eded yalniz 3-e bolunur")

//     } else if (num % 5 == 0) {
//         console.log("Bu eded yalniz 5e bolunur")

//     } else if (num % 3 && num % 5) {
//         console.log("Bu eded ne 3e ne de 5e bolunur")
//     }
// } else {
//     console.log("Daxil edilen eded ya 0-dir ya da menfidir")
// }





//Task3
// let num = parseInt(prompt("Eded daxil edin"))

// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log("Daxil edilen eded 2-e tam bolunur")
//     } else if (num % 2) {
//         console.log("Qalan qaliq: " + num % 2)
//     }
// } else {
//     console.log("Daxil edilen eded ya 0dir ya da menfidir")
// }




//Task4
// let num = parseInt(prompt("Birinci ededi daxil edin"))
// let num2 = parseInt(prompt("Ikinci ededi daxil edin"))

// if (num != 0 && num2 != 0) {
//     if (num * num2 > 0) {
//         console.log("Hasil musbet ededdir")
//     } else if (num * num2 < 0) {
//         console.log("Hasil menfi ededdir")
//     }

// } else {
//     console.log("Hasil 0-a beraberdir")
// }




//Task5

// let num = parseInt(prompt("Eded daxil edin"))

// if (num > 0) {
//     if (num > 1 && num < 100) {
//         console.log("Daxil edilen eded 1 ve 100 araligindadir")

//     } else if (num > 100) {
//         console.log("Daxil edilen eded 100den boyukdur")

//     } else if (num == 1 || num == 100) {
//         console.log("Daxil edilen eded 1 ve 100 araliginda deyil")
//     }

// } else {
//     console.log("Daxil edilen eded ya menfidir ya da 0")
// }




//Task6
// let num1 = parseInt(prompt("Birinci ededi daxil edin"))
// let num2 = parseInt(prompt("Ikinci ededi daxil edin"))
// let num3 = parseInt(prompt("Ucuncu ededi daxil edin"))

// if (num1 > 0 && num2 > 0 && num3 > 0) {
//     if (num1 > num2 && num1 > num3) {
//         console.log("Birinci daxil edilen eded en boyukdur")
//     } else if (num2 > num1 && num2 > num3) {
//         console.log("Ikinci daxil edilen eded en boyukdur")
//     } else if (num3 > num1 && num3 > num2) {
//         console.log("Ucuncu daxil edilen eded en boyukdur")
//     } else if (num1 == num2 && num1 > num3) {
//         console.log("Daxil edilen ilk 2 eded beraber ve en boyukdurler")
//     } else if (num2 == num3 && num2 > num1) {
//         console.log("Daxil edilen son 2 eded bir-birine beraber ve en boyukdurler")
//     } else if (num1 == num3 && num1 > num2) {
//         console.log("Daxil edilen ilk ve son ededler beraber ve en boyukdurler")
//     } else if (num1 == num2 && num1 == num3) {
//         console.log("Daxil edilen ededler bir-birine beraberdir")
//     }
// } else {
//     console.log("Daxil edilen ededler arasinda menfi ve ya 0 var")
// }




//Task7
// let bal = parseInt(prompt("Telebenin bali"))

// if (bal > 0) {
//     if (bal >= 91 && bal <= 100) {
//         console.log("Topladiginiz qiymet A-dir")
//     } else if (bal >= 81 && bal <= 90) {
//         console.log("Topladiginiz qiymet B-dir")
//     } else if (bal >= 71 && bal <= 80) {
//         console.log("Topladiginiz qiymet C-dir")
//     } else if (bal >= 61 && bal <= 70) {
//         console.log("Topladiginiz qiymet D-dir")
//     } else if (bal >= 51 && bal <= 69) {
//         console.log("Topladiginiz bal E-dir")
//     } else if (bal >= 1 && bal <= 50) {
//         console.log("Topladiginiz bal F-dir")
//     } else if (bal > 100) {
//         console.log("Daxil edilen bal 100-den cox ola bilmez")
//     }
// } else {
//     console.log("Daxil edilen bal menfi ve ya 0dir")
// }



//Task8
// let age = parseInt(prompt("Yasinizi daxil edin"))

// if (age > 0) {
//     if (age >= 1 && age <= 17) {
//         console.log("Siz yeniyetmesiniz")
//     } else if (age >= 18 && age <= 64) {
//         console.log("Siz yetkinsiniz")
//     } else if (age >= 65 && age <= 125) {
//         console.log("Siz yaslisiniz")
//     } else if (age > 125) {
//         console.log("Siz ölmüsünüz")
//     }
// } else {
//     console.log("Daxil etdiyiniz yas realligi eks etdirmir")

// }

//Task9 saati AM-e esasen yazmisam
// let saat = parseInt(prompt("Saati yazin"))

// if (saat > 0) {
//     if (saat >= 1 && saat <= 5) {
//         console.log("Task islemirsinizse yatin")
//     } else if (saat >= 6 && saat <= 12) {
//         console.log("Sabahiniz xeyir")
//     } else if (saat >= 13 && saat <= 18) {
//         console.log("Gunortaniz xeyir")
//     } else if (saat >= 19 && saat <= 24) {
//         console.log("Axsaminiz xeyir")
//     }
// } else {
//     console.log("Daxil edilen saat sifir ve ya menfi ola bilmez")
// }



//Task10
// let x = 15;
// let y = 10;
// console.log("Ededler: ",x,y);

// if (x > 0 && y < 0) {
//   z = 4 * x + 2 * y + 4;
//     console.log(z);
// };
// if(x>0 && y==0){
// z = (2 * x) - y + 3;
//     console.log(z);
// };
// if(x<0 && y>0){
//     z = (3 * x) + (4 * y) + 3;
//     console.log(z);    
// }else{
//     console.log("Şert odenmir")
// }
