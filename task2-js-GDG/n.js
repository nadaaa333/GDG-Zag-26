  //string tasks.
  //1
  /*
 let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName[userName. indexOf("E")].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase().repeat(3)); // eee


  //2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE,3)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
*/
//=====================================================
  //arrays and method.
  /*
  //1
   let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
   let num = 3;
   myFriends.length=num;
    console.log(myFriends);
     console.log(myFriends.slice(0,num));

  //2
  let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
  console.log(`["${friends[1]}","${friends[2]}"]`);

  //3
  let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(finalArr = arrOne.concat(arrTwo).sort().reverse());

//4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(true+true).toUpperCase()); // ZERO

 //5
  let needle = "JS";
  let haystack = ["PHP", "JS", "Python"];
  if(haystack.indexOf(needle)!==-1){
    console.log("found");
  }
   if(haystack.lastIndexOf(needle)!==-1){
    console.log("found");
  }
   if(haystack.includes(needle)==true){
    console.log("found");
  }

  //6
   let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

 allArrs=arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
console.log(allArrs); //fxy
 */
//=======================================================================
   
//1
 /*
 let newDate=new Date();
 let myBirthday= new Date("Oct 1, 06");
 let diff=newDate-myBirthday;
  console.log(`${diff/1000} seconds`);
    console.log(`${diff/1000/60} minutes`);
       console.log(`${diff/1000/60/60} hours`);
          console.log(`${diff/1000/60/60/24} days`);
              console.log(`${diff/1000/60/60/24/30} months`);
                 console.log(`${diff/1000/60/60/24/365}years`);

*/
//2
/*
 let newDate=new Date();
newDate.setFullYear(1980,0);
 newDate.setHours(0);
   newDate.setMonth(0)
  newDate.setMinutes(0);
 newDate.setSeconds(1);
 console.log(newDate)
 */
 //3
 
// *Task3*//
// let now = new Date();
// let lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
// console.log(lastDayPrevMonth.toString());

// let monthName = lastDayPrevMonth.toLocaleString('en-US', { month: 'long' });
// let lastDay = lastDayPrevMonth.getDate();
// console.log(Previous Month Is ${monthName} And Last Day Is ${lastDay});

// *Task4*//
// String Date
let date11 = new Date("2006-01-01 10:30:00");

// Numbers Date
let date2 = new Date(2006, 1, 1, 10, 30, 0);

// Timestamp
let date3 = new Date(1136073600000);

console.log(date11.toString());
console.log(date2.toString());
console.log(date3.toString());

//6
// Write Your Generator Function Here

function* gen() {
    let num = 14;
    let step = 140;
    while (true) {
        yield num;
        num += step;
        step += 200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

//7
function* genNumbers() {
  let numbers = [1, 2, 2, 2, 3, 4, 5];
  let prev;
  for (let num of numbers) {
    if (num !== prev) {
      yield num;
      prev = num;
    }
  }
}

function* genLetters() {
  let letters = ["A", "B", "B", "B", "C", "D"];
  let prev;
  for (let letter of letters) {
    if (letter !== prev) {
      yield letter;
      prev = letter;
    }
  }
}

function* genAll() {
  yield* genNumbers();
  yield* genLetters();
}

let generatorr = genAll();

console.log(generatorr.next()); // {value: 1, done: false}
console.log(generatorr.next()); // {value: 2, done: false}
console.log(generatorr.next()); // {value: 3, done: false}
console.log(generatorr.next()); // {value: 4, done: false}
console.log(generatorr.next()); // {value: 5, done: false}
console.log(generatorr.next()); // {value: "A", done: false}
console.log(generatorr.next()); // {value: "B", done: false}
console.log(generatorr.next()); // {value: "C", done: false}
console.log(generatorr.next()); // {value: "D", done: false}


