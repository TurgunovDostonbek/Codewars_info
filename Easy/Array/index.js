/// ==========================================================================================================
// Arrayga doir masalar.. << Basic >>

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ["Toshmat", "Eshmat", "Abror", "Qulmat"];
const furuit = ["olma", "bexi", "uzum", "nok", "olcha"];
const country = ["Uzbekistan", "England", "USA", "Brazil"];

// Berilgan array larni consolga chiqaring?
// Berilgan array larni length ni aniqlang?
// Berilgan array larni ichida malumot bor yoqligini tekshiring? bo'lsa true aks holda false?
// if (nums.length > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // Berilgan array larni stringa aylantiring?
// console.log(nums.join(""));
// // Berilgan array larni bir biriga qoshib bering?
// console.log(nums.concat(names));
// Berilgan array larni typesini array qilib chiqaring?
// Berilgan array larni ichidagi har bir malumotga exses qiling?
// Berilgan array larni loop bilan aylanib chiqing?
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// Berilgan array larni for of bilan aylanib chiqing natijani console.log ga chiqaring?
// for (let val of names) {
//   console.log(val);
// }
// Berilgan array larni for in bilan aylanib chiqing natijani console.log ga chiqaring?
// for (let val in names) {
//   console.log(names[val]);
// }
// // Berilgan array larni oxiridagi elementini olib bering?
// console.log(nums.pop());

// Berilgan array larni ichidagi oxirgi elementini ochirib tashlang?

// Berilgan array larni oxiriga malumot qo'shib bering? misol "hello" so'zini?
// nums.push("hello");
// console.log(nums);
// Berilgan array larni boshidan malumot qo'shib bering?  misol  "salom"
// nums.unshift("hello");
// console.log(nums);

// Berilgan array larni boshidan malumot o'chirib bering?

// Berilgan array larni ichida number malumot bo'lsa number? bo'lmasa number yo'q desin?
// Berilgan array larni concat metodini ishlatib bbir biriga qoshib natigani consolga chiqaring?
// Berilgan array larni 1chi index dan boshlab oxirigacha kesib qaytaring?
// Berilgan array larni 2chi index siga "salom" sozini qo'shib bering?

// Berilgan array larni teskarisiga o'girib qaytaring?
// console.log(nums.reverse());

// Berilgan array larni while loop bilan aylanib chiqing?
// Berilgan array larni ternary operatori bilan tekshirib malumot bo'lsa true aks holda false?
// Berilgan nums arrayini ichidagi malumotlarni stringa ogirib qaytaring?

// Berilgan array larni xar bir functionni parametrga berib consolga chiqaring?
function get(a) {
  console.log(a);
}
get(nums);
// Berilgan array larni functionni parametrga berib funksiyani buttonga biriktirib button bosilsa consolga chiqsin?
//
// ==========================================================================================================
// Arrayga doir masalar.. << Basic... Advanced >>

let nums2 = [1, 8, -4, 7, 12];
// Berilgan arrayni ummumiy yig'indisini toping?
// Berilgan arrayni faqat musbat sonlarini qo'shib bering?
// Berilgan arrayni musbatlarini qo'shib manfiylarini ayiring?
// Berilgan arrayni 2ga ko'paytirib qaytaring?
// Berilgan arrayni 4ga ko'paytirib hammasini qo'shib qaytaring?
// Berilgan arrayni tartiblang?
// Berilgan arrayni filter qilib 10 dan kattalari qolsin?
// Berilgan arrayni filter qilib 10 dan kichiklari qolsin?
//
let bool = [true, true, true, false, true, true, true, true];
// Berilgan arrayni function parametriga berib ichidagi true lar sonini toping?
// Berilgan arrayni function parametriga berib ichidagi false lar sonini toping?

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums4 = [1, 3, 2, 4, 7, 5, 6, 67, 7, 8, 9];
// Berilgan arraylarni map bilan aylanib hammasini 3 ga ko'paytiring?
// Berilgan arrayni forEach bilan aylanib 4 ga ko'paytiring?
// Berilgan arrayni jami yig'indisini chiqaring?
// Berilgan arrayni for of bilan aylanib chiqing va malumotlarni consolga chiqaring. for in bilan ham?
// Berilgan arrayni 5da kattalarini filter qilib bering?
// Berilgan nums4 arrayni sartirofka qilib bering? sort metodi bilan?

const tel = "+998 94 152 12 70"; //  +998941521270
const tel2 = +998941521270; // "+998 94 152 12 70"

const ismlar = ["Toshmat", "Eshmat", "Abror", "Qulmat"];
// Berilgan ismlar arrayini oxiriga "bek" qo'shimchasini qo'shib qaytaring?
// Berilgan ismlar arrayini boshi va oxiridagi elementlarini olib tashlab qaytaring?

const num = 10;
// Berilgan num dan foydalanib 1 - 10gacha bo'lgan sonlar arrayni consolga chiqaring?
// Berilgan num dan foydalanib 10gacha bo'lgan juft sonlarni bitta arrayga solib bering?
// Berilgan num dan foydalanib 1-20gacha bo'lgan sonlar ni arrayga solib chiqaring?
// Berilgan faqat 1 va 10 sonini consolga chiqaring?

const str = "Hello my name is John";
// Berilgan str ni ["Hello", "my", "name", "is", "John"] qilib qaytaring?
// Berilgan str ni ["olleH", "ym", "eman", "si", "nhoJ"] qilib qaytaring?
// Berilgan str ni orasida nechta bo'sh joy bo'lsa shu ni sonini arrayga solib qaytaring?

//////////////////////////////////////////////////////////////////////////////////////////////

let student = [
  { id: 1, year: 2000, job: "Frontend", name: "Azizbek" },
  { id: 2, year: 2002, job: "Frontend", name: "Sardorbek" },
  { id: 3, year: 2004, job: "Frontend", name: "Najmiddin" },
  { id: 4, year: 2001, job: "Frontend", name: "Fazliddin" },
  { id: 5, year: 2001, job: "Frontend", name: "Asilbek" },
  { id: 6, year: 2010, job: "Frontend", name: "Abbosbek" },
  { id: 7, year: 1999, job: "Frontend", name: "Sirojidin" },
  { id: 8, year: 2002, job: "Frontend", name: "Abdurasul" },
  { id: 9, year: 2001, job: "Frontend", name: "Abdulloh" },
];

let movies = [
  { id: 1, year: 2000, like: 200, name: "Avatar" },
  { id: 2, year: 2002, like: 250, name: "O'rgimchak odam" },
  { id: 3, year: 2004, like: 230, name: "Qasoskorlar" },
  { id: 4, year: 2001, like: 210, name: "Titanik" },
  { id: 5, year: 2001, like: 300, name: "Transformen" },
  { id: 6, year: 2010, like: 280, name: "Temir odam" },
  { id: 7, year: 1999, like: 270, name: "Qasoskorlar 2" },
  { id: 8, year: 2002, like: 310, name: "Supermen" },
  { id: 9, year: 2001, like: 400, name: "Tor" },
];

let autos = [
  { id: 1, year: 2000, price: "200$", name: "Damas" },
  { id: 2, year: 2002, price: "250$", name: "Nexia" },
  { id: 3, year: 2004, price: "230$", name: "Nexia 2" },
  { id: 4, year: 2001, price: "210$", name: "Tico" },
  { id: 5, year: 2001, price: "300$", name: "Cobalt" },
  { id: 6, year: 2010, price: "280$", name: "Spark" },
  { id: 7, year: 1999, price: "270$", name: "Laceti" },
  { id: 8, year: 2002, price: "310$", name: "Gentra" },
  { id: 9, year: 2001, price: "400$", name: "Malibu" },
];

// Berilgan array larni
// Berilgan array larni
// Berilgan array larni
// Berilgan array larni
// Berilgan array larni
// Berilgan array larni
// Berilgan array larni
