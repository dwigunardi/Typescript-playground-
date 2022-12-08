
function sayHello(name:string){
    return `Hello ${name}`
}

// sayHello("test")

let myNumber:number = 0b1010100

let apaIni:any = 56

apaIni = "entahlah"

let fistName:string = "Dwi Gunardi"
// let lastName:string = "Meinaki"
fistName = fistName + " Meinaki"
const fullName:string = `Hello ${fistName}`

const myArr:Array<string> = ["bram", "ariel", "munawir", "nabil"]

const a:null = null
for(let i:number = 0; i < myArr.length; i++){
    console.log(myArr[i])
}
const stringArr:Array<string> = ["aku", "adalah", "ngentot"]
//tupple
let student:[string, number, string] = ["Dwi gunardi Meinaki", 26, "Laki-Laki"]
student.push(24, 'apa iyah', 'iyah bisa')

student.splice(2,5)
// console.log(student)

//tipe data enum
enum Gender {male = "laki-laki", female = "Perempuan", unknown = "Rahasia"}
enum Category {music = "MUSIC", video = "VIDEO", gambar = "GAMBAR"}
const lakiLaki:Gender = Gender.male
const drown:Category = Category.music
console.log("Drown Adalah tipe data" + " " + typeof drown)