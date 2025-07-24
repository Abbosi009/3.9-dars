//case 1
const kun = 3; // 1 dan 7 gacha

switch (kun) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Noto‘g‘ri kun raqami!");
}

//case 2
const A = 12;
const B = 4;
const amal = 3; // 1-qo‘shish, 2-ayirish, 3-bo‘lish, 4-ko‘paytirish

switch (amal) {
    case 1:
        console.log(A + B);
        break;
    case 2:
        console.log(A - B);
        break;
    case 3:
        if (B !== 0) {
            console.log(A / B);
        } else {
            console.log("Nolga bo‘lish mumkin emas!");
        }
        break;
    case 4:
        console.log(A * B);
        break;
    default:
        console.log("Noto‘g‘ri amal kiritildi");
}

//case 3
const yosh = 43;

const onlar = Math.floor(yosh / 10);
const birlik = yosh % 10;

let natija = "";

switch (onlar) {
    case 2: natija += "Yigirma"; break;
    case 3: natija += "O‘ttiz"; break;
    case 4: natija += "Qirq"; break;
    case 5: natija += "Ellik"; break;
    case 6: natija += "Oltmish"; break;
    default: console.log("20 dan 69 gacha bo‘lgan son kiriting"); return;
}

switch (birlik) {
    case 1: natija += " bir"; break;
    case 2: natija += " ikki"; break;
    case 3: natija += " uch"; break;
    case 4: natija += " to‘rt"; break;
    case 5: natija += " besh"; break;
    case 6: natija += " olti"; break;
    case 7: natija += " yetti"; break;
    case 8: natija += " sakkiz"; break;
    case 9: natija += " to‘qqiz"; break;
}

console.log(natija + " yosh");


// For1
let a1 = 3, b1 = 8;
let count1 = 0;

for (let i = a1; i <= b1; i++) {
    console.log(i);
    count1++;
}
console.log("For1 - Chiqarilgan sonlar soni:", count1);
console.log('----------------------');

// For2
let a2 = 3, b2 = 8;
let count2 = 0;

for (let i = b2 - 1; i > a2; i--) {
    console.log(i);
    count2++;
}
console.log("For2 - Chiqarilgan sonlar soni:", count2);
console.log('----------------------');

// For3
let narx3 = 12000;

for (let kg = 1; kg <= 10; kg++) {
    console.log(kg + " kg narxi: " + (narx3 * kg) + " so'm");
}
console.log('----------------------');

// For4
let narx4 = 12000;

for (let kg = 1.2; kg <= 2.0; kg += 0.2) {
    console.log(kg.toFixed(1) + " kg narxi: " + (kg * narx4).toFixed(2) + " so'm");
}
console.log('----------------------');

// For5
let a5 = 3, b5 = 7;
let sum5 = 0;

for (let i = a5; i <= b5; i++) {
    sum5 += i;
}
console.log("For5 - Yig'indisi:", sum5);
console.log('----------------------');

// For6
let a6 = 2, b6 = 5;
let kop6 = 1;

for (let i = a6; i <= b6; i++) {
    kop6 *= i;
}
console.log("For6 - Ko‘paytma:", kop6);
console.log('----------------------');

// For7
let a7 = 1, b7 = 4;
let sum7 = 0;

for (let i = a7; i <= b7; i++) {
    sum7 += i * i;
}
console.log("For7 - Kvadratlar yig'indisi:", sum7);
console.log('----------------------');

// For8
let n8 = 5;
let sum8 = 0;

for (let i = 1; i <= n8; i++) {
    sum8 += 1 / i;
}
console.log("For8 - S =", sum8.toFixed(4));
console.log('----------------------');

// For9
let n9 = 5;
let kop9 = 1;

for (let i = 1; i <= n9; i++) {
    kop9 *= (1 + i / 10);
}
console.log("For9 - Ko‘paytma S =", kop9.toFixed(4));
console.log('----------------------');

// For10
let n10 = 6;
let sum10 = 0;

for (let i = 1; i <= (2 * n10 - 1); i += 2) {
    sum10 += i;
}
console.log(`For10 - ${n10}^2 =`, sum10);
