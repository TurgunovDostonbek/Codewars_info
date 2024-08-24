/// ==========================================================================================================
/// Masala- 1
// Sharti...
///   Berilgan uchta int qiymati, a b c, eng kattasini qaytaring.
// function intMax(a, b, c) {
//   if (a > b && a > c) {
//     console.log(a);
//   } else if (b > a && b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }
// intMax(18, 5, 11);
// /// Masala- 2
// // Sharti...
// ///   Agar berilgan satrda 1 va 3 ta "e" belgilar bo'lsa, true qiymatini qaytaring.
// function stringE(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] == "e") {
//       count++;
//     }
//   }
//   ///
//   if (count === 1 || count === 3) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// stringE("Hllo"); // true
// stringE("Heeello"); // false
/// Masala- 3
// Sharti...
//    Satr berilgan bo'lsa, oxirgi 3 ta belgi katta harf bilan yozilgan yangi qatorni qaytaring. Agar satrda 3 tadan kam belgi bo'lsa, unda nima bo'lsa katta harf bilan yozing. Esda tutingki, str.toUpperCase() satrning katta harfli versiyasini qaytaradi.
function endUp(str) {
  if (str.length > 3) {
    let sum = str.slice(-3).toUpperCase();
    console.log(sum);
  } else {
    console.log(str.toUpperCase());
  }
}
endUp("Hello"); /// => HeLLO
endUp("He"); /// => HeLLO
/// Masala- 4
// Sharti...
///    Bo'sh bo'lmagan satr va int n berilgan bo'lsa, n indeksidagi belgi o'chirilgan yangi qatorni qaytaring.
function missingChar(str, n) {
  let sum = str.slice(0, n) + str.slice(n + 1);
  console.log(sum);
}
missingChar("kitten", 3); // => ktten
/// Masala- 5
// Sharti...
//   Str berilgan bo'lsa boshi va oxiridagi belgilarini olib bitta arrayga solib bering, agar str length bir yoki noll bo'lsa str o'zini qaytaring...
function startEndChar(str) {
  const sum = [];
}
startEndChar("Salom"); // => ["S","m"]
// /// Masala- 6
// // Sharti...
// //   Ikki int qiymat berilgan bo'lsa, ularning yig'indisini qaytaring. Ikki qiymat bir xil bo'lmasa, ularning yig'indisini ikki baravar qaytaring.
// function sumDouble(a, b) {
//   if (a !== b) {
//     console.log((a + b) * 2);
//   }
//   {
//     console.log(a + b);
//   }
// }
// sumDouble(1, 2); // => 3
// sumDouble(2, 2); // => 8
// /// Masala- 7
// // Sharti...
// // Int n berilgan bo'lsa, n va 21 o'rtasidagi mutlaq farqni qaytaring, bundan mustasno, agar n 21 dan yuqori bo'lsa, mutlaq farqni ikki baravar qaytaring.
// function diff21(n) {}
// diff21(19); // => 2
// diff21(21); // => 0
// /// Masala- 8
// // Sharti..
// // Berilgan 2 int, a va b, agar ular 10 bo'lsa yoki ularning yig'indisi 10 bo'lsa, rost qaytariladi.
// function makes10(a, b) {}
// makes10(9, 10); // =>  true
// makes10(9, 9); // =>  false
// makes10(1, 9); // =>  true
/// ==========================================================================================================
//  Loopga masala.
// let son = 20, 30, 15

// Berilgan sonlarni aylanib chiqing for loop bilan va consolga chiqaring...
// Berilgan sonlarni aylangan vaqtda juft yoki da toqlarini consolga chiqaring..
// Berilgan sonlarni faqat 10 ga bo'linadiganlarni consolga chiqaring..
// Berilgan sonlarni ham 5ga ham 3ga bo'linadiganlarni consolga chiqaring..
// Berilgan sonlarni faqat 4ga va 8ga bo'linadiganlarni consolga chiqaring..
// Berilgan sonlar 10 ga teng bolganda ishini to'xtatsin..
// Berilgan sonlar forda aylanganda har safar 5 ni tashlab o'tib ketsin..
// Berilgan sonlar forda aylangan vaqtda aylanish tugaganda aylanish tugadi desin.
// Berilgan sonlar forda aylanishni boshlaganda aylanish boshlandi desin? tugaganda esa tugadi desin?
// Berilgan sonlar aylanganda ikki honali son bo'lsa ikki xonali son bir xonali son bo'lsa bir xonali son desin uch xonali son bo'lsa uch xonali son desin..
// Berilgan masalalarni While and do While bilan ham qiling..?
//
/// ==========================================================================================================
//  Functionga doir masala.

// Function Declaration ga 10ta misol yozing..
// Function Expresion ga 10ta misol yozing..
// Arrow Functionga ga 10ta misol yozing..
//
// let str = "SmartBrain";

// Function Declaration ga 10ta misol yozing lekin parametriga str berilsin va consolga str chiqsin..
// Function Expresion ga 10ta misol yozing lekin parametriga str berilsin va consolga str chiqsin..
// Arrow Functionga ga 10ta misol yozing lekin parametriga str berilsin va consolga str chiqsin..
//
/// ==========================================================================================================
// String ga doir masalalar..

// let str = "Smartbrain"
// let str = "webbrain"
// let str = "hello"
// let str = "salom"

// Berilgan str larni bosh harifini katta qolganini kichik qiling.?
// Berilgan str larni boshidagi ikkita harifini katta qolganini kichik qiling.?
// Berilgan str larni boshi va oxirini Katta qolgani kichik bolsin.?
// Berilgan str larni uzunligini chiqaring.?
// Berilgan str larni oxirini katta qolganini kichik qiling.?
// Berilgan str larni bosh harifini oldinga oxirgi harifini esa oxiriga o'tkazing.?
// Berilgan str larni tekshiring agar str uzunligi 5dan katta bo'lsa true aks holda esa false chiqsin.?
// Berilgan str larni for loop, While da and do Whileda aylanib chiqing.?
// Berilgan str larni array korinishiga o'tkazing.?
// Berilgan str larni bir biriga qoshib bering.?

// let str2 = "9"
// let str2 = "10"
// let str2 = "15"
// let str2 = "20"
// let str2 = "25"

// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib qo'shib, kopaytirib, ayirib, bo'lib bering.?
// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib forda aylanib consolga chiqaring..?
// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib Whileda aylanib chiqing?
// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib do Whileda aylanib chiqing?
// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib if else da tekshiring agar juft son bo'lsa true aks holda false chiqsin.
// Berilgan str2 larni Numberga o'tkazing functionni parametrga berib Switchda tekshiring case ga tog'ri kelsa true aks holda false chiqsin?
/// ==========================================================================================================
// Number ga doir masala..
//
// let nums = 9
// let nums = 10
// let nums = 15
// let nums = 20
// let nums = 25
//
// Berilgan nums larni functionni parametrga berib qo'shib, kopaytirib, ayirib, bo'lib bering.?
// Berilgan nums larni functionni parametrga berib forda aylanib consolga chiqaring..?
// Berilgan nums larni functionni parametrga berib Whileda aylanib chiqing?
// Berilgan nums larni functionni parametrga berib do Whileda aylanib chiqing?
// Berilgan nums larni functionni parametrga berib if else da tekshiring agar juft son bo'lsa true aks holda false chiqsin.
// Berilgan nums larni functionni parametrga berib Switchda tekshiring case ga tog'ri kelsa true aks holda false chiqsin?
// Berilgan nums larni functionni parametrga berib agar son juft bo'lsa 2ga ko'paytirish amalini bajarsin?
// Berilgan nums larni functionni parametrga berib agar son toq bo'lsa 3ga ayirish amalini bajarsin?
// Berilgan nums larni functionni parametrga berib ularni typeof ni consolga string qilib chiqarin?
// Berilgan nums larni functionni parametrga berib ularni hammasini stringa aylantiring?
// Berilgan nums larni functionni parametrga berib ularni hammasini integer ko'rinishda chiqaring?
// Berilgan nums larni functionni parametrga berib ularni o'ziga qo'shing?
// Berilgan nums larni functionni parametrga berib ularni ikki barobar qiymatiga qo'shing?
// Berilgan nums larni functionni parametrga berib ularni ikki barobar qiymatidan ayiring?

/// ==========================================================================================================
// Objectga doir masalar..
//
// let obj1 = {
//  name : "Smartbrain",
//  year: 2024,
//  student: 100,
//  location: "Namangan"
// }

// let obj2 = {
//  name : "Webbrain",
//  year: 2020,
//  student: 200,
//  location: "Toshkent"
// }

// Berilgan obj larni ichidagi malumotlarni olib bering.?
// Berilgan obj larni ichiga exses qilish haqida gapiring va tushuntiring va video tayorlang.?
// Berilgan obj larni bir biri bilan solishtiring agar teng bo'lsa true aks holda false chiqsin.?
// Berilgan obj larni studentlarini sonini bir biriga qo'shib bering.?
// Berilgan obj larni yearni bir biridan ayirib bering.?
// Berilgan obj larni yangi nom bilan yozib studentlarini qo'shib yangi obj yasab berin.?
// Berilgan obj larni
// Berilgan obj larni
// Berilgan obj larni
// Berilgan obj larni
