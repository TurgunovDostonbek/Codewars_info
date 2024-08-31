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
// function endUp(str) {
//   if (str.length > 3) {
//     let sum = str.slice(-3).toUpperCase();
//     console.log(sum);
//   } else {
//     console.log(str.toUpperCase());
//   }
// }
// endUp("Hello"); /// => HeLLO
// endUp("He"); /// => HeLLO
// /// Masala- 4
// // Sharti...
// ///    Bo'sh bo'lmagan satr va int n berilgan bo'lsa, n indeksidagi belgi o'chirilgan yangi qatorni qaytaring.
// function missingChar(str, n) {
//   let sum = str.slice(0, n) + str.slice(n + 1);
//   console.log(sum);
// }
// missingChar("kitten", 3); // => ktten
// /// Masala- 5
// // Sharti...
// //   Str berilgan bo'lsa boshi va oxiridagi belgilarini olib bitta arrayga solib bering, agar str length bir yoki noll bo'lsa str o'zini qaytaring...
// function startEndChar(str) {
//   const sum = [];
// }
// startEndChar("Salom"); // => ["S","m"]
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
