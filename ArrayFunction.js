const marvelHeros = [" thor", "ironMan", "Loki"]
const dcHeros = ["superman", "batman", "flash"]

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // [" thor", "ironMan", "Loki", "superman", "batman", "flash"]

// we can use spread operator to merge two or more arrays
const allHeros2 = [...marvelHeros, ...dcHeros];
// console.log(allHeros2); // [" thor", "ironMan", "Loki", "superman", "batman", "flash"]

const anotherArray = [1, 2, 3, [4,5,6], 9, 10 ,[7,8,], 9,10,11,[12,13]];
// console.log(anotherArray);
// console.log(anotherArray.flat());


let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3)); // [10, 20, 30] 