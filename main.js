// let inc = document.getElementById("inc");
// let res = document.getElementById("res");
// let dec = document.getElementById("dec");
// let counter = document.getElementById("counter");

// let count = 0

// inc.addEventListener("click",function(){
//     count++;
//     counter.textContent = count
// })

// dec.addEventListener("click",function(){
//     count--
//     counter.textContent = count
// })


// res.addEventListener("click",function(){
//     count = 0
//     counter.textContent = count
// })


let Name = document.getElementById("Name")
let Email = document.getElementById("Email");
let btn = document.getElementById("btn");
const text = document.getElementById("text");


const useIsm ="farhod";
const valiEmail = "user123gmail.com";

btn.addEventListener("click",function(e){
    e.preventDefault()
  if (Name.value === useIsm && useIsm.value === valiEmail) {
    text.textContent = "royxatdan otinggiz"

    
  } else {
    text.textContent = "email yoki usrnameni tog'ri kirit"
    
  }


})