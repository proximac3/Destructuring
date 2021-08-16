//////////////////// Object Destructuring 1/////////////////////////
// What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846



/////////////////// Object Destructuring 2//////////////////////////
// What does the following code return/print?
let planetFacts = {
  numerPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numerPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



//////////////////////// Object Destructuring 3////////////////////////
// What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // "Your name is Alejandro and you like purple"

getUserData({firstName: "Melissa"}) // "Your name is Melissa and you like green"
getUserData({}) // "Your name is undefined and you like green"



/////////////////////////// Array Destructuring 1/////////////////////
// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // `Maya`
console.log(second); // ``Marisa
console.log(third); // `Chi`


//////////////////////////// Array Destructuring 2//////////////////////
// What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); //  "Raindrops on roses",
console.log(whiskers); //    "whiskers on kittens",
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles","warm woolen mittens", "Brown paper packages tied up with strings"]



/////////////////// ES5 Assigning Variables to Object Properties//////////
const obj = {
  numbers: {
    a: 1,
    d: 2
  }
};
const {numbers: {a,d}} = obj



////////////////////////// ES5 Array Swap/////////////////////////////
let  arr = [1, 2];
[arr[1], arr[0]] = [arr[0],arr[1]]




////////////////////////// raceResults()//////////////////////////////
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })
