let inc = document.getElementById("inc");
let res = document.getElementById("res");
let dec = document.getElementById("dec");
let counter = document.getElementById("counter");

let count = 0

inc.addEventListener("click",function(){
    count++;
    counter.textContent = count
})

dec.addEventListener("click",function(){
    count--
    counter.textContent = count
})


res.addEventListener("click",function(){
    count = 0
    counter.textContent = count
})