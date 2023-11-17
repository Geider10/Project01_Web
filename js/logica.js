const nav = document.querySelector("#nav");
const open1 = document.querySelector("#btnOpen");
const close1 = document.querySelector("#btnClose");

open1.addEventListener("click", () =>{
    nav.classList.add("visible");
})
close1.addEventListener("click",() =>{
    nav.classList.remove("visible");
})
