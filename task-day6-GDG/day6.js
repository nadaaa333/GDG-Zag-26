


//111-114.
//1
/*
let myfontFamily = document.querySelector(".fonts-family");
let myfontColor = document.querySelector(".fonts-color");
let myfontSize = document.querySelector(".fonts-size");

// ================= Font Family ================= 
myfontFamily.addEventListener("change", function () {
  document.body.style.fontFamily = this.value;
  localStorage.setItem("font", this.value);
});

// ================= Color ================= //
myfontColor.addEventListener("change", function () {
  document.body.style.color = this.value;
  localStorage.setItem("color", this.value);
});

//================= Font Size ================= //
myfontSize.addEventListener("change", function () {
  document.body.style.fontSize = this.value + "px";
  localStorage.setItem("font-size", this.value);
});

// ================= Load Saved Font ================= //
if (localStorage.getItem("font")) {
  document.body.style.fontFamily = localStorage.getItem("font");
  myfontFamily.value = localStorage.getItem("font");
}

// ================= Load Saved Color ================= //
if (localStorage.getItem("color")) {
  document.body.style.color = localStorage.getItem("color");
  myfontColor.value = localStorage.getItem("color");
}

// ================= Load Saved Size ================= //
if (localStorage.getItem("font-size")) {
  document.body.style.fontSize =
    localStorage.getItem("font-size") + "px";

  myfontSize.value = localStorage.getItem("font-size");
}*/

//2
/*
 let myname=document.querySelector(".name");
 let myemail=document.querySelector(".email");
 let mynum=document.querySelector(".num");
 let myselect=document.querySelector(".selectbox");

 myname.oninput=function(){
  window.sessionStorage.setItem("inputName",this.value);
 }

 myemail.oninput=function(){
  window.sessionStorage.setItem("inputEmail",this.value);
 }

 mynum.oninput=function(){
  window.sessionStorage.setItem("inputNum",this.value);
 }
myselect.onchange = function () {
  sessionStorage.setItem("selectValue", this.value);
};
 if(sessionStorage.getItem("inputName")){
  myname.value=sessionStorage.getItem("inputName");
 }

  if(sessionStorage.getItem("inputEmail")){
  myemail.value=sessionStorage.getItem("inputEmail");
 }

  if(sessionStorage.getItem("inputNum")){

  mynum.value=sessionStorage.getItem("inputNum");
 }
 if (sessionStorage.getItem("selectValue")) {
  myselect.value = sessionStorage.getItem("selectValue");
}
*/

/*
   let myjson='{"username":"nada","age":20,"number":1086635647}';
   console.log(typeof myjson);
   console.log(myjson);
   const myjsobject=JSON.parse(myjson);
   console.log(typeof myjsobject);
   console.log(myjsobject);

   myjsobject["username"]="menna";
   myjsobject["number"]=11111;
   console.log(myjsobject[1]);

  let  myjsobjecttoserver=JSON.stringify(myjsobject);
  console.log(myjsobjecttoserver)

*/

/*
//example
  let mypromise=new Promise((resolve,reject)=>{
    let staff=["nada","ebrahim","ahmed"];
    if(staff.length===1){
      resolve(staff);
    }
    else{
     reject(Error("staff number not complete")); 
    }
  }
  );
  mypromise
  .then(
    (resresolve)=>{
      staff.length=2;
      return staff;
    }
  )
   .then(
    (resresolve)=>{
      staff.length=1;
      return staff;
    }
  )
   .then(
    (resresolve)=>{
      staff.length=1;
      console.log(`staff is ${staff}`);
    }
  )
  .catch(
    (resreject)=>
      console.log(resreject)
  )
  .finally(
   console.log("operation is done")
  );

*/
 
 //179-188
 //1
  /*
 const mydata = (apilink) => {
  return new Promise((resolve, reject) => {
    let myrequest = new XMLHttpRequest();

    myrequest.onload = function () {
      if (this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        resolve(mainData); 
      } else {
        reject(Error("data not found"));
      }
    };

    myrequest.open("GET", apilink);
    myrequest.send();
  });
};

mydata("test.json")
  .then((result) => {
    for (let i = 0; i < 5; i++) {
      let mydiv = document.createElement("div");
      let myh3 = document.createElement("h3");
      let myp = document.createElement("p");

      myh3.textContent = result[i].title;
      myp.textContent = result[i].description;

      mydiv.appendChild(myh3);
      mydiv.appendChild(myp);

      document.body.appendChild(mydiv);
    }
  })
  .catch((rej) => {
    console.log(rej);
  });
  */

   //2
   /*
   fetch("test.json")
   .then((res)=>{
    let mainData=res.json();
    return mainData;
   })
    .then((mainData)=>{
    for (let i = 0; i < 5; i++) {
      let mydiv = document.createElement("div");
      let myh3 = document.createElement("h3");
      let myp = document.createElement("p");

      myh3.textContent = mainData[i].title;
      myp.textContent = mainData[i].description;

      mydiv.appendChild(myh3);
      mydiv.appendChild(myp);

      document.body.appendChild(mydiv);
    }
    });*/

    //shopping cart
    
    fetch("https://dummyjson.com/products")
    .then(res=>{
     return res.json();
    })
     .then(res=>{
     return res.products.slice(0, 12); 
    })
    .then(data=>{
    let maindiv=document.createElement("div");
    maindiv.className="main";
    for(let i=0;i<data.length;i++){
    let mydiv=document.createElement("div");
    mydiv.className="child";
    let myimg=document.createElement("img");
    let myb=document.createElement("b");
    let myp=document.createElement("p");
    let btn=document.createElement("button");
      //  myh3.textContent = result[i].title;
    myimg.src=data[i].thumbnail;
    myb.textContent=data[i].title;
    myp.textContent=data[i].price;
    btn.textContent = "Add to Cart";
       mydiv.appendChild(myimg);
      mydiv.appendChild(myb);
      mydiv.appendChild(myp);
      mydiv.appendChild(btn);
     maindiv.appendChild(mydiv);
    }
    document.body.appendChild(maindiv);
    });

  
