 //Data types and variables.
 //1
 let num1=10,num2=20;
 console.log(num1+"" +num2);
  console.log(typeof(num1 + ""+num2));
  console.log(`${num1}${num2}`);
  console.log(typeof`${num1}${num2}`);
   console.log(num1+"\n"+num2);
     console.log(`${num1}
${num2}`);

//2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//3

console.log(" `I'm In \n \\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"`` ");

//4
let a = 21;
let b = 20;

console.log(`_${a}`+`_${b}${a}_`.repeat(4)+`${b}_`); // _21_2021_2021_2021_20_



//operator
//1
// Replace ? With Arithmetic Operators
console.log(10 % 20 % 15 % 3 + 190 % 10 % 400 % 400); // 0

//2
let num = 3;

// Solution One
console.log(num+true+true+true); // 6

// Solution Two
console.log(num*num-num); // 6

// Soultion Three
console.log(num+true+true+true-false); // 6

// Soultion Four
console.log(num*num-true-true-true); // 6

// Solution Five
console.log(num+num); // 6

// Solution Six
console.log(num+num-false); // 6

//3
let num3 = "10"; 

// Solution One
console.log(+num3+ +num3); // 20

// Solution Two
console.log(+num3 + +num3 + +num3 -num3); // 20

// Solution Three
console.log(+num3 + +num3 -false); // 20

// Solution Four
console.log( +num3 * +num3 - num3 * +num3 + +num3+ +num3 ); // 20

//4
let points = 10;

console.log((points+points/points)+(points/points)+(points/points)); // 13
console.log(points-(points/points)-(points/points)); // 8;

//Number
//1
 
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e6/10); // 100000
console.log(100_00*10); // 100000
console.log(2*5e4); // 100000
console.log(100_000*true); // 100000
console.log(1e5-false); // 100000
console.log(100_000%1e7); // 100000
console.log(100_000+false); // 100000
console.log(10*1e3*1e1); // 100000
console.log(1e10/100_000); // 100000
console.log(100000/true); // 100000

//2
 console.log(Number.MIN_SAFE_INTEGER *-1); // 9007199254740991

 //3
  console.log(toString (Number.MAX_SAFE_INTEGER).length -(true+true));

  //4
  let myVar = "100.56789 Views";

console.log( parseInt(myVar)); // 100
let x=parseFloat(myVar);
console.log(Math.round (x*100)/100);

//5
 let num5 = 10;
let res= Number.isInteger(num5); // 2
 console.log(res+res);
  
  //6
  let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

//6
 console.log(Math.round( Math.random()*4));


 //string and method.
 //1
  
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

//Comparison & Logical Operators
//1
console.log(100 == "100"); // true
console.log(typeof 100 ===typeof 1000); // true
console.log(110 == 100 - 10 + 20); // true
console.log(-10 =="-10"); // true
console.log(typeof -50 == typeof +"-40"); // true
console.log(- 10 <= -"-40"); // true
console.log(+"10" >= 10); // true
console.log(- 20 < false); // true

//2
let num6 = 10;
let num7 = 20;

console.log(num6 !==num7); // true
console.log(num6 < num7); // true
console.log(num6<=num7); // true
console.log(num7>=num6); // true
console.log(typeof num6 ===typeof num7); // true
console.log(typeof num6 ==typeof num7); // true

//3
let a1 = 20;
let b1 = 30;
let c = 10;

console.log(a1== b1 && a1> c || a1< b1); // true
console.log(a1< b1 && a1> c); // true
console.log(!(a1=== b1) && !(a1> b1) && !(a1<= c) && !(a1== c)); // true

 //if condition.
 //1
  let nu=9;
  if(nu<10){
    console.log(`00${nu}`);
  }
  nu=20
  if(nu>10 && nu<100){
    console.log(`0${nu}`);
  }
  nu=110;
  if(nu>=100){
    console.log(nu);
  }

  //2
 
  let elem = 9;
let str = "9";
let str2 = "20";
 if(elem === +str){
  console.log("\"{num1} Is The Same Value As {str}\"");
 }
 if(elem == str){
  console.log("\"{num1} Is The Same Value As {str} But Not The Same Type\"")
 }
 
  if(elem !== str){
    console.log("\"{num1} Is Not The Same Value Or The Same Type As {str2}\"")
  }
  if(str!==str2 && typeof str==str2){
    console.log("\"{str} Is The Same Type As {str2} But Not The Same Value\"")
  }

//3
 let elem1 = 10;
let elem2 = 30;
let elem3= "30";

if(elem3 > elem1 && typeof elem3 !== typeof elem2){
  console.log("\"30 Is Larger Than 10 And Type string Not The Same Type As number\"")
}
if(elem3 >elem1 && elem3==elem2 && elem3!==elem2){
  console.log("\"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number\"")
}
 if(elem3 !==elem1 && typeof elem3 !=typeof elem2){
  console.log("\"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}\"")
 }

"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"


//4

// Edit What You Want Here

let test1 = 10;
let test2 = 5;
let test3= 10;
let test4 = 36;



// Condition 1

if (test1 > test2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (test1 > test2 && test1 < test4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (test1 > test2 && test1 === test3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((test1 + test2) < test4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((test1 + test3) < test4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((test1 + test2 + test3) < test4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (test4 - (test1 + test3) + test2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//switch statement.
//1

 let day=" monday ";
 day= day.trim();
 day= day[0].toUpperCase()+day.slice(1);

 switch( day){
 case "Friday" :
  case "Saturday":
    case "Sunday":
  console.log("No Appointments Available");
 break;
 
 case "Monday" :
  case "Thursday":
  console.log("From 10:00 AM To 5:00 PM");
  break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

    case "Wednesday":
      console.log("From 10:00 AM To 7:00 PM");
      break;

   default:
   console.log("Its Not A Valid Day");
 }

 //loop-for.
 //1
 let start = 10;
let end = 100;
let exclude = 40;
 for(let i=start;i<=end;i+=10){
  if(i==exclude){
    continue;
  }
  console.log(i);
 }
 //2
  
let start1 = 10;
let end1 = 0;
let stop = 3;
for(let i=start1;i>end1;i--){
 if(i<10){
  console.log(`0${i}`);
 }
 else{
  console.log(i);
 }
 if(i==stop){
  break;
 }
}
//3
 let start3 = 1;
let end3= 6;
let breaker3= 2;
 for(let i=start3;i<=end3;i++){
   console.log(i);
   for(let j=breaker3;j<end3;j+=breaker3){
   
    console.log("-- "+j);
   }
 }

 //4
 let index = 10;
let jump = 2;
 let n=index;
for (;;) {
 if(n<jump){
  break;
 }
 console.log(n);
 n-=jump; 
}
//5 prob
 let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
  let count=0;
  for(let m=friends.length-friends.length;m<friends.length;m++){
    if(friends[m][0]==letter.toUpperCase()){
      continue;
    }
    count++;
    console.log(`"${count} =>${friends[m]}"`);
  }

 //6
  let start4 = 0;
  let swappedName = "elZerO";
  let result="";
  for(let s=start4;s<swappedName.length;s++){
    if(swappedName[s]==swappedName[s].toLowerCase()){
     result+= swappedName[s].toUpperCase();
    }
    else{
     result+= swappedName[s].toLowerCase();
    }
  }
  console.log(result);

  //7
  let start5 = 0;
  let mix = [1, 2, 3, "A", "B", "C", 4];

   for(let m=start5;m<mix.length;m++){
    if(typeof mix[m] !=="number" || mix[m]===1){
      continue;
    }
    console.log(mix[m]);
   }

   // loop-while.
   //1
   let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
  let index2 = 0;
  let counter = 0;
  let k=index2;
  while (k<friends2.length) {
    if(typeof friends2[k]!=="number" && friends2[k][0]!=="A"){
      counter++;
    console.log(`"${counter} => ${friends2[k]}"`);
    }
    k++;
  }
  
  // function and patamter.
  //1
  
  function sayHello(theName, theGender) {
 if(theGender==="Male"){
  console.log(`Hello Mr ${theName}`);
 }
 else if(theGender==="Female"){
    console.log(`Hello Miss ${theName}`);
 }
 else{
    console.log(`Hello ${theName}`);
 }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
 
//2
 function calculate(firstNum, secondNum, operation) {
 
  if(operation==='add'){
    console.log(firstNum+secondNum);
  }
  if(operation==='subtract'){
    console.log(firstNum-secondNum);
  }
  if(operation==='multiply'){
    console.log(firstNum*secondNum);
  }
     if(!operation){
    console.log(firstNum+secondNum);
  }
   if(!secondNum){
    console.log('Second Number Not Found');
  }

  
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//3
  function ageInTime(theAge) {
  if(theAge>10 && theAge<100){
    console.log(`months=? ${theAge*12}
weeks => ${theAge*12*4}      
days =>${theAge*365}
hours =>${theAge*365*24}
munits =>${theAge*365*24*60}
seconds =>${theAge*365*24*60*60} `);  
  }
  else{
    console.log("Age Out Of Range");
  }
}
a
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months



//4
function checkStatus(a2, b2, c2) {
 let name,age,status;
 name=(typeof a2 ==="string")?a2:
 ( typeof b2 ==="string")?b2:
 (typeof c2 ==="string")?c2:"invalid name";

 age=(typeof a2 ==="number")?a2:
 ( typeof b2 ==="number")?b2:
 (typeof c2 ==="number")?c2:"invalid age";
 
status=(typeof a2 ==="boolean")?a2:
 ( typeof b2 ==="boolean")?b2:
 (typeof c2 ==="boolean")?c2:"invalid status";

if (status ===true) {
status=" You Are Available For Hire";
} else {
 status="You Are Not Available For Hire";
}

 console.log(`Hello ${name}, Your Age is${age}, ${status}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

 //5
  
   
 function createSelectBox(startYear, endYear) {
  let creareSelect=document.createElement('select');
  for(let year=startYear;year<=endYear;year++){
    let creareOption=document.createElement('option');
    creareOption.value=year;
    creareOption.textContent=year;
    creareSelect.appendChild(creareOption);   
  }
  document.body.appendChild(creareSelect)

}
createSelectBox(2000, 2030);



//6

 function funMtiply(...nums){
  let mul=1;
  for(let r=0;r<nums.length;r++){
     if(typeof nums[r]==="string"){
      continue;
   }
   else if(nums[r]%1 !==0){
   nums[r]= parseInt(nums[r]);
     mul*=nums[r];
   }
   else{
  mul*=nums[r];
   }
  }
 return mul;
 }


 console.log( funMtiply(10,20)); // 200
 console.log(funMtiply("A", 10, 30)); // 300
console.log( funMtiply(100.5, 10, "B")); // 1000


//Function And Scopes 
//1

  function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let twoNames=zName.split(" ");
    return twoNames[0]+" "+twoNames[1][0].toUpperCase();
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
   let pZa= parseInt(zAge);
   return "your age is"+ pZa;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
   return "You Live In "+zCountry.slice(0,2).toUpperCase();
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
   return "Hello "+namePattern(zName)+", "+ageWithMessage(zAge)+", "+countryTwoLetters(zCountry); 
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//2
  let itsMe=() => `Iam A Normal Function`;
  console.log(itsMe()); 


let urlCreate=(protocol, web, tld)=> {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

 //3
let checker=(zName)=> {
  return (status)=> {
    return (salary)=> {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//4

function specialMix(...data) {
  let sum=0
  let sta=false;
  for(let t=0;t<data.length;t++){
    if(typeof data[t]==="number"){
      sum+=data[t];
      sta=true;
    }
    else{
      let parnum= parseInt(data[t]);
      if(!isNaN(parnum)){
      sum+=parnum;
    sta=true;
      }
    }
  }
  return sta? sum:" All Is Strings";  
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


