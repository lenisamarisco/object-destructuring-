//object destructuring 1//
let facts = {numOfPlanets: 8, yearNeptuneDiscovered: 1846};
let {numOfPlanets, yearNeptuneDiscovered} = facts;

console.log(numOfPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//object destructuring 2//
let planetFacts = {
    numOfPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears);
  // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

  //object destructuring 3//
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
    getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  // Your name is Alejandro and you like purple
  
    getUserData({firstName: "Melissa"})
  // Your name is Melissa and you like green
  
    getUserData({})
  // Your name is undefined and you like green

//array destructuring 1//
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//array destructuring 2//
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings);
  // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// array destructuring 3//
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

//ES5 assigning variables to object properties//
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
var a = obj.numbers.a;
var b = obj.numbers.b;

  //ES2015 object destructuring//
  /* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {a,b} = obj.numbers

//ES5 array swap//
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES 2015 one-line array swap with destructuring 
[arr[0], arr[1]] = [arr[1], arr[0]]

//race results//
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})