/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

//type inference
let list1 = [1,2,3,4]

//type square bracket
let list2:number[];
list2  = [1,2,3,4]

//type generic Array
let list3:Array<number>
list3 = [1,2,3,4]

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

let arrStr:Array<string> 
arrStr = ["bram", 'dwi', "mardini"]

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */
let myUnion:Array<string | number>
myUnion = ["Hello", "world", 1, 3, "Kan", 2]

//square bracker
let list4:(string | number)[];
list4 = ['bisa', 12, "juga"]

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */
//dont use type inference within tuple
//tuple di buat dengan cara explicit / terbatas
let myTuple:[string, number, number, string]
myTuple = ["string1", 1,2,'string2']
// myTuple = [1,"ini error", 2 , "tidak sesuai urutan"]

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

//cara inline interference / interface
let list5:{color:string, index:number}[]
list5 = [
    {color: 'blue', index : 1},
    {color:'red', index: 2}
]

//cara generic array
let list6:Array<{color:string, index:number}>
list6 = [
    {color:"blue", index:1},
    {color:'black', index:2}
]


/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
//cara inline interface
let myMatrix1:number[][]
myMatrix1 = [
    [1,2],
    [1,3],
    [1,4]
]

// cara generix array
let myMatrix2:Array<Array<number>>
myMatrix2 = [
    [1,2],
    [1,3],
    [1,4]
]
/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
//cara inline interference
let [a, b, c, d] = [1, 2, 3, 'four']

//cara explicit
let [e, f, g, h]: [number, number, number, string] = [1, 2, 3, 'four']