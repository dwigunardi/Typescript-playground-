// function sayHello(name) {
//     return "Hello ".concat(name);
// }
// // sayHello("test")
// var myNumber = 84;
// var apaIni = 56;
// apaIni = "entahlah";
// var fistName = "Dwi Gunardi";
// // let lastName:string = "Meinaki"
// fistName = fistName + " Meinaki";
// var fullName = "Hello ".concat(fistName);
// var myArr = ["bram", "ariel", "munawir", "nabil"];
// var a = null;
// for (var i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// var stringArr = ["aku", "adalah", "ngentot"];
// //tupple
// var student = ["Dwi gunardi Meinaki", 26, "Laki-Laki"];
// student.push(24, 'apa iyah', 'iyah bisa');
// student.splice(2, 5);
// // console.log(student)
// //tipe data enum
// var Gender;
// (function (Gender) {
//     Gender["male"] = "laki-laki";
//     Gender["female"] = "Perempuan";
//     Gender["unknown"] = "Rahasia";
// })(Gender || (Gender = {}));
// var Category;
// (function (Category) {
//     Category["music"] = "MUSIC";
//     Category["video"] = "VIDEO";
//     Category["gambar"] = "GAMBAR";
// })(Category || (Category = {}));
// var lakiLaki = Gender.male;
// var drown = Category.music;
// console.log("Drown Adalah tipe data" + drown);

function sum(a, b) {
  if (typeof (a) === "number" && typeof (b) === 'number') {
    return console.log(a + b);
  } else {
    return console.log("Mohon masukan angka");
  }
}
sum(1, 4)
